import {takeLatest, call, put} from "redux-saga/effects";
import {API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS} from "../constants/actionTypes";

import CryptoJS from 'crypto-js';
import moment from 'moment';

import { marvelApi as config } from '../config'
import {randomIntFromInterval} from "../helpers";


// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest(API_CALL_REQUEST, workerSaga);
}

function generateQuery(params) {
    let esc = encodeURIComponent;
    return Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
}

const marvelApi = {
    getCharacters() {
        const timeStamp = moment().unix();
        const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey)
            .toString(CryptoJS.enc.Hex);

        const URI = '/v1/public/characters';
        const params = {
            apikey : config.publicKey,
            ts: timeStamp,
            hash: hash,
            offset: randomIntFromInterval(0, 1391), // There are 1491 characters
            limit: 100,
        };

        return fetch(`${config.baseUrl}${URI}?${generateQuery(params)}`, {
            method: 'get',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(statusHelper)
            .then(response => response.json())
            .catch(error => error)
    }
};

function statusHelper(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        console.log('hahah');
        return Promise.reject(new Error(response.statusText))
    }
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(marvelApi.getCharacters);
        const characters = response.data.results;

        console.log(response);

        // dispatch a success action to the store with the new dog
        yield put({type: API_CALL_SUCCESS, payload: characters});

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({type: API_CALL_FAILURE, payload: error});
    }
}
