import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
Vue.config.productionTip = false
//用fastClick阻止事件300ms的延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}
//引入全局样式
import './style/commonStyle.less'
//引入vant  ui 框架
import './plugins/vant.js'
//引入rem配置
import  './config/rem.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
