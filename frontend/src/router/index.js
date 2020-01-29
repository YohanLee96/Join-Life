import Vue from 'vue'
// vue cli 사용
import VueRouter from 'vue-router'
// 1. 라우트 컴포넌트를 정의
import main from '../components/main.vue'
import search from "../components/search.vue";

// vue cli 사용
Vue.use(VueRouter)
// 2. 라우트 정의
// 각 라우트는 반드시 컴포넌트와 매핑되어야 함.
// 실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체
const routes = [
  {
    path: '/',
    name: 'main',
    component: main
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

// 3. routes 옵션과 함께 router 인스턴스 생성
// 추가 옵션은 여기서 전달.
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes // 'routes : routes'의 줄임
})

export default router

// ssearch area
new Vue({
  router,
  render: h => h(search)
}).$mount("#search");

// main content
new Vue({
  router,
  render: h => h(main)
}).$mount("#container");