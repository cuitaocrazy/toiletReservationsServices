/**
 * Created by cuitao on 2017/1/16.
 */
import cookiesSaga from './cookiesSaga'
import reservationSaga from './reservationSaga'
import {spawn} from 'redux-saga/effects'

export default function *() {
    yield [spawn(cookiesSaga), spawn(reservationSaga)]
}