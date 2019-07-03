// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 主入口文件
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js' // 引入移动端的自适配

Vue.config.productionTip = false

// 引入mui
// import './lib/mui/css/mui.css'
// import './lib/mui/css/icons-extra.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
