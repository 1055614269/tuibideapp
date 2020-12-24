// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

//复制到粘贴板插件
import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard);

/* 引入完整的 less */
import less from 'less'
Vue.use(less)


// 移动端
import Vant from 'vant';
// import 'vant/lib/index.css';

Vue.use(Vant);


// 通过 CDN 引入时不会自动注册 Lazyload 组件
// 可以通过下面的方式手动注册
// Vue.use(vant.Lazyload);

Vue.config.productionTip = false



Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1,                 //月份
    "d+": this.getDate(),                    //日
    "h+": this.getHours(),                   //小时
    "m+": this.getMinutes(),                 //分
    "s+": this.getSeconds(),                 //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
