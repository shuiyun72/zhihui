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
          <el-row @click.native="parentHandle(i)">
            <el-col :span="6" class="t_right">
              <i :class="t.number > 0 ?'el-icon-caret-bottom':'el-icon-caret-right'"></i>
            </el-col>
            <el-col :span="6">
              <span class="title_span">{{t.title}}</span>
            </el-col>
            <el-col :span="12">
              <span class></span>
            </el-col>
          </el-row>
          <el-row
            v-show="t.number"
            v-for="(tc,ic) in t.children"
            :key="i+ic+'tc'"
            @click.native="childHandle(i,ic)"
            :class="{'active':tc.show}"
            class="child_nav"
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
          <div class="zh_sub_com_sy bs">
            <el-row>
              <el-col :span="6" align="center">我的智汇币</el-col>
              <el-col :span="6" align="center">当前最高出价</el-col>
              <el-col :span="6" align="center">我要出价</el-col>
            </el-row>
            <el-row class="pt">
              <el-col :span="6" align="center" class="btr">
                <span class="n">500</span>
              </el-col>
              <el-col :span="6" align="center" class="btr">
                <span class="m">9智汇币</span>
              </el-col>
              <el-col :span="6" align="center">
                <el-input v-model="value" class="input"></el-input>
              </el-col>
              <el-col :span="6" align="center">
                <el-button class="btn">提交</el-button>
              </el-col>
            </el-row>
            <el-row class="tp">
              <el-col :span="9">起拍价：1智汇币 / 竞拍递增最少：1智汇币</el-col>
              <el-col :span="9">本轮此广告位已被竞拍4次</el-col>
            </el-row>
          </div>
          <div class="part2 bs">
            <div class="t_title">竞价记录 4次</div>
            <el-table
              :data="tableData"
              style="width: 100%"
              stripe
              :header-cell-style="{background:'#ccc',color:'#000'}"
              class="admin_ad1"
            >
              <el-table-column label="参加竞拍" align="center">
                <template slot-scope="scope">
                  <img :src="require('@assets/img/'+scope.row.img)" alt />
                  <span :class="{'active':scope.row.active}">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column label="当前状态" align="center">
                <template slot-scope="scope">
                  <span :class="{'active':scope.row.active}">{{scope.row.state}}</span>
                </template>
              </el-table-column>
              <el-table-column label="智汇币" align="center">
                <template slot-scope="scope">
                  <span :class="{'active':scope.row.active}">{{scope.row.money}}</span>
                </template>
              </el-table-column>
            </el-table>
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
import PageNum from "@components/PageNum";
import { adminList } from "@const";
import _ from "lodash";
export default {
  components: { PageNum, HeaderTop, HeaderSearch, HeaderNav, Side },
  data() {
    return {
      adminList: _.cloneDeep(adminList),
      value: "",
      tableData: [
        {
          img: "xiaoya.png",
          name: "昵称：零度 (我)",
          state: "领先",
          money: 9,
          active: 1
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
      ],
      child6: true
    };
  },
  methods: {
    parentHandle(i) {
      this.adminList[i].number = this.adminList[i].number == 0 ? 1 : 0;
    },
    childHandle(i, ic) {
      _.map(this.adminList, item => {
        _.map(item.children, child => {
          child.show = 0;
        });
      });
      this.adminList[i].children[ic].show = 1;
    }
  }
};
</script>
<style lang="less">
</style>
