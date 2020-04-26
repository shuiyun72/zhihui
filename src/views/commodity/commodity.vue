<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch></HeaderSearch>
    </div>
    <div class="title_img"></div>
    <Side></Side>
    <div class="commodity">
      <div class="commodity_main">
        <div class="commodity_main_w_box"></div>
        <div class="box_item">
          <div class="d_inflex">
            <SmallGoods :smallGoodsItem="item" v-for="(item,index) in commodityList" :key="index"></SmallGoods>
          </div>
        </div>
      </div>
    </div>
    <div class="title_Progress">
      <div class="left">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">尾货捡漏</el-breadcrumb-item>
          <el-breadcrumb-item>综合布线系统</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right">
        <div class="share">
          <!-- 这个是插件的应用，我简单写个样式 -->
          <span>分享到：</span>
          <i class="iconfont icon-QQ"></i>
          <i class="iconfont icon-QQ"></i>
          <i class="iconfont icon-QQ"></i>
        </div>
      </div>
    </div>
    <div class="text_info">
      <div class="left">综合布线系统：</div>
      <div class="right">
        <span>室内外光</span>
        <span>网络数据/语音模块产品</span>
        <span>室内外光</span>
        <span>网络数据/语音模块产品</span>
        <span>室内外光</span>
        <span>网络数据/语音模块产品</span>
        <span>室内外光</span>
        <span>网络数据/语音模块产品</span>
        <span>室内外光</span>
        <span>网络数据/语音模块产品</span>
        <span>室内外光</span>
        <span>网络数据/语音模块产品</span>
        <span>室内外光</span>
        <span>网络数据/语音模块产品</span>
        <span>网络数据</span>
        <span>网络数据</span>
        <span>网络数据</span>
        <span>网络数据</span>
        <span>网络数据</span>
        <span>网络数据</span>
        <span>网络数据</span>
        <span>网络数据</span>
        <span>网络数据</span>
        <span>网络数据</span>
      </div>
    </div>
    <div class="search_btn">
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

    <div id="home">
      <div class="part3_body">
        <BigGoods :bigGoodsItem="item" v-for="(item,index) in part3List" :key="index"></BigGoods>
      </div>
      <div class="link_more">加载更多</div>
    </div>
  </div>
</template>

<script>
//part3
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderSearch from "@components/Header/HeaderSearch.vue";
import Side from "@components/Side.vue";
import * as Commodity from "@/common/commodity";
import SmallGoods from "@components/Goods/SmallGoods";
import BigGoods from "@components/Goods/BigGoods";
export default {
  data() {
    return {
      commodityList: Commodity.HomeCommodity,
      part3List: Commodity.Part3List
    };
  },
  components: {
    HeaderTop,
    HeaderSearch,
    Side,
    SmallGoods,
    BigGoods
  },
  methods: {}
};
</script>

<style lang="less">
</style>