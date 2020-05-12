<template>
  <div class="steps_body">
    <Side :isShowRightPart1="false"></Side>
    <div class="wm s_content">
      <div class="sp1_p2">
        <div class="title_hui_com_sy jcs">
          <div class="l">
            <i class="iconfont icon-gouwucheman"></i>
            <span class="red2 fwb">购物车</span>
            <span>全部商品</span>
            <span class="red">3</span>
          </div>
        </div>
        <el-row class="title_d">
          <el-col :span="7" class="t_center">购买的宝贝</el-col>
          <el-col :span="4" class="t_center">商品名称</el-col>
          <el-col :span="3" class="t_center">参数</el-col>
          <el-col :span="3" class="t_center">单价</el-col>
          <el-col :span="2" class="t_center">数量</el-col>
          <el-col :span="2" class="t_center">原价</el-col>
          <el-col :span="3" class="t_center">小计</el-col>
        </el-row>
        <div class="personal_d">
          <img :src="require('@assets/img/t1.jpg')" class="bs" />
          <span>卖家：小女人</span>
          <i class="iconfont icon-weixin1"></i>
          <span class="yellow">和我联系</span>
        </div>
        <el-row class="bg_detail_com_sy">
          <el-col :span="1" class="t_center">
            <el-checkbox v-model="checked" class="checkbox2"></el-checkbox>
          </el-col>
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
          <el-col :span="2" class="t_center">
            <el-input-number
              @change="changeNum(num)"
              v-model="num"
              :min="0"
              :max="10"
              label="描述文字"
              size="small"
            ></el-input-number>
          </el-col>
          <el-col :span="2" class="t_center">
            <span class="text_t">￥1868.00</span>
          </el-col>
          <el-col :span="3" class="t_center">
            <span class="red">￥568.00</span>
          </el-col>
        </el-row>
        <div class="personal_d">
          <img :src="require('@assets/img/t1.jpg')" class="bs" />
          <span>卖家：小女人</span>
          <i class="iconfont icon-weixin1"></i>
          <span class="yellow">和我联系</span>
        </div>
        <el-row class="bg_detail_com_sy">
          <el-col :span="1" class="t_center">
            <el-checkbox v-model="checked" class="checkbox2"></el-checkbox>
          </el-col>
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
          <el-col :span="2" class="t_center">
            <el-input-number v-model="num" :min="0" :max="10" label="描述文字" size="small"></el-input-number>
          </el-col>
          <el-col :span="2" class="t_center">
            <span class="text_t">￥1868.00</span>
          </el-col>
          <el-col :span="3" class="t_center">
            <span class="red">￥568.00</span>
          </el-col>
        </el-row>
        <div class="personal_d">
          <img :src="require('@assets/img/t1.jpg')" class="bs" />
          <span>卖家：小女人</span>
          <i class="iconfont icon-weixin1"></i>
          <span class="yellow">和我联系</span>
        </div>
        <el-row class="bg_detail_com_sy">
          <el-col :span="1" class="t_center">
            <el-checkbox v-model="checked" class="checkbox2"></el-checkbox>
          </el-col>
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
          <el-col :span="2" class="t_center">
            <el-input-number v-model="num" :min="0" :max="10" label="描述文字" size="small"></el-input-number>
          </el-col>
          <el-col :span="2" class="t_center">
            <span class="text_t">￥1868.00</span>
          </el-col>
          <el-col :span="3" class="t_center">
            <span class="red">￥568.00</span>
          </el-col>
        </el-row>
        <el-row class="bg_s_l mt20 pt6">
          <el-col :span="2" :offset="1">
            <el-checkbox v-model="checked" class="checkbox2">全选</el-checkbox>
          </el-col>
          <el-col :span="2" :offset="7">
            已选商品
            <span class="red">1</span> 件
          </el-col>
          <el-col :span="4" :offset="1" class="t_right">
            <span class="all_money red">合计：￥568.00</span>
          </el-col>
          <el-col :span="4" :offset="3" class="t_right">
            <el-button class="blue_btn" @click="payDialog = true">结算</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-dialog
      title="提示"
      :before-close="handleClose"
      :visible.sync="isDeleteDia"
      width="560px"
      class="playing_dialog_com_sy"
    >
      <div class="cro_zhiding_body">
        <p class="pt30">确认删除这条尾货信息吗？</p>
        <div class="submit">
          <el-button class="btn_p4" @click="handleClose">取消</el-button>
          <el-button class="blue_btn btn_p3" @click="handleClose">确定</el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="支付" :visible.sync="payDialog" width="570px">
      <div class="pay_evm_com_sy jcs">
        <div class="item1 bs">
          <div class="box1 i1">
            <img :src="require('@assets/img/evm.png')" alt />
            <p>支付宝扫码</p>
            <p>智汇优库网络科技有限公司</p>
          </div>
          <div class="box2">
            <i class="iconfont icon-zhifubao"></i>
            <span>支付宝支付</span>
          </div>
        </div>
        <div class="item1 bs">
          <div class="box1 i2">
            <img :src="require('@assets/img/evm.png')" alt />
            <p>微信扫码</p>
            <p>智汇优库网络科技有限公司</p>
          </div>
          <div class="box2">
            <i class="iconfont icon-weixin1"></i>
            <span>微信支付</span>
          </div>
        </div>
      </div>

      <div class="submit_btn_sy mbt">
        <div class="info_success_com_sy">
          <p class="t_left">索尼球形监控HKGH-32索尼球形监控HKGH-32…</p>
          <p class="red">
            支付金额：
            <span class="fz18">￥586.00</span>
          </p>
        </div>
        <el-button class="pay" @click="payDialog = false">已支付成功</el-button>
      </div>
    </el-dialog>
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
      checked: 1,
      checked2: 1,
      isDeleteDia: false,
      payDialog: false
    };
  },
  computed: {},
  methods: {
    changeNum(el) {
      if (el < 1) {
        this.isDeleteDia = true;
      }
    },
    handleClose() {
      this.num = 1;
      this.isDeleteDia = false;
    }
  }
};
</script>

<style lang="less">
.checkbox2 {
  .el-checkbox__inner {
    width: 20px;
    height: 20px;
  }
  .el-checkbox__inner::after {
    height: 11px;
    left: 7px;
    width: 5px;
  }
}
</style>
