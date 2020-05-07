<template>
  <div class="project_home">
    <Side></Side>
    <!-- <div class="bg_img_top">
      <div class="click">点击竞价此展示位</div>
    </div>-->
    <div class="project_nav">
      <div class="main wm">
        <div class="item">全部</div>
        <div class="item">开标预告</div>
        <router-link tag="div" :to="{path:'/project/list'}" class="item">招采信息</router-link>
        <router-link tag="div" :to="{path:'/project/list2'}" class="item active">评标结果</router-link>
      </div>
    </div>
    <div class="pro_detail1_body wm">
      <div class="title_Progress">
        <div class="left">
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/project' }">项目信息</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/project/list2' }">中标信息</el-breadcrumb-item>
            <el-breadcrumb-item>项目详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="right">
          <div class="share">
            <!-- 这个是插件的应用，我简单写个样式 -->
            <span>分享到：</span>
            <svg class="iconfont" aria-hidden="true" :style="W(16)">
              <use xlink:href="#icon-QQ" />
            </svg>
            <svg class="iconfont" aria-hidden="true" :style="W(16)">
              <use xlink:href="#icon-weixinmendian" />
            </svg>
            <svg class="iconfont" aria-hidden="true" :style="W(16)">
              <use xlink:href="#icon-QQkongjian" />
            </svg>
          </div>
        </div>
      </div>
      <div class="pro_detail1">
        <div class="part1 bs pro_detail2_com_sy">
          <div class="title jcs">
            <div class="left">【乙方】河南长葛市双洎河国家湿地公园科普项目中标公告</div>
            <div class="right">
              <i class="iconfont icon-xing-copy"></i>
              <span>已收藏</span>
            </div>
          </div>
          <div class="p2">
            <span>发布时间：2019-10-12</span>
            <span>地址：长葛市</span>
          </div>
          <div class="p3">
            <span>项目信息在推进的过程中会出现信息变更，如有不符之处，请反馈给客服，我们会尽快核实并变更最新信息！</span>
            <span class="red_b">有奖反馈！</span>
          </div>
        </div>
        <el-tabs type="border-card" class="part2 project_tabs_sy">
          <el-tab-pane label="商机分析">
            <div class="project_p3 jcs">
              <div class="left">
                <div v-for="(t,i) in CardNav" :key="i+'cn'">
                  <CardNav :CardNav="t" class="p" @parentCards="parentCards"></CardNav>
                </div>
              </div>
              <div class="right">
                <el-row v-for="(t,i) in 26" :key="i+'t1'" v-show="activeShow == '代理招标记录'">
                  <el-col :span="16">河南长葛市双洎河国家湿地公园市双洎河国家湿地公园科普项目</el-col>
                  <el-col :span="4" class="t_center">河南省长葛市</el-col>
                  <el-col :span="4" class="t_right">2019-10-12</el-col>
                </el-row>
                <el-row v-for="(t,i) in 6" :key="i+'t3'" v-show="activeShow == '历史服务甲方'">
                  <el-col :span="10">河河南天天了集团有限公司有限公司  </el-col>
                  <el-col :span="10" class="t_center t_de">中标信息：23条</el-col>
                  <el-col :span="4" class="t_right t_de">关联企业：23家</el-col>
                </el-row>
                <div class="t_center" v-show="activeShow == '代理招标记录'">
                  <i class="el-icon-arrow-down"></i>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import Side from "@components/Side.vue";
import CardNav from "./components/CardNav.vue";
export default {
  components: { Side, CardNav },
  data() {
    return {
      CardNav: [
        {
          img: "sj1.png",
          title: "代理招标记录",
          text: "该企业历史招采",
          num: "47",
          active: 1
        },
        {
          img: "sj2.png",
          title: "历史服务甲方",
          text: "该企业的合作方",
          num: "12",
          active: 0
        }
      ],
      activeShow:"代理招标记录"
    };
  },
  methods: {
    parentCards(text) {
      _.map(this.CardNav,item=>{
        item.active = 0
      })
      this.CardNav[_.findIndex(this.CardNav,text)].active = 1;
      this.activeShow = text.title
    }
  },
  mounted() {
    
  },
  computed: {
    
  }
};
</script>

<style lang="less">

</style>
