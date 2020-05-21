<template>
  <div class="person_right">
    <div class="subsc_body">
      <div class="s_title">我的订阅设置</div>
      <div class="s_content bs">
        <div class="s_p1">
          <el-row>
            <el-col :span="9" :offset="4">
              <span class="link">您还没有绑定微信，不能第一时间收到通知</span>
            </el-col>
            <el-col :span="4">
              <el-button class="or_btn_p1">立即关注绑定</el-button>
            </el-col>
            <el-col :span="6" class="t_right">
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
            </el-col>
          </el-row>
        </div>
        <div class="s_p4">
          <el-row class="bdb">
            <el-col :span="2" :offset="1">订阅区域：</el-col>
            <el-col :span="8">
              <el-cascader v-model="addressModel" :options="addressList" placeholder="请选择省、市"></el-cascader>
            </el-col>
          </el-row>
          <el-row class="bdb">
            <el-col :span="2" :offset="1">已订阅：</el-col>
            <el-col :span="20" class="or_bs_btn">
              <el-button class="bs" v-for="item in 20" :key="item+'xx'">综合布线系统</el-button>
            </el-col>
          </el-row>
          <el-row class="bdb">
            <el-col :span="2" :offset="1">选择订阅：</el-col>
            <el-col :span="20" class="or_bs_btn_no">
              <el-button
                class="bs"
                v-for="item in 20"
                :key="item+'xxc'"
                :class="{'active':item==3}"
              >综合布线系统</el-button>
            </el-col>
          </el-row>
          <div class="t_center">
            <el-button class="blue_btn" round @click="successVisible=true">保 存</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="successVisible"
      width="480px"
      class="playing_dialog_com_sy"
    >
      <div class="subsrc_dialog"> 
        <div class="t_center">您的订阅选项已保存</div>
        <div class="t_center">请注意【智汇优库公众平台】</div>
        <div class="t_center">推送的订阅消息</div>
        <div class="img ">
          <img :src="require('@assets/img/evm.png')" alt />
        </div>
        <p class="p1">扫码关注公众平台</p>
        <div class="submit_blue_btn_sy bdt">
          <el-button @click="successVisible = false">返回</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addressList1 } from "@const";
export default {
  components: {},
  props: {},
  computed: {},
  data() {
    return {
      addressList: addressList1,
      addressModel: [],
      successVisible: false
    };
  },
  methods: {
    childHandle(i, ic, el) {
      this.$parent.childHandle(i, ic, el);
    }
  }
};
</script>
<style lang="less">
.subsrc_dialog{
  padding: 20px 40px;
  .t_center{
    font-weight: bold;
    font-size: 16px;
    line-height: 36px;
  }
  .img{
    text-align: center;
    img{
      width: 260px;
    }
  }
  .p1{
    text-align: center;
  }
  .bdt{
    border-top: 1px solid #ccc;
    margin-top: 20px;
    padding-top: 30px;
    .el-button{
      padding: 7px 32px;
    }
  }
}
</style>
