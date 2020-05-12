<template>
  <div class="person_right">
    <div class="title_return_com_sy">
        <div class="left">
          <span class="r1" @click="childHandle(6,2,'Order3')">地址管理</span>
          <span class="r0">></span>
          <span class="r2">修改地址</span>
        </div>
      </div>
    <div class="order_body bs">
      <div class="home_title jcs">
        <div class="a_l">修改收货地址</div>
      </div>
      <el-row>
        <el-col :span="4" :offset="1">选择区域：</el-col>
        <el-col :span="8">
          <el-cascader v-model="addressModel" :options="addressList" placeholder="请选择省、市、区"></el-cascader>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" :offset="1">详细地址：</el-col>
        <el-col :span="8">
          <el-input v-model="value1"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" :offset="1">收件人：</el-col>
        <el-col :span="8">
          <el-input v-model="value1"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" :offset="1">联系电话：</el-col>
        <el-col :span="8">
          <el-input v-model="input1" placeholder="请输入手机验证码" class="login_input">
            <template slot="append">获取验证码</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" :offset="1">手机验证码：</el-col>
        <el-col :span="8">
          <el-input v-model="value1"></el-input>
        </el-col>
      </el-row>
      <div class="submit_btn_sy mbt">
        <button type="button" class="el-button el-button--default el-button--small">
          <span>保存</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { addressList2 } from "@const";
export default {
  components: {},
  data() {
    return {
      addressModel: [],
      addressList: addressList2,
      value1: "",
      input1: ""
    };
  },
  methods: {
    childHandle(i,ic,el){
      this.$parent.childHandle(i,ic,el)
    }
  }
};
</script>
<style lang="less">

</style>
