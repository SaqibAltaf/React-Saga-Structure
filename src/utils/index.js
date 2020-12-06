import * as variable from '../constants'

function getToken() {
    return localStorage.getItem(variable.token)
}



export {
    getToken,
}