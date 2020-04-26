import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./styles/reset.css";
import "@utils/ElementComponents";
import "@styles/iconfont/iconfont.css";
import "@styles/index.js"; 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
