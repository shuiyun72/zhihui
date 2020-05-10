<template>
  <div class="vote_home">
    <Side :toUrl="'vote'"></Side>
    <div class="bg_img_top">
      <div class="click">点击竞价此展示位</div>
    </div>
    <div class="vote_body wm">
      <div class="select_hot_com_sy vote_p1 bs">
        <el-row>
          <el-col :span="2">地区选择：</el-col>
          <el-col :span="2">
            <el-button class="blue_btn btn_p2">全部</el-button>
          </el-col>
          <el-col :span="5">
            <el-cascader v-model="addressModel" :options="addressList" placeholder="请选择省、市"></el-cascader>
          </el-col>
          <el-col :span="12">
            <span class="p">上海</span>
            <span class="p">杭州</span>
            <span class="p">南京</span>
            <span class="p">上海</span>
            <span class="p">杭州</span>
            <span class="p">南京</span>
            <span class="p">上海</span>
            <span class="p">杭州</span>
            <span class="p">南京</span>
          </el-col>
          <el-col :span="2">
            <span>热门城市</span>
          </el-col>
          <el-col :span="1">
            <i class="el-icon-caret-bottom"></i>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2">关键字：</el-col>
          <el-col :span="7">
            <el-input class="input_p1 inline" size="mini" placeholder="输入关键字搜索"></el-input>
          </el-col>
          <el-col :span="3" :offset="11" class="t_right">
            <el-button class="blue_btn btn_p2" round>搜 索</el-button>
          </el-col>
        </el-row>
      </div>

      <div class="vote_home_body bs">
        <div class="vote_title jcs bgfff">
          <div class="slot">
            <span class="active">默认排序</span>
            <span>热度排序</span>
            <span>当前距离</span>
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
        <div class="item_box">
          <div class="item" v-for="(t,i) in DataFor(9,infoMsg)" :key="i+'s'">
            <div class="info_item_co_sy big">
              <div class="img">
                <router-link :to="{path:'/vote/screen'}">
                <img :src="require('@assets/img/'+t.img)" alt />
                </router-link>
              </div>  
              <div class="box">
                <div class="title jcs">
                  <span class="fwb">{{t.title}}</span>
                  <span class="red">正在投票</span>
                </div>
                <el-row class="info">
                  <el-col :span="16">{{t.date}}</el-col>
                </el-row>
              </div>
            </div>
          </div>
          <div class="item" v-for="(t,i) in DataFor(3,infoMsg)" :key="i">
            <div class="info_item_co_sy big">
              <div class="img">
                <img :src="require('@assets/img/'+t.img)" alt />
              </div>  
              <div class="box">
                <div class="title jcs">
                  <span class="fwb">{{t.title}}</span>
                  <span>投票已结束</span>
                </div>
                <el-row class="info">
                  <el-col :span="16">{{t.date}}</el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
import { addressList1 } from "@const";
export default {
  components: { Side },
  mounted() {},
  data() {
    return {
      addressList: addressList1,
      addressModel: [],
      infoMsg: [
        {
          img: "info.png",
          state: ["正在招募", "正在进行", "正在直播", "直播结束"],
          title: "视频监控最佳设计奖投票",
          hy: "综合布线系统",
          date: "结束时间：2020-05-25 24:00"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less">
#vote {
  background-color: #f0f0f0;
}
</style>
