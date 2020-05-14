<template>
  <div class="person_right">
    <div class="title_return_com_sy">
      <div class="left">
        <span class="r1" @click="childHandle(7,0,'Seller1')">已出售的尾货</span>
        <span class="r0">></span>
        <span class="r2">去发货</span>
      </div>
    </div>
    <div class="steps_num_com_sy small">
      <div class="s_l">
        <span class="orange">交易流程</span>
      </div>
      <div class="s_r">
        <el-steps :active="active" align-center>
          <el-step title="买家支付"></el-step>
          <el-step title="去发货"></el-step>
          <el-step title="等待买家收货"></el-step>
          <el-step title="买家确认收货"></el-step>
          <el-step title="交易评价/完成"></el-step>
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
        <div>
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
              <div class="all_btn">
                <!-- <el-button class="de_btn">退款/退货中</el-button> -->
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="title_time">发货信息</div>
      <div class="big_info">
        <el-row>
          <el-col :span="4" class="t_right">物流公司：</el-col>
          <el-col :span="8">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="t_right">快递单号：</el-col>
          <el-col :span="8">
            <el-input v-model="input"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="submit_btn_sy mbt or">
        <el-button>提 交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 1,
      va1: "",
      textarea: "",
      input: "",
      value: "",
      options: [
        {
          value: "选项1",
          label: "顺丰速运"
        },
        {
          value: "选项2",
          label: "韵达快递"
        }
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
