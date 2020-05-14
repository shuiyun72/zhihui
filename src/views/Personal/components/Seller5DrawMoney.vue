<template>
  <div class="person_right">
    <div class="title_return_com_sy">
      <div class="left">
        <span class="r1" @click="childHandle(7,4,'Seller5')">我的钱包</span>
        <span class="r0">></span>
        <span class="r2">提现</span>
      </div>
    </div>
    <div class="wallet_dm_body bs">
      <div class="d_part1">
        <span>可提现金额（元）</span>
        <span class="orange">￥ 48396.00</span>
      </div>
      <div class="d_part2">
        <span>输入提现金额：</span>
        <el-input v-model="money"></el-input>
        <span class="link">查看提现记录</span>
      </div>
      <el-row>
        <el-col :span="6">选择提现银行卡：</el-col>
        <el-col :span="18">
          <el-checkbox v-model="checked" class="big_checkbox"></el-checkbox>
          <span class="right_img">
            <img :src="require('@assets/img/k1.jpg')" />
          </span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16" :offset="6">
          <el-checkbox v-model="checked1" class="big_checkbox"></el-checkbox>
          <span class="right_img">
            <img :src="require('@assets/img/k2.jpg')" />
          </span>
        </el-col>
      </el-row>
      <div class="submit_btn_sy mbt mt">
        <el-checkbox v-model="checked3">阅读并同意提现规则</el-checkbox>
        <el-button class="next" @click="DMVisible = true;drowD = 'drow1'">下一步</el-button>
      </div>
    </div>
    <el-dialog title="提现" :visible.sync="DMVisible" width="500px" class="playing_dialog_com_sy">
      <div class="drow_dialog_body" v-show="drowD == 'drow1'">
        <el-row>
          <el-col :span="6" class="title"> 提现金额：</el-col>
          <el-col :span="16"><span class="red2">{{money?money:0}}元</span></el-col>
        </el-row>
        <el-row class="bd">
          <el-col :span="6" class="title"> 提现路径：</el-col>
          <el-col :span="18"><span class="red2">工商银行 尾号1234</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="8" class="title"> 平台交易密码：</el-col>
          <el-col :span="16"><span class="red2"><el-input v-model="v1"></el-input></span></el-col>
        </el-row>
        <el-row>
          <el-col :span="8" class="title"> 手机验证：</el-col>
          <el-col :span="16"><el-input placeholder="手机号" v-model="input2">
              <template slot="append">发送验证码</template>
            </el-input></el-col>
        </el-row>
        <el-row>
          <el-col :span="8" class="title"> 输入验证码：</el-col>
          <el-col :span="16"><el-input v-model="v3"></el-input></el-col>
        </el-row>
        <div class="submit_or_btn_sy">
          <el-button @click="drowD = 'drow2'">提交</el-button>
        </div>
      </div>
      <div class="text_dialog_body" v-show="drowD == 'drow2'">
        <p>您的提现申请已提交，我们会在2个工作日内完成审 核并完成提现。请您关注您的相关账户，如遇未及时 到账或其它提现原因，请拨打客服电话查询。 </p>
        <p>客服热线：400-1186-800</p>
        <div class="submit_or_btn_sy">
          <el-button @click="DMVisible = false ;drowD = 'drow1'">确定</el-button>
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
      tableData: [{ year: 2020, month: 4, order: 18, pay: "￥2588.00" }],
      dialogData: [
        {
          time: "20200330 14:25:20",
          pub: "施耐德开关面板施耐德开关...",
          num: "2",
          pi: "50",
          all: "￥200.00"
        }
      ],
      v1:"",
      v2:"",
      v3:"",
      money:"",
      input2:"",
      checked: true,
      checked1: false,
      checked3: true,
      tableDialog: true,
      DMVisible: false,
      drowD:"drow2"
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
