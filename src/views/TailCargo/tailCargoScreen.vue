<template>
  <div class="tail_cargo">
    <div class="bg2_img_top"></div>
    <div class="commodity">
      <div class="commodity_main">
        <div class="commodity_main_w_box"></div>
        <div class="box_item">
          <div class="d_inflex">
            <SmallGoods
              :smallGoodsItem="item"
              v-for="(item,index) in commodityList"
              :key="index"
              class="bs"
            ></SmallGoods>
          </div>
        </div>
      </div>
    </div>
    <div class="title_Progress">
      <div class="left">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/tailCargo' }">尾货捡漏</el-breadcrumb-item>
          <el-breadcrumb-item @click.native="handleScreen(-1,{})" v-if="srceenActiveN > -1">
            <span class="breadcrumb_text">综合布线系统</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{srceenActiveN > -1 ? srceenActive.text :'综合布线系统'}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right">
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
    <div class="text_info wm jcs bs">
      <div class="left">综合布线系统：</div>
      <div class="right">
        <span
          v-for="(t,i) in DataFor(10,[{text:'室内外光'},{text:'网络数据/语音模块产品'},{text:'综合布线工具产品'}])"
          :key="i+'s'"
          @click="handleScreen(i,t)"
          :class="{'active':srceenActiveN == i}"
        >{{t.text}}</span>
      </div>
    </div>
    <div class="search_btn wm">
      <el-button-group>
        <el-button class="is_active">综合</el-button>
        <el-button>最近</el-button>
        <el-button>
          价格
          <i class="el-icon-bottom"></i>
        </el-button>
        <el-button>
          销量
          <i class="el-icon-top"></i>
        </el-button>
        <el-button>
          地址
          <i class="el-icon-caret-bottom"></i>
        </el-button>
      </el-button-group>
      <div class="right">
        <i class="el-icon-arrow-left"></i>
        <span class="blue">1</span> /
        <span>2808</span>
        <i class="el-icon-arrow-right is_active"></i>
      </div>
    </div>
    <div class="part3_body jcs wm">
      <BigGoods
        :bigGoodsItem="item"
        v-for="(item,index) in part3List"
        :key="index"
        class="bottom10"
      ></BigGoods>
    </div>
    <div class="link_more wm">加载更多</div>
  </div>
</template>

<script>
//part3

import * as Commodity from "@/common/commodity";
import SmallGoods from "@components/Goods/SmallGoods";
import BigGoods from "@components/Goods/BigGoods";
export default {
  data() {
    return {
      commodityList: Commodity.HomeCommodity,
      part3List: Commodity.Part3List,
      srceenActiveN: -1,
      srceenActive: {}
    };
  },
  components: {
    SmallGoods,
    BigGoods
  },
  computed: {
    isScreen() {
      if (JSON.stringify(this.srceenActive) == "{}") {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    handleScreen(i, t) {
      this.srceenActiveN = i;
      this.srceenActive = t;
    }
  }
};
</script>

<style lang="less">
</style>