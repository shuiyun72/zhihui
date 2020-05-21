<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch></HeaderSearch>
    </div>
    <HeaderNav :HeaderNav="'企业名录'"></HeaderNav>
    <Side></Side>

    <div id="firm">
      <div class="bg_img_top">
        <CarouselLb></CarouselLb>
        <div class="click">点击竞价此展示位</div>
      </div>
      <div class="firm_num_box_sy">
        <div class="firm_num_box">
          <div class="item">
            <i class="iconfont icon-gaiicon-"></i>
            <div class="right">
              <p>企业入驻</p>
              <p>5000+</p>
            </div>
          </div>

          <div class="item">
            <i class="iconfont icon-xiaoxi"></i>
            <div class="right">
              <p>服务对象</p>
              <p>16万+</p>
            </div>
          </div>
          <div class="item">
            <i class="iconfont icon-liulan"></i>
            <div class="right">
              <p>日均浏览</p>
              <p>2万+</p>
            </div>
          </div>
          <div class="item">
            <i class="iconfont icon-custom-service"></i>
            <div class="right">
              <p>客服人员</p>
              <p>7*16小时</p>
            </div>
          </div>
        </div>
      </div>
      <div class="frem_body">
        <div class="part1 jcs">
          <div class="select_box_com_sy left bs">
            <div class="item">
              <span class="title">角色选择：</span>
              <ul>
                <li class="is_active">全部</li>
                <li v-for="(tc,i) in DataFor(5,[{title:'1'}])" :key="i+'c'">品牌商</li>
              </ul>
              <!-- <span class="more">
              更多
              <i class="el-icon-caret-bottom"></i>
              </span>-->
            </div>
            <div class="item">
              <span class="title">行业选择：</span>
              <ul>
                <li class="is_active">全部</li>
                <li v-for="(tc,i) in DataFor(8,[{title:'1'}])" :key="i+'c'">品牌商商</li>
              </ul>
              <span class="more">
                更多
                <i class="el-icon-caret-bottom"></i>
              </span>
            </div>
            <div class="item">
              <span class="title">地区选择：</span>
              <ul>
                <li class="is_active">全部</li>
                <li v-for="(tc,i) in DataFor(12,[{title:'1'}])" :key="i+'c'">品牌</li>
              </ul>
              <span class="more">
                更多
                <i class="el-icon-caret-bottom"></i>
              </span>
            </div>
          </div>
          <div class="img_text_one_sy right bs">
            <div class="img">
              <img :src="require('@assets/img/ruzhu.png')" alt />
            </div>
            <router-link tag="div" class="item pointer" :to="{path:'/enterprise/info'}">
              <el-button>自助免费入驻</el-button>
            </router-link>
          </div>
        </div>
        <div class="part2 jcs wm">
          <div class="left">
            <div class="active">默认排序</div>
            <div>入驻时间</div>
            <div>当前距离</div>
          </div>
          <div class="right">
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
        <div class="part3 wm">
          <div class="xinxi_qiye_com_sy jcs md" v-for="i in 6" :key="i">
            <div class="left">
              <div class="img">
                <img :src="require('@assets/img/r1.png')" alt class="bs" />
              </div>
              <div class="text">
                <div class="title">河南海达之光通信设备有限公司</div>
                <div class="renzheng">
                  <span>
                    <img :src="require('@assets/img/r1.png')" alt />认证企业
                  </span>
                  <span>
                    <img :src="require('@assets/img/r2.png')" alt />信誉企业
                  </span>
                </div>
                <p>所属行业：综合布线系统</p>
                <p>主营范围：弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆，弱电线缆 ……</p>
                <p>所在地区：河南省 郑州市</p>
              </div>
            </div>
            <div class="right">
              <router-link :to="{path:'/enterprise/msg1'}">
                <el-button>进入主页</el-button>
              </router-link>
            </div>
          </div>
          <PageNum></PageNum>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderSearch from "@components/Header/HeaderSearch.vue";
import HeaderNav from "@components/Header/HeaderNav.vue";
import Side from "@components/Side.vue";
import PageNum from "@components/PageNum";
import CarouselLb from "@components/CarouselLb";
export default {
  components: { PageNum, HeaderTop, HeaderSearch, HeaderNav, Side,CarouselLb },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less">
</style>
