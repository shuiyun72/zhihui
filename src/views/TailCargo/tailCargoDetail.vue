<template>
  <div>
    <div class="bg2_img_top">
      <el-button class="orange_btn" round>生成我的广告</el-button>
    </div>
    <Side></Side>
    <div class="c_detial_commid">
      <div class="title_Progress">
        <div class="left">
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/tailCargo' }">尾货捡漏</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/tailCargo/screen' }">综合布线系统</el-breadcrumb-item>
            <el-breadcrumb-item>网络数据/语音模块产品</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>

    <div class="tail_cargo_detail wm">
      <div class="c_detial">
        <div class="part1">
          <div class="part_left">
            <div class="left">
              <ImgLunbo></ImgLunbo>
              <div class="collect_sy">
                <span>
                  <i class="iconfont icon-xing"></i>收藏产品
                </span>
              </div>
            </div>
            <div class="center">
              <div class="title">商品标题商品标题商品标题商品标题商品标题商品标题题 商品标题题商品标题题商品标题</div>
              <div class="money_info">
                <div class="info">
                  <span>价格</span>
                  <span class="money">￥128.00</span>
                  <span class="delete">原价￥458.00</span>
                  <span class="red2">2.5折</span>
                  <span class="red2">成色8新</span>
                </div>
                <div class="turn">运费：另议</div>
              </div>
              <div class="msg_info">
                <div class="left_c">
                  <p>尾货型号：HGG-DEF 24口</p>
                  <p>商品状态：9新</p>
                  <p>商品库存：200</p>
                  <p>计量单位：包</p>
                  <p>产品所在地：河南郑州</p>
                </div>
                <div class="phone_evm">
                  <div class="evm">
                    <i class="el-icon-mobile-phone"></i>
                    <span>手机购买</span>
                    <i class="el-icon-caret-bottom"></i>
                  </div>
                  <img :src="require('@assets/img/evm.png')" alt />
                </div>
              </div>
              <div class="buy_num_history_sy">
                <span class="buy_num">购买数量</span>

                <el-input-number
                  v-model="num"
                  :min="1"
                  :max="10"
                  label="描述文字"
                  size="small"
                  class="pay_nub_el"
                ></el-input-number>

                <span class="store">库存：200</span>
                <span class="history">历史成交：12单</span>
              </div>
            </div>
          </div>
          <div class="part_right">
            <div class="seller_msg">
              <div class="title">卖家信息</div>
              <div class="detail_l">
                <div class="user_info_com_sy">
                  <div class="user_flex">
                    <img :src="require('@assets/img/user.png')" alt />
                    <div class="box">
                      <p class="name">昵称：小女人</p>
                      <div class="address">
                        <span>地址：郑州</span>
                        <span class="guanzhu">
                          <span class="num">58</span>人关注
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="find_msg">
                    <span class="true_name">
                      <i class="el-icon-medal"></i>已实名认证
                    </span>
                    <span class="guanzhu">已关注</span>
                  </div>
                </div>
                <div class="end_com">
                  <div class="d_title">TA的尾货</div>
                  <div class="box_item">
                    <SmallGoods
                      class="shop_child_com_sy"
                      :history="'true'"
                      :smallGoodsItem="item"
                      v-for="(item,index) in DataFor(3,[commodityList[0]])"
                      :key="index"
                    ></SmallGoods>
                  </div>
                  <div class="link t_right">更多...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tail_handle wm">
        <el-row>
          <el-col :span="4" :offset="8" class="t_center">
            <el-button class="blue_btn">联系卖家</el-button>
          </el-col>
          <el-col :span="4" class="t_center">
            <router-link :to="{path:'/steps'}">
              <el-button class="red_btn">立即购买</el-button>
            </router-link>
          </el-col>
          <el-col :span="8" class="t_right">
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
          </el-col>
        </el-row>
      </div>
      <div class="tail_detail">
        <div class="title jcs">
          <p class="red2">周边配套尾货</p>
          <div class="link">更多...</div>
        </div>
        <GoodsLunboS class="no_bw">
          <div class="t_body_l jcs">
            <div
              class="item"
              v-for="(bigGoodsItem,index) in DataFor(4,[part3List[0]])"
              :key="index"
            >
              <div class="shop_show_item i">
                <router-link :to="{path:'/tailCargo/detail'}">
                  <img :src="require('@assets/commodity/'+bigGoodsItem.img)" alt />
                </router-link>
                <div class="info">
                  <div class="name">{{bigGoodsItem.name}}</div>
                  <div class="number">数量：{{bigGoodsItem.number}}</div>
                </div>
                <div class="handle">
                  <div class="money_new">￥{{bigGoodsItem.moneyNew}}</div>
                  <div class="money_old">￥{{bigGoodsItem.moneyOld}}</div>
                  <div>郑州</div>
                </div>
              </div>
            </div>
          </div>
        </GoodsLunboS>
      </div>
      <div class="tail_detail2 jcs">
        <div class="t_l">
          <div class="title jcs">
            <p class="red2">猜你喜欢</p>
            <div class="link">更多...</div>
          </div>
          <BigGoods
            :bigGoodsItem="item"
            v-for="(item,index) in DataFor(6,[part3List[0]])"
            :key="index"
            class="bottom10"
          ></BigGoods>
        </div>
        <div class="t_r bs">
          <div class="t">
            商品详情：
          </div>
          <p class="tin">
            商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述商品详情描述。
          </p>
          <div class="img" v-for="(t,i) in 4" :key="i+'xx'">
            <img :src="require('@assets/commodity/spb.jpg')" class="bs"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//part3
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderSearch from "@components/Header/HeaderSearch.vue";
import ImgLunbo from "@components/OverAll/imgLunbo.vue";
import Side from "@components/Side.vue";
import * as Commodity from "@/common/commodity";
import SmallGoods from "@components/Goods/SmallGoods";
import GoodsLunboS from "@components/OverAll/GoodsLunboS";
import BigGoods from "@components/Goods/BigGoods";

export default {
  data() {
    return {
      input3: 2,
      num: 1,
      commodityList: Commodity.HomeCommodity,
      part3List: Commodity.Part3List
    };
  },
  computed: {},
  components: {
    HeaderTop,
    HeaderSearch,
    Side,
    ImgLunbo,
    SmallGoods,
    GoodsLunboS,
    BigGoods
  },
  methods: {}
};
</script>

<style lang="less">

</style>
