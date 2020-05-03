<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch></HeaderSearch>
    </div>
    <HeaderNav :HeaderNav="'直播现场'"></HeaderNav>
    <Side></Side>
    <div id="firm">
      <div class="bg_img_top">
        <div class="click">点击竞价此展示位</div>
      </div>
    </div>
    <div id="play" class="wm">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="play_nav">
        <el-tab-pane label="技术交流" name="selete1"></el-tab-pane>
        <el-tab-pane label="联谊交友" name="selete2"></el-tab-pane>
        <el-tab-pane label="新品发布" name="selete3"></el-tab-pane>
        <el-tab-pane label="行业论坛" name="selete4"></el-tab-pane>
        <el-tab-pane label="项目交流" name="selete5"></el-tab-pane>
        <el-tab-pane label="产品推广" name="selete6"></el-tab-pane>
        <el-tab-pane label="合作联盟" name="selete7"></el-tab-pane>
        <el-tab-pane label="客户答谢" name="selete8"></el-tab-pane>
        <el-tab-pane label="周年庆典" name="selete9"></el-tab-pane>
        <el-tab-pane label="培训学习" name="selete10"></el-tab-pane>
        <el-tab-pane label="其它类型" name="selete11"></el-tab-pane>
      </el-tabs>
      <div class="pl_title">直播列表</div>
      <div class="pl_body wm">
        <div class="bs">
          <div class="new_goods_com_sy">
            <div class="state red">即将开始</div>
            <div class="wait_paly">
              <div class="full">
                <div>倒计时：2天 11:33:12</div>
              </div>
              <img :src="require('@assets/img/info.png')" alt />
            </div>
            <div class="box">
              <div class="title">直播间标题直播间标题直播间标题</div>
              <p>行业：综合布线系统</p>
              <p>地址：郑州</p>
              <p>直播时间：2020-05-25 12:30 至 2020-05-25 16:00</p>
            </div>
          </div>
        </div>
        <div class="bs">
          <div class="new_goods_com_sy">
            <!-- <div class="state">即将开始</div> -->
            <div class="wait_paly">
              <div class="full">
                <div class="show_pc">Pc端观看</div>
                <div class="show_evm">
                  <i class="iconfont icon-erweima"></i>
                  <p>手机播放、互动</p>
                </div>
              </div>
              <img :src="require('@assets/img/info.png')" alt />
            </div>
            <div class="box">
              <div class="title">直播间标题直播间标题直播间标题</div>
              <p>行业：综合布线系统</p>
              <p>地址：郑州</p>
              <p>直播时间：2020-05-25 12:30 至 2020-05-25 16:00</p>
            </div>
          </div>
        </div>
        <div class="bs" v-for="(t,i) in DataFor(13,infoMsg)" :key="i" @click="playingDialogVisible = true">
          <div class="new_goods_com_sy">
            <div class="state">{{t.state[2]}}</div>
            <img :src="require('@assets/img/'+t.img)" alt />
            <div class="box">
              <div class="title">{{t.title}}</div>
              <p>行业：{{t.hy}}</p>
              <p>地址：{{t.address}}</p>
              <p>直播时间：{{t.time}}</p>
            </div>
          </div>
        </div>
        <div class="wm">
          <PageNum></PageNum>
          <div class="evm_bg_img">
            <i class="iconfont icon-erweima"></i>
            <i class="iconfont icon-erweima"></i>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="直播间"
      :visible.sync="playingDialogVisible"
      width="900px"
      class="playing_dialog_com_sy"
    >
      <div class="play_auto_com_sy">
        <div class="video">
          <i class="iconfont icon-quanping"></i>
          <i class="el-icon-caret-right"></i>
          <img :src="require('@assets/img/playing.png')" alt />
        </div>
        <el-progress :percentage="30" :show-text="false" status="warning"></el-progress>
        <div class="time">
          <span>01:35 / 25:15</span>
        </div>
        <div class="control">
          <div class="left">直播间标题直播间标题直播间标题</div>
          <div class="right">
            <el-popover placement="top-end" width="200" trigger="click" class="popover_playing">
              <div class="evm_pl">
                <i class="iconfont icon-erweima"></i>
                <p>扫描二维码观看视频</p>
                <p>同时参与实时互动（聊天、红包等</p>
              </div>
              <el-button slot="reference">切换手机观看</el-button>
            </el-popover>
            <span>
              <i class="iconfont icon-quanping"></i>全屏
            </span>
            <el-popover placement="top-end" width="320" trigger="click">
              <div class="jubao_pl_com_sy">
                <div class="title">举报</div>
                <el-checkbox-group v-model="jubaoList">
                  <el-checkbox label="内容包含色情"></el-checkbox>
                  <el-checkbox label="内容包含欺诈信息"></el-checkbox>
                  <el-checkbox label="内容包含暴力恐怖信息"></el-checkbox>
                  <el-checkbox label="内容包含政治敏感信息"></el-checkbox>
                  <el-checkbox label="内容包含赌博信息"></el-checkbox>
                  <el-checkbox label="内容可能包含谣言信息"></el-checkbox>
                  <el-checkbox label="内容包含不明或“钓鱼”链接"></el-checkbox>
                  <el-checkbox label="内容包含其它有害信息"></el-checkbox>
                </el-checkbox-group>
                <div class="photo">
                  <span>上传截图：</span>
                  <el-button class="st">选择图片</el-button>
                </div>
                <p class="p">注：提交投诉行为，需确定投诉信息有害，经智汇优库平台鉴定后判断并处理，除 去法律规定的情形外，平台不会向任何第三方透露举报者的个人信息。</p>
                <div class="pl_submit">
                <el-button @click="jbSuccDialog = true">
                  提交
                </el-button>
                </div>
              </div>
              <span slot="reference">
                <i class="iconfont icon-jubao"></i>举报
              </span>
            </el-popover>
            <el-popover placement="top-end" width="200" trigger="hover">
              <div class="share_w_q_com_sy">
                <div class="item" @click="evmDialog = !evmDialog">
                  <svg class="iconfont" :style="W(24)">
                    <use xlink:href="#icon-weixin" />
                  </svg>
                  <span>分享到微信</span>
                </div>
                <div class="item">
                  <svg class="iconfont" :style="W(24)">
                    <use xlink:href="#icon-QQkongjian" />
                  </svg>
                  <span>分享到QQ空间</span>
                </div>
                <div class="item">
                  <svg class="iconfont" :style="W(24)">
                    <use xlink:href="#icon-QQ" />
                  </svg>
                  <span>分享到QQ</span>
                </div>
              </div>
              <span slot="reference">
                <i class="iconfont icon-fenxiang"></i>分享
              </span>
            </el-popover>
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="微信扫描二维码分享" :visible.sync="evmDialog" width="300px" class="playing_dialog_com_sy">
      <div class="fenxiang_evm_pl_sy">
        <i class="iconfont icon-erweima"></i>
        <p>微信扫描二维码分享</p>
      </div>
    </el-dialog>
    <el-dialog title="举报成功" :visible.sync="jbSuccDialog" width="300px" class="playing_dialog_com_sy">
      <div class="jubao_success_pl_sy">
        <p>您的举报信息已提交， </p>
        <p>我们会根据实际情况做出相应的处理，</p>
        <p>感谢您的支持！</p>
        <el-button @click="jbSuccDialog = !jbSuccDialog">继续观看视频</el-button>
        <router-link :to="{path:'/'}" class="return_home">返回首页</router-link>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderSearch from "@components/Header/HeaderSearch.vue";
import HeaderNav from "@components/Header/HeaderNav.vue";
import Side from "@components/Side.vue";
import PageNum from "@components/PageNum";
export default {
  components: { PageNum, HeaderTop, HeaderSearch, HeaderNav, Side },
  data() {
    return {
      activeName: "selete1",
      infoMsg: [
        {
          img: "info.png",
          state: ["正在招募", "正在进行", "正在直播"],
          title: "直播间标题直播间标题直播间标题",
          hy: "综合布线系统",
          address: "郑州",
          time: "2020-05-25 12:30 至 2020-05-25 16:00"
        }
      ],
      playingDialogVisible: false,
      evmDialog: false,
      jbSuccDialog:false,
      jubaoList:[]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="less">
#play {
  .pl_title {
    padding-bottom: 10px;
    border-bottom: 1px solid #999;
    margin-bottom: 10px;
    width: 200px;
    background-color: #fff;
    padding: 3px;
  }
  .pl_body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 20px;

    .bs {
      width: 384px;
      margin-bottom: 20px;
    }
  }
  .el-tabs__item {
    font-size: 16px;
    &.is-active,
    &:hover {
      color: #048462;
    }
  }
  .el-tabs__active-bar {
    background-color: #048462;
  }
}

.evm_pl {
  text-align: center;
  font-size: 12px;
  padding: 0px 0 10px;
  i {
    font-size: 160px;
    line-height: 1;
  }
}


</style>
