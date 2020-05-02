<template>
  <div class="crow_detail">
    <Side :isShowRightPart1="false"></Side>
    <div class="title_Progress part0">
      <div class="left">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/crowds' }">众包合作</el-breadcrumb-item>
          <el-breadcrumb-item>合作详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="box_part1_help_sy bs">
      <div class="left_img">
        <img :src="require('@assets/img/info.png')" alt />
      </div>
      <div class="right_box">
        <div class="right_content">
          <div class="box1">
            <div class="title">合作信息标题合作信息标题合作信</div>
            <p>招募截止日期：2019-12-30 00:00</p>
            <p>所在区域：上海市</p>
            <p>合作预算：230万</p>
          </div>
          <div class="box2">
            <div @click="zhidingDialog = true">帮TA置顶</div>
            <div @click="crowdsDialog1 = true" v-if="!isPartIn">参与合作</div>
            <router-link tag="div" class="part_in" :to="{path:'/crowds/detail2'}" v-if="isPartIn">已参与 找TA聊一聊</router-link>
          </div>
        </div>
        <div class="right_foot">
          <div class="box1">
            <span>
              <i class="el-icon-star-on"></i>收藏
            </span>
            <span>
              <i class="iconfont icon-liulan"></i>88人关注
            </span>
          </div>
          <div class="box2">
            <div class="share">
              <!-- 这个是插件的应用，我简单写个样式 -->
              <span>分享到：</span>
              <i class="iconfont icon-QQ"></i>
              <i class="iconfont icon-QQ"></i>
              <i class="iconfont icon-QQ"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog title :visible.sync="zhidingDialog" width="432px" class="no_bg_huojian">
      <div class="huojian_bg_dia">
        <div class="title_l">帮助置顶</div>
        <div class="huojian_body">
          <div class="title">置顶优势</div>
          <p>1.刷新合作信息至前端；</p>
          <p>2.提高自己在同类型的合作信息的曝光率；</p>
          <p>3.促进企业合作及平台互动；</p>
          <p class="p">注：刷新置顶一次需消耗50个智汇币</p>
        </div>
        <div class="pull">- 50个智汇币</div>
        <div class="btn">
          <el-button class="blue_btn" @click="zhidingSucess=true">提交</el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      title="置顶成功"
      :visible.sync="zhidingSucess"
      width="400px"
      class="playing_dialog_com_sy"
    >
      <div class="cro_zhiding_body">
        <div class="img">
          <img :src="require('@assets/img/zhiding1.png')" alt />
        </div>
        <p>置顶成功</p>
        <p>您刷新的信息已经排名靠前</p>
        <div class="submit">
          <el-button class="blue_btn" @click="zhidingSucess = false;zhidingDie = true">确定</el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="置顶失败" :visible.sync="zhidingDie" width="400px" class="playing_dialog_com_sy">
      <div class="cro_zhiding_body">
        <div class="img">
          <img :src="require('@assets/img/zhiding2.png')" alt />
        </div>
        <p>支付失败</p>
        <p>您的智汇币余额不足！</p>
        <div class="submit">
          <el-button class="blue_btn" @click="zhidingDie = false">确定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
export default {
  components: { Side },
  data() {
    return {
      textarea: "",
      isPartIn:false,
      infoMsg: [
        {
          img: "info.png",
          state: ["正在招募", "正在进行", "正在直播"],
          title: "合作信息标题合作信息标题合作信",
          hy: "综合布线系统",
          address: "郑州",
          date: "2020-05-25"
        }
      ],
      zhidingDialog: false,
      zhidingSucess: false,
      zhidingDie: false,
      input1: ""
    };
  },
  methods: {}
};
</script>

<style lang="less">
.no_bg_huojian {
  .el-dialog {
    background-color: transparent;
    box-shadow: none;
  }
  .el-dialog__body {
    padding: 0;
  }
  .el-dialog__header {
    box-shadow: none;
  }
  .el-dialog__headerbtn {
    top: 20px;
    right: 10px;
    z-index: 4;
  }
}
.huojian_bg_dia {
  background: url("~@assets/img/huojian.png");
  width: 432px;
  height: 703px;
  box-sizing: border-box;
  padding: 130px 30px 0;
  position: relative;
  top: -130px;
  .title_l {
    color: #fff;
    margin-bottom: 210px;
  }
  .huojian_body {
    padding: 20px;
    border-bottom: 2px dotted #ccc;
    .title {
      font-weight: bold;
      margin-bottom: 20px;
    }
    p {
      padding: 0 0 16px 20px;
    }
    .p {
      padding: 20px 0 6px 20px;
      color: #999;
    }
  }
  .pull {
    color: #ce6104;
    text-align: center;
    padding: 30px 0 40px;
  }
  .btn {
    text-align: center;
    button {
      padding: 8px 40px;
      border-radius: 30px;
    }
  }
}
.cro_zhiding_body {
  .img {
    text-align: center;
    padding: 20px 0 20px;
  }
  p {
    text-align: center;
    line-height: 26px;
  }
  .submit {
    width: 80%;
    margin: 10px auto 0;
    text-align: center;
    border-top: 1px solid #eee;
    padding: 20px 0;
    button {
      padding: 8px 40px;
      border-radius: 30px;
    }
  }
}

.crowds_dia_body {
  .point_red {
    line-height: 36px;
    text-align: right;
    padding-right: 3px;
  }
  .el-textarea {
    margin-bottom: 20px;
  }
  textarea {
    height: 120px;
  }
  p {
    line-height: 32px;
    padding-bottom: 10px;
  }
  .p {
    padding-left: 6px;
  }
}

</style>
