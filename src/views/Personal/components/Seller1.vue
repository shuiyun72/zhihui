<template>
  <div class="person_right">
    <div class="edit_el_tabs_com_sy">
      <div class="paopao seller_l">
        <div class="p" v-for="(t,i) in paopaoList" :key="i+'p'" :class="{'hidden':t==0}">{{t}}</div>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="所有订单" name="0">
          <el-row class="title_d">
            <el-col :span="4" class="t_center" :offset="8">商品名称</el-col>
            <el-col :span="3" class="t_center">参数</el-col>
            <el-col :span="2" class="t_center">单价</el-col>
            <el-col :span="2" class="t_center">数量</el-col>
            <el-col :span="2" class="t_center">原价</el-col>
            <el-col :span="3" class="t_center">操作</el-col>
          </el-row>

          <div v-for="(t,i) in [1,2,3,4,5,6,7]" :key="i+'pp'">
            <div class="personal_d" v-show="t != 10">
              <el-row>
                <el-col :span="8">
                  <img :src="require('@assets/img/t2.jpg')" class="bs" />
                  <span>买家：零度</span>
                  <i class="iconfont icon-weixin1"></i>
                  <span class="yellow">和我联系</span>
                </el-col>
                <el-col :span="9">
                  <span class="blue2">订单号：12316451321546541</span>
                </el-col>
                <el-col :span="7" class="t_right">
                  <span class="time">2020-04-15 15:35:21</span>
                </el-col>
              </el-row>
            </div>
            <el-row class="bg_detail_com_sy small">
              <div class="seller_img_t_l">
                <div class="bgred"></div>
                <span class="m">卖</span>
              </div>
              <el-col :span="8" class="t_center">
                <img :src="require('@assets/img/sps2.jpg')" class="bs" />
              </el-col>
              <el-col :span="4">
                <p class="fwb">索尼球形监控HKGH-32索 尼球形监控HKGH-32…</p>
                <p>
                  <span class="bg_blue ss">一口价</span>
                  <span class="bg_orange ss">包邮</span>
                </p>
              </el-col>
              <el-col :span="3" class="cs">
                <p>接口：24</p>
                <p>颜色：白色</p>
                <p>重量：290g</p>
                <p>类型：随便</p>
                <p>分类：随便</p>
                <p>参数：随便</p>
              </el-col>
              <el-col :span="2" class="t_center">284.00</el-col>
              <el-col :span="2" class="t_center">1</el-col>
              <el-col :span="2" class="t_center">
                <span class="text_t">￥1868.00</span>
              </el-col>
              <el-col :span="3" class="t_center all_btn_box">
                <span class="red">合计:￥568.00</span>
                <div class="all_btn" v-show="t==1">
                  <el-button class="or_btn">等待买家付款</el-button>
                </div>
                <div class="all_btn" v-show="t==2">
                  <el-button class="bg_or_btn" @click="childHandle(7,1,'Seller2')">去发货</el-button>
                </div>
                <div class="all_btn" v-show="t==3">
                  <el-button class="or_btn">查看物流</el-button>
                  <p class="info_l">倒计时：9天12小时</p>
                  <el-button class="or_btn" @click="remindDia = true">提醒TA收货</el-button>
                </div>
                <div class="all_btn" v-show="t==4">
                  <el-button class="bg_or_btn" @click="childHandle(7,1,'Seller2Return')">查看退货申请</el-button>
                  <el-button class="or_btn">查看物流</el-button>
                  <p class="info_l">倒计时：9天12小时</p>
                  <el-button class="or_btn">提醒TA收货</el-button>
                </div>
                <div class="all_btn" v-show="t==5">
                  <el-button class="or_btn">已拒绝TA退货</el-button>
                  <p class="info_l">倒计时：9天12小时</p>
                  <el-button class="or_btn">提醒TA收货</el-button>
                </div>
                <div class="all_btn" v-show="t==6">
                  <el-button class="or_btn">已同意退款/货</el-button>
                  <el-button class="or_btn">查看物流</el-button>
                  <el-button class="bg_or_btn">确认退款</el-button>
                </div>
                <div class="all_btn" v-show="t==7">
                  <el-button class="de_btn">退款成功</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <!-- ////////////////////////////////////////////// -->
        <el-tab-pane label="待TA付款" name="1">待TA付款</el-tab-pane>
        <el-tab-pane label="待收货" name="2">待收货</el-tab-pane>
        <el-tab-pane label="退款/退货" name="3">退款/退货</el-tab-pane>
        <el-tab-pane label="待评价" name="4">待评价</el-tab-pane>
        <el-tab-pane label="已完成" name="5">已完成</el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog title="提示" :visible.sync="remindDia" width="360px" class="playing_dialog_com_sy">
      <div class="cro_zhiding_body">
        <p class="pt30">提醒发货成功！</p>
        <div class="submit">
          <el-button class="blue_btn btn_p3" @click="remindDia = false">确定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeName: "0",
      paopaoList: [1, 1, 1, 2, 0],
      remindDia: false
    };
  },
  methods: {
    childHandle(i, ic, el) {
      this.$parent.childHandle(i, ic, el);
    },
    handleClick(tab, event) {},
    routerTo(el) {
      this.childHandle(7, 0, el);
    }
  }
};
</script>
<style lang="less">
</style>
