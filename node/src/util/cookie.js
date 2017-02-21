/**
 * Created by cuitao on 2017/1/8.
 */

export function setCookie(cname, cvalue, exdays) {
    const d = new Date()

    d.setTime(cvalue === "" ? 0 : d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    const expires = "expires=" + d.toUTCString()
    document.cookie = cname + "=" + encodeURI(cvalue) + ";" + expires + ";path=/"
}

export function getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';')

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i]

        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }

        if (c.indexOf(name) == 0) {
            return decodeURI(c.substring(name.length, c.length))
        }
    }

    return ""
}

export function checkCookie() {
    let user = getCookie("username")

    if (user == "") {
        user = prompt("输入用户名:", "")
        if (user != "" && user != null) {
            setCookie("username", user, 365)
        }
    }
}
