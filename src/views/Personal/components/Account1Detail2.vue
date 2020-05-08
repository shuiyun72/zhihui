<template>
  <div class="person_right">
    <div class="account_body bs">
      <div class="title_return_com_sy">
        <div class="left">
          <span class="r1" @click="childHandle(1,0,'Account1')">个人中心</span>
          <span class="r0">></span>
          <span class="r1" @click="childHandle(1,0,'Account1Detail')">发票索取</span>
          <span class="r0">></span>
          <span class="r2">编辑发票信息</span>
        </div>
      </div>
      <div class="acc_title_l jcs">
        <div class="a_l">发票信息</div>
      </div>
      <div class="public_from_com_sy">
        <el-row>
          <el-col class="point_red t_right" :span="1">*</el-col>
          <el-col class :span="3">开具类型选择：</el-col>
          <el-col class :span="8">
            <el-radio-group v-model="radio">
              <el-radio :label="1">个人</el-radio>
              <el-radio :label="2">企业</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
        <div v-show="radio == 1">
          <el-row> 
            <el-col class="point_red t_right none" :span="1">*</el-col>
            <el-col class :span="3">发票类型：</el-col>
            <el-col class :span="8">
              <p>增值税普通发票</p>
            </el-col>
          </el-row>
        </div>
        <div v-show="radio == 2">
          <el-row>
            <el-col class="point_red t_right" :span="1">*</el-col>
            <el-col class :span="3">发票抬头信息：</el-col>
            <el-col class :span="8">
              <el-input v-model="value1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col class="point_red t_right" :span="1">*</el-col>
            <el-col class :span="3">社会信用代码：</el-col>
            <el-col class :span="8">
              <el-input v-model="value1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col class="point_red t_right none" :span="1">*</el-col>
            <el-col class="hidden" :span="3">社会信用代码：</el-col>
            <el-col class :span="16">
              <p class="info">请与贵公司财务人员核实后，仔细填写准确的三证合一后的社会统一信用代码或税务登记号， 否则将影响猴戏发票的正常使用</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col class="point_red t_right" :span="1">*</el-col>
            <el-col class :span="3">开户银行名称：</el-col>
            <el-col class :span="8">
              <el-input v-model="value1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col class="point_red t_right" :span="1">*</el-col>
            <el-col class :span="3">基本开户账号：</el-col>
            <el-col class :span="8">
              <el-input v-model="value1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col class="point_red t_right none" :span="1">*</el-col>
            <el-col class :span="3">注册场所地址：</el-col>
            <el-col class :span="8">
              <el-input v-model="value1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col class="point_red t_right none" :span="1">*</el-col>
            <el-col class :span="3">注册固定电话：</el-col>
            <el-col class :span="8">
              <el-input v-model="value1"></el-input>
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="per_next t_center ptb">
        <el-button class="btn_p5_r">提 交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      radio: 2,
      value1: ""
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
</style>
