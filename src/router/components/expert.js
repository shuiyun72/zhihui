export default {//活动达人
    path: '/expert',
    name: 'expert',
    component: (res) => require(['@views/Expert/expert.vue'], res),
    redirect: '/expert/home',
    children: [
        {
            path: '/expert/home',
            name: 'expertHome',
            component: (res) => require(['@views/Expert/expertHome.vue'], res)
        },
        {
            path: '/expert/detail',
            name: 'expertDetail',
            component: (res) => require(['@views/Expert/expertDetail.vue'], res)
        },
        {
            path: '/expert/detail3',
            name: 'expertDetail3',
            component: (res) => require(['@views/Expert/expertDetail3.vue'], res)
        },
        {
            path: '/expert/detail4',
            name: 'expertDetail4',
            component: (res) => require(['@views/Expert/expertDetail4.vue'], res)
        },
        {
            path: '/expert/publish',
            name: 'expertPublish',
            component: (res) => require(['@views/Expert/expertPublish.vue'], res)
        }
    ]
}