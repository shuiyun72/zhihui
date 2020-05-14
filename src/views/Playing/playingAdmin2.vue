<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch></HeaderSearch>
    </div>
    <HeaderNav :HeaderNav="'直播秀场'"></HeaderNav>
    <Side></Side>
    <div id="firm">
      <div class="bg_img_top">
        <div class="click">点击竞价此展示位</div>
      </div>
    </div>
    <div class="show_title_for_num">
      <div class="wm">第66期 直播频道展示位 2</div>
    </div>
    <div class="admin_body wm jcs">
      <div class="show_list_com_sy bs">
        <div class="title_top">展示位</div>
        <div class="item" v-for="(t,i) in adminList" :key="i+'t'">
          <el-row @click.native="parentHandle">
            <el-col :span="6" class="t_right">
              <i class="el-icon-caret-bottom"></i>
            </el-col>
            <el-col :span="6">
              <span class="title_span">{{t.title}}</span>
            </el-col>
            <el-col :span="12">
              <span class></span>
            </el-col>
          </el-row>
          <el-row
            v-for="(tc,ic) in t.children"
            :key="i+ic+'tc'"
            @click.native="childHandle"
            :class="{'active':tc.show}"
          >
            <el-col :span="6" :offset="6">
              <span class="c_span">{{tc.title}}</span>
            </el-col>
            <el-col :span="12">
              <span class="stateC" :class="{'stateR':tc.state=='占用'}">（{{tc.state}}）</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="right">
        <div class="time_top">
          <span class="t">当前广告图剩余竞价时间：</span>
          <span class="time">00天05时29分19秒</span>
        </div>
        <div class="part1">
          <div class="zh_sub_com_sy bs ad2">
            <el-row>
              <el-col :span="3" align="right">当前状态：</el-col>
              <el-col :span="10" :offset="1"><span class="red">占用中</span> </el-col>
            </el-row>
            <el-row>
              <el-col :span="3" align="right">下一轮预出价：</el-col>
              <el-col :span="10" :offset="1"><el-button type="warning" round size="mini" class="btn_default">确认</el-button></el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderSearch from "@components/Header/HeaderSearch.vue";
import HeaderNav from "@components/Header/HeaderNav.vue";
import Side from "@components/Side.vue";
import { adminList } from "@const";
export default {
  components: { HeaderTop, HeaderSearch, HeaderNav, Side },
  data() {
    return {
      adminList: adminList,
      value: "",
      tableData: [
        {
          img: "xiaoya.png",
          name: "昵称：零度 (我)",
          state: "领先",
          money: 9,
          active:1
        },
        {
          img: "xiaoya.png",
          name: "昵称：零度",
          state: "出局",
          money: 5
        },
        {
          img: "xiaoya.png",
          name: "昵称：零度",
          state: "出局",
          money: 2
        },
        {
          img: "xiaoya.png",
          name: "昵称：零度",
          state: "出局",
          money: 1
        }
      ]
    };
  },
  methods: {
    parentHandle(e) {
      console.log(e);
      console.log("sst");
    },
    childHandle(e) {
      console.log(e);
      console.log("sss");
    }
  }
};
</script>
<style lang="less">


</style>
