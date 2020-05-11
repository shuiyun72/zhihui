<template>
  <div class="steps_body">
    <Side :isShowRightPart1="false"></Side>
    <div class="wm s_content">
      <div class="steps_num_com_sy">
        <div class="s_l">
          <span class="orange">交易流程</span>
        </div>
        <div class="s_r">
          <el-steps :active="active" align-center>
            <el-step title="立即购买/购物车结算"></el-step>
            <el-step title="核实信息"></el-step>
            <el-step title="提交付款"></el-step>
            <el-step title="确认收货"></el-step>
            <el-step title="交易评价"></el-step>
          </el-steps>
        </div>
      </div>
      <div class="sp1_p2">
        <div class="title_hui_com_sy jcs">
          <div class="l">确认收货地址</div>
        </div>
        <div class="address_s">
          <el-row class="active">
            <el-col :span="4" class="t_center red hidden">
              <i class="el-icon-location"></i>
              <span>寄送地址</span>
            </el-col>
            <el-col :span="11">
              <el-radio v-model="radio" label="1">
                江苏省 扬州市 瘦西湖风景区上方寺路60号
                <span>陆先生</span>13405555514
              </el-radio>
            </el-col>
            <el-col :span="3" :offset="4">默认地址</el-col>
            <el-col :span="2">
              <div class="link">修改此地址</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="t_center red hidden">
              <i class="el-icon-location"></i>
              <span>寄送地址</span>
            </el-col>
            <el-col :span="11">
              <el-radio v-model="radio" label="2">
                江苏省 扬州市 瘦西湖风景区上方寺路60号
                <span>陆先生</span>13405555514
              </el-radio>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="t_center red hidden">
              <i class="el-icon-location"></i>
              <span>寄送地址</span>
            </el-col>
            <el-col :span="11">
              <el-radio v-model="radio" label="3">
                江苏省 扬州市 瘦西湖风景区上方寺路60号
                <span>陆先生</span>13405555514
              </el-radio>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="t_center red hidden">
              <i class="el-icon-location"></i>
              <span>寄送地址</span>
            </el-col>
            <el-col :span="11">
              <el-radio v-model="radio" label="4">
                江苏省 扬州市 瘦西湖风景区上方寺路60号
                <span>陆先生</span>13405555514
              </el-radio>
            </el-col>
          </el-row>
          <el-row class="add_address">
            <el-col :span="3" :offset="4">
              <div class="link">管理/添加收货地址</div>
            </el-col>
          </el-row>
        </div>
        <div class="title_hui_com_sy jcs">
          <div class="l">确认订单信息</div>
        </div>
        <el-row class="title_d">
          <el-col :span="6" class="t_center">购买的宝贝</el-col>
          <el-col :span="4" class="t_center">商品名称</el-col>
          <el-col :span="3" class="t_center">参数</el-col>
          <el-col :span="3" class="t_center">单价</el-col>
          <el-col :span="3" class="t_center">数量</el-col>
          <el-col :span="3" class="t_center">原价</el-col>
          <el-col :span="1" class="t_center">小计</el-col>
        </el-row>
        <div class="personal_d">
          <img :src="require('@assets/img/t1.jpg')" class="bs" />
          <span>卖家：小女人</span>
          <i class="iconfont icon-weixin1"></i>
        </div>
        <el-row class="bg_detail_com_sy">
          <el-col :span="6" class="t_center">
            <img :src="require('@assets/img/sps2.jpg')" class="bs" />
          </el-col>
          <el-col :span="4">
            <p class="fwb">索尼球形监控HKGH-32索 尼球形监控HKGH-32…</p>
          </el-col>
          <el-col :span="3" class="cs">
            <p>接口：24</p>
            <p>颜色：白色</p>
            <p>重量：290g</p>
            <p>类型：随便</p>
            <p>分类：随便</p>
            <p>参数：随便</p>
          </el-col>
          <el-col :span="3" class="t_center">284.00</el-col>
          <el-col :span="3" class="t_center">
            <el-input-number v-model="num" :min="1" :max="10" label="描述文字" size="small"></el-input-number>
          </el-col>
          <el-col :span="3" class="t_center">
            <span class="text_t">￥1868.00</span>
          </el-col>
          <el-col :span="1" class="t_center">
            <span class="red">￥568.00</span>
          </el-col>
        </el-row>
        <el-row class="bg_s_p">
          <el-col :span="3" class="t_center">给卖家留言：</el-col>
          <el-col :span="7" class="t_center">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="选填，须和卖家协商一致，起到备忘录的作用。"
              v-model="textarea"
              show-word-limit
              maxlength="200"
            ></el-input>
          </el-col>
          <el-col :span="3" class="t_center"></el-col>
          <el-col :span="5" class="t_center">
            <p class="pb10">
              <el-checkbox v-model="checked">备选项</el-checkbox>
            </p>
            <p class="link">编辑开票信息</p>
          </el-col>
          <el-col :span="4" class="t_center">运送方式： 另议</el-col>
          <el-col :span="3" class="t_center">优惠/抵用券 无</el-col>
          <el-col :span="1" class="t_center">
            <span class="red">￥0.00</span>
          </el-col>
        </el-row>
        <el-row class="bg_s_l">
          <el-col :span="4" :offset="20">
            <div class="bg_blue_s">
              合计：
              <span class="red">￥568.00</span>
            </div>
          </el-col>
        </el-row>
        <el-row class="bg_s_l">
          <el-col :span="4" :offset="16">
            <div class="bg_blue_m">
              实际付款：
              <span class="red">￥568.00</span>
            </div>
          </el-col>
          <el-col :span="4" class="t_center">
            <el-button class="red2_btn">提 交 订 单</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
export default {
  components: { Side },
  mounted() {},
  data() {
    return {
      active: 1,
      radio: "1",
      num: 2,
      textarea: "",
      checked: 1
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less">
.steps_body {
  padding-bottom: 50px;
  .s_content {
    padding-top: 10px;
  }
  .bg_s_p {
    background-color: #edf1ff;
    margin-top: 6px;
    padding: 20px 0;
  }
  .bg_s_l {
    background-color: #edf1ff;
    .bg_blue_s {
      background-color: #03c1c9;
      text-align: center;
      font-size: 16px;
      padding: 6px 0;
      .red {
        font-size: 14px;
        font-weight: bold;
      }
    }
    .red2_btn{
      font-size: 16px;
      background-color: #8D0101;
      padding: 4px 36px;
      color: #ccc;
    }
    margin-bottom: 6px;
    .bg_blue_m{
      padding: 6px 0;
      .red{
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  .el-textarea {
    textarea {
      height: 70px;
    }
  }
  .address_s {
    padding-top: 6px;
    color: #666;
    .el-row {
      line-height: 26px;
      margin-bottom: 3px;
      i {
        margin-right: 6px;
      }
      .el-radio__label {
        color: #666;
      }
      &.active {
        background-color: #d6f5f6;
        .hidden {
          visibility: inherit;
        }
      }
    }
    .add_address {
      padding-top: 20px;
    }
  }
  .title_d {
    color: #999;
    padding: 10px 0 4px;
    border-bottom: 2px dotted #ccc;
  }
  .personal_d {
    line-height: 30px;
    padding: 8px 0 8px 20px;
    span {
      margin: 0 20px 0 26px;
    }
    i {
      color: #74c39b;
      font-size: 18px;
      line-height: 22px;
    }
  }
}
</style>
