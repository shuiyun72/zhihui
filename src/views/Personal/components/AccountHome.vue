<template>
  <div class="person_right">
    <div class="account_body bs">
      <div class="home_title jcs">
        <div class="a_l">智汇币账户</div>
      </div>
      <div class="zhb_info t_center">
        <span v-show="AccountHomeData.home=='h1' ||AccountHomeData.home=='h2'">
          智慧币：
          <span class="span">88890</span> 个
        </span>
        <span v-show="AccountHomeData.home=='h3'">
          直播间红包：
          <span class="span">24</span> 元
        </span>
        <el-button class="btn" v-show="AccountHomeData.home=='h1'" @click.native="topUp">充值</el-button>
        <span
          class="link"
          @click="childHandle(1,0,'Account1')"
          v-show="AccountHomeData.home=='h1'"
        >充值记录</span>
        <el-button class="btn" v-show="AccountHomeData.home=='h2'  || AccountHomeData.home=='h3'">提现</el-button>
      </div>
      <div class="h_title" v-show="AccountHomeData.home=='h1'">智汇币交易明细</div>
      <div class="h_title" v-show="AccountHomeData.home=='h2' || AccountHomeData.home=='h3'">智汇豆交易明细</div>
      <div class="h_select jcs">
        <div class="item" v-for="(item,inL) in mxList" :key="inL+'xxa'" :class="{'active':inL == selectTitle}" @click="handleSelectT(item,inL)">{{item.title}}</div>
      </div>
      <div class="none_title_table">
        <el-table :data="tableData" stripe>
          <el-table-column prop="date" label="时间" align="center"></el-table-column>
          <el-table-column prop="type" label="方式" align="center"></el-table-column>
          <el-table-column prop="num" align="center" label="数量"></el-table-column>
          <el-table-column prop="unit" align="center" label="单位"></el-table-column>
        </el-table>
      </div>
      <PageNum v-show="tableData.length > 0"></PageNum>
    </div>
  </div>
</template>

<script>
import PageNum from "@components/PageNum";
export default {
  components: { PageNum },
  props: {
    AccountHomeData: {
      type: Object,
      default: {}
    }
  },
  computed: {
    tableData() {
      return this.DataFor(5, this.AccountHomeData.data);
    }
  },
  data() {
    return {
      selectTitle:0,
      mxList:[ 
        {
          title:"全部明细"
        },
        {
          title:"收入明细"
        },
        {
          title:"支出明细"
        }
      ]
    };
  },
  methods: {
    childHandle(i, ic, el) {
      this.$parent.childHandle(i, ic, el);
    },
    topUp(){
      this.$router.push({path:"/personal/topUp"})
    },
    handleSelectT(t,i){
      this.selectTitle = i;
      console.log(t,"为选中的信息,下面的表格改变'tableData'的值,不需要直接写3个")
    }
  }
};
</script>
<style>
.el-table_header{
  width:100% !important
}
.el-table_body{
  width:100% !important
}
</style>
