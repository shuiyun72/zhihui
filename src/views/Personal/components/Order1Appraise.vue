<template>
  <div class="person_right">
    <div class="title_return_com_sy">
      <div class="left">
        <span class="r1" @click="childHandle(6,0,'Order1')">订单列表</span>
        <span class="r0">></span>
        <span class="r2">评价</span>
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
    <div class="bs p_box_s">
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
                <!-- <el-button class="de_btn">卖家已拒绝</el-button>
                <el-button class="or_btn">确认收货</el-button>-->
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="title_time">交易评价</div>
      <div class="tall_reason_com_sy">
        <el-row>
          <el-col :span="3" class="fwb">整体评价：</el-col>
          <el-col :span="19" class="el_rate_com_sy">
            <el-rate
              v-model="value"
              :icon-classes="iconClasses"
              :texts="['差评', '中评', '中评', '中评', '好评']"
              void-icon-class="iconfont icon-zan1"
              show-text
              :colors="['#99A9BF', '#F7BA2A','#F00']"
            ></el-rate>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="21">
            <el-input
              type="textarea"
              placeholder="此次交易您还满意吗？说说您的意见……"
              v-model="textarea"
              maxlength="200"
              show-word-limit
            ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="21">
            <span class="img_mr">
              <img :src="require('@assets/img/re2.jpg')" />
            </span>
          </el-col>
        </el-row>
        <div class="submit_btn_sy mbt or">
          <el-button>提 交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageNum from "@components/PageNum";
export default {
  components: { PageNum },
  data() {
    return {
      active: 4,
      va1: "",
      textarea: "",
      value: 5,
      iconClasses: [
        "iconfont icon-zan1",
        "iconfont icon-zan1",
        "iconfont icon-zan1"
      ]
    };
  },
  methods: {
    childHandle(i, ic, el) {
      this.$parent.childHandle(i, ic, el);
    },
    routerTo(el) {
      if (el == "Logistics") {
        this.childHandle(6, 0, "Order1Logistics");
      }
    }
  }
};
</script>
<style lang="less">

</style>
