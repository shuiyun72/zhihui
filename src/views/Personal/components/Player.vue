<template>
  <div class="person_right">
    <div class="player_body">
      <div class="player_title jcs bs">
        <div class="title">我的竞赛</div>
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
      <div class="h16"></div>
      <div class="p_box bs">
        <el-row class="lh50">
          <el-col :span="2" :offset="2">
            <img :src="require('@assets/img/t3.jpg')" alt />
          </el-col>
          <el-col :span="4">
            <span>昵称：零度</span>
          </el-col>
          <el-col :span="10">
            竞赛红包余额：
            <span class="red">10.69</span> 元
          </el-col>
          <el-col :span="6">
            <el-button class="bule_btn_r">提现</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="p_img jcs bs">
        <div class="yg">
          <img :src="require('@assets/img/yg.jpg')" alt />
        </div>
        <div class="evm bs">
          <img :src="require('@assets/img/evm.jpg')" alt />
        </div>
        <div class="t">
          <p>手机扫码</p>
          <p>分享题库</p>
        </div>
      </div>
      <div class="ques bs">
        <div class="title">我的题库</div>
        <div class="item" v-for="(t,i) in 3" :key="i+'s'">
          <el-row>
            <el-col :span="20">弱电线缆产品</el-col>
            <el-col :span="4">
              <div class="blue">正在使用</div>
            </el-col>
          </el-row>
          <el-row class="e2">
            <el-col :span="4">
              共上传题数：
              <span class="orange">98</span>条
            </el-col>
            <el-col :span="4">
              通过审核：
              <span class="orange">98</span>条
            </el-col>
            <el-col :span="4">
              当前排序：
              <span class="orange">1</span>
            </el-col>
            <el-col :span="4">
              剩余红包：
              <span class="orange">8937</span>
            </el-col>
            <el-col :span="4">2019-10-12</el-col>
          </el-row>
        </div>
        <div class="item">
          <el-row>
            <el-col :span="20">弱电线缆产品</el-col>
            <el-col :span="4">
              <div class="orange">审核中</div>
            </el-col>
          </el-row>
          <el-row class="e2">
            <el-col :span="4">
              共上传题数：
              <span class="orange">98</span>条
            </el-col>
            <el-col :span="4">
              通过审核：
              <span class="orange">98</span>条
            </el-col>
            <el-col :span="4">
              当前排序：
              <span class="orange">1</span>
            </el-col>
            <el-col :span="4">
              剩余红包：
              <span class="orange">8937</span>
            </el-col>
            <el-col :span="4">2019-10-12</el-col>
          </el-row>
        </div>
        <div class="item">
          <el-row>
            <el-col :span="20">弱电线缆产品</el-col>
            <el-col :span="4">
              <div>答题结束</div>
            </el-col>
          </el-row>
          <el-row class="e2">
            <el-col :span="4">
              共上传题数：
              <span class="orange">98</span>条
            </el-col>
            <el-col :span="4">
              通过审核：
              <span class="orange">98</span>条
            </el-col>
            <el-col :span="4">
              当前排序：
              <span class="orange">1</span>
            </el-col>
            <el-col :span="4">
              剩余红包：
              <span class="orange">8937</span>
            </el-col>
            <el-col :span="4">2019-10-12</el-col>
            <el-col :span="4" class="blue2">重新启用</el-col>
          </el-row>
        </div>
        <div class="btn">
          <el-row>
            <el-col :span="4" :offset="19">
              <el-button class="blue_btn2_r" @click="childHandle(5,0,'PlayerAdd')">添加题库</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
