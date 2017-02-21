/**
 * Created by cuitao on 2017/1/8.
 */
import {connect} from 'react-redux'
import React from 'react'

export default connect(s => ({queue: s.serverState.reservationQueue, username: s.username, currentUser: s.serverState.currentUser}))(function (props) {
    return <div>
        {props.username != "" && (props.currentUser !== "" ? <span>当前 {props.currentUser} 在使用</span> : <span>没人</span>)}
        <ul>
            {props.queue.map(name => <li>{name}</li>)}
        </ul>
    </div>
})