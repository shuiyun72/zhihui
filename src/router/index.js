import Vue from 'vue'
import VueRouter from 'vue-router';
//用户登录
import loginRouter from "./login";
//选票
import voteRouter from "./vote";
//
import enterprise from "./components/enterprise";
Vue.use(VueRouter)
const routes = [
  loginRouter,
  voteRouter,
  enterprise,
  {
    path: '/',
    redirect: '/home',
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
  { //直播秀场
    path: '/playing',
    name: 'playing',
    component: (res) => require(['@views/Playing/playing.vue'], res),
    redirect: '/playing/home',
    children: [
      {
        path: '/playing/home',
        name: 'playingHome',
        component: (res) => require(['@views/Playing/playingHome.vue'], res)
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
      },
      {
        path: '/crowds/detail2',
        name: 'crowdsDetail2',
        component: (res) => require(['@views/Crowds/crowdsDetail2.vue'], res)
      },
      {
        path: '/crowds/detail3',
        name: 'crowdsDetail3',
        component: (res) => require(['@views/Crowds/crowdsDetail3.vue'], res)
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

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
