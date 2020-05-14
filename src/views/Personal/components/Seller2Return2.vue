<template>
  <div class="person_right">
    <div class="title_return_com_sy">
      <div class="left">
        <span class="r1" @click="childHandle(7,1,'Seller1')">订单列表</span>
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
              <img :src="require('@assets/img/t2.jpg')" class="bs" />
              <span>买家：零度</span>
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
            <div class="seller_img_t_l">
              <div class="bgred"></div>
              <span class="m">卖</span>
            </div>
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
                <!-- <el-button class="de_btn">退款/退货中</el-button> -->
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
        <el-row>
          <el-col :span="3" :offset="1">
            <div class="link fwb mt18 fz16">申请平台介入</div>
          </el-col>
        </el-row>
      </div>
      <div class="title_time">拒绝退款/货</div>
      <div class="tall_reason_com_sy small_el">
        <el-row  class="pb16">
          <el-col :span="4" class="fwb">拒绝理由：</el-col>
          <el-col :span="19">
            <el-input 
              type="textarea"
              :autosize="{ minRows: 4}"
              placeholder="请输入内容"
              v-model="textarea"
              
              maxlength="200"
              show-word-limit
            ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="fwb">上传图片：</el-col>
          <el-col :span="19">
            <span class="img_mr">
              <img :src="require('@assets/img/re1.jpg')" />
            </span>
            <span class="img_mr">
              <img :src="require('@assets/img/re2.jpg')" />
            </span>
          </el-col>
        </el-row>
        
      </div>
      <div class="submit_btn_sy mbt or">
        <el-button>提交</el-button>
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
.pb16{
  padding: 0px 0 16px;
}
.seller2_at_time_com_sy {
  padding-top: 30px;
  padding-bottom: 100px;
  text-align: center;
  p {
    margin-bottom: 16px;
    font-weight: bold;
    color: #999;
  }
  .or_btn_p1 {
    border: 1px solid #f88509;
    color: #f88509;
    padding: 6px 20px;
  }
  .el-button + .el-button {
    margin-left: 80px;
  }
}
</style>
