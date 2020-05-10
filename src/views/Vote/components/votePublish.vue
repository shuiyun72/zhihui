<template>
  <div id="vote">
    <Side :isShowRightPart1="'false'"></Side>
    <div class="title_Progress">
      <div class="left">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/vote' }">投票频道</el-breadcrumb-item>
          <el-breadcrumb-item>发起投票</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="vote_p_content wm bs">
      <div class="title_box">投票基本设置</div>
      <div class="vote_body jcs">
        <div class="vote_left">
          <img :src="require('@assets/img/img2.png')" />
          <p>昵称：零度</p>
        </div>
        <div class="vote_right">
          <el-row>
            <el-col :span="1" class="point_red t_right">*</el-col>
            <el-col :span="3" class="t_right">投票标题：</el-col>
            <el-col :span="12">
              <el-input v-model="input1" placeholder="请输入内容"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="point_red t_right">*</el-col>
            <el-col :span="3" class="t_right">上传封面：</el-col>
            <el-col :span="12">
              <span class="up_img">上传图片</span>
              <span class="info">文件小于1M，分辨率900Ｘ300（3:1），用于投票页面的宣传图片</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="point_red t_right">*</el-col>
            <el-col :span="3" class="t_right">分享缩略图：</el-col>
            <el-col :span="12">
              <span class="up_img">上传图片</span>
              <span class="info">文件小于1M，尺寸300✖️300，用于投票分享缩略图</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="point_red t_right">*</el-col>
            <el-col :span="3" class="t_right">投放区域：</el-col>
            <el-col :span="12">
              <el-cascader v-model="addressModel" :options="addressList" placeholder="请选择省、市"></el-cascader>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="point_red t_right">*</el-col>
            <el-col :span="3" class="t_right">每天投票：</el-col>
            <el-col :span="6">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <span class="info">每个用户每天的投票次数</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="point_red t_right">*</el-col>
            <el-col :span="3" class="t_right">投票数量：</el-col>
            <el-col :span="6">
              <el-input v-model="input1" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="6">每个选手每天可投单次或多次</el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="point_red t_right">*</el-col>
            <el-col :span="3" class="t_right">单投或多投：</el-col>
            <el-col :span="6">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <span class="info">选择开始是否每天都可以进行投票</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="point_red t_right">*</el-col>
            <el-col :span="3" class="t_right">投票开始时间：</el-col>
            <el-col :span="6">
              <el-time-select
                v-model="value2"
                :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
              }"
                placeholder="选择时间"
              ></el-time-select>
            </el-col>
            <el-col :span="6">
              <span class="info">时间开始后才可以进行投票</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="point_red t_right">*</el-col>
            <el-col :span="3" class="t_right">投票结束时间：</el-col>
            <el-col :span="6">
              <el-time-select
                v-model="value2"
                :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
              }"
                placeholder="选择时间"
              ></el-time-select>
            </el-col>
            <el-col :span="6">
              <span class="info">不选默认没有截止日期</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="point_red t_right">*</el-col>
            <el-col :span="3" class="t_right">投票详情：</el-col>
            <el-col :span="12">
              <el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="300"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="point_red t_right">*</el-col>
            <el-col :span="3" class="t_right">奖品设置：</el-col>
            <el-col :span="12">
              <el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="300"></el-input>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="is_true">
        <el-checkbox v-model="checked">同意</el-checkbox>
        <span class="link">《智汇优库发布协议》</span>
      </div>
      <div class="handle_com_sy">
        <el-button class="pre">上一步</el-button>
        <router-link :to="{path:'/vote/publish2'}">
          <el-button class="next is_active">下一步</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
import { addressList1 } from "@const";
export default {
  components:{
    Side
  },
  data() {
    return {
      addressList: addressList1,
      addressModel: [],
      checked: false,
      options: [
        {
          value: "选项1",
          label: "选择1"
        },
        {
          value: "选项5",
          label: "选择2"
        }
      ],
      value: "",
      value2: "",
      input1: "",
      textarea: ""
    };
  }
};
</script>
<style lang="less">

</style>