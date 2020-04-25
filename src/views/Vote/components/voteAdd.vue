<template>
  <div class="vote_add">
    <div class="return">
      <span class="link">
        <i class="el-icon-arrow-left"></i> 返回
      </span>
      <span class="title">创建投票</span>
    </div>
    <div class="title_box">添加选项/选手</div>

    <div class="part_add">
      <el-input v-model="input1" placeholder="请在此处输入投票选项文字或选手的姓名" class="default_input"></el-input>
      <el-button class="q_btn" icon="el-icon-plus">添加选项/选手</el-button>
    </div>
    <div class="vote_part_title">已有选项</div>
    <div class="vote_item_box">
      <div class="vote_item" v-for="(item,index) in 5" :key="index">
        <div class="part1">
          <span>{{index+1}}、</span>
          <i class="el-icon-sort"></i>
          <el-input class="default_input"></el-input>
        </div>
        <div class="part2">
          <div class="edit">
            <el-button @click="showDialog('修改文字','80%')">修改文字</el-button>
            <el-button @click="showDialog('添加图片','60%')">添加图片</el-button>
            <el-button @click="showDialog('添加视频','60%')">添加视频</el-button>
            <el-button @click="showDialog('添加链接','60%')">添加链接</el-button>
            <el-button @click="showDialog('选手征集（征集区域）','60%')">选手区域</el-button>
            <el-button @click="showDialog('编辑投票详情','60%')">详情</el-button>
          </div>
          <div class="delete">
            <el-button>删除选项</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="handle">
      <el-button class="pre">上一步</el-button>
      <el-button class="next is_active">下一步</el-button>
    </div>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" :width="widthD">
      <div v-if="dialogTitle=='修改文字'" class="edit_text">
        <el-row>
          <el-col :span="4" class="part1">
            <span class="text">编辑</span>
            <el-input class="small_input" v-model="num"></el-input>
            <i class="el-icon-sort"></i>
          </el-col>
          <el-col :span="18" :offset="1" class="right_box">
            <div class="">
              <el-row>
                <el-col :span="16">
                  <el-input type="textarea"></el-input>
                </el-col>
                <el-col :span="6" :offset="1">
                  <el-button>取消</el-button><br/>
                  <el-button class="red">保存</el-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <div v-if="dialogTitle=='添加图片'" class="add_img">
        <div class="box"></div>
        <div class="info">图片文件大小不能超过1M，支持图片类型：png或jpg</div>
        <div class="bottom">
          <el-button>选择图片</el-button>
          <el-button class="blue">确 定</el-button>
        </div>
      </div>
      <div v-if="dialogTitle=='添加视频'" class="add_img">
        <div class="box"></div>
        <div class="info">视频文件大小不能超过20M，支持视频类型：mp4或avi</div>
        <div class="select_audio">
          <el-button class="btn_defult">选择小视频</el-button>
        </div>
        <div class="select_audio">
          <el-input class=""></el-input>
          <el-button class="btn_defult">预览</el-button>
        </div>
        <div class="bottom">
          <el-button class="blue">确 定</el-button>
        </div>
      </div>
      <div v-if="dialogTitle=='添加链接'" class="add_img add_http">
        <div>添加链接（只可添加内部链接）</div>
        <div class="add_http_input">
          <el-input></el-input>
        </div>
        <div class="bottom">
          <el-button class="blue">确 定</el-button>
        </div>
      </div>
      <div v-if="dialogTitle=='选手征集（征集区域）'" class="add_img add_http">
        <div class="select">选择区域：<span class="blue">全部</span></div>
        <div class="add_http_input">
          <el-input></el-input>
        </div>
        <div class="bottom">
          <el-button class="blue">确 定</el-button>
        </div>
      </div>
      <div v-if="dialogTitle=='编辑投票详情'" class="add_img textarea">
        <el-input type="textarea"></el-input>
        <div class="bottom">
          <el-button class="blue">确 定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTitle: "",
      dialogVisible: false,
      widthD:"60%",
      num: "1",
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
  },
  methods: {
    showDialog(el,width) {
      this.dialogTitle = el;
      this.dialogVisible = true;
      this.widthD = width;
    }
  }
};
</script>
<style lang="less">

.add_img{
  &.textarea{
    textarea{
      height: 300px;
      margin-bottom: 30px;
    }
    
  }
  &.add_http{
    .select{
      padding: 20px 0;
      .blue{
        background-color: #32BDC2;
        padding: 6px 15px;
      }
    }
    .add_http_input{
      padding: 20px 0 30px;
      .el-input{
      width: 100%;
      margin-right: 20px;
      input{
        width: 100%;
        position: relative;
        top:-5px;
      }
    }
    }
    
  }
  .box{
    width: 70%;
    margin: 0 auto;
    height: 300px;
    border: 1px solid #000;
  }
  .select_audio{
    width: 80%;
    text-align: center;
    .el-input{
      width: 300px;
      margin-right: 20px;
      input{
        width: 100%;
        position: relative;
        top:-5px;
      }
    }
    margin: 10px auto;
  }
  .info{
    width: 80%;
    background-color: #EAE6B7;
    color: #666;
    text-align: center;
    font-size: 18px;
    padding: 10px 0;
    margin: 20px auto;

  }
  .bottom{
    text-align: center;
    button{
      padding: 9px 50px;
      margin-bottom: 10px;
      background-color: #999;
      color: #fff;
      &.blue{
        background-color:#01B0B7;
      }
    }
  }
}

.edit_text{
  .part1{
    display: flex;
    .text{
      font-size: 20px;
      line-height: 30px;
      margin-right: 10px;
    }
    i{
      font-size: 20px;
      line-height: 30px;
      margin-left: 10px;
    }
  }
  .right_box{
    padding: 20px;
    background-color: #eee;
    textarea{
      height: 100px;
    }
    button{
      padding: 9px 50px;
      margin-bottom: 10px;
      background-color: #999;
      color: #fff;
      &.red{
        background-color: #f00;
      }
    }
  }
}
.vote_part_title {
  padding: 20px 40px;
  font-size: 20px;
  border-bottom: 2px solid #999;
}
.vote_item_box {
  padding: 0 80px;
  .vote_item {
    padding: 30px 0;
    border-bottom: 2px dotted #999;
    .part1 {
      span {
        font-size: 20px;
      }
      i {
        font-size: 28px;
        color: #999;
        margin-right: 20px;
      }
      .el-input {
        width: 87%;
        input {
          width: 100%;
        }
      }
    }
    .part2 {
      padding-left: 80px;
      padding-top: 20px;
      .edit {
        width: 80%;
        display: inline-block;
        button {
          height: 50px;
          font-size: 20px;
          padding: 9px 40px;
          background-color: #999;
          color: #000;
        }
      }
      .delete {
        display: inline-block;
        button {
          height: 50px;
          font-size: 20px;
          padding: 9px 40px;
          background-color: #b20505;
          color: #fff;
        }
      }
    }
  }
}
.q_btn {
  height: 60px;
  color: #fff;
  background-color: #01b0b7;
  font-size: 20px;
  border-radius: 30px;
}
.el-input.small_input{
    width: 40px;
}

.el-input.default_input {
  width: 726px;

  input {
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
  }
}
.vote_add {
  .part_add {
    text-align: center;
    padding: 30px 0;

    .el-button {
      margin-left: 30px;
    }
  }
}
#vote {
  width: 1592px;
  margin: 0 auto;
  .is_true {
    font-size: 28px;
    text-align: center;
    padding: 40px 0;
    i {
      margin-right: 30px;
    }
    .link {
      color: #0027ff;
      font-size: 28px;
      cursor: pointer;
    }
  }
  .handle {
    text-align: center;
    padding: 40px 0 100px;
    .el-button {
      background-color: #eee;
      border-radius: 35px;
      color: #666;
      width: 340px;
      height: 70px;
      font-size: 34px;
      box-sizing: border-box;
      &.next {
        margin-left: 80px;
      }
      &.is_active {
        background-color: #01b0b7;
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
  .vote_body {
    background-color: rgba(153, 153, 153, 0.3);
    margin-top: 30px;
    .vote_body_left {
      text-align: center;
      padding-top: 78px;
      p {
        padding: 20px;
        color: #666;
        font-size: 24px;
      }
    }
    .vote_body_right {
      padding: 20px 0;
      .item {
        line-height: 55px;
        margin: 20px 0;
        color: #666;
        .el-input--small .el-input__inner {
          height: 55px;
          line-height: 55px;
        }
        .red {
          color: #f00;
          display: inline-block;
          width: 30px;
          font-size: 30px;
        }
        .title {
          width: 200px;
          font-size: 30px;
          display: inline-block;
        }
        .el-input {
          width: 300px;
          top: -10px;
          input {
            font-size: 26px;
          }
        }

        .info {
          font-size: 22px;
          margin-left: 20px;
        }
        .el-textarea {
          textarea {
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