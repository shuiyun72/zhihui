<template>
  <div class="person_right">
    <div class="info_init_sy bs">
      <div class="per_title">基本信息</div>
      <el-row class="info_init">
        <el-col :span="2" :offset="1">
          <img :src="require('@assets/img/xiaoya.png')" alt />
        </el-col>
        <el-col :span="3">
          <div class="p">昵称：零度</div>
          <div class="p">性别：男</div>
        </el-col>
        <el-col :span="4">
          <div class="p">主体：个人</div>
          <div class="p">地址：郑州市</div>
        </el-col>
        <el-col :span="8">
          <div class="p">单位全称：河南天天网络科技有限公司</div>
          <div class="p">所属行业：弱电智能化系统</div>
        </el-col>
      </el-row>
    </div>
    <div class="datum_body bs">
      <div class="per1_title">企业安全认证</div>
      <div class="form_data">
        <el-row>
          <el-col :span="1" class="t_right point_red">*</el-col>
          <el-col :span="2">企业全称： </el-col>
          <el-col :span="8">
            <el-input v-model="value1"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red">*</el-col>
          <el-col :span="2">信用代码：</el-col>
          <el-col :span="8">
            <el-input v-model="value1"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red none">*</el-col>
          <el-col :span="6" :offset="3" class="t_center sf">
             <img :src="require('@assets/img/sf.jpg')" alt />
             <p>上传营业执照</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red">*</el-col>
          <el-col :span="3">手机验证：</el-col>
          <el-col :span="8">
            <el-input v-model="input1" placeholder="请输入手机号" class="login_input">
              <template slot="append">获取验证码</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red">*</el-col>
          <el-col :span="3">输入验证码：</el-col>
          <el-col :span="8">
            <el-input v-model="value1"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="submit_btn_sy mbt">
        <el-button>保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1:"",
      input1:""
    };
  },
  methods: {}
};
</script>
<style lang="less">
</style>
