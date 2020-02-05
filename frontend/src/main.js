import Vue from 'vue'
import axios from "axios"
import router from './router'
import VueHead from "vue-head"
import index from "./index.vue"
import store from './vuex/store.js'

Vue.prototype.$http = axios;

Vue.config.productionTip = false

var myVueHeader = Vue.extend({
  // data: function() {
  //   return {};
  // },
  head: {
    title: {
      inner: "joinLife"
    },
    //meta
    meta: [
      { charset: "utf-8" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { name: "viewport", content: "width=device-width,initial-scale=1.0" }
    ],
    link: [
      { rel: "styleSheet", href: "/commons/css/index.css" },
      { rel: "styleSheet", href: "/commons/css/swiper.min.css" }
    ],
    script: [
      { type: "text/javascript", src: "/commons/js/swiper.min.js" },
      { type: "text/javascript", src: "/commons/js/common.js" }
    ]
  }
});

Vue.use(VueHead);

new myVueHeader().$mount("#head");

new Vue({
  router,
  store,
  render : h => h(index)
}).$mount("#index");

