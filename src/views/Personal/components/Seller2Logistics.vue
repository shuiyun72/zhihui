<template>
  <div class="person_right">
    <div class="title_return_com_sy">
      <div class="left">
        <span class="r1" @click="childHandle(7,1,'Seller2Logistics')">订单列表</span>
        <span class="r0">></span>
        <span class="r2">物流信息</span>
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
          <el-step title="交易/评价完成"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="edit_el_tabs_com_sy">
      <div class="personal_d">
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
      <div>
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
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="person_msg_info_com_sy">
      <div class="title">卖家信息</div>
      <el-row>
        <el-col :span="2" class="t_center">
          <img :src="require('@assets/img/t1.jpg')" class="bs" />
        </el-col>
        <el-col :span="6">
          昵称： 小女人
          <i class="iconfont icon-weixin"></i>
          <span class="lx">和我联系</span>
        </el-col>
        <el-col :span="4">姓名： 胡文*</el-col>
        <el-col :span="7">联系电话： 1300000000</el-col>
        <el-col :span="4">来自： 广东省广州市</el-col>
      </el-row>
      <el-row>
        <el-col :span="20" :offset="2">收货地址：河南省郑州市基础工程广场23号楼6单元8888</el-col>
      </el-row>
    </div>
    <div class="person_msg_info_com_sy">
      <div class="title">买家信息</div>
      <el-row>
        <el-col :span="2" class="t_center">
          <img :src="require('@assets/img/t2.jpg')" class="bs" />
        </el-col>
        <el-col :span="6">昵称： 零度</el-col>
        <el-col :span="4">姓名： 文文*</el-col>
        <el-col :span="7">联系电话： 1300000000</el-col>
        <el-col :span="4">来自： 河南省郑州市</el-col>
      </el-row>
      <el-row>
        <el-col :span="20" :offset="2">收货地址：河南省郑州市基础工程广场23号楼6单元8888</el-col>
      </el-row>
    </div>
    <div class="vertical_steps_com_sy">
      <div class="title">物流信息：</div>
      <el-steps direction="vertical" :active="3" style="height:300px">
        <el-step title="物流公司：申通快递" icon="iconfont icon-dian3" description="单号：4564889465468496"></el-step>
        <el-step title="【已签收】" icon="iconfont icon-dian3" description="2018-04-11 15:52:23"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeName: "0",
      active: 5
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
