<template>
  <div class="project_home">
    <Side :toUrl="'crowds'"></Side>
    <div class="bg_img_top">
      <div class="click">点击竞价此展示位</div>
    </div>
    <div class="project_body wm">
      <div class="part1 jcs">
        <div class="item br">
          <p>共有项目</p>
          <span>654328</span>
        </div>
        <div class="item br">
          <p>在线查看</p>
          <span>27955</span>
        </div>
        <div class="item">
          <p>今日更新</p>
          <span>1328</span>
        </div>
      </div>
      <div class="title_for">
        <el-row>
          <el-col :span="10" :offset="8">
            您还没有绑定微信，不能第一时间收到通知
            <el-popover placement="top-start" width="160" trigger="click">
              <div class="crow_pop_body">
                <i class="iconfont icon-erweima"></i>
                <p>手机扫码关注订阅</p>
              </div>
              <el-button class="btn_p4" type="warning" round slot="reference">立即关注绑定</el-button>
            </el-popover>
          </el-col>

          <el-col :span="5" :offset="1">
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
      <div class="part2 wm jcs">
        <div class="item_card_com_sy c1 bs">
          <div class="left">
            <div class="title">开标预告</div>
            <p>
              <span>优质项目</span>
              <span>全国覆盖</span>
            </p>
            <p>
              <span>免费查询</span>
              <span>免费订阅</span>
            </p>
          </div>
          <div class="right">
            <div class="round"></div>
          </div>
        </div>
        <div class="item_card_com_sy c2 bs">
          <div class="left">
            <div class="title">招采信息</div>
            <p>
              <span>优质项目</span>
              <span>全国覆盖</span>
            </p>
            <p>
              <span>免费查询</span>
              <span>免费订阅</span>
            </p>
          </div>
          <div class="right">
            <div class="round"></div>
          </div>
        </div>
        <div class="item_card_com_sy c3 bs">
          <div class="left">
            <div class="title">评标结果</div>
            <p>
              <span>优质项目</span>
              <span>全国覆盖</span>
            </p>
            <p>
              <span>免费查询</span>
              <span>免费订阅</span>
            </p>
          </div>
          <div class="right">
            <div class="round"></div>
          </div>
        </div>
      </div>
      <div class="part3 bs">
        <div class="p3_p1 jcs">
          <div class="left">
            <div class="select_box_com_sy">
              <div class="item" v-for="(t,i) in DataFor(2,selectList)" :key="i">
                <span class="title">{{t.title}}：</span>
                <ul>
                  <li class="is_active">全部</li>
                  <li v-for="(tc,i) in DataFor(12,t.li)" :key="i+'c'">{{tc.address}}</li>
                </ul>
                <span class="more">
                  更多
                  <i class="el-icon-caret-bottom"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="right">
            <el-button class="blue_btn btn_p2" round>重置筛选</el-button>
          </div>
        </div>
        <div class="p3_p2">
          <span>关键字搜索：</span>
          <el-input class="input_p1 inline" size="mini"></el-input>
          <el-button class="blue_btn btn_p2" round>搜 索</el-button>
        </div>
      </div>
      <div class="ss wm"></div>
      <div class="part4 jcs">
        <router-link tag="div" :to="{path:'/project/list'}"  class="item_table_left_com_sy item bs"
          v-for="(t,i) in tableList"
          :key="i+'t'"
          :style="{'border-left-color':t.color}">
        <!-- <div
          class="item_table_left_com_sy item bs"
          v-for="(t,i) in tableList"
          :key="i+'t'"
          :style="{'border-left-color':t.color}"
        > -->
          <div class="title">
            <span :style="{'color':t.color}">{{t.title}}</span>
          </div>
          <div class="item_box">
            <el-row v-for="(tc,ic) in DataFor(19,t.children)" :key="i+ic+'t'">
              <el-col :span="20" class="text">{{tc.text}}</el-col>
              <el-col :span="4" class="address">
                <span class="orange">{{tc.address}}</span>
              </el-col>
            </el-row>
          </div>
          <div class="more">更多...</div>
        <!-- </div> -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
export default {
  components: { Side },
  mounted(){
    console.log("%c /project/home 页面的设计的很不错",'color:#0f0;')
  },
  data() {
    return {
      selectList: [
        {
          title: "地区选择",
          li: [
            {
              address: "郑州郑州",
              value: ""
            }
          ]
        }
      ],
      tableList: [
        {
          title: "附近項目",
          color: "#F88F00",
          children: [
            {
              text:
                "【长葛市】河南长葛市双洎河国家湿地公园河南长葛市双洎河国家湿地公园科普…",
              address: "河南省"
            }
          ]
        },
        {
          title: "最新项目",
          color: "#006CF9",
          children: [
            {
              text:
                "【长葛市】河南长葛市双洎河国家湿地公园河南长葛市双洎河国家湿地公园科普…",
              address: "广东省"
            }
          ]
        },
        {
          title: "最新招标",
          color: "#00DFF8",
          children: [
            {
              text:
                "【长葛市】河南长葛市双洎河国家湿地公园河南长葛市双洎河国家湿地公园科普…",
              address: "河南省"
            }
          ]
        },
        {
          title: "最新中标",
          color: "#815011",
          children: [
            {
              text:
                "【长葛市】河南长葛市双洎河国家湿地公园河南长葛市双洎河国家湿地公园科普…",
              address: "河南省"
            }
          ]
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less">
</style>
