<template>
  <div class="person_right">
    <div class="title_return_com_sy">
      <div class="left">
        <span class="r1" @click="childHandle(6,0,'Order1')">订单列表</span>
        <span class="r0">></span>
        <span class="r2">退款/退货</span>
      </div>
    </div>
    <div class="steps_num_com_sy small">
      <div class="s_l">
        <span class="orange">交易流程</span>
      </div>
      <div class="s_r">
        <el-steps :active="active" align-center>
          <el-step title="立即购买/购物车结算"></el-step>
          <el-step title="待付款"></el-step>
          <el-step title="待发货"></el-step>
          <el-step title="确认收货"></el-step>
          <el-step title="交易评价"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="edit_el_tabs_com_sy">
      <el-row class="title_d">
        <el-col :span="8" class="t_center">宝贝</el-col>
        <el-col :span="4" class="t_center">商品名称</el-col>
        <el-col :span="3" class="t_center">参数</el-col>
        <el-col :span="2" class="t_center">单价</el-col>
        <el-col :span="2" class="t_center">数量</el-col>
        <el-col :span="2" class="t_center">原价</el-col>
        <el-col :span="3" class="t_center">操作</el-col>
      </el-row>
      <div class="personal_d">
        <el-row>
          <el-col :span="8">
            <img :src="require('@assets/img/t1.jpg')" class="bs" />
            <span>卖家：小女人</span>
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
      <div v-for="(t,i) in [2]" :key="i+'pp'">
        <el-row class="bg_detail_com_sy small">
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
              <el-button class="bg_or_btn">去付款</el-button>
            </div>
            <div class="all_btn" v-show="t==2">
              <!-- <el-button class="or_btn" @click="routerTo('Logistics')">查看物流</el-button> -->
              <!-- <el-button class="or_btn">申请退款/货</el-button> -->
              <p class="info_l">倒计时：9天12小时</p>
              <el-button class="bg_or_btn">确认收货</el-button>
            </div>
            <div class="all_btn" v-show="t==3">
              <el-button class="or_btn">提醒发货</el-button>
              <el-button class="or_btn">申请退款/货</el-button>
              <p class="info_l">倒计时：9天12小时</p>
              <el-button class="or_btn">确认收货</el-button>
            </div>
            <div class="all_btn" v-show="t==4">
              <el-button class="or_btn">查看物流</el-button>
              <el-button class="bg_or_btn">去发货(退)</el-button>
              <p class="info_l">倒计时：9天12小时</p>
              <el-button class="or_btn">确认收货</el-button>
            </div>
            <div class="all_btn" v-show="t==5">
              <el-button class="or_btn">查看物流</el-button>
              <el-button class="bg_or_btn">查看拒绝理由</el-button>
              <p class="info_l">倒计时：9天12小时</p>
              <el-button class="or_btn">确认收货</el-button>
            </div>
            <div class="all_btn" v-show="t==6">
              <el-button class="or_btn">查看退货物流</el-button>
            </div>
            <div class="all_btn" v-show="t==7">
              <el-button class="bg_or_btn">退款成功</el-button>
            </div>
            <div class="all_btn" v-show="t==8">
              <el-button class="bg_or_btn">去评价</el-button>
            </div>
            <div class="all_btn" v-show="t==9">
              <el-button class="or_btn">查看评价</el-button>
            </div>
            <div class="all_btn" v-show="t==10">
              <el-button class="or_btn">查看评价</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="tall_reason_com_sy">
      <el-row>
        <el-col :span="2" class="fwb">商品状态：</el-col>
        <el-col :span="21">
          <el-button class="round_btn_p1 active_or">需要退货</el-button>
          <el-button class="round_btn_p1" @click="routerTo('Order1Return2')">无需退货</el-button>
          <el-button class="round_btn_p1">未收到货</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2" class="fwb">退款金额：</el-col>
        <el-col :span="4">
          <el-input size="mini" v-model="va1" placeholder="输入需要退款的金额"></el-input>
        </el-col>
        <el-col :span="17" :offset="1">
          交易金额：
          <span class="red2">￥586.00</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2" class="fwb">退货原因：</el-col>
        <el-col :span="21">
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="textarea"
            maxlength="200"
            show-word-limit
          ></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2" class="fwb">上传图片：</el-col>
        <el-col :span="21">
          <span class="img_mr">
            <img :src="require('@assets/img/re1.jpg')" />
          </span>
          <span class="img_mr">
            <img :src="require('@assets/img/re2.jpg')" />
          </span>
        </el-col>
      </el-row>
    </div>
    <div class="submit_btn_sy mbt or">
      <el-button>提 交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 4,
      va1: "",
      textarea: ""
    };
  },
  methods: {
    childHandle(i, ic, el) {
      this.$parent.childHandle(i, ic, el);
    },
    routerTo(el) {
      this.childHandle(6, 0, el);
    }
  }
};
</script>
<style lang="less">
</style>
