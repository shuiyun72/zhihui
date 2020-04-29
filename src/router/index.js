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
    redirect: '/crowds/detail',
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
    path: '/product',
    name: 'product',
    component: (res) => require(['@views/Product'], res),
    redirect: '/product/home',
    children:[
      {
        path: '/product/home',
        name: 'productHome',
        component: (res) => require(['@views/Product/productHome.vue'], res)
      },
      {
        path: '/product/detial',
        name: 'productDetial',
        component: (res) => require(['@views/Product/productDetial.vue'], res)
      },
      {
        path: '/product/screen',
        name: 'productScreen',
        component: (res) => require(['@views/Product/productScreen.vue'], res)
      },
    ]
  },
  {
    path: '/crowds',
    name: 'crowds',
    component: (res) => require(['@views/Crowds/crowds.vue'], res),
    redirect: '/crowds/home',
    children:[
      {
        path: '/crowds/home',
        name: 'crowdsHome',
        component: (res) => require(['@views/Crowds/crowdsHome.vue'], res)
      },
      {
        path: '/crowds/detail',
        name: 'crowdsDetail',
        component: (res) => require(['@views/Crowds/crowdsDetail.vue'], res)
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
