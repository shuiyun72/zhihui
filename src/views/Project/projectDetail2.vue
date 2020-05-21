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
            <el-breadcrumb-item>{{selectTitle}}</el-breadcrumb-item>
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
        <el-tabs type="border-card" class="part2 project_tabs_sy" @tab-click="changeItem">
          <el-tab-pane label="项目详情">
            <div class="project_tab">
              <p v-for="(t,i) in projectTab1" :key="i+'p1'">{{t}}</p>
              <p class="top">发布人：河南省伟信招标管理咨询有限公司</p>
              <p class="date">发布日期：2019年10月18日</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="联系人">
            <div class="project_tab man">
              <p>招标单位：中国电信集团有限公司河南分公司</p>
              <p>联 系 人：栗先生</p>
              <p>联系电话：037165340195</p>
              <p>联系地址：郑州市郑东新区29号</p>
              <p class="top">招标代理：河南省信人工程造价咨询有限公司</p>
              <p>联 系 人：李先生</p>
              <p>联系电话：18595689685</p>
              <p>联系地址：郑州市文化路9号永和国际1702室</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="商机分析">
            <div class="project_p3 jcs">
              <div class="left">
                <div v-for="(t,i) in CardNav" :key="i+'cn'">
                  <CardNav :CardNav="t" class="p" @parentCards="parentCards"></CardNav>
                </div>
              </div>
              <div class="right">
                <el-row v-for="(t,i) in 26" :key="i+'t1'" v-show="activeShow == '招采信息'">
                  <el-col :span="16">河南长葛市双洎河国家湿地公园市双洎河国家湿地公园科普项目</el-col>
                  <el-col :span="4" class="t_center">河南省长葛市</el-col>
                  <el-col :span="4" class="t_right">2019-10-12</el-col>
                </el-row>

                <el-row
                  v-for="(t,i) in 26"
                  :key="i+'t2'"
                  v-show="activeShow == '历史招标代理'"
                  @click.native="router3"
                >
                  <el-col :span="10">河河南龙华工程咨询有限公司</el-col>
                  <el-col :span="10" class="t_center">代理服务21条</el-col>
                  <el-col :span="4" class="t_right">关联甲方：12家</el-col>
                </el-row>

                <el-row
                  v-for="(t,i) in 26"
                  :key="i+'t3'"
                  v-show="activeShow == '历史中标乙方'"
                  @click.native="router4"
                >
                  <el-col :span="10">河河南天天了集团有限公司有限公司</el-col>
                  <el-col :span="10" class="t_center t_de">中标信息：23条</el-col>
                  <el-col :span="4" class="t_right t_de">关联企业：23家</el-col>
                </el-row>
                <div class="t_center" v-show="activeShow != '历史中标乙方'">
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
import _ from "lodash";
export default {
  components: { Side, CardNav },
  data() {
    return {
      CardNav: [
        {
          img: "sj1.png",
          title: "招采信息",
          text: "该单位历史招标",
          num: "27",
          active: 1
        },
        {
          img: "sj2.png",
          title: "历史招标代理",
          text: "历史招标代理方",
          num: "3",
          active: 0
        },
        {
          img: "sj2.png",
          title: "历史中标乙方",
          text: "历史项目中标方",
          num: "27",
          active: 0
        }
      ],
      activeShow: "招采信息",
      selectTitle:"项目详情"
    };
  },
  methods: {
    parentCards(text) {
      _.map(this.CardNav, item => {
        item.active = 0;
      });
      this.CardNav[_.findIndex(this.CardNav, text)].active = 1;
      this.activeShow = text.title;
    },
    router3() {
      this.$router.push({ path: "/project/detail3" });
    },
    router4() {
      this.$router.push({ path: "/project/detail4" });
    },
    changeItem(tab, event){
      this.selectTitle = event.target.innerHTML
    }
  },
  mounted() {
    // console.log(this.projectTab1);
  },
  computed: {
    projectTab1() {
      return "一、采购项目名称：登封市石道乡东区小学供电及监控工程 二、采购项目编号：登政采201909256 三、采购公告发布日期：2019年10月09日 四、成交日期：2019年10月17日 五、采购方式：竞争性谈判 六、成交情况 成交人：河南万立建筑安装有限公司 成交单位地址：河南省郑州市登封市中岳街道新店村办公楼1号楼 成交报价：860000.00元 工期：20日历天 质量：合格 七、谈判小组成员名单：王建化（采购人评委）、王光政、张育舒 八、招标代理服务费 招标代理费收费标准：按相关收费标准，共计8000元。 九、成交公告发布的媒介及成交公告期限 本成交公告同时在《中国招标投标公共服务平台》、《河南省电子招标投标公共服务平台》、《河南省政府采购网》、《郑州市政府采购网》、《登封市政府采购网》、《全国公共资源交易平台（河南省.登封市）》上发布。 成交公告期限为1个工作日。 十、联系方式 采购单位：登封市石道乡人民政府 地址：登封市石道乡 联系人：刘女士 联系电话：17838392629 招标代理机构：河南省伟信招标管理咨询有限公司 地址：郑州市东风南路与创业路交叉口郑东绿地中心北塔16楼 登封办事处地址：登封市守敬路建设局斜对面向南30米三楼 联系人：何女士/刘女士 联系电话：0371-62710852 电子邮件：dfwxzb@126.com".split(
        " "
      );
    }
  }
};
</script>

<style lang="less">
</style>
