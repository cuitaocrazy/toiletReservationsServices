/**
 * Created by cuitao on 2017/1/9.
 */

import React from 'react'
import {Provider} from 'react-redux'
import App from './App'

export default function ({store}) {
    return (
        <Provider store={store}>
            <div>
                <App />
            </div>
        </Provider>
    )
}