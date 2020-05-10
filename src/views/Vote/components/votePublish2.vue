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
      <div class="title_box">添加选项/选手</div>
      <el-row class="part_add">
        <el-col :span="12" :offset="2">
          <el-input v-model="input1" placeholder="请在此处输入投票选项文字或选手的姓名" class="default_input"></el-input>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-button class="blue_btn btn_p2" icon="el-icon-plus" round>添加选项/选手</el-button>
        </el-col>
      </el-row>

      <div class="vote_part_title">已有选项</div>
      <div class="vote_item_box">
        <div class="vote_item" v-for="(item,index) in 5" :key="index">
          <div class="part1">
            <el-row>
              <el-col :span="1" class="t_right">{{index+1}}、</el-col>
              <el-col :span="1" class="t_center" :class="{'hidden':index==0}">
                <i class="el-icon-top orange"></i>
              </el-col>
              <el-col :span="6">
                <el-input v-model="input2" size="mini"></el-input>
              </el-col>
            </el-row>
          </div>
          <div class="part2">
            <el-row>
              <el-col :span="3" :offset="2">
                <el-button @click="showDialog('修改文字','800px')">修改文字</el-button>
              </el-col>
              <el-col :span="3">
                <el-button @click="showDialog('添加图片','600px')">添加图片</el-button>
              </el-col>
              <el-col :span="3">
                <el-button @click="showDialog('添加视频','600px')">添加视频</el-button>
              </el-col>
              <el-col :span="3">
                <el-button @click="showDialog('添加链接','400px')">添加链接</el-button>
              </el-col>
              <el-col :span="3">
                <el-button @click="showDialog('选手征集（征集区域）','600px')">选手区域</el-button>
              </el-col>
              <el-col :span="2">
                <el-button @click="showDialog('编辑投票详情','600px')">详情</el-button>
              </el-col>
              <el-col :span="3" :offset="2">
                <el-button class="delete">删除选项</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="handle_com_sy">
        <el-button class="pre">上一步</el-button>
        <el-button class="next is_active">下一步</el-button>
      </div>
      <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" :width="widthD" class>
        <div class="vote_dialog_body">
          <div v-if="dialogTitle=='修改文字'" class="edit_text">
            <el-row class="p1">
              <el-col :span="2">
                <span class="text">编辑：</span>
                <span>1</span>
              </el-col>
              <el-col :span="10">
                <el-input></el-input>
              </el-col>
              <el-col :span="3" :offset="3">
                <el-button class="btn_p2" @click="dialogVisible = false">取消</el-button>
              </el-col>
              <el-col :span="3">
                <el-button class="btn_p2 blue_btn" @click="dialogVisible = false">保存</el-button>
              </el-col>
            </el-row>
          </div>
          <div v-if="dialogTitle=='添加图片'" class="">
            <div class="box"></div>
            <div class="info">图片文件大小不能超过1M，支持图片类型：png或jpg</div>
            <div class="bottom">
              <el-button class="btn_p3" @click="dialogVisible = false">选择图片</el-button>
              <el-button class="blue_btn btn_p3 ml40" @click="dialogVisible = false">确 定</el-button>
            </div>
          </div>
          <div v-if="dialogTitle=='添加视频'" class="">
            <div class="box"></div>
            <div class="info">视频文件大小不能超过20M，支持视频类型：mp4或avi</div>
            <div class="select_audio">
              <el-button class="btn_p3">选择小视频</el-button>
            </div>
            <div class="select_audio">
              <el-input class></el-input>
              <el-button class="btn_p3">预览</el-button>
            </div>
            <div class="bottom">
              <el-button class="blue_btn btn_p3" @click="dialogVisible = false">确 定</el-button>
            </div>
          </div>
          <div v-if="dialogTitle=='添加链接'" class=" ">
            <div class="t_center">添加链接（只可添加内部链接）</div>
            <div class="add_http_input">
              <el-select v-model="valuelink" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="bottom">
              <el-button class="blue_btn btn_p3" @click="dialogVisible = false">确 定</el-button>
            </div>
          </div>
          <div v-if="dialogTitle=='选手征集（征集区域）'" class=" ">
            <el-row class="lh30">
              <el-col :span="4">选择区域：</el-col>
              <el-col :span="4"><span class="bg_blue_se">全部</span></el-col>
              <el-col :span="10" :offset="4">
                <el-cascader v-model="addressModel" :options="addressList" placeholder="请选择省、市"></el-cascader>
              </el-col>
            </el-row>
            <div class="bottom">
              <el-button class="blue_btn btn_p3">保 存</el-button>
            </div>
          </div>
          <div v-if="dialogTitle=='编辑投票详情'" class=" textarea">
            <el-input type="textarea" class="lh30"></el-input>
            <div class="bottom">
              <el-button class="blue_btn btn_p3">确 定</el-button>
            </div>
          </div>
        </div>
      </el-dialog>
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
      addressModel:[],
      dialogTitle: "",
      dialogVisible: false,
      widthD: "60%",
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
      valuelink:"",
      value: "",
      value2: "",
      input1: "",
      input2: "克莱斯勒道奇",
      textarea: ""
    };
  },
  methods: {
    showDialog(el, width) {
      this.dialogTitle = el;
      this.widthD = width;
      this.dialogVisible = true;
      
    }
  }
};
</script>
<style lang="less">
</style>