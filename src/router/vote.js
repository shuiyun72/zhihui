export default {
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
}