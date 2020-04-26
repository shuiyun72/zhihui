export default {
  path: '/login',
  name: 'Login',
  component: (res) => require(['@views/Login/login.vue'], res),
  redirect: '/loginInWeChat',
  children: [
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
}