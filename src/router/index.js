import Vue from 'vue'
import VueRouter from 'vue-router';
//用户登录
import loginRouter from "./login";
//选票
import voteRouter from "./vote";
//企业名录
import enterprise from "./components/enterprise";
//达人活动
import expert from "./components/expert";
//众包合作
import crowds from "./components/crowds";
//弱电社区
import lightCurrent from "./components/lightCurrent";
//项目信息
import project from "./components/project";

Vue.use(VueRouter)

const routes = [
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
  { //交易流程
    path: '/steps',
    name: 'steps',
    component: (res) => require(['@views/Steps/steps.vue'], res),
    redirect: '/steps1',
    children: [
      {
        path: '/steps1',
        name: 'steps1',
        component: (res) => require(['@views/Steps/steps1.vue'], res)
      },
      {
        path: '/steps2',
        name: 'steps2',
        component: (res) => require(['@views/Steps/steps2.vue'], res)
      },
      {
        path: '/steps3',
        name: 'steps3',
        component: (res) => require(['@views/Steps/steps3.vue'], res)
      },
      {
        path: '/steps4',
        name: 'steps4',
        component: (res) => require(['@views/Steps/steps4.vue'], res)
      },
      
    ]
  },
  { //关于我们
    path: '/aboutUs',
    name: 'aboutUs',
    component: (res) => require(['@views/AboutUs/aboutUs.vue'], res),
    redirect: '/playing/home',
    children: [
      {
        path: '/aboutUs/page1',
        name: 'aboutUsPage1',
        component: (res) => require(['@views/AboutUs/aboutUsPage1.vue'], res)
      },
      {
        path: '/aboutUs/page2',
        name: 'aboutUsPage2',
        component: (res) => require(['@views/AboutUs/aboutUsPage2.vue'], res)
      },
      {
        path: '/aboutUs/page3',
        name: 'aboutUsPage3',
        component: (res) => require(['@views/AboutUs/aboutUsPage3.vue'], res)
      },
      {
        path: '/aboutUs/page4',
        name: 'aboutUsPage4',
        component: (res) => require(['@views/AboutUs/aboutUsPage4.vue'], res)
      },
      {
        path: '/aboutUs/page5',
        name: 'aboutUsPage5',
        component: (res) => require(['@views/AboutUs/aboutUsPage5.vue'], res)
      },
    ]
  },
  { //个人中心
    path: '/personal',
    name: 'personal',
    component: (res) => require(['@views/Personal/personal.vue'], res),
    redirect: '/personal/admin',
    children: [
      {
        path: '/personal/admin',
        name: 'personalAdmin',
        component: (res) => require(['@views/Personal/personalAdmin.vue'], res)
      },
      {
        path: '/personal/topUp',
        name: 'personalTopUp',
        component: (res) => require(['@views/Personal/personalTopUp.vue'], res)
      },
      {
        path: '/personal/topUp2',
        name: 'personalTopUp2',
        component: (res) => require(['@views/Personal/personalTopUp2.vue'], res)
      },
      {
        path: '/personal/Records4',
        name: 'personalRecords4',
        component: (res) => require(['@views/Personal/personalRecords4.vue'], res)
      }
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
      {
        path: '/playing/admin1',
        name: 'playingAdmin1',
        component: (res) => require(['@views/Playing/playingAdmin1.vue'], res)
      },
      {
        path: '/playing/admin2',
        name: 'playingAdmin2',
        component: (res) => require(['@views/Playing/playingAdmin2.vue'], res)
      },
      {
        path: '/playing/admin3',
        name: 'playingAdmin3',
        component: (res) => require(['@views/Playing/playingAdmin3.vue'], res)
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
      {
        path: '/tailCargo/screen',
        name: 'tailCargoScreen',
        component: (res) => require(['@views/TailCargo/tailCargoScreen.vue'], res)
      },
      {
        path: '/tailCargo/detail',
        name: 'tailCargoDetail',
        component: (res) => require(['@views/TailCargo/tailCargoDetail.vue'], res)
      },
    ]
  },
  { //智汇商城
    path: '/product',
    name: 'product',
    component: (res) => require(['@views/Product'], res),
    redirect: '/home/home',
    children: [


    ]
  },
  loginRouter,
  voteRouter,
  enterprise,
  expert,
  crowds,
  lightCurrent,
  project

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
