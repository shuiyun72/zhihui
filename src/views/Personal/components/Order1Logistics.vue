<template>
  <div class="person_right">
    <div class="title_return_com_sy">
      <div class="left">
        <span class="r1" @click="childHandle(6,0,'Order1')">订单列表</span>
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
          <el-step title="交易评价"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="edit_el_tabs_com_sy">
      <div class="personal_d bdts">
        <el-row>
          <el-col :span="9">
            <span class="blue2">订单号：12316451321546541</span>
          </el-col>
          <el-col :span="7" class="t_right" :offset="8">
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
              <el-button class="or_btn">申请退款/货</el-button>
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
        <el-step title="订单创建成功" icon="iconfont icon-dian3" description="2018-04-11"></el-step>
        <el-step title="已揽收" icon="iconfont icon-dian3" description="2018-04-13"></el-step>
        <el-step title="已从郑州集散中心发往南京集散中心" icon="iconfont icon-dian3" description="2018-04-15"></el-step>
      </el-steps>
    </div>
    <div class="vertical_steps_com_sy">
      <div class="title">物流信息：</div>
      <el-steps direction="vertical" :active="4" style="height:300px"> 
        <el-step title="物流公司：申通快递" icon="iconfont icon-dian3" description="单号：4564889465468496"></el-step> 
        <el-step title="订单创建成功" icon="iconfont icon-dian3" description="2018-04-11"></el-step>
        <el-step title="已揽收" icon="iconfont icon-dian3" description="2018-04-13"></el-step>
        <el-step title="已从郑州集散中心发往南京集散中心" icon="iconfont icon-dian3" description="2018-04-15"></el-step>
        <el-step title="【已签收】" icon="iconfont icon-dian3"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
import PageNum from "@components/PageNum";
export default {
  components: { PageNum },
  data() {
    return {
      activeName: "0",
      active: 3
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
.person_msg_info_com_sy {
  background-color: #edf1ff;
  padding: 10px 20px 20px;
  margin-top: 10px;
  .title {
    color: #0644eb;
    margin-bottom: 12px;
    font-weight: bold;
  }
  .icon-weixin {
    color: #74c39b;
    font-size: 22px;
  }
  .lx {
    font-size: 10px;
    background-color: #e9e482;
    padding-right: 20px;
    border-radius: 0 10px 10px 0;
  }
  .el-row {
    line-height: 30px;
  }
  
}
.vertical_steps_com_sy{
  padding-left: 120px;
  .title{
    font-size: 16px;
    color: #666;
    font-weight: bold;
    padding: 40px 0;
  }
  .el-step__head.is-finish{
    color: #999;
  }
  .el-step__title.is-finish{
    color: #999;
  }
  .el-step__description.is-finish{
    color: #999;
  }
  .el-step__head.is-finish{
    border-color: #999;
  }
  .el-step__head.is-process{
    color: #F88509;
  }
}
</style>
