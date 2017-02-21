/**
 * Created by cuitao on 2017/1/8.
 */

import {connect} from 'react-redux'
import React from 'react'
import {reserve, reservationCancel, complete} from '../redux/actions'

export default connect(s => ({
    canReserve: !(s.state.canReserveCancel || s.state.canComplete) && !!s.state.username,
    canReserveCancel: s.state.canReserveCancel,
    canComplete: s.state.canComplete
}), {reserve, reservationCancel, complete})(function (props) {
    function mkBtn(click, content) {
        return <button className="btn-success btn" onClick={click}>{content}</button>
    }
    return <div>
        {props.canReserve && mkBtn(e => props.reserve(), "预定")}
        {props.canReserveCancel && mkBtn(e => props.reservationCancel(), "取消预定")}
        {props.canComplete && mkBtn(e => props.complete(), "完成")}
    </div>
})