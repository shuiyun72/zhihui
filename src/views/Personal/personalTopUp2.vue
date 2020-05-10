<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch></HeaderSearch>
    </div>
    <HeaderNav :HeaderNav="'个人中心'"></HeaderNav>
    <Side :isShowRightPart1="false"></Side>
    <div class="title_Progress">
      <div class="left">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/personal' }">个人中心</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/personal' }">智慧币</el-breadcrumb-item>
          <el-breadcrumb-item>充值</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="personal_top_up wm jcs">
      <div class="p_l bs">
        <div class="t_title">充值须知</div>
        <p class="p1">1、智汇币可以用来参与竞赛、竞 拍广告展示 位、置顶发布信息等服务。</p>
        <p class="p1">2、智汇币充值的兑换比例为：1元人民币=100 个智汇币。</p>
        <p class="p1">3、智汇币币能兑换现金，不能进行转账交易， 不能用于购买商品。</p>
      </div>
      <div class="p_right">
        <div class="part_box bs part_box1">
          <div class="p_title">收款账户信息</div>
          <div class="msg_info">
            <p>帐户名称：郑州智汇优库网络科技有限公司</p>
            <p>对公账号： 8888888888888888</p>
            <p>开户银行：郑州市广发银行花园路支行</p>
          </div>
          <div class="submit_btn_sy">
            <el-button class="pay">一键复制转账信息</el-button>
          </div>
        </div>
        <div class="part_box bs">
          <div class="p_title">转账完成填写</div>
          <div class="msg_input">
            <el-input v-model="value1" placeholder="输入转账姓名/企业名称"></el-input>
            <el-input v-model="value2" placeholder="输入转账金额"></el-input>
            <el-input v-model="value3" placeholder="输入转账交易银行"></el-input>
            <el-input v-model="value4" placeholder="输入银行转账交易单号"></el-input>
          </div>
          <div class="submit_btn_sy">
            <el-button class="pay" @click="afterPayDialog = true">提交</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="温馨提示"
      :visible.sync="afterPayDialog"
      width="320px"
      class="playing_dialog_com_sy bdra"
    >
      <div class="after_pay">
        <p>工作人员核对完成后会在</p>
        <p>24小时内联系您，请您耐心等待</p>
        <p>如遇特殊情况请拨打400客服电话</p>
        <p>客服：400 1186 800</p>
        <div class="submit_btn_sy mbt">
          <el-button class="pay" @click="afterPayDialog = false">返回</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderSearch from "@components/Header/HeaderSearch.vue";
import HeaderNav from "@components/Header/HeaderNav.vue";
import Side from "@components/Side.vue";

export default {
  components: {
    HeaderTop,
    HeaderSearch,
    HeaderNav,
    Side
  },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      afterPayDialog: false
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less">
</style>
