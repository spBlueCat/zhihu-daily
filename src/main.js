// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import App from './App';
import router from './router';
import qs from  'qs';
import axios from 'axios';
import api from './api/index';
Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.prototype.$api = api;
Vue.prototype.$qs = qs;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
//在进入路由之前 每一次都会执行此方法,全局钩子
router.beforeEach(function (to,from,next){ //to 前往的路由 ,from 来自哪个目录
  document.title = to.meta.title;
  next();
});

import  store from './store';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
