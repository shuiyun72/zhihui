<template>
  <div class="person_right">
    <div class="account_body bs">
      <div class="acc_title jcs">
        <div class="a_l">充值记录</div>
        <div class="a_r">
          <div class="link" @click="childHandle(1,0,'Account1Detail')">发票索取</div>
        </div>
      </div>
      <div class="acc_table_com_sy">
        <el-table
      :data="tableData"
      style="width: 100%" stripe>
      <el-table-column
        prop="date"
        label="充值时间"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="type"
        label="交易方式"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="money"
        label="金额"
        align="center">
      </el-table-column>
      <el-table-column label="票据" align="center">
        <template slot-scope="scope">
          <span :class="{'blue':scope.row.bill=='已出'}">{{scope.row.bill}}</span>
        </template>
      </el-table-column>
    </el-table>
      </div>
      <div class="pt">
        <PageNum></PageNum>
      </div>
      
    </div>
  </div>
</template>

<script>
import PageNum from "@components/PageNum";
export default {
  components: { PageNum },
  data() {
    return {
      tableData: [
        {date: '2019-08-11 10:00:02',type: '在线支付', money: '100元', bill:"未出"},
        {date: '2019-08-11 10:00:02',type: '在线支付', money: '100元', bill:"未出"},
        {date: '2019-08-11 10:00:02',type: '在线支付', money: '100元', bill:"未出"},
        {date: '2019-08-11 10:00:02',type: '在线支付',money: '500元',bill:"已出"}
      ]
    };
  },
  methods: {
    childHandle(i,ic,el){
      this.$parent.childHandle(i,ic,el)
    }
  }
};
</script>
<style lang="less">


</style>
