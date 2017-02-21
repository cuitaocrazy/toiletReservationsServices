/**
 * Created by cuitao on 2017/1/8.
 */

import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import {loginFromCookies} from './redux/actions'
import FastClick from 'fastclick'

let container

FastClick.attach(document.body)

if(process.env.NODE_ENV === 'production')
    container = document.getElementById("container")
else {
    container = document.createElement("div")
    container.setAttribute("class", "container")
    document.body.appendChild(container)
}

store.dispatch(loginFromCookies())

function render() {
    const Root = require("./containers/Root").default
    ReactDOM.render(<Root store={store} />, container)
}

render()

let i = 0
function test() {
    setTimeout(test, 100)
    console.log(i++)
}

// test()
if(module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept("./containers/Root", () => render())
}