// vue js 호출
import Vue from 'vue'
// vue router 호출
import router from './router'
// 헤더 호출
import VueHead from "vue-head"
// 첫 페이지 호출
import index from "./index.vue"
// vuex 관련 패키지
import store from './vuex/store.js'

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

