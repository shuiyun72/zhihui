<template>
  <div class="person_right">
    <div class="title_return_com_sy">
      <div class="left">
        <span class="r1" @click="childHandle(7,4,'Seller5')">我的钱包</span>
        <span class="r0">></span>
        <span class="r2">提现记录</span>
      </div>
    </div>
    <div class="seller_log_body">
      <el-table :data="tableData" stripe>
        <el-table-column prop="date" label="提现日期" align="center"></el-table-column>
        <el-table-column prop="type" label="提现类型" align="center" ></el-table-column>
        <el-table-column prop="num" label="提现金额" align="center"></el-table-column>
        <el-table-column prop="state" label="提现状态" align="center" ></el-table-column>
        <el-table-column prop="remark" label="备注" align="center" ></el-table-column>
      </el-table>
    </div>    
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {    
          date: "2020-04-23",
          type: "直播间红包",
          num: "10",
          state: "提现成功",
          remark: "无"
        },
        {    
          date: "2020-04-23",
          type: "直播间红包",
          num: "10",
          state: "提现成功",
          remark: "无"
        },
        {    
          date: "2020-04-23",
          type: "直播间红包",
          num: "10",
          state: "提现成功",
          remark: "无"
        },
        {    
          date: "2020-04-23",
          type: "直播间红包",
          num: "10",
          state: "提现失败",
          remark: "审核未通过"
        }
      ]
    };
  },
  methods: {
    childHandle(i, ic, el) {
      this.$parent.childHandle(i, ic, el);
    },
    routerTo(el) {
      this.childHandle(6, 0, el);
    }
  }
};
</script>
<style lang="less">
.wallet_dm_t_body {
  color: #666;
  padding: 30px 40px;
  .title {
    text-align: right;
    font-weight: bold;
    padding-right: 6px;
  }
  .el-row {
    line-height: 32px;
    margin-bottom: 10px;
  }
}
.info_body_dia {
  padding: 0 40px;
  p {
    text-align: center;
    font-size: 16px;
    padding: 50px 0 30px;
  }
}
</style>
