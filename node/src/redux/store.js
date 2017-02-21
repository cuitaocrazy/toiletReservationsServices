/**
 * Created by cuitao on 2017/1/8.
 */

import {createStore, applyMiddleware, combineReducers} from 'redux'
import reducer from './reducers'
import DevTools from '../containers/DevTools'
import createSagaMiddleware from 'redux-saga'
import root from './saga'
import createLogger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers(reducer), DevTools.instrument(), applyMiddleware(sagaMiddleware, createLogger()))
sagaMiddleware.run(root)

export default store