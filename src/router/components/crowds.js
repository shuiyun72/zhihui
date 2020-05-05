export default {//众包合作
    path: '/crowds',
    name: 'crowds',
    component: (res) => require(['@views/Crowds/crowds.vue'], res),
    redirect: '/crowds/home',
    children: [
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
        },
        {
            path: '/crowds/detail4',
            name: 'crowdsDetail4',
            component: (res) => require(['@views/Crowds/crowdsDetail4.vue'], res)
        },
        {
            path: '/crowds/publish',
            name: 'crowdsPublish',
            component: (res) => require(['@views/Crowds/crowdsPublish.vue'], res)
        }
    ]
}