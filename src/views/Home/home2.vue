<template>
  <div id="home2">
    <div class="bg_img_top"></div>
    <div class="blue_title">
      <p class="t1">这里有最活跃的弱电用户群体</p>
      <p class="t2">There are the most active weak user groups here</p>
    </div>
    <div class="badge_num_box">
      <div v-for="(item,i) in itemList" :key="i">
        <div class="badge_num">
          {{item.num}}
          <span>{{item.title}}</span>
        </div>
        <p>{{item.text}}</p>
      </div>
    </div>
    <div class="hui_box_bg">
      <div class="text_right">
        <div class="share">
          <!-- 这个是插件的应用，我简单写个样式 -->
          <span>分享到：</span>
          <i class="iconfont icon-QQ"></i>
          <i class="iconfont icon-QQ"></i>
          <i class="iconfont icon-QQ"></i>
        </div>
      </div>
      <div class="blue_title">
        <p class="t1">颠覆传统模式—自助</p>
        <p class="t2">Subverting traditional patterns</p>
      </div>
      <div class="self_help_box">
        <div class="self_help" v-for="(item,index) in selfHelpList" :key="index">
          <img :src="require('@assets/img/'+item.img)" alt />
          <div class="t_center">
            <p>{{item.text}}</p>
            <el-button>点击进入</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="home2_titlle_show_sy">
      <div class="part_title_e">
        <div class="left">
          <span>尾货捡漏</span>
          <span>Industry News</span>
        </div>
      </div>
      <div class="right part_tab_e">
        <div class="item is_active">精选</div>
        <div class="item">最新</div>
        <div class="item">最低</div>
        <div class="item">最热</div>
      </div>
    </div>
    <div class="h2_part6">
      <div class="h2_part6_box">
        <div class="left">
          <div class="img">
            <img :src="require('@assets/img/shopimg.png')" alt />
          </div>
          <div class="table_list_money">
            <div class="item" v-for="(item,i) in tableList" :key="i">
              <span class="user">{{item.user}}</span>：
              <span class="content no_wrap">{{item.content}}</span>赚取
              <span class="red">￥{{item.money}}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <BigGoods
            :bigGoodsItem="item"
            v-for="(item,index) in part3List"
            :key="index"
            class="bottom10"
          ></BigGoods>
        </div>
      </div>
      <div class="shop">
        <div class="left">
          <img :src="require('@assets/img/shopimg.png')" alt />
        </div>
        <div class="right">
          <GoodsLunboS class="m_top10">
            <div class="d_flex">
              <SmallGoods :smallGoodsItem="item" v-for="(item,index) in commodityList" :key="index"></SmallGoods>
            </div>
          </GoodsLunboS>
        </div>
      </div>
    </div>
    <div class="h2_part7">
      <div class="home2_titlle_show_sy">
        <div class="part_title_e">
          <div class="left">
            <span>项目信息</span>
            <span>Industry News</span>
          </div>
        </div>
        <div class="right">
          <div class="link">更多...</div>
        </div>
      </div>
      <div class="h2_part7_box">
        <div class="table_msg_e_address">
          <div class="pro">
            <span class="el-icon-arrow-up"></span>
          </div>
          <el-row v-for="(it,i) in msgList(16,findUser)" :key="i" class="item">
            <el-col :span="1" class="t_right">
              <span class="point"></span>
            </el-col>
            <el-col :span="13" class="no_wrap msg">{{it.msg}}</el-col>
            <el-col :span="3" class="t_center">
              关键字：
              <span class="red">{{it.type}}</span>
            </el-col>
            <el-col :span="3">项目预算：{{it.money}}</el-col>
            <el-col :span="2">
              <i class="el-icon-location-outline"></i>
              {{it.address}}
            </el-col>
            <el-col :span="2" class="t_right">
              {{it.time}}
              <i class="el-icon-time"></i>
            </el-col>
          </el-row>
          <div class="next">
            <span class="el-icon-arrow-down"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="h2_part8">
      <div class="home2_titlle_show_sy">
        <div class="part_title_e">
          <div class="left">
            <span>行业动态</span>
            <span>Industry News</span>
          </div>
        </div>
        <div class="right">
          <div class="link">更多...</div>
        </div>
      </div>

      <div class="h2_part8_box">
        <div class="left">
          <div class="new_box_item_sy" v-for="(t,i) in msgList(3,newMsg)" :key="i">
            <div class="left_img">
              <img :src="require('@assets/img/'+t.img)" alt />
            </div>
            <div class="right_content">
              <div class="title no_wrap">{{t.title}}</div>
              <p>{{t.p}}</p>
              <el-row>
                <el-col :span="5" class="blue">{{t.type}}</el-col>
                <el-col :span="7">行业：{{t.hy}}</el-col>
                <el-col :span="6">{{t.address}}</el-col>
                <el-col :span="6">{{t.date}}</el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="paihang_list_com_sy">
            <div class="title">阅读排行</div>
            <p class="no_wrap" v-for="(it,i) in msgList(15,readMsg)" :key="i">
              <span>{{i+1}}</span>
              {{it.text}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="h2_part9">
      <div class="home2_titlle_show_sy">
        <div class="part_title_e">
          <div class="left">
            <span>最新合作</span>
            <span>Latest cooperation</span>
          </div>
        </div>
        <div class="right">
          <div class="link">更多...</div>
        </div>
      </div>
      <div class="h2_part9_box">
        <div  class="h2_part9_item" v-for="(t,i) in msgList(6,infoMsg)" :key="i">
          <div class="info_item_co_sy">
            <div class="state_p">{{t.state[0]}}</div>
            <div class="img">
              <img :src="require('@assets/img/'+t.img)" alt />
            </div>
            <div class="box">
              <div class="title">{{t.title}}</div>
              <el-row class="info">
                <el-col :span="16">行业：{{t.hy}}</el-col>
                <el-col :span="8">地址：{{t.address}}</el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h2_part8">
      <div class="home2_titlle_show_sy">
        <div class="part_title_e">
          <div class="left">
            <span>行业动态</span>
            <span>Industry News</span>
          </div>
        </div>
        <div class="right">
          <div class="link">更多...</div>
        </div>
      </div>

      <div class="h2_part8_box">
        <div class="left">
          <div class="new_box_item_sy" v-for="(t,i) in msgList(3,newMsg)" :key="i">
            <div class="left_img">
              <img :src="require('@assets/img/'+t.img)" alt />
            </div>
            <div class="right_content">
              <div class="title no_wrap">{{t.title}}</div>
              <p>{{t.p}}</p>
              <el-row>
                <el-col :span="5" class="blue">{{t.type}}</el-col>
                <el-col :span="7">行业：{{t.hy}}</el-col>
                <el-col :span="6">{{t.address}}</el-col>
                <el-col :span="6">{{t.date}}</el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="paihang_list_com_sy">
            <div class="title">阅读排行</div>
            <p class="no_wrap" v-for="(it,i) in msgList(15,readMsg)" :key="i">
              <span>{{i+1}}</span>
              {{it.text}}
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="h2_part9">
      <div class="home2_titlle_show_sy">
        <div class="part_title_e">
          <div class="left">
            <span>最新直播</span>
            <span>Latest live broadcast</span>
          </div>
        </div>
        <div class="right">
          <div class="link">更多...</div>
        </div>
      </div>
      <div class="h2_part9_box">
        <div  class="h2_part9_item" v-for="(t,i) in msgList(6,infoMsg)" :key="i">
          <div class="info_item_co_sy">
            <div class="state_p">{{t.state[2]}}</div>
            <div class="img">
              <img :src="require('@assets/img/'+t.img)" alt />
            </div>
            <div class="box">
              <div class="title">{{t.title}}</div>
              <el-row class="info">
                <el-col :span="16">行业：{{t.hy}}</el-col>
                <el-col :span="8">地址：{{t.address}}</el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { itemList, selfHelpList } from "@/common/const.js";
import { DataFor } from "@utils/common";
import * as Commodity from "@/common/commodity";
import BigGoods from "@components/Goods/BigGoods";
import SmallGoods from "@components/Goods/SmallGoods";
import GoodsLunboS from "@components/OverAll/GoodsLunboS";
export default {
  components: {
    BigGoods,
    SmallGoods,
    GoodsLunboS
  },
  computed: {
    tableList() {
      return DataFor(12, this.tableListMoney);
    },
    part3List() {
      return DataFor(6, [Commodity.Part3List[6]]);
    },
    commodityList() {
      return DataFor(4, [Commodity.HomeCommodity[0]]);
    }
  },
  data() {
    return {
      itemList: itemList,
      selfHelpList: selfHelpList,
      activeName: "first",
      tableListMoney: Commodity.tableListMoney,
      findUser: Commodity.findUser,
      newMsg: Commodity.newMsg,
      readMsg: [
        {
          text:
            "资讯信息标题资讯信息标题资讯信息标题资讯信息标题资讯信息标题资讯信息",
          url: "/"
        }
      ],
      infoMsg: [
        {
          img: "info.png",
          state: ["正在招募", "正在进行", "正在直播"],
          title: "合作信息标题合作信息标题合作信",
          hy: "综合布线系统",
          address: "郑州"
        }
      ]
    };
  },
  methods: {
    /**
     * n  : 需要循环的次数
     * el : 循环的内容 type:Arrty
     *  不用纠结这个东西是干嘛的
     *  只需要根据后台给的数据修改组件的中对应的属性
     *  如果要看具体的内容，先找循环了什么内容 el
     */
    msgList(n, el) {
      return DataFor(n, el);
    }
  },
  
};
</script>
<style lang="less">
.info_item_co_sy {
  position:relative;
  box-shadow:0px 3px 6px rgba(0,0,0,0.16);
  .state_p{
    position:absolute;
    left: 0;
    top: 10px;
    background-color: #00966E;
    color: #fff;
    border-radius: 0 20px 20px 0;
    padding: 4px 20px;
  }
  .img {
    width: 100%;
    img{
      width: 100%;
    }
  }
  .box{
    padding: 8px 20px;
    background-color: #fff;
    .title{
      font-size: 16px;
      padding-bottom: 12px;
    }
    .info{
      font-size: 14px;
    }
  }
}
.h2_part9 {
  background-color: #f4f4f4;
  .h2_part9_box {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 8px 0;
    color: #333;
    .h2_part9_item{
      width: 32%;
      &:nth-child(n+1):nth-child(-n+6){
        margin-bottom: 20px;
      }
    }
  }
}
#home2 {
  width: 100%;
  padding-bottom: 300px;
  .h2_part8_box {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    color: #333;
    .left {
      width: 800px;
    }
    .right {
      width: 386px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    }
  }
  .h2_part7 {
    background-color: #f4f4f4;
    padding-bottom: 40px;
  }
  .h2_part6 {
    .shop {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      padding: 10px 0;
      justify-content: space-between;
      .left {
        img {
          width: 270px;
          height: 125px;
        }
      }
      .small_goods {
        width: 220px;
      }
    }
    .h2_part6_box {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .left {
        width: 300px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
        .img {
          padding: 3px;
          background-color: #fff;
          img {
            width: 294px;
          }
        }
      }
      .right {
        width: 890px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .bottom10:nth-child(-n + 3):nth-child(n + 1) {
          margin-bottom: 10px;
        }
      }
    }
  }
  .text_right {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;
    padding-top: 20px;
  }
}
</style>
