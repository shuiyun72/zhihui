<template>
  <div class="person_right">
    <div class="title_return_com_sy">
      <div class="left">
        <span class="r1" @click="childHandle(6,0,'Order1')">订单列表</span>
        <span class="r0">></span>
        <span class="r2">退款/退货</span>
      </div>
    </div>
    <div class="steps_num_com_sy small">
      <div class="s_l">
        <span class="orange">交易流程</span>
      </div>
      <div class="s_r">
        <el-steps :active="active" align-center>
          <el-step title="立即购买/购物车结算"></el-step>
          <el-step title="待付款"></el-step>
          <el-step title="待发货"></el-step>
          <el-step title="退款/退货"></el-step>
          <el-step title="退款/退货完成"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="bs p_box_s">
      <div class="edit_el_tabs_com_sy">
        <el-row class="title_d">
          <el-col :span="8" class="t_center">宝贝</el-col>
          <el-col :span="4" class="t_center">商品名称</el-col>
          <el-col :span="3" class="t_center">参数</el-col>
          <el-col :span="2" class="t_center">单价</el-col>
          <el-col :span="2" class="t_center">数量</el-col>
          <el-col :span="2" class="t_center">原价</el-col>
          <el-col :span="3" class="t_center">操作</el-col>
        </el-row>
        <div class="personal_d">
          <el-row>
            <el-col :span="8">
              <img :src="require('@assets/img/t1.jpg')" class="bs" />
              <span>卖家：小女人</span>
              <i class="iconfont icon-weixin1"></i>
              <span class="yellow">和我联系</span>
            </el-col>
            <el-col :span="9">
              <span class="blue2">订单号：12316451321546541</span>
            </el-col>
            <el-col :span="7" class="t_right">
              <span class="time">2020-04-15 15:35:21</span>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-row class="bg_detail_com_sy small">
            <el-col :span="8" class="t_center">
              <img :src="require('@assets/img/sps2.jpg')" class="bs" />
            </el-col>
            <el-col :span="4">
              <p class="fwb">索尼球形监控HKGH-32索 尼球形监控HKGH-32…</p>
              <p>
                <span class="bg_blue ss">一口价</span>
                <span class="bg_orange ss">包邮</span>
              </p>
            </el-col>
            <el-col :span="3" class="cs">
              <p>接口：24</p>
              <p>颜色：白色</p>
              <p>重量：290g</p>
              <p>类型：随便</p>
              <p>分类：随便</p>
              <p>参数：随便</p>
            </el-col>
            <el-col :span="2" class="t_center">284.00</el-col>
            <el-col :span="2" class="t_center">1</el-col>
            <el-col :span="2" class="t_center">
              <span class="text_t">￥1868.00</span>
            </el-col>
            <el-col :span="3" class="t_center all_btn_box">
              <span class="red">合计:￥568.00</span>
              <div class="all_btn">
                <el-button class="de_btn">退款/退货中</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="title_time">时间：2020-04-21 12:35:20</div>
      <div class="tall_reason_com_sy small_el">
        <el-row>
          <el-col :span="4" class="fwb">商品状态：</el-col>
          <el-col :span="19">需要退货</el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="fwb">退款金额：</el-col>
          <el-col :span="17">
            586.00
            <span class="red2">(交易金额：￥586.00)</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="fwb">退款/退货原因：</el-col>
          <el-col :span="19">商品质量原因，有图</el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="fwb">上传图片：</el-col>
          <el-col :span="19">
            <span class="img_mr">
              <img :src="require('@assets/img/re1.jpg')" />
            </span>
          </el-col>
        </el-row>
      </div>
      <div class="tall_reason_com_sy small_el bg_b">
        <el-row>
          <el-col :span="3" class="fwb">时间：</el-col>
          <el-col :span="19">2020-04-22 15:25:00</el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="2" class="alone">卖家已同意退款/退货</el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="fwb">退货地址：</el-col>
          <el-col :span="17">河南省郑州市金水区农科路99号</el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="fwb">收件人：</el-col>
          <el-col :span="17">陈红红</el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="fwb">联系电话：</el-col>
          <el-col :span="17">1300000000</el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="fwb">备注：</el-col>
          <el-col :span="17">不收到付件</el-col>
        </el-row>
      </div>
      <div class="title_time">填写退货信息</div>
      <div class="big_info">
        <el-row>
          <el-col :span="4" class="t_right">物流公司：</el-col>
          <el-col :span="8">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="t_right">快递单号：</el-col>
          <el-col :span="8">
            <el-input v-model="input"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="submit_btn_sy mbt or">
          <el-button>提 交</el-button>
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
      active: 4,
      va1: "",
      textarea: "",
      input: "",
      value: "",
      options: [
        {
          value: "选项1",
          label: "顺丰速运"
        },
        {
          value: "选项2",
          label: "韵达快递"
        }
      ]
    };
  },
  methods: {
    childHandle(i, ic, el) {
      this.$parent.childHandle(i, ic, el);
    },
    routerTo(el) {
      if (el == "Logistics") {
        this.childHandle(6, 0, "Order1Logistics");
      }
    }
  }
};
</script>
<style lang="less">
</style>
