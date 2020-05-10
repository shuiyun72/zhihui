<template>
  <div class="vote_home">
    <Side></Side>
    <div class="bg_img_top"></div>
    <div class="vote_body wm">
      <div class="title_Progress">
        <div class="left">
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/vote' }">投票频道</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/vote/screen' }">2019最美汽车排行投票</el-breadcrumb-item>
            <el-breadcrumb-item>选手详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="vote_detail_body">
        <div class="take_in">
          <div class="p1 jcs">
            <div class="item">
              <h2>2</h2>
              <p>排名</p>
            </div>
            <div class="item">
              <h2>660</h2>
              <p>投票数</p>
            </div>
            <div class="item">
              <h2>9032</h2>
              <p>访问量</p>
            </div>
          </div>
          <div class="p2 jcs">
            <div class="orange title">2019最美汽车排行投票</div>
            <div class="time t_center">
              <span class="red">投票已结束</span>
            </div>
            <div class="share">
              <!-- 这个是插件的应用，我简单写个样式 -->
              <span>分享到：</span>
              <svg class="iconfont" aria-hidden="true" :style="W(16)">
                <use xlink:href="#icon-QQ" />
              </svg>
              <svg class="iconfont" aria-hidden="true" :style="W(16)">
                <use xlink:href="#icon-weixinmendian" />
              </svg>
              <svg class="iconfont" aria-hidden="true" :style="W(16)">
                <use xlink:href="#icon-QQkongjian" />
              </svg>
            </div>
          </div>
        </div>
        <div class="vote_content jcs">
          <div class="left_l">
            <div class="pr_title">12号海达队</div>
            <div class="pr_img">
              <img :src="require('@assets/img/car.jpg')" alt />
            </div>
            <div class="edit_address">
              <el-button class="blue_btn btn_p2" @click="editDialog = true">编辑奖品寄送地址</el-button>
            </div>
            <div class="detaile_info ">
              <p class="t">海达队详情：</p>
              <p class="tin">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            </div>
          </div>
          <div class="right_l ">
            <div class="r_p1">
              <div class="ps">奖品详情</div>
              <div class="ps">投票简介</div>
              <div class="ps">当前排名</div>
              <div class="ps">投票规则</div>
            </div>
            <div class="blue_div"></div>
            <div class="r_p2">
              <div class="title">推荐其它投票</div>
              <div class="box">
                <div class="item_img_t_com_sy bs" v-for="(t,i) in 3" :key="i+'s'">
                  <div class="img">
                    <img :src="require('@assets/img/car.jpg')" alt />
                  </div>
                  <div class="p_t text_e">2019年河南数据房最美据房最美据房最美</div>
                  <div class="address jcs">
                    <div class="l">地址：河南</div>
                    <div class="r red">正在投票</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="温馨提示"
      :visible.sync="editDialog"
      width="550px"
      class="playing_dialog_com_sy bdra"
    >
      <div class="edit_pay">
        <div class="title">奖品寄送地址</div>
        <el-row>   
          <el-col :span="1" class="point_red t_right">*</el-col>
          <el-col :span="4" class="">收 件 人：</el-col>
          <el-col :span="17"><el-input size="mini"></el-input></el-col>
        </el-row>
        <el-row class="">
          <el-col :span="1" class="point_red t_right">*</el-col>
          <el-col :span="4" class="row_casc">选择地区：</el-col>
          <el-col :span="17"> <el-cascader v-model="addressModel" :options="addressList"  placeholder="请选择省、市"></el-cascader></el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="point_red t_right">*</el-col>
          <el-col :span="4" class="">详细地址：</el-col>
          <el-col :span="17"><el-input  size="mini"></el-input></el-col>
        </el-row>
        <el-row>
          <el-col :span="1" class="point_red t_right">*</el-col>
          <el-col :span="4" class="">联系电话：</el-col>
          <el-col :span="17"><el-input  size="mini"></el-input></el-col>
        </el-row>
        <div class="submit_btn_sy mbt">
          <el-button class="pay" @click="editDialog = false">提 交</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
import { addressList2 } from "@const";
export default {
  components: { Side },
  mounted() {

  },
  data() {
    return {
      input2: "",
      editDialog:false,
      addressModel:[],
      addressList:addressList2,

    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less">

</style>
