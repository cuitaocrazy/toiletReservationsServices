/**
 * Created by cuitao on 2017/1/10.
 */

import {take, put, call, race, takeLatest} from 'redux-saga/effects'
import {eventChannel, END} from 'redux-saga'
import {login, logout, complete, reservationCancel, reserve} from './actions'

function createWs(url) {
    return new Promise((resolve, reject) => {
        const ws = new WebSocket(url)

        ws.onopen = e => {
            const ec = eventChannel(listener => {
                ws.onmessage = e => {
                    setTimeout(() => listener(e.data))
                }
                ws.onerror = e => setTimeout(() => listener(END))
                ws.onclose = e => setTimeout(() => listener(END))
                return () => {
                }
            })

            setTimeout(() => resolve({ws, ec}), 0)
        }

        // http://stackoverflow.com/questions/26594331/safari-extension-websocket-connection-failure-calls-onclose-and-not-onerror-and
        ws.onclose = e => setTimeout(() => reject(e), 0)
    })
}

function *messageProc(ws) {
    while (true) {
        const action = yield take(a => {
            return [reserve.toString(), reservationCancel.toString(), complete.toString()].includes(a.type)
        })
        yield call(::ws.send, JSON.stringify(action))
    }
}

function *recvMsg(chan) {
    while (true) {
        const a = yield take(chan)
        console.log(a)
        yield put(JSON.parse(a))
    }
}

function *reservationWork(action) {
    try {
        const {ws, ec} = yield call(createWs, process.env.wsUrl)
        yield call(::ws.send, JSON.stringify(action))
        const ret = yield race({msgProc: call(messageProc, ws), logout: take("LOGOUT"), recvMsg: call(recvMsg, ec)})
        if ("recvMsg" in ret)
            yield put(logout())
        ec.close()
        yield call(::ws.close)
    }
    catch (e) {
        yield put(logout())
    }
}

function *root() {
    yield takeLatest(login.toString(), reservationWork)
}

export default root
