import Vue from 'vue'
import VueRouter from 'vue-router'

// vue cli 사용
Vue.use(VueRouter)


// 1. 라우트 정의
// 각 라우트는 반드시 컴포넌트와 매핑되어야 함.
// 실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체
const routes = [
  {
    path: "/",
    name: "main",
    //2. 연결할 컴포넌트를 정의
    component: () => import("../components/main.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/login.vue")
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () => import("../components/signUp.vue")
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

// 3. routes 옵션과 함께 router 인스턴스 생성
// 추가 옵션은 여기서 전달.
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes // 'routes : routes'의 줄임
})

export default router