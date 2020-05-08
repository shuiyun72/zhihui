export default { //弱电社区
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
}