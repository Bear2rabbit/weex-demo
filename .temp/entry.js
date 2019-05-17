import Vue from 'vue'
import weex from 'weex-vue-render'
/*global Vue*/

weex.init(Vue)
/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/index.vue');
/* eslint-disable no-new */
const self = new Vue(Vue.util.extend({ el: '#root', router}, App));
var globalEvent = weex.requireModule("globalEvent");
globalEvent.addEventListener("androidback", function(e) {
  if (self.$router.currentRoute.path== "/steam") {
    weex.requireModule("NewModule").back();
   
      }else{
        self.$router.go(-1); 
      }
});
router.push('/steam');

