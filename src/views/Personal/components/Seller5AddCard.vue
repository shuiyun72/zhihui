<template>
  <div class="person_right">
    <div class="title_return_com_sy">
      <div class="left">
        <span class="r1" @click="childHandle(7,4,'Seller5')">我的钱包</span>
        <span class="r0">></span>
        <span class="r2">添加银行卡</span>
      </div>
    </div>
    <div class="wallet_dm_t_body bs">
      <el-row>
        <el-col :span="5" class="title">选择银行：</el-col>
        <el-col :span="9">
          <el-input v-model="v1"></el-input>
        </el-col>
      </el-row>
      <el-row class="bd">
        <el-col :span="5" class="title">输入银行卡号码：</el-col>
        <el-col :span="9">
          <el-input v-model="v1"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" class="title">卡类型：</el-col>
        <el-col :span="9">
          <span class="red2">
            <el-input v-model="v1"></el-input>
          </span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" class="title">持卡人姓名：</el-col>
        <el-col :span="9">
          <span class="red2">
            <el-input v-model="v1"></el-input>
          </span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" class="title">手机号码：</el-col>
        <el-col :span="9">
          <el-input placeholder="手机号" v-model="input2">
            <template slot="append">发送验证码</template>
          </el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="5" class="title">验证码：</el-col>
        <el-col :span="9">
          <el-input v-model="v3"></el-input>
        </el-col>
      </el-row>
      <div class="submit_btn_sy mbt mt">
        <el-checkbox v-model="checked3">阅读并同意银行卡绑定协议</el-checkbox>
        <el-button @click="AddVisible = true;isAdd = true" class="next">提 交</el-button>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="AddVisible" width="450px" class="playing_dialog_com_sy">
      <div class="info_body_dia">
        <p class="p1" v-show="isAdd">银行卡绑定成功，请注意您的交易安全！</p>
        <p class="p2 red2"  v-show="!isAdd">银行卡绑定未成功，请重新检查输入信息并添加！</p>
        <div class="submit_btn_sy mbt mt orb">
          <el-button @click="isAdd = false" v-show="isAdd">关 闭</el-button><span></span>
          <el-button @click="AddVisible = false" v-show="!isAdd">返 回</el-button>
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
      v1: "",
      v2: "",
      v3: "",
      input2: "",
      checked: true,
      checked3: true,
      AddVisible: false,
      isAdd: true
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
.wallet_dm_t_body {
  color: #666;
  padding: 30px 40px;
  .title {
    text-align: right;
    font-weight: bold;
    padding-right: 6px;
  }
  .el-row {
    line-height: 32px;
    margin-bottom: 10px;
  }
}
.info_body_dia {
  padding: 0 40px;
  p {
    text-align: center;
    font-size: 16px;
    padding: 50px 0 30px;
  }
}
.seller_log_body{
  th{
    background-color: #eee;
  }
}
</style>
