export default { //项目信息
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
}