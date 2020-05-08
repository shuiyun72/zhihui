<template>
  <div class="person_right">
    <div class="account_body bs">
      <div class="title_return_com_sy">
        <div class="left">
          <span class="r1" @click="childHandle(1,0,'Account1')">个人中心</span>
          <span class="r0">></span>
          <span class="r2">发票索取</span>
        </div>
      </div>
      <div class="acc_info_com_sy jcs">
         <div class="a_l">
          <div class="title">发票信息</div>
          <p>默认抬头：郑州智汇优库网络科技有限公司</p>
          <p>开具类型：企业增值税普通发票</p>
          <div class="t_center">
            <el-button class="btn_p3" @click="childHandle(1,0,'Account1Detail2')">编辑发票信息</el-button>
          </div>
        </div>
        <div class="a_r">
          <div class="title">默认寄送地址</div>
          <p>暂无默认地址信息</p>
          <div class="t_center">
            <el-button class="btn_p3" @click="childHandle(1,0,'Account1Detail3')">编辑发票寄送地址</el-button>
          </div>
        </div>
      </div>
      <div class="pt10_title">
        财务提醒
      </div>
      <div class="acc_table_com_sy">   
        <el-table :data="tableData0" style="width: 100%" stripe>
          <el-table-column prop="date" label="发票金额" align="center"></el-table-column>
          <el-table-column prop="type" label="发票类型" align="center"></el-table-column>
          <el-table-column prop="money" label="状态" align="center">
            <template slot-scope="scope">
              <span :class="{'blue':scope.row.money=='未开票'}">{{scope.row.money}}</span>
            </template>
          </el-table-column>
          <el-table-column label="票据" align="center">
            <template slot-scope="scope">
              <span :class="{'link':scope.row.bill=='下载电子发票'}">{{scope.row.bill}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      
      <div class="pt10_title">
        未出票列表
      </div>
      <div class="acc_table_com_sy">
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column type="selection" width="50"></el-table-column>
          <el-table-column prop="date" label="充值时间" align="center"></el-table-column>
          <el-table-column prop="type" label="交易方式" align="center"></el-table-column>
          <el-table-column prop="money" label="金额" align="center"></el-table-column>
          <el-table-column label="票据" align="center">
            <template slot-scope="scope">
              <span :class="{'blue':scope.row.bill=='已出'}">{{scope.row.bill}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="per_next t_center">
        选择开票金额：<span class="span">126元</span> 选择4个订单 <el-button class="btn_p5">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {  },
  data() {
    return {
      tableData0: [
        {   
          date: "126元",
          type: "企业增值税普通发票",
          money: "未开票",
          bill: "暂无"
        },
        {   
          date: "500元",
          type: "企业增值税普通发票",
          money: "已开票",
          bill: "下载电子发票"
        }
      ],
      tableData: [
        {
          date: "2019-08-11 10:00:02",
          type: "在线支付",
          money: "100元",
          bill: "未出"
        },
        {
          date: "2019-08-11 10:00:02",
          type: "在线支付",
          money: "100元",
          bill: "未出"
        },
        {
          date: "2019-08-11 10:00:02",
          type: "在线支付",
          money: "100元",
          bill: "未出"
        },
        {
          date: "2019-08-11 10:00:02",
          type: "在线支付",
          money: "500元",
          bill: "已出"
        }
      ]
    }
  },
  methods: {
    childHandle(i, ic, el) {
      this.$parent.childHandle(i, ic, el);
    }
  }
};
</script>
<style lang="less">

</style>
