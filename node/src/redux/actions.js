/**
 * Created by cuitao on 2017/1/8.
 */
import {createAction} from 'redux-act'

export const loginFromCookies = createAction("LOGIN_FROM_COOKIES")
export const logoutFromCookies = createAction("LOGOUT_FROM_COOKIES")

export const login = createAction("LOGIN", username => ({username}))
export const logout = createAction("LOGOUT")
export const reserve = createAction("RESERVE")
export const reservationCancel = createAction("RESERVATION_CANCEL")
export const complete = createAction("COMPLETE")
