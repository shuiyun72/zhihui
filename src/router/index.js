import Vue from 'vue'
import VueRouter from 'vue-router';
//用户登录
import loginRouter from "./login";
//选票
import voteRouter from "./vote";
Vue.use(VueRouter)
const routes = [
  loginRouter,
  voteRouter,
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'Home',
    component: (res) => require(['@views/Home/home.vue'], res),
    redirect: '/home/home2',
    children: [
      {
        path: '/home/home1',
        name: '/home1',
        component: (res) => require(['@views/Home/home1.vue'], res)
      },
      {
        path: '/home/home2',
        name: 'home2',
        component: (res) => require(['@views/Home/home2.vue'], res)
      },
    ]
  },
  {
    path: '/commodity',
    name: 'commodity',
    component: (res) => require(['@views/commodity/commodity.vue'], res)
  },
  {
    path: '/commodity/screen',
    name: 'commodityscreen',
    component: (res) => require(['@views/commodity/commodityscreen.vue'], res)
  },
  {
    path: '/commodity/detial',
    name: 'commodityDetial',
    component: (res) => require(['@views/commodity/commodityDetial.vue'], res)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
