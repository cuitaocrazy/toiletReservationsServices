/**
 * Created by cuitao on 2017/1/9.
 */

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Root.prod');
} else {
    module.exports = require('./Root.dev');
}