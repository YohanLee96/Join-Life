import Vue from 'vue'
import header from './header.vue'
import router from './router'
import axios from "axios";

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(header)
}).$mount("#header");


