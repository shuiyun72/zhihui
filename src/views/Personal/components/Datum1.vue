<template>
  <div class="person_right">
    <div class="datum_body bs">
      <div class="per1_title">基本信息</div>
      <div class="form_data">
        <el-row class="img_in">
          <el-col :span="1" class="t_right point_red none">*</el-col>
          <el-col :span="2">选择头像：</el-col>
          <el-col :span="2">
            <div class="img">
              <img :src="require('@assets/img/xiaoya.png')" alt />
            </div>
          </el-col>
          <el-col :span="4" class="btn">
            <el-button size="mini">自定义头像</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red">*</el-col>
          <el-col :span="2">昵称：</el-col>
          <el-col :span="6">
            <el-input v-model="value1"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red">*</el-col>
          <el-col :span="2">性别：</el-col>
          <el-col :span="6">
            <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in selectList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red none">*</el-col>
          <el-col :span="2">现居：</el-col>
          <el-col :span="6">
            <el-cascader
              v-model="addressModel"
              :options="addressList"
              @change="addressChange"
              placeholder="请选择省、市"
            ></el-cascader>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red none">*</el-col>
          <el-col :span="2">地址：</el-col>
          <el-col :span="9">
            <el-input v-model="value2"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red">*</el-col>
          <el-col :span="2">主体</el-col>
          <el-col :span="6">
            <el-select v-model="value3" placeholder="请选择">
              <el-option
                v-for="item in selectList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red">*</el-col>
          <el-col :span="2">单位：</el-col>
          <el-col :span="6">
            <el-input v-model="value2"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red">*</el-col>
          <el-col :span="2">职位：</el-col>
          <el-col :span="6">
            <el-input v-model="value2"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red">*</el-col>
          <el-col :span="2">所属行业：</el-col>
          <el-col :span="6">
            <el-select v-model="value4" placeholder="请选择">
              <el-option
                v-for="item in selectList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red none">*</el-col>
          <el-col :span="2">手机绑定：</el-col>
          <el-col :span="3" class="t_right">未绑定</el-col>
          <el-col :span="3" :offset="1">
            <el-button size="mini">去绑定</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red none">*</el-col>
          <el-col :span="2">邮箱绑定：</el-col>
          <el-col :span="3" class="t_right">未绑定</el-col>
          <el-col :span="3" :offset="1">
            <el-button size="mini">去绑定</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="t_right point_red none">*</el-col>
          <el-col :span="2">常用 QQ：</el-col>
          <el-col :span="6">
            <el-input v-model="value2"></el-input>
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
import { addressList1 } from "@const";
export default {
  data() {
    return {
      value1: "智汇优库",
      selectList: [
        { value: "1", label: "男" },
        { value: "2", label: "女" }
      ],
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      addressList: addressList1,
      addressModel: []
    };
  },
  methods: {
      addressChange(){

      }
  }
};
</script>
<style lang="less">

</style>
