/**
 * Created by cuitao on 2017/1/16.
 */
import {takeLatest, call, put, take} from 'redux-saga/effects'
import {checkCookie, getCookie, setCookie} from '../util/cookie'
import {login, logout, loginFromCookies, logoutFromCookies} from '../redux/actions'

function *work() {
    yield call(checkCookie)
    const username = yield call(getCookie, "username")
    if (username !== '') {
        try {
            yield put(login(username))
            yield take(logoutFromCookies.toString())
            yield call(setCookie, "username", "")
        } finally {
            yield put(logout())
        }
    }
}

function *root() {
    yield takeLatest(loginFromCookies.toString(), work)
}

export default root