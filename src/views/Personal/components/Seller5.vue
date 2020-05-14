<template>
  <div class="person_right">
    <div class="wallet_body bs">
      <div class="w_title">我的钱包</div>
      <div class="w_part1 pp">
        <div class="p1">账户余额（元）</div>
        <div class="p1_p2">
          <span class="orange">￥ 48396.00</span>
          <el-button class="or_btn" round @click="childHandle(7,4,'Seller5DrawMoney')">提现</el-button>
          <span class="link" @click="childHandle(7,4,'Seller5Log')">查看提现记录</span>
        </div>
        <div class="waller_num_com_sy">
          <div class="item">
            <p>本月订单（单）</p>
            <div class="orange">135</div>
          </div>
          <i></i>
          <div class="item">
            <p>本月收入（元）</p>
            <div class="orange">￥ 8396.00</div>
          </div>
          <i></i>
          <div class="item">
            <p>本月消费（元）</p>
            <div class="orange">￥ 2588.00</div>
          </div>
          <i></i>
          <div class="item">
            <p>我在智汇优库赚了</p>
            <div class="orange">￥ 102588.00</div>
          </div>
        </div>
      </div>
      <div class="w_title">添加银行卡</div>
      <div class="w_part2">
        <div class="img">
          <img :src="require('@assets/img/k1.jpg')" />
          <p class="t_right link">删除</p>
        </div>
        <div class="img">
          <img :src="require('@assets/img/k2.jpg')" />
          <p class="t_right link">删除</p>
        </div>
        <div class="img pointer" @click="childHandle(7,4,'Seller5AddCard')">
          <img :src="require('@assets/img/k3.jpg')" />
        </div>
      </div>
      <div class="w_title">收入详情</div>
      <div class="w_part3 pp">
        <div class="info jcs">
          <p>近6个月的收入明细</p>
          <span class="link">查看更多</span>
        </div>
        <el-table :data="DataFor(6,tableData)" style="width: 100%" stripe>
          <el-table-column prop="year" label="年" align="center"></el-table-column>
          <el-table-column prop="month" label="月" align="center"></el-table-column>
          <el-table-column prop="order" label="成交/单" align="center"></el-table-column>
          <el-table-column prop="pay" label="收入/元" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template>
              <span class="link" @click="tableDialog=true">详情</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="w_title">消费详情</div>
      <div class="w_part3 pp">
        <div class="info jcs">
          <p>近6个月的消费明细</p>
          <span class="link">查看更多</span>
        </div>
        <el-table :data="DataFor(6,tableData)" style="width: 100%" stripe>
          <el-table-column prop="year" label="年" align="center"></el-table-column>
          <el-table-column prop="month" label="月" align="center"></el-table-column>
          <el-table-column prop="order" label="成交/单" align="center"></el-table-column>
          <el-table-column prop="pay" label="收入/元" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template>
              <span class="link" @click="tableDialog=true">详情</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog
      title="详情信息"
      :visible.sync="tableDialog"
      width="1000px"
      class="playing_dialog_com_sy"
    >
      <div class="cro_zhiding_body">
        <el-table :data="DataFor(14,dialogData)" style="width: 100%" stripe>
          <el-table-column prop="time" label="时间" align="center"></el-table-column>
          <el-table-column prop="pub" label="商品" align="center" width="200"></el-table-column>
          <el-table-column prop="num" label="数量" align="center"></el-table-column>
          <el-table-column prop="pi" label="单价" align="center"></el-table-column>
          <el-table-column prop="all" label="合计" align="center"></el-table-column>
          <el-table-column label="查看" align="center">
            <template>
              <span class="link">查看订单</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="submit">
          <el-button class="de_btn" @click="tableDialog = false;">关闭</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [{ year: 2020, month: 4, order: 18, pay: "￥2588.00" }],
      dialogData: [
        {
          time: "20200330 14:25:20",
          pub: "施耐德开关面板施耐德开关...",
          num: "2",
          pi: "50",
          all: "￥200.00"
        }
      ],
      tableDialog: false
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
</style>
