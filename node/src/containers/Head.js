/**
 * Created by cuitao on 2017/1/8.
 */

import {connect} from 'react-redux'
import React from 'react'
import {loginFromCookies, logoutFromCookies} from '../redux/actions'

export default connect(s => ({currentUser: s.currentUser, username: s.username}), {loginFromCookies, logoutFromCookies})(function (props) {
    return <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a href="javascript:void(0)" className="navbar-brand">厕所预定</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li>
                    {props.username !== "" ?
                        <a href="javascript:void(0)">{props.username} <button className="btn btn-success" onClick={() => props.logoutFromCookies()}>注销</button></a> :
                        <a onClick={() => props.loginFromCookies()} href="javascript:void(0)"><button className="btn btn-success">登陆</button></a>}
                </li>
            </ul>
        </div>
    </nav>
})