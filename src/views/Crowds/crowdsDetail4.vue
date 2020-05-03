<template>
  <div class="crow_detail">
    <Side :isShowRightPart1="false"></Side>
    <div class="title_Progress part0">
      <div class="left">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/crowds' }">众包合作</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/crowds/detail' }">合作详情</el-breadcrumb-item>
          <el-breadcrumb-item>查看报名</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="box_part1_help_sy bs">
      <div class="left_info">
        <div class="left_l">
          <img :src="require('@assets/img/xiaoya.png')" alt />
        </div>
        <div class="right_l">
          <div class="title_l">昵称：小女人</div>
          <div class="p">
            <img :src="require('@assets/img/r2.png')" alt />昵称：小女人
          </div>
          <div class="p">
            <i class="iconfont icon-liulan"></i>昵称：小女人
          </div>
          <el-button class="orange_btn">TA的主页</el-button>
        </div>
      </div>
      <div class="right_box crowds4_box">
        <div class="right_content">
          <div class="box1">
            <p>所属行业：综合布线系统</p>
            <p>公司名称：上海施耐德电位服务有限公司</p>
            <p>
              <span class="flex_t">职</span>位：高级工程师
            </p>
            <p>
              <span class="flex_t">姓</span>名：女人
            </p>
            <p>联系电话：1300000000</p>
          </div>
          <div class="box2 crowds4">
            <div @click="successVisible = true">同意</div>
            <div @click="dieVisible = true">拒绝</div>
          </div>
        </div>
      </div>
      <el-dialog title="拒绝" :visible.sync="dieVisible" width="400px" class="playing_dialog_com_sy">
        <div class="crowds4_dialog_body">
          <div class="info">
            <img :src="require('@assets/img/xiaoya.png')" alt />
            <span>昵称：小女人</span>
          </div>
          <p class="mb10">拒绝理由</p>
          <el-input
            type="textarea"
            placeholder="输入拒绝理由"
            v-model="textarea"
            maxlength="200"
            show-word-limit
          ></el-input>
          <div class="submit_blue_btn_sy">
            <el-button @click="dieVisible = false">提交</el-button>
          </div>
        </div>
      </el-dialog>
      <el-dialog title="审核已通过" :visible.sync="successVisible" width="400px" class="playing_dialog_com_sy">
        <div class="crowds4_dialog_body">
          <div class="info">
            <img :src="require('@assets/img/xiaoya.png')" alt />
            <span>昵称：小女人</span>
          </div>
          <p class="crowds4_p">合作报名审核已通过，请及时联系。</p>
          <div class="submit_blue_btn_sy">
            <el-button @click="successVisible = false">返回列表</el-button>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
export default {
  components: { Side },
  data() {
    return {
      dieVisible: false,
      successVisible:false,
      textarea: ""
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less">
.crowds4_dialog_body {
  padding: 10px 20px 20px;
  .info {
    text-align: center;
    margin-bottom: 20px;
    img {
      width: 36px;
    }
    span {
      font-weight: bold;
      margin-left: 10px;
    }
  }
  .crowds4_p{
    text-align: center;
    margin-bottom: 30px;
  }
  .mb10 {
    margin-bottom: 10px;
  }
  .el-textarea {
    margin-bottom: 20px;
    textarea {
      height: 80px;
    }
  }
}
.submit_blue_btn_sy {
  text-align: center;
  button {
    background-color: #01b0b7;
    color: #fff;
    padding: 4px 26px;
    border-radius: 20px;
  }
}
</style>
