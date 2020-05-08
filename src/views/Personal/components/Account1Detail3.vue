<template>
  <div class="person_right">
    <div class="account_body bs">
      <div class="title_return_com_sy">
        <div class="left">
          <span class="r1" @click="childHandle(1,0,'Account1')">个人中心</span>
          <span class="r0">></span>
          <span class="r1" @click="childHandle(1,0,'Account1Detail')">发票索取</span>
          <span class="r0">></span>
          <span class="r2">发票寄送地址</span>
        </div>
      </div>
      <div class="acc_title_l jcs">
        <div class="a_l">发票寄送地址</div>
      </div>
      <div class="public_from_com_sy">
        <el-row>
          <el-col class="point_red t_right" :span="1">*</el-col>
          <el-col class :span="2">收 件 人：</el-col>
          <el-col class :span="8">
            <el-input v-model="value1"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="point_red t_right" :span="1">*</el-col>
          <el-col class :span="2">选择地区：</el-col>
          <el-col class :span="8">
            <el-cascader v-model="addressModel" :options="addressList"></el-cascader>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="point_red t_right" :span="1">*</el-col>
          <el-col class :span="2">详细地址：</el-col>
          <el-col class :span="8">
            <el-input v-model="value1"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="point_red t_right" :span="1">*</el-col>
          <el-col class :span="2">邮政编码：</el-col>
          <el-col class :span="8">
            <el-input v-model="value1"></el-input>
          </el-col>
        </el-row>
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
      value1: "",
      addressList:[{
        value: 'henansheng',
        label: '河南省',
        children: [{
          value: 'zhengzhou',
          label: '郑州',
          children:[
            {value: 'jinshui', label: '金水区'},
            {value: 'zhongyuan', label: '中原区'},
          ]
        },{
          value: 'xuchang',
          label: '许昌'
        }]
      },
      {
        value: 'heibeisheng',
        label: '河北省',
        children: [{
          value: 'beijing',
          label: '北京',
        }]
      }],
      addressModel:[],
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
