<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch></HeaderSearch>
    </div>
    <div class="title_img"></div>
    <Side></Side>
    <div class="c_detial_commid">
      <div class="title_Progress">
        <div class="left">
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">尾货捡漏</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">综合布线系统</el-breadcrumb-item>
            <el-breadcrumb-item>网络数据/语音模块产品</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <div class="c_detial">
      <div class="part1">
        <div class="part_left">
          <div class="left">
            <ImgLunbo></ImgLunbo>
            <div class="collect">
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
                <span class="red">2.5折</span>
                <span class="red">成色8新</span>
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
            <div class="buy_num_history">
              <span class="buy_num">购买数量</span>

              <el-input placeholder="请输入内容" v-model="input3" class="input-with-icon">
                <el-button slot="prepend" icon="el-icon-minus"></el-button>
                <el-button slot="append" icon="el-icon-plus"></el-button>
              </el-input>

              <span class="store">库存：200</span>
              <span class="history">历史成交：12单</span>
            </div>
          </div>
        </div>
        <div class="part_right">
          <div class="seller_msg">
            <div class="title">卖家信息</div>
            <div class="detail">
              <div class="user_info_com">
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
                  <SmallGoods  class="shop_child_com" :history="'true'" :smallGoodsItem="item" v-for="(item,index) in commodityList" :key="index"></SmallGoods>
                </div>
                <div class="more">更多...</div>
              </div>
            </div>
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
export default {
  data() {
    return {
      input3: 2
    };
  },
  computed: {
    commodityList() {
      let CommodityHomeCommodity = Commodity.HomeCommodity;
      CommodityHomeCommodity.pop();
      return CommodityHomeCommodity;
    }
  },
  components: {
    HeaderTop,
    HeaderSearch,
    Side,
    ImgLunbo,
    SmallGoods
  },
  methods: {}
};
</script>

<style lang="less">
.c_detial_commid {
  padding-bottom: 20px;
  background-color: #eee;
  margin-bottom: 20px;
}
.c_detial {
  width: 1592px;
  margin: 0 auto;
  .part1 {
    display: flex;
    justify-content: space-between;

    margin-bottom: 40px;
    .part_left {
      width: 1250px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dashed #666;
      padding-bottom: 20px;
      .left {
        width: 600px;
      }
      .center {
        width: 612px;
        .title {
          font-size: 24px;
          padding-top: 16px;
          line-height: 28px;
        }
        .money_info {
          background-color: #bbb;
          padding: 16px 20px;
          margin-top: 20px;
          .info {
            line-height: 26px;
            font-size: 18px;
          }
          .money {
            font-size: 28px;
            color: #f00;
            margin: 0 70px 0 16px;
          }
          .delete {
            text-decoration: line-through;
            color: #666;
          }
          .red {
            color: #f00;
            margin-left: 50px;
          }
        }
        .turn {
          color: #666;
          font-size: 16px;
          padding: 6px 0;
        }
      }
      .msg_info {
        display: flex;
        justify-content: space-between;
        padding-top: 40px;
        p {
          margin-bottom: 30px;
          font-size: 20px;
        }
      }
    }
  }
  .part_right {
    width: 300px;
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    .seller_msg {
      .title {
        font-size: 24px;
        background-color: #eee;
        padding: 10px 20px;
        color: #8d0101;
      }
    }
    .end_com {
      width: 260px;
      padding: 20px 0 10px;
      border-top: 2px dashed #999;
      margin: 0 auto;
      .d_title {
        font-size: 20px;
        color: #8d0101;
        padding-bottom: 20px;
      }
      .more{
        font-size: 20px;
        color: #0644EB;
        text-align: right;
      }
    }
  }
}
.shop_child_com {
  display: flex;
  background-color: #fff;
  padding: 7px 0;
  box-sizing: border-box;
  justify-content: space-between;
  box-shadow:0px 3px 6px rgba(0,0,0,0.16);
  margin-bottom: 10px;
  img {
    width: 122px;
    height: 87px;
  }
  .info {
    margin-top: 10px;
    width: 160px;
    p {
      color: #666666;
      font-size: 16px;
      margin-bottom: 4px;
    }
    .detail {
      width: 100px;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      .money {
        color: #ff0000;
      }
      .delete{
        text-decoration:line-through;
        margin-left: 20px;
        color: #999;
      }
    }
  }
}
//卖家信息
.user_info_com {
  padding: 10px 0 26px;
  .user_flex {
    display: flex;
    img {
      width: 78px;
      height: 78px;
    }
    .box {
      padding: 20px 4px 0;
      .name {
        font-size: 20px;
        padding-bottom: 13px;
      }
      .address {
        font-size: 14px;
        .guanzhu {
          margin-left: 70px;
          .num {
            color: #0644eb;
          }
        }
      }
    }
  }
  .find_msg {
    margin-top: 8px;
    padding-left: 50px;
    .true_name {
      font-size: 14px;
      color: #e58e03;
      i {
        margin-right: 4px;
      }
    }
    .guanzhu {
      background-color: #e58e03;
      color: #fff;
      padding: 2px 16px;
      border-radius: 12px;
      margin-left: 70px;
    }
  }
}
// 手机二维码组件备用
.phone_evm {
  .evm {
    font-size: 20px;
    text-align: center;
    span {
      color: #03c1c9;
      margin: 0 6px;
    }
  }
  img {
    width: 150px;
  }
}
//商品数量组件备用
.buy_num_history {
  padding-top: 76px;
  .buy_num {
    font-size: 26px;
    color: #f88509;
  }
  .input-with-icon {
    position: relative;
    top: -3px;
    width: 158px;
    margin: 0 30px 0 20px;
    input {
      width: 100%;
      text-align: center;
    }
  }
  .store {
    font-size: 20px;
    color: #666;
  }
  .history {
    font-size: 20px;
    color: #0644eb;
    margin-left: 40px;
  }
}

.collect {
  text-align: center;
  padding: 16px 0;
  span {
    background-color: #eee;
    color: #333;
    padding: 2px 6px;
    i {
      font-size: 20px;
      color: #666;
    }
  }
}
</style>
