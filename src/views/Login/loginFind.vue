<template>
  <!-- <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">

    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">

    </el-tab-pane>
  </el-tabs>-->

  <div class="login_box login_enroll">
    <div class="login_top">
      <router-link tag="span" :to="{ path: '/' }" class="el-icon-close pointer"></router-link>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="change_login_find">
      <el-tab-pane label="个人" name="first">
        <div class="login_body">
          <el-input v-model="input1" placeholder="手机验证找回" class="login_input"></el-input>
          <el-input v-model="input1" placeholder="请输入手机号" class="login_input"></el-input>
          <el-input v-model="input1" placeholder="请输入手机验证码" class="login_input">
            <template slot="append">获取验证码</template>
          </el-input>
          <el-input v-model="input1" placeholder="请输入新密码 " class="login_input"></el-input>
          <el-input v-model="input1" placeholder="请确认新密码 " class="login_input"></el-input>
        </div>
        <div class="login_btn pointer" @click="showDialog('geren')">提交</div>
      </el-tab-pane>
      <el-tab-pane label="企业" name="second">
        <div class="login_body">
          <p class="qiye_title">企业资料验证3-5个工作日</p>
          <el-row class="qiye_find_file">
            <el-col :span="12"><span class="lang">上传营业执照副本图：</span></el-col>
            <el-col :span="12">
              <el-button class="btn_defult">上传</el-button>
              <el-button class="btn_defult is_active">预览</el-button>
            </el-col>
          </el-row>
          <el-row class="qiye_find_file">
            <el-col :span="12"><span class="lang">上传单位授权书(公章)：</span></el-col>
            <el-col :span="12">
              <el-button class="btn_defult">上传</el-button>
              <el-button class="btn_defult">预览</el-button>
            </el-col>
          </el-row>
          <el-row class="qiye_find_file">
            <el-col :span="12" :offset="10">
              <a href class="down_m">下载授权书模版</a>
            </el-col>
          </el-row>

          <el-input v-model="input1" placeholder="请输入联系人" class="login_input"></el-input>
          <el-input v-model="input1" placeholder="联系电话" class="login_input">
            <template slot="append">获取验证码</template>
          </el-input>
          <el-input v-model="input1" placeholder="请输入验证码" class="login_input"></el-input>
        </div>
        <div class="login_btn pointer" @click="showDialog('qiye')">提交</div>
      </el-tab-pane>
    </el-tabs>
    <!-- dialog////////////////////////////////////////////////////// -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <div class="dialog_login_info" v-if="dialogTitle == 'geren'">
        <div class="title">
          <img :src="require('@assets/img/lok.png')" alt />
        </div>
        <div class="info">
          <p>登陆密码已更改</p>
          <p>请牢记新密码</p>
        </div>
        <div>
          <router-link :to="{ path: '/loginIn' }">
            <el-button class="big_blue small">重新登录</el-button>
          </router-link>
        </div>
      </div>
      <div class="dialog_login_info" v-if="dialogTitle == 'qiye'">
        <div class="title">
          <img :src="require('@assets/img/yitijiao.png')" alt />
        </div>
        <div class="info">
          <p>资料已提交我们会在</p>
          <p>3-5个工作日内审核处理</p>
          <p>请关注手机短信息</p>
        </div>
        <div>
          <router-link :to="{ path: '/' }">
            <el-button class="big_blue small">继续浏览网页</el-button>
          </router-link>
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
      activeName: "second",
      dialogVisible: false,
      dialogTitle: "",
      input1: "",
      input2: ""
    };
  },
  methods: {
    showDialog(el) {
      this.dialogVisible = true;
      this.dialogTitle = el;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="less">
.qiye_find_file {
  font-size: 14px;
  padding: 8px 0;
  color: #666;
  .lang{
    line-height: 28px;
  }
  .btn_defult {
    padding: 6px 20px;
    background-color: #eee;
    font-size: 14px;
    &.is_active {
      background-color: #01b0b7;
      color: #fff;
    }
  }
}
.down_m {
  color: #0009f7;
}
.qiye_title {
  font-size: 14px;
  text-align: center;
  color: #666;
  margin: 10px auto 20px;
}
.big_blue {
  &.small {
    width: 60%;
    display: block;
    margin: 20px auto 30px;
    padding: 6px 20px;
  }
}
.change_login_find {
  .el-tabs__nav {
    width: 100%;
    .el-tabs__item {
      width: 50%;
      text-align: center;
      transition: 1s all;
      font-size: 18px;
      &.is-active {
        background-color: #01b0b7;
        color: #fff;
      }
    }
  }
}
.dialog_login_info {
  .info {
    padding: 10px 0;
    p {
      font-size: 18px;
      text-align: center;
      margin-top: 16px;
    }
  }
  .title {
    font-size: 32px;
    text-align: center;
    padding-bottom: 30px;
    border-bottom: 1px solid #999;
  }
  width: 100%;
  margin: 0 auto;
}
</style>
