import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./styles/reset.css";
import "@utils/ElementComponents";
import "@styles/iconfont/iconfont.js";
import "@styles/iconfont/iconfont.css";
import "@styles/index.js";
import "@utils/common";
import _ from "lodash";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.afterEach((to,from,next) => {
  let top = document.documentElement.scrollTop || document.body.scrollTop
	 const timeTop = setInterval(() => {
	   document.body.scrollTop = document.documentElement.scrollTop = top -= 20
	   if (top <= 0) {
	     clearInterval(timeTop)
	   }
	 }, 20)
})