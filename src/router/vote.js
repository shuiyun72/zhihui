export default {
  path: '/vote',
  name: 'Vote',
  redirect: '/vote/home',
  component: (res) => require(['@views/Vote/vote.vue'], res),
  children: [
    {//发起投票
      path: '/vote/home',
      name: 'voteHome',
      component: (res) => require(['@views/Vote/voteHome.vue'], res)
    },
    {//投票查看
      path: '/vote/screen',
      name: 'voteScreen',
      component: (res) => require(['@views/Vote/voteScreen.vue'], res)
    },
    {//投票结果
      path: '/vote/prize',
      name: 'votePrize',
      component: (res) => require(['@views/Vote/votePrize.vue'], res)
    },
    {//发起投票1  
      path: '/vote/publish',
      name: 'votePublish',
      component: (res) => require(['@views/Vote/components/votePublish.vue'], res)
    },
    {//发起投票2  
      path: '/vote/publish2',
      name: 'votePublish2',
      component: (res) => require(['@views/Vote/components/votePublish2.vue'], res)
    }
  ]
}