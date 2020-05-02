export default {
    //企业名录
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
        {
            path: '/enterprise/info',
            name: 'enterpriseInfo',
            component: (res) => require(['@views/Enterprise/enterpriseInfo.vue'], res)
        },
        {
            path: '/enterprise/info2',
            name: 'enterpriseInfo2',
            component: (res) => require(['@views/Enterprise/enterpriseInfo2.vue'], res)
        },
        {
            path: '/enterprise/info3',
            name: 'enterpriseInfo3',
            component: (res) => require(['@views/Enterprise/enterpriseInfo3.vue'], res)
        },
        {
            path: '/enterprise/info4',
            name: 'enterpriseInfo4',
            component: (res) => require(['@views/Enterprise/enterpriseInfo4.vue'], res)
        },
        {
            path: '/enterprise/info5',
            name: 'enterpriseInfo5',
            component: (res) => require(['@views/Enterprise/enterpriseInfo5.vue'], res)
        },
        {
            path: '/enterprise/info8',
            name: 'enterpriseInfo8',
            component: (res) => require(['@views/Enterprise/enterpriseInfo8.vue'], res)
        },
        {
            path: '/enterprise/msg1',
            name: 'enterpriseMsg1',
            component: (res) => require(['@views/Enterprise/enterpriseMsg1.vue'], res)
        },
        {
            path: '/enterprise/msg2',
            name: 'enterpriseMsg2',
            component: (res) => require(['@views/Enterprise/enterpriseMsg2.vue'], res)
        },
        {
            path: '/enterprise/msg3',
            name: 'enterpriseMsg3',
            component: (res) => require(['@views/Enterprise/enterpriseMsg3.vue'], res)
        },
        {
            path: '/enterprise/msg3/detail',
            name: 'enterpriseMsg3Detail',
            component: (res) => require(['@views/Enterprise/enterpriseMsg3Detail.vue'], res)
        },
        {
            path: '/enterprise/msg4',
            name: 'enterpriseMsg4',
            component: (res) => require(['@views/Enterprise/enterpriseMsg4.vue'], res)
        },
        {
            path: '/enterprise/msg5',
            name: 'enterpriseMsg5',
            component: (res) => require(['@views/Enterprise/enterpriseMsg5.vue'], res)
        },
        {
            path: '/enterprise/msg5/detail',
            name: 'enterpriseMsg5Detail',
            component: (res) => require(['@views/Enterprise/enterpriseMsg5Detail.vue'], res)
        },
        {
            path: '/enterprise/msg6',
            name: 'enterpriseMsg6',
            component: (res) => require(['@views/Enterprise/enterpriseMsg6.vue'], res)
        },
        {
            path: '/enterprise/msg8',
            name: 'enterpriseMsg8',
            component: (res) => require(['@views/Enterprise/enterpriseMsg8.vue'], res)
        }
    ]
}