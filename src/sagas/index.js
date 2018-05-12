import config from "config";
import {
  API_CALL_FAILURE,
  API_CALL_REQUEST,
  API_CALL_SUCCESS
} from "constants/actionTypes";

import CryptoJS from "crypto-js";
import moment from "moment";
import { call, put, takeLatest } from "redux-saga/effects";
import { generateQuery, randomIntFromInterval } from "utils/helpers";

function statusHelper(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

const marvelApi = {
  getCharacters() {
    const { marvelApi } = config;

    const timeStamp = moment().unix();
    const hash = CryptoJS.MD5(
      timeStamp + marvelApi.privateKey + marvelApi.publicKey
    ).toString(CryptoJS.enc.Hex);

    const URI = "/v1/public/characters";
    const params = {
      apikey: marvelApi.publicKey,
      ts: timeStamp,
      hash,
      offset: randomIntFromInterval(0, 1391), // There are 1491 characters
      limit: 100
    };
    const URL = `${marvelApi.baseUrl}${URI}?${generateQuery(params)}`;

    return fetch(URL, {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip"
      })
    })
      .then(statusHelper)
      .then(response => response.json());
  }
};

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(marvelApi.getCharacters);

    // dispatch a success action to the store with the characters and attribution text
    yield put({
      type: API_CALL_SUCCESS,
      payload: {
        characters: response.data.results,
        attributionText: response.attributionText
      }
    });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: API_CALL_FAILURE, payload: error });
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}
