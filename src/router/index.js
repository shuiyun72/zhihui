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
  { //弱电社区
    path: '/lightCurrent',
    name: 'lightCurrent',
    component: (res) => require(['@views/LightCurrent/lightCurrent.vue'], res),
    redirect: '/lightCurrent/home',
    children: [
      {
        path: '/lightCurrent/home',
        name: 'lightCurrentHome',
        component: (res) => require(['@views/LightCurrent/lightCurrentHome.vue'], res)
      },
      {
        path: '/lightCurrent/child2',
        name: 'lightCurrentChild2',
        component: (res) => require(['@views/LightCurrent/lightCurrentChild2.vue'], res)
      },
      {
        path: '/lightCurrent/child3',
        name: 'lightCurrentChild3',
        component: (res) => require(['@views/LightCurrent/lightCurrentChild3.vue'], res)
      },
      {
        path: '/lightCurrent/child4',
        name: 'lightCurrentChild4',
        component: (res) => require(['@views/LightCurrent/lightCurrentChild4.vue'], res)
      },
      {
        path: '/lightCurrent/child4/detail',
        name: 'lightCurrentChild4Detail',
        component: (res) => require(['@views/LightCurrent/lightCurrentChild4Detail.vue'], res)
      },
      {
        path: '/lightCurrent/child5',
        name: 'lightCurrentChild5',
        component: (res) => require(['@views/LightCurrent/lightCurrentChild5.vue'], res)
      },
      {
        path: '/lightCurrent/detail',
        name: 'lightCurrentDetail',
        component: (res) => require(['@views/LightCurrent/lightCurrentDetail.vue'], res)
      },
      {
        path: '/lightCurrent/detail2',
        name: 'lightCurrentDetail2',
        component: (res) => require(['@views/LightCurrent/lightCurrentDetail2.vue'], res)
      },
      {
        path: '/lightCurrent/detail3',
        name: 'lightCurrentDetail3',
        component: (res) => require(['@views/LightCurrent/lightCurrentDetail3.vue'], res)
      },
      {
        path: '/lightCurrent/publish',
        name: 'lightCurrentPublish',
        component: (res) => require(['@views/LightCurrent/lightCurrentPublish.vue'], res)
      },
    ]
  },
  { //项目信息
    path: '/project',
    name: 'project',
    component: (res) => require(['@views/Project/project.vue'], res),
    redirect: '/project/home',
    children: [
      {
        path: '/project/home',
        name: 'projectHome',
        component: (res) => require(['@views/Project/projectHome.vue'], res)
      },
      {
        path: '/project/list',
        name: 'projectList',
        component: (res) => require(['@views/Project/projectList.vue'], res)
      },
      {
        path: '/project/list2',
        name: 'projectList2',
        component: (res) => require(['@views/Project/projectList2.vue'], res)
      },
      {
        path: '/project/detail2',
        name: 'projectDetail2',
        component: (res) => require(['@views/Project/projectDetail2.vue'], res)
      },
      {
        path: '/project/detail3',
        name: 'projectDetail3',
        component: (res) => require(['@views/Project/projectDetail3.vue'], res)
      },
      {
        path: '/project/detail4',
        name: 'projectDetail4',
        component: (res) => require(['@views/Project/projectDetail4.vue'], res)
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
  loginRouter, 
  voteRouter,  
  enterprise,  
  expert,   
  crowds, 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
