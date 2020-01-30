import Vue from 'vue'
import axios from "axios"
import router from './router'

import index from "./index.vue";



Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render : h => h(index)
}).$mount("#index");

