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
    redirect: '/enterprise',
  },
  { //首页
    path: '/home',
    name: 'home',
    component: (res) => require(['@views/Home/home.vue'], res),
    redirect: '/home/home',
    children: [
      {
        path: '/home/home',
        name: 'homeHome',
        component: (res) => require(['@views/Home/homeHome.vue'], res)
      },
    ]
  },
  { //尾货捡漏
    path: '/tailCargo',
    name: 'tailCargo',
    component: (res) => require(['@views/TailCargo/tailCargo.vue'], res),
    redirect: '/tailCargo/home',
    children: [
      {
        path: '/tailCargo/home',
        name: 'tailCargoHome',
        component: (res) => require(['@views/TailCargo/tailCargoHome.vue'], res)
      },
    ]
  },
  {//众包合作
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
  },
  { //智汇商城
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
  { //企业名录
    path: '/enterprise',
    name: 'enterprise',
    component: (res) => require(['@views/Enterprise/enterprise.vue'], res),
    redirect: '/enterprise/home',
    children: [
      {
        path: '/enterprise/home',
        name: 'enterpriseHome',
        component: (res) => require(['@views/Enterprise/enterpriseHome.vue'], res)
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
