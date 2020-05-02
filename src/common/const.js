export const topNav = [
    { text: "首页", router: "Home", isControl: false },
    { text: "尾货捡漏", router: "tailCargo", isControl: false },
    { text: "项目信息", router: "project", isControl: false },
    { text: "直播现场", router: "playing", isControl: false },
    { text: "众包合作", router: "crowds", isControl: false },
    { text: "达人活动", router: "expert", isControl: false },
    { text: "智汇商城", router: "product", isControl: false },
    { text: "企业名录", router: "enterprise", isControl: false },
    { text: "弱电社区", router: "lightCurrent", isControl: false },
    { text: "投票频道", router: "vote", isControl: false },
    { text: "个人中心", router: "personal", isControl: false }
]

export const topNavEnterprise = [
    { text: "企业简介", router: "enterprise/info", isControl: false },
    { text: "企业资质", router: "enterprise/info2", isControl: false },
    { text: "项目案例", router: "enterprise/info3", isControl: false },
    { text: "企业动态", router: "enterprise/info", isControl: false },
    { text: "企业资讯", router: "enterprise/info4", isControl: false },
    { text: "人才招聘", router: "enterprise/info5", isControl: false },
    { text: "智汇商城", router: "enterprise/info", isControl: false },
    { text: "关于我们", router: "enterprise/info8", isControl: false },
]

export const topNavEnterpriseMsg = [
    { text: "企业简介", router: "enterprise/msg1", isControl: false },
    { text: "企业资质", router: "enterprise/msg2", isControl: false },
    { text: "项目案例", router: "enterprise/msg3", isControl: false },
    { text: "企业动态", router: "enterprise/msg4", isControl: false },
    { text: "企业资讯", router: "enterprise/msg5", isControl: false },
    { text: "人才招聘", router: "enterprise/msg6", isControl: false },
    { text: "智汇商城", router: "enterprise/msg7", isControl: false },
    { text: "关于我们", router: "enterprise/msg8", isControl: false },
]

export const equipmentNav = [
    { icon: "el-icon-basketball", text: "信息设施", router: "", child: [] },
    { icon: "el-icon-basketball", text: "公共安全", router: "", child: [] },
    { icon: "el-icon-basketball", text: "楼宇自控", router: "", child: [] },
    { icon: "el-icon-basketball", text: "智能照明", router: "", child: [] },
    { icon: "el-icon-basketball", text: "机房工程", router: "", child: [] },
    { icon: "el-icon-basketball", text: "音视频", router: "", child: [] },
    { icon: "el-icon-basketball", text: "智能家居", router: "", child: [] },
    { icon: "el-icon-basketball", text: "线缆管材", router: "", child: [] },
    { icon: "el-icon-basketball", text: "电脑IT", router: "", child: [] },
    { icon: "el-icon-basketball", text: "外接设备", router: "", child: [] },
    { icon: "el-icon-basketball", text: "补助工具", router: "", child: [] }
]

export const footList = [
    {
        title: "新手攻略",
        children: [
            { text: "智汇币攻略", url: "", isBlank: false, isA: true },
            { text: "竞赛攻略", url: "", isBlank: false, isA: true },
            { text: "活动发起规则", url: "", isBlank: false, isA: true },
            { text: "合作发起规则", url: "", isBlank: false, isA: true },
            { text: "直播发起规则", url: "", isBlank: false, isA: true },
            { text: "企业录入", url: "", isBlank: false, isA: true }
        ]
    },
    {
        title: "常见问题",
        children: [
            { text: "商城入驻", url: "", isBlank: false, isA: true },
            { text: "参与合作", url: "", isBlank: false, isA: true },
            { text: "直播推流", url: "", isBlank: false, isA: true },
            { text: "竞赛答题", url: "", isBlank: false, isA: true }
        ]
    },
    {
        title: "客服中心",
        children: [
            { text: "400-118-6800", url: "", isBlank: false, isA: false },
            { text: "在线留言", url: "", isBlank: false, isA: true }
        ]
    },
    {
        title: "关于我们",
        children: [
            { text: "企业简介", url: "", isBlank: false, isA: true },
            { text: "企业资讯", url: "", isBlank: false, isA: true },
            { text: "合作流程", url: "", isBlank: false, isA: true },
            { text: "意见反馈", url: "", isBlank: false, isA: true },
            { text: "法律声明", url: "", isBlank: false, isA: true },
            { text: "服务协议", url: "", isBlank: false, isA: true },
            { text: "隐私声明", url: "", isBlank: false, isA: true }
        ]
    }
]

export const footImgList = [
    { img: "foot1.png", url: "", isBlank: false },
    { img: "foot2.png", url: "", isBlank: false },
    { img: "foot1.png", url: "", isBlank: false },
    { img: "foot2.png", url: "", isBlank: false },
    { img: "foot1.png", url: "", isBlank: false },
    { img: "foot2.png", url: "", isBlank: false },
    { img: "foot1.png", url: "", isBlank: false }
]

export const itemList = [
    {num:356,title:"项",text:"自助服务"},
    {num:98,title:"%",text:"覆盖行业"},
    {num:365,title:"天",text:"安全运行"},
    {num:118,title:"人",text:"服务团队"}
]

export const selfHelpList = [
    {img:"house.png",text:"免费自助录入",url:"/"},
    {img:"house.png",text:"产看项目信息",url:"/"},
    {img:"house.png",text:"弱点知识竞赛",url:"/"},
    {img:"house.png",text:"免费自助直播",url:"/"}
]