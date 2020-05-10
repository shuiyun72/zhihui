<template>
  <div id="home2">
    <div class="bg_img_top">
      <div class="click">点击竞价此展示位</div>
    </div>
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
    <div class="hui_box_bg bs">
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
        <div class="d_inflex">
          <div class="item is_active">最近</div>
          <div class="item">最新</div>
        </div>
        <div class="link">更多...</div>
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
          <GoodsLunboS>
            <div class="d_flex">
              <SmallGoods :smallGoodsItem="item" v-for="(item,index) in DataFor(5,[commodityList[0]])" :key="index"></SmallGoods>
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
      <div class="h2_part7_box wm">
        <div class="table_msg_e_address">
          <div class="pro">
            <span class="el-icon-arrow-up"></span>
          </div>
          <el-row v-for="(it,i) in DataFor(16,findUser)" :key="i" class="item">
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

    <div class="h2_part8a">
      <div class="home2_titlle_show_sy">
        <div class="part_title_e">
          <div class="left">
            <span>名企汇</span>
            <span>Famous enterprise</span>
          </div>
        </div>
        <div class="right">
          <div class="link">更多...</div>
        </div>
      </div>
      <div class="h2_part8a_box">
        <div class="img bs" v-for="(t,i) in DataFor(25,[{img:'mqh.png'}])" :key="i">
          <img :src="require('@assets/img/'+t.img)" alt />
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
          <div class="new_box_item_sy" v-for="(t,i) in DataFor(3,newMsg)" :key="i">
            <div class="left_img">
              <img :src="require('@assets/img/'+t.img)" alt />
            </div>
            <div class="right_content">
              <div class="title no_wrap">{{t.title}}</div>
              <p class="tin">{{t.p}}</p>
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
            <p class="no_wrap" v-for="(it,i) in DataFor(15,readMsg)" :key="i">
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
        <div class="h2_part9_item" v-for="(t,i) in DataFor(8,infoMsg)" :key="i">
          <div class="info_item_co_sy">
            <div class="state_p">{{t.state[0]}}</div>
            <div class="img">
              <img :src="require('@assets/img/'+t.img)" alt />
            </div>
            <div class="box">
              <div class="title">{{t.title}}</div>
              <p>行业：{{t.hy}}</p>
              <el-row class="info">
                <el-col :span="16">地址：{{t.address}}</el-col>
                <el-col :span="8">{{t.date}}</el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h2_part11">
      <div class="home2_titlle_show_sy">
        <div class="part_title_e">
          <div class="left">
            <span>最新活动</span>
            <span>Latest cooperation</span>
          </div>
        </div>
        <div class="right">
          <div class="link">更多...</div>
        </div>
      </div>
      <div class="h2_part11_box">
        <div class="part11_1">
          <div class="info_item_co_sy big">
            <div class="state_p">正在进行</div>
            <div class="img">
              <img :src="require('@assets/img/hylog.png')" alt />
            </div>
            <div class="box">
              <div class="title">太原市孙天过轨信息科技有限噶客户答谢会</div>
              <p>活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容……</p>
              <el-row class="info">
                <el-col :span="8" class="t_left">行业：综合布线系统</el-col>
                <el-col :span="8" class="t_center">地址：郑州</el-col>
                <el-col :span="8" class="t_right">2020-04-15</el-col>
              </el-row>
            </div>
          </div>
          <div class="part11_1_right bs">
            <div class="table_wuyu_com_sy">
              <el-row v-for="(t,i) in DataFor(13,['infoMsg'])" :key="i">
                <el-col :span="1" class="t_right">
                  <i class="iconfont icon-dian"></i>
                </el-col>
                <el-col :span="12" class="no_wrap">郑州终于看完了科技有限公司客户答谢会…</el-col>
                <el-col :span="5">综合布线系统</el-col>
                <el-col :span="2">郑州</el-col>
                <el-col :span="4">2020-02-15</el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="h2_part11_item">
          <div class="bs" v-for="(t,i) in DataFor(3,infoMsg)" :key="i">
            <div class="info_item_co_sy">
              <div class="state_p">{{t.state[1]}}</div>
              <div class="img">
                <img :src="require('@assets/img/'+t.img)" alt />
              </div>
              <div class="box">
                <div class="title">{{t.title}}</div>
                <p>行业：{{t.hy}}</p>
                <el-row class="info">
                  <el-col :span="16">地址：{{t.address}}</el-col>
                  <el-col :span="8">{{t.date}}</el-col>
                </el-row>
              </div>
            </div>
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
      <div class="h2_part9_box part12">
        <div class="h2_part9_item" v-for="(t,i) in DataFor(6,infoMsg)" :key="i">
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
      return this.DataFor(12, this.tableListMoney);
    },
    part3List() {
      return this.DataFor(6, [Commodity.Part3List[6]]);
    },
    commodityList() {
      return this.DataFor(4, [Commodity.HomeCommodity[0]]);
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
          address: "郑州",
          date: "2020-05-25"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less">

</style>
