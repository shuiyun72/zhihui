<template>
  <div class="person_right">
    <div class="player_body">
      <div class="title_return_com_sy jcs">
        <div class="left">
          <span class="r1" @click="childHandle(5,0,'Player')">我的题库</span>
          <span class="r0">></span>
          <span class="r2">发起知识竞赛题库</span>
        </div>
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
      </div>
      <div class="play_select_box bs">
        <el-row>
          <el-col :span="3" class="t_right">选择行业题库：</el-col>
          <el-col :span="19">
            <span class="span active">行业选择底色</span>
            <span class="span">行业选择底色</span>
            <span class="span">行业选择底色</span>
            <span class="span">行业选择底色</span>
            <span class="span">行业选择底色</span>
            <span class="span">行业选择底色</span>
            <span class="span">行业选择底色</span>
          </el-col>
          <el-col :span="2">
            更多
            <i class="el-icon-caret-bottom"></i>
          </el-col>
        </el-row>
        <el-row class="casc">
          <el-col :span="3" class="t_right">选择投放区域：</el-col>
          <el-col :span="3">
            <span class="span s2 active">全部</span>
          </el-col>
          <el-col :span="14">
            <el-cascader v-model="addressModel" :options="addressList" placeholder="请选择省、市"></el-cascader>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3" class="t_right">题库添加方式：</el-col>
          <el-col :span="17" :offset="1">
            <el-radio-group v-model="radio">
              <el-radio label="3">逐条输入添加</el-radio>
              <el-radio label="6">上传wod文档添加</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
      </div>
      <div class="player_add bs">
        <el-row>
          <el-col :span="2">题目：</el-col>
          <el-col :span="21">
            <el-input type="textarea"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2">答案1：</el-col>
          <el-col :span="1">
            <el-checkbox class="big_checkbox"></el-checkbox>
          </el-col>
          <el-col :span="11">
            <el-input
              v-model="d1"
              size="mini"
              placeholder="请输入选择答案，并在正确答案前打上“ √ ”（答案不超过15个字符）"
              maxlength="15"
            ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2">答案2:</el-col>
          <el-col :span="1">
            <el-checkbox class="big_checkbox"></el-checkbox>
          </el-col>
          <el-col :span="9">
            <el-input
              v-model="d2"
              size="mini"
              placeholder="请输入选择答案，并在正确答案前打上“ √ ”（答案不超过15个字符）"
              maxlength="15"
            ></el-input>
          </el-col>
        </el-row>
        <div class="true_add">
          <div class="add">
            <i class="iconfont icon-jiahao"></i>
          </div>
          <p>注：题目达到20题才可以提交</p>
          <el-button class="blue_btn2_r">提交</el-button>
        </div>
      </div>
      <div class="ppp">上传wod文档添加</div>
      <div class="bs word_app">
        <el-row>
          <el-col :span="3">上传wod文档：</el-col>
          <el-col :span="4">
            <div class="sele pointer">选择本地文档</div>
          </el-col>
          <el-col :span="11" :offset="1">
            <span class="link">下载题库文档模版</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11" :offset="3">注：Wod文档题库必须大于50条（推荐100条以上）</el-col>
        </el-row>
        <div class="true_add">
          <el-button class="blue_btn2_r">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addressList1 } from "@const";
export default {
  data() {
    return {
      addressList: addressList1,
      addressModel: [],
      radio: "3",
      d1: "",
      d2: ""
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
