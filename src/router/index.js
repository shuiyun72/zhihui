import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: (res) => require(['@views/Home/home.vue'], res)
    },
    {
      path: '/vote',
      name: 'Vote',
      redirect: '/voteAdd',
      component: (res) => require(['@views/Vote/vote.vue'], res),
      children:[
        {//发起投票
          path: '/voteInitiate',
          name: 'voteInitiate',
          component: (res) => require(['@views/Vote/components/voteInitiate.vue'], res)
        },
        {//添加选手
          path: '/voteAdd',
          name: 'voteAdd',
          component: (res) => require(['@views/Vote/components/voteAdd.vue'], res)
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',    
      component: (res) => require(['@views/Login/login.vue'], res),
      redirect: '/loginInWeChat',
      children:[
        {//登陆微信
          path: '/loginInWeChat',
          name: 'LoginInWeChat',
          component: (res) => require(['@views/Login/loginInWeChat.vue'], res)
        },
        {//登陆
          path: '/loginIn',
          name: 'LoginIn',
          component: (res) => require(['@views/Login/loginIn.vue'], res)
        },
        {//密码找回企业
          path: '/loginFind',
          name: 'loginFind',
          component: (res) => require(['@views/Login/loginFind.vue'], res)
        },
        {//退出
          path: '/loginOut',
          name: 'LoginOut',
          component: (res) => require(['@views/Login/loginOut.vue'], res)
        },
        {//注册
          path: '/loginEnroll',
          name: 'LoginEnroll',
          component: (res) => require(['@views/Login/loginEnroll.vue'], res)
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
