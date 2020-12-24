import axios from 'axios';
// import { getCookies, setCookie } from "./auth";
import { getToken, setToken, removeToken } from "@/auth";
import { errorException } from './error/axios.error'//http异常处理
//头部配置
let Headers = function () {
    var User = getToken("user");
    var access_token = "Bearer ";
    if (User && User.token && User.token != "") {
        access_token += User.token;
    }

    var timeoutmid = 15e3;
    // Vue.$http.default.headers.common['token'] = token;
    var postCfg = {
        'headers': {
            'Content-Type': 'application/json;charset=UTF-8',
            // 'Content-Type': 'multipart/form-data;'
            'Authorization': access_token,
        },
        // 'Content-Type': 'application/x-www-form-urlencoded'
    };
    return postCfg;
};

function ProcessingData(_this, response, Callback) {
    // console.log(response);
    var receive = response ? response.data : response
    if (receive && receive.code) {
        if (Array.isArray(receive.data)) { //  true：数组  false：对象
            _this.datas = receive.data;
            _this.data = {};
        } else {
            _this.datas = [];
            _this.data = receive.data;
        }
        _this.state = true;
        _this.message = receive.status ? receive.status : '操作成功'
        Callback.success(_this);
    } else {
        _this.data = {}
        _this.datas = [];
        _this.state = false;
        _this.code = receive.code;
        _this.message = receive.status ? receive.status : '操作失败'
        var Exception = errorException()[receive.code];
        if (typeof Exception === 'function') Exception();

        Callback.error(_this);
    }
}

function ProcessingDataError(_this, error, Callback) {
    _this.datas = [];
    _this.data = {};
    _this.state = false;
    _this.message = error.message;
    // _this.code = error.response.data.err_code;
    try {
        _this.reason = error.response.data.Message;
        // var Exception = errorException()[response.data.code];
        // if (typeof Exception === 'function') Exception();
        Callback.error(_this);
    } catch (err) {
        Callback.error(_this);
    }
}


//自定义http请求
function obj() {
    //post请求
    this._httpPost = function (usr, condition, config) {
        var _this = this;
        var postCfg = config || Headers();
        axios.post(process.env.API_HOST + usr,
            condition,
            postCfg
        ).then(response => {
            ProcessingData(_this, response, Callback)
        }, function (error) {

            ProcessingDataError(_this, error, Callback)

        });
        //回调函数
        let Callback = function () {
            /**
           * 成功回调函数
           */
            this.success = new Function
            /**
            * 出错回调函数
            */
            this.error = new Function
        }

        //执行成功
        let then = function (successCallback, errorCallback) {
            if (typeof successCallback === 'function') Callback.success = successCallback;
            if (typeof errorCallback === 'function') Callback.error = errorCallback;
        }

        this.then = then;
        return this;
    };
    // get请求
    this._httpGet = function (usr, config) {
        var _this = this;
        var postCfg = config || Headers();
        axios.get(process.env.API_HOST + usr, postCfg).then(response => {
            ProcessingData(_this, response, Callback)
        }, function (error) {
            ProcessingDataError(_this, error, Callback)

        });
        //回调函数
        let Callback = function () {
            /**
           * 成功回调函数
           */
            this.success = new Function
            /**
            * 出错回调函数
            */
            this.error = new Function
        }

        //执行成功
        let then = function (successCallback, errorCallback) {
            if (typeof successCallback === 'function') Callback.success = successCallback;
            if (typeof errorCallback === 'function') Callback.error = errorCallback;
        }

        this.then = then;

        return this;
    };

}


/* 响应拦截器 */
axios.interceptors.response.use((response) => {
    // let token = localStorage.getItem("x-auth-token");

    // if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //     response.headers.token = `${token}`;
    // }else{
    //     response.headers.token = response.data.Token
    // }

    return response;
}, function (error) {
    if (error && error.response) {

        switch (error.response.status) {

            case 400: error.message = '请求错误(400)'; break;

            case 401: error.message = '未授权，请重新登录(401)'; break;

            case 403: error.message = '拒绝访问(403)'; break;

            case 404: error.message = '请求出错(404)'; break;

            case 408: error.message = '请求超时(408)'; break;

            case 500: error.message = '服务器错误(500)'; break;

            case 501: error.message = '服务未实现(501)'; break;

            case 502: error.message = '网络错误(502)'; break;

            case 503: error.message = '服务不可用(503)'; break;

            case 504: error.message = '网络超时(504)'; break;

            case 505: error.message = 'HTTP版本不受支持(505)'; break;

            default: error.message = `连接出错(${error.response.status})!`;
        }

    } else {
        error.message = '服务器连接失败!'
    }
    if (error.response.status < 500) {
        // Vue.prototype.$message.warning(error.message);
    } else {
        // Vue.prototype.$message.error(error.message);
    }
    if (401 === error.response.status) {
        window.location = '/';
        return false;
    }
    return Promise.reject(error);
});
export default new obj;




