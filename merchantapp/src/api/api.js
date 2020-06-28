const base = "https://github.com"
const version = "0.0.1"


const api = (base, method, url, version) => {
    return new Promise((resolve, reject) => {

    })
}

const login = (prm) => {
    return new Promise((resolve, reject) => {
        api(base, 'POST', '/login', version).then(res => resolve(res)).catch(err => reject(err))
    })
}
const reset = (prm) => {
    return new Promise((resolve, reject) => {
        api(base, 'POST', '/reset', version).then(res => resolve(res)).catch(err => reject(err))
    })
}
const signup = (prm) => {
    return new Promise((resolve, reject) => {
        api(base, 'POST', '/reset', version).then(res => resolve(res)).catch(err => reject(err))
    })
}


const reset = (prm) => {
    return new Promise((resolve, reject) => {
        api(base, 'POST', '/reset', version).then(res => resolve(res)).catch(err => reject(err))
    })
}









export {
    login,
    reset
}