import { combineReducers } from 'redux'
import UIReducer from './reducer-ui'

export default combineReducers({
    ui: UIReducer,
})
