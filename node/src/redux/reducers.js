/**
 * Created by cuitao on 2017/1/8.
 */

import {createReducer} from 'redux-act'
import * as Act from './actions'

const toiletServiceStateReducer = createReducer({
    [Act.login]: (s, {username}) => ({...s, username}),
    "QUEUE_UPDATE": (s, {queue: [currentUser, ...otherUsers]}) => ({...s, canComplete: currentUser === s.username, canReserveCancel: otherUsers.indexOf(s.username) != -1}),
    [Act.logout]: s => ({canReserveCancel: false, canComplete: false})
}, {canReserveCancel: false, canComplete: false})

const serverStateReducer = createReducer({
    "QUEUE_UPDATE": (s, {queue: [currentUser, ...reservationQueue]}) => ({currentUser: currentUser || "", reservationQueue}),
    [Act.logout]: s => ({currentUser: "", reservationQueue: []})
}, {currentUser: "", reservationQueue: []})

const loginUserReducer = createReducer({
    [Act.login]: (s, {username}) => username,
    [Act.logout]: () => ""
}, "")

export default {state: toiletServiceStateReducer, serverState: serverStateReducer, username:loginUserReducer}