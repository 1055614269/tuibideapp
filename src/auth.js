

import Cookies from 'vue-cookies'

const TokenKey = 'Authorization$://'//授权码


/*
* 获取getToken
* */
export function getToken(Key) {
    return Cookies.get(Key ? Key : TokenKey)
}
/*
* 设置setToken
* */
export function setToken(token, Key) {
    return Cookies.set(Key ? Key : TokenKey, token)
}
/*
* 移除removeToken
* */
export function removeToken(Key) {
    return Cookies.remove(Key ? Key : TokenKey)
}


/*
* getBaseFile64
* */
export async function getBaseFile64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

