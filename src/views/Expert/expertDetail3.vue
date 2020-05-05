<template>
  <div class="crow_detail">
    <Side :isShowRightPart1="false"></Side>
    <div class="title_Progress part0">
      <div class="left">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/expert' }">达人活动</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/expert/detail' }">活动详情</el-breadcrumb-item>
          <el-breadcrumb-item>报名详情</el-breadcrumb-item>
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
            <div
              v-show="!isPartIn&&!isCrowdTrue"
              class="blue_btn"
            >参与合作</div>
            <router-link
              tag="div"
              class="part_in blue_btn"
              :to="{path:'/crowds/detail2'}"
              v-show="isPartIn&&!isCrowdTrue"
            >已参与 找TA聊一聊</router-link>
            <div v-show="isCrowdTrue" class="blue_btn">提前截止</div>
            <div v-show="isCrowdTrue" class="blue_btn">扫描二维码</div>
            <router-link
              tag="div"
              :to="{path:'/expert/detail3'}"
              class="blue_btn"
              v-show="isCrowdTrue"
            >查看报名</router-link>
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
        </div>
      </div>
    </div>
    <div class="crowds3_body wm bs">
      <el-table :data="tableApply" style="width: 100%"  stripe>
        <el-table-column prop="name" label="昵称" align="center"></el-table-column>
        <el-table-column prop="time" label="报名时间" align="center"></el-table-column>
        <el-table-column prop="text" label="合作意向" align="left" width="600px"></el-table-column>
        <el-table-column prop="check" label="审核" align="center">
          <template slot-scope="scope">
            <span @click="handleClick(scope.row)" class="link">{{scope.row.check}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="state" label="审核状态" align="center">
          <template slot-scope="scope">
            <span :style="{color:scope.row.color}">{{scope.row.state}}</span>
          </template>
        </el-table-column>
      </el-table>
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
import { tableApply } from "@/common/commodity";
export default {
  components: { Side },
  data() {
    return {
      textarea: "",
      isPartIn: false,
      zhidingDialog: false,
      zhidingSucess: false,
      zhidingDie: false,
      tableApply: tableApply
    };
  },
  computed: {
    isCrowdTrue() {
      return sessionStorage.getItem("login") == 1 ? true : false;
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
      this.$router.push({path:"/expert/detail4",queru:row})
    }
  }
};
</script>

<style lang="less">
.crowds3_body {
  margin-top: 16px;
  height: 400px;
  overflow-y: auto;
  .el-table__header {
    th {
      background-color: #cccccc;
      color: #000;
    }
  }
  thead {
    .el-table_1_column_3 {
      text-align: center;
    }
  }
}
</style>
