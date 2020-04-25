<template>
<div>
    <div class="return">
      <span class="link">
        <i class="el-icon-arrow-left"></i> 返回
      </span>
      <span class="title">创建投票</span>
    </div>
    <div class="title_box">投票基本设置</div>
    <div class="vote_body">
      <el-row>
        <el-col :span="6" class="vote_body_left">
          <img :src="require('@assets/img/img2.png')"/>
          <p>昵称：零度</p>
        </el-col>
        <el-col :span="18" class="vote_body_right">
          <div class="item">
            <span class="red">*</span><span class="title">投票标题</span>
            <el-input v-model="input1" placeholder="请输入内容"></el-input>
          </div>
          <div class="item">
            <span class="red">*</span><span class="title">分享缩略图</span>
            <el-input v-model="input1" placeholder="选择图片"></el-input>
            <span class="info">文件小于1M，尺寸300✖️300，用于投票分享缩略图</span>
          </div>
          <div class="item">
            <span class="red">*</span><span class="title">投放区域</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="item">
            <span class="red">*</span><span class="title">每天投票</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span class="info">每个用户每天的投票次数</span>
          </div>
          <div class="item">
            <span class="red">*</span><span class="title">投票数量</span>
            <el-input v-model="input1" placeholder="选择图片"></el-input>
            <span class="info">每个选手每天可投单次或多次</span>
          </div>

          <div class="item">
            <span class="red">*</span><span class="title">单投或多投</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span class="info">选择开始是否每天都可以进行投票</span>
          </div>

          <div class="item">
            <span class="red">*</span><span class="title">投票开始时间</span>
            <el-time-select
              v-model="value2"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
              }"
              placeholder="选择时间">
            </el-time-select>
            <span class="info">时间开始后才可以进行投票</span>
          </div>
          <div class="item">
            <span class="red">*</span><span class="title">投票结束时间</span>
            <el-time-select
              v-model="value2"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
              }"
              placeholder="选择时间">
            </el-time-select>
            <span class="info">时间开始后才可以进行投票</span>
          </div>
          <div class="item">
            <span class="red">*</span><span class="title">投票详情</span>
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="textarea"
              maxlength="30"
            ></el-input>
          </div>
          <div class="item">
            <span class="red">*</span><span class="title">奖品设置：</span>
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="textarea"
              maxlength="30"
            ></el-input>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="is_true">
      <i class="el-icon-circle-check"></i>
      <span>同意</span>
      <span class="link">《智汇优库发布协议》</span>
    </div>
    <div class="handle">
      <el-button  class="pre">上一步</el-button>
      <el-button  class="next is_active">下一步</el-button>
    </div>
</div>
    
</template>

<script>

export default {
  data() {
    return {
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
      value2:"",
      input1:"",
      textarea:""
    };
  },
};
</script>
<style lang="less">
#vote {
  width: 1592px;
  margin: 0 auto;
  .is_true{
    font-size: 28px;
    text-align: center;
    padding: 40px 0;
    i{
      margin-right: 30px;
    }
    .link{
      color: #0027FF;
      font-size: 28px;
      cursor:pointer;
    }
  }
  .handle{
    text-align: center;
    padding: 40px 0 100px;
    .el-button{
      background-color: #eee;
      border-radius: 35px;
      color: #666;
      width: 340px;
      height: 70px;
      font-size: 34px;
      box-sizing: border-box;
      &.next{
        margin-left: 80px;
      }
      &.is_active{
        background-color: #01B0B7;
        color: #fff;
      }
    }
  }
  .return {
    margin-top: 30px;
    .link {
      color: #0d15e5;
      font-size: 28px;
    }
    .title {
      border-left: 2px solid #707070;
      color: #404040;
      font-size: 35px;
      margin-left: 40px;
      padding-left: 40px;
    }
  }
  .title_box {
    width: 1592px;
    height: 105px;
    background: rgba(153, 153, 153, 0.5);
    color: #666;
    font-size: 36px;
    box-sizing: border-box;
    padding-left: 58px;
    line-height: 105px;
    margin-top: 49px;
  }
  .vote_body{
    background-color: rgba(153, 153, 153, 0.3);
    margin-top: 30px;
    .vote_body_left{
      text-align: center;
      padding-top: 78px;
      p{
        padding: 20px;
        color: #666;
        font-size: 24px;
      }
    }
    .vote_body_right{
      padding: 20px 0;
      .item{
        line-height: 55px;
        margin: 20px 0;
        color: #666;
        .el-input--small .el-input__inner{
          height: 55px;
          line-height: 55px;
        }
        .red{
          color: #f00;
          display: inline-block;
          width: 30px;
          font-size: 30px;
        }
        .title{
          width: 200px;
          font-size: 30px;
          display: inline-block;
        }
        .el-input{
          width: 300px;
          top:-10px;
          input{
            font-size: 26px;
          }
        }

        .info{
          font-size: 22px;
          margin-left: 20px;
        }
        .el-textarea{
          textarea{
            height: 600px;
            width: 90%;
            font-size: 26px;
          }
          
        }
      }
    }
  }
}
</style>