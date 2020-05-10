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
      <div class="p_r bs">
        <el-row>
          <el-col :span="3" class="t1">充值帐户：</el-col>
          <el-col :span="18">
            <span class="blue">13405555514</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3" class="t1">昵 称：</el-col>
          <el-col :span="18">零度</el-col>
        </el-row>
        <el-row>
          <el-col :span="3" class="t1">支付方式：</el-col>
          <el-col :span="18">
            <span
              :class="{'blue_box':payType}"
              @click="payType = true"
              class="mr30 pointer"
            >支付宝/微信支付</span>
            <span :class="{'blue_box':!payType}" @click="payType = false" class="mr30 pointer">线下支付</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3" class="t1">充值金额：</el-col>
          <el-col :span="18">
            <div class="btn_selete_com_sy">
              1000元
              <i class="iconfont icon-gouxuan-youxiajiaogouxuan"></i>
            </div>
            <div class="btn_selete_com_sy">
              800元
              <i class="iconfont icon-gouxuan-youxiajiaogouxuan"></i>
            </div>
            <div class="btn_selete_com_sy">
              200元
              <i class="iconfont icon-gouxuan-youxiajiaogouxuan"></i>
            </div>
            <div class="btn_selete_com_sy active">
              100元
              <i class="iconfont icon-gouxuan-youxiajiaogouxuan"></i>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18" :offset="3">
            <div class="btn_selete_com_sy">
              50元
              <i class="iconfont icon-gouxuan-youxiajiaogouxuan"></i>
            </div>
            <div class="btn_selete_com_sy">
              20元
              <i class="iconfont icon-gouxuan-youxiajiaogouxuan"></i>
            </div>
            <div class="btn_selete_com_sy">
              10元
              <i class="iconfont icon-gouxuan-youxiajiaogouxuan"></i>
            </div>
            <div class="btn_selete_com_sy">
              50元
              <i class="iconfont icon-gouxuan-youxiajiaogouxuan"></i>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="3">
            <el-input v-model="money" placeholder="输入自定义充值金额"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3" class="t1">应付金额：</el-col>
          <el-col :span="18">
            <span class="orange">100元</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3" class="t1">发票信息：</el-col>
          <el-col :span="18">
            <el-checkbox v-model="checked1">不需要发票</el-checkbox>
            <el-tooltip
              class="item"
              effect="dark"
              content="支付完成后，请在“我的账户”-“智汇币”-“充值记录”里面根据提示提交开票申请"
              placement="bottom-start"
            >
              <el-checkbox v-model="checked2">需要发票</el-checkbox>
            </el-tooltip>
            
          </el-col>
        </el-row>
        <div class="submit_btn_sy mbt mt">
          <el-checkbox v-model="checked3">同意《智汇币条款》</el-checkbox>
          <el-button class="pay" @click="handleType">立即支付</el-button>
        </div>
      </div>
    </div>
    <el-dialog title="支付" :visible.sync="payDialog" width="570px">
      <div class="pay_evm_com_sy jcs">
        <div class="item1 bs">
          <div class="box1 i1">
            <img :src="require('@assets/img/evm.png')" alt />
            <p>支付宝扫码</p>
            <p>智汇优库网络科技有限公司</p>
          </div>
          <div class="box2">
            <i class="iconfont icon-zhifubao"></i>
            <span>支付宝支付</span>
          </div>
        </div>
        <div class="item1 bs">
          <div class="box1 i2">
            <img :src="require('@assets/img/evm.png')" alt />
            <p>微信扫码</p>
            <p>智汇优库网络科技有限公司</p>
          </div>
          <div class="box2">
            <i class="iconfont icon-weixin1"></i>
            <span>微信支付</span>
          </div>
        </div>
      </div>
      <div class="submit_btn_sy mbt">
        <el-button class="pay" @click="payDialog = false">已支付完成</el-button>
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
      money: "",
      checked1: true,
      checked2: false,
      checked3: true,
      payDialog: false,
      payType: true
    };
  },
  mounted() {},
  methods: {
    handleType() {
      if (this.payType) {
        this.payDialog = true;
      } else {
        this.$router.push({ path: "/personal/topUp2" });
      }
    }
  }
};
</script>
<style lang="less">

</style>
