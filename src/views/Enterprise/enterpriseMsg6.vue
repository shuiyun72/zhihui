<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch :HeaderSearch="'扬州海达线缆通信设备有限公司'"></HeaderSearch>
    </div>
    <div class="bg_img_top"></div>
    <HeaderNav :HeaderNav="'人才招聘'" :HeaderNavList="topNavEnterprise"></HeaderNav>
    <Side></Side>
    <div id="enterp_msg">
      <div class="part2 wm">
        <div class="left what_map_com_sy">
          <div class="p2 p_title bs">
            <div class="title">产品分类</div>
            <div class="p_body">
              <el-button class="blue">全部产品</el-button>
              <el-button class="blue">最新产品</el-button>
              <el-button class="blue">推荐产品</el-button>
              <span class="span">
                <i class="iconfont icon-erweima"></i>手机扫码流量店铺
              </span>
            </div>
          </div>
          <div class="p3 p_title bs">
            <div class="title">经营范围</div>
            <p>弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆……</p>
          </div>
          <div class="p5 p_title bs">
            <div class="share">
              <!-- 这个是插件的应用，我简单写个样式 -->
              <span>点击分享：</span>
              <i class="iconfont icon-QQ"></i>
              <i class="iconfont icon-QQ"></i>
              <i class="iconfont icon-QQ"></i>
              <i class="iconfont icon-QQ"></i>
            </div>
          </div>
          <div class="p4 p_title bs">
            <div class="title">联系方式</div>
            <div class="p_body">
              <p>
                <i class="el-icon-phone"></i>0514-87681048
              </p>
              <p>
                <i class="el-icon-location-outline"></i>江苏省扬州市
              </p>
            </div>
          </div>
          <div class="p1 p_title bs">
            <div class="title">百度地图</div>
            <img :src="require('@assets/img/r2.png')" alt />
          </div>
        </div>
        <div class="msg6_right">
          <div class="title_eng_com_sy">
            <span class="t">企业招聘</span>
            <span class="english">Recruitment</span>
          </div>
          <el-table :data="tableData" style="width: 100%">
            类别 地点 发布时间
            <el-table-column prop="date" label="职位名称" align="center"></el-table-column>
            <el-table-column prop="name" label="类别" align="center"></el-table-column>
            <el-table-column prop="address" label="地点" align="center"></el-table-column>
            <el-table-column prop="time" label="发布时间" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
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
import { topNavEnterpriseMsg as topNavEnterprise } from "@const";
import PageNum from "@components/PageNum";
export default {
  components: {
    HeaderTop,
    HeaderSearch,
    HeaderNav,
    Side,
    PageNum
  },
  data() {
    return {
      topNavEnterprise: topNavEnterprise,
      tableDa: [
        {
          date: "研发项目经理",
          name: "研发",
          address: "江苏省扬州市",
          time: "2019-7-30"
        }
      ]
    };
  },
  computed:{
    tableData(){
      return this.DataFor(10,this.tableDa);
    }
  },
  methods: {
    handleEdit(index,row){
      console.log(index,row)
    }
  }
};
</script>

<style lang="less">


  

</style>
