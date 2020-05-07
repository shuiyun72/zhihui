<template>
  <div class="project_home">
    <Side></Side>
    <div class="light_body wm">
      <div class="light_title wm jcs boxs">
        <div class="left">
          <div class="box">
            <router-link :to="{path:'/lightCurrent/home'}" tag="div" class="li pointer">附近动态</router-link>
            <router-link :to="{path:'/lightCurrent/child2'}" tag="div" class="li pointer">我发布的</router-link>
            <router-link :to="{path:'/lightCurrent/child3'}" tag="div" class="li pointer">我参与的</router-link>
            <router-link
              :to="{path:'/lightCurrent/child4'}"
              tag="div"
              class="li pointer active"
            >我关注的</router-link>
            <router-link :to="{path:'/lightCurrent/child5'}" tag="div" class="li pointer">我收藏的</router-link>
          </div>
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
      <div class="wmc">
        <div class="title_Progress">
          <div class="left">
            <el-breadcrumb separator=">">
              <el-breadcrumb-item :to="{ path: '/lightCurrent' }">弱电社区</el-breadcrumb-item>
              <el-breadcrumb-item>我关注的大咖</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
      </div>
      <div class="person_info_crad_sy bsr mt20 jcs">
        <div class="left">
          <img :src="require('@assets/img/t3.jpg')" alt />
        </div>
        <div class="right">
          <div class="part1_p jcs">
            <div class="l">昵称：零度</div>
            <div class="r">
              <el-button class="btn_p6r">进入主页</el-button>
              <el-button class="btn_p6r">进入店铺</el-button>
            </div>
          </div>
          <div class="part2_p">
            <div class="box jcs">
              <div class="l">
                <p>单位名称：河南天天科技有限公司</p>
                <p>所属行业：综合布线系统、消防系统、对讲机系统</p>
                <p>地址：郑州市</p>
              </div>
              <!-- <div class="share r">
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
              </div>-->
            </div>
          </div>
        </div>
      </div>
      <div class="part1 wm boxs bs">
        <div class="title_card_com_sy jcs">
          <div class="left">
            <router-link tag="div" class="img" :to="{path:'/lightCurrent/detail'}">
              <img :src="require('@assets/img/xiaoya.png')" alt />
            </router-link>
            <div class="text">
              <h2>郑州二七集团</h2>
              <p>
                <span>2019-10-12 16:00</span>
                <span>行业：计算机网络系统</span>
              </p>
            </div>
          </div>
          <!-- <div class="right">
            <el-button class="btn_p5 btn_ra" type="warning">已关注</el-button>
            <el-button class="btn_p5 btn_ra" type="info">举报</el-button>
          </div>-->
        </div>
        <div
          class="p_text"
        >二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广二七广场全是人啊，二七广场全是人啊，场全是人啊，二七广场全是人啊啊，二七广场 二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广二七广场全是人啊，二七广场全是人啊，场全是人啊，二七广场全是人啊啊，二七广场 二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广二七广场全是人啊，二七广场全是人啊，场全是人啊，二七广场全是人啊啊，二七广场 全是人啊 ….</div>
        <div class="img_box jcs">
          <div class="img">
            <img :src="require('@assets/img/fj1.jpg')" alt />
          </div>
          <div class="img">
            <img :src="require('@assets/img/fj1.jpg')" alt />
          </div>
          <div class="img">
            <img :src="require('@assets/img/fj1.jpg')" alt />
          </div>
        </div>
        <div class="table_img">
          <el-row class="table_img_text_sy">
            <el-col :span="4">
              <img :src="require('@assets/img/t1.jpg')" alt />
              <span>专业课</span>
            </el-col>
            <el-col :span="14">评论内容：这么快都结束了吗？？</el-col>
            <el-col :span="6" class="t_right">
              2019-10-12 14:30
              <el-button class="btn_p5 hidden" type="danger">删除</el-button>
            </el-col>
          </el-row>
          <el-row class="table_img_text_sy">
            <el-col :span="4">
              <img :src="require('@assets/img/t2.jpg')" alt />
              <span>零度</span>
            </el-col>
            <el-col :span="14">
              回复
              <span class="t_666">专业课的</span>评论内容：结束了吗？？
            </el-col>
            <el-col :span="6" class="t_right">
              2019-10-12 14:30
              <el-button class="btn_p5" type="danger">删除</el-button>
            </el-col>
          </el-row>
          <el-row class="table_img_text_sy" v-for="(t,i) in 3" :key="i+'img'">
            <el-col :span="4">
              <img :src="require('@assets/img/t1.jpg')" alt />
              <span>专业课</span>
            </el-col>
            <el-col :span="14">评论内容：这么快都结束了吗？？</el-col>
            <el-col :span="6" class="t_right">
              2019-10-12 14:30
              <el-button class="btn_p5 hidden" type="danger">删除</el-button>
            </el-col>
          </el-row>
        </div>
        <div class="star_com_sy jcs">
          <div class="left">
            <div class="star">
              <i class="iconfont icon-tubiaozhizuomoban"></i>
            </div>
            <div class="img" v-for="(t,i) in 10" :key="i+'img1'">
              <img :src="require('@assets/img/t2.jpg')" alt />
            </div>
          </div>
          <div class="right">
            <span>
              <i class="iconfont icon-xing-copy"></i>收藏
            </span>
            <span>
              <i class="iconfont icon-pinglun"></i>5
            </span>
            <span>
              <i class="iconfont icon-zan1"></i>1.3万
            </span>
          </div>
        </div>
      </div>
      <div class="part1 wm boxs bs">
        <div class="title_card_com_sy jcs">
          <div class="left">
            <router-link tag="div" class="img" :to="{path:'/lightCurrent/detail'}">
              <img :src="require('@assets/img/xiaoya.png')" alt />
            </router-link>
            <div class="text">
              <h2>郑州二七集团</h2>
              <p>
                <span>2019-10-12 16:00</span>
                <span>行业：计算机网络系统</span>
              </p>
            </div>
          </div>
          <!-- <div class="right">
            <el-button class="btn_p5 btn_ra" type="warning">已关注</el-button>
            <el-button class="btn_p5 btn_ra" type="info">举报</el-button>
          </div>-->
        </div>
        <div
          class="p_text"
        >二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广二七广场全是人啊，二七广场全是人啊，场全是人啊，二七广场全是人啊啊，二七广场 二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广二七广场全是人啊，二七广场全是人啊，场全是人啊，二七广场全是人啊啊，二七广场 二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广二七广场全是人啊，二七广场全是人啊，场全是人啊，二七广场全是人啊啊，二七广场 全是人啊 ….</div>
        <div class="img_box jcs">
          <div class="img">
            <img :src="require('@assets/img/fj1.jpg')" alt />
          </div>
          <div class="img">
            <img :src="require('@assets/img/fj1.jpg')" alt />
          </div>
          <div class="img">
            <img :src="require('@assets/img/fj1.jpg')" alt />
          </div>
        </div>
        <div class="star_com_sy jcs">
          <div class="left">
            <div class="star">
              <i class="iconfont icon-tubiaozhizuomoban"></i>
            </div>
            <div class="img" v-for="(t,i) in 10" :key="i+'img1'">
              <img :src="require('@assets/img/t2.jpg')" alt />
            </div>
          </div>
          <div class="right">
            <span>
              <i class="iconfont icon-xing-copy"></i>收藏
            </span>
            <span>
              <i class="iconfont icon-pinglun"></i>5
            </span>
            <span>
              <i class="iconfont icon-zan1"></i>1.3万
            </span>
          </div>
        </div>
      </div>
      <div class="part1 wm boxs bs">
        <div class="title_card_com_sy jcs">
          <div class="left">
            <router-link tag="div" class="img" :to="{path:'/lightCurrent/detail'}">
              <img :src="require('@assets/img/xiaoya.png')" alt />
            </router-link>
            <div class="text">
              <h2>郑州二七集团</h2>
              <p>
                <span>2019-10-12 16:00</span>
                <span>行业：计算机网络系统</span>
              </p>
            </div>
          </div>
          <!-- <div class="right">
            <el-button class="btn_p5 btn_ra" type="warning">已关注</el-button>
            <el-button class="btn_p5 btn_ra" type="info">举报</el-button>
          </div>-->
        </div>
        <div
          class="p_text"
        >二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广二七广场全是人啊，二七广场全是人啊，场全是人啊，二七广场全是人啊啊，二七广场 二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广二七广场全是人啊，二七广场全是人啊，场全是人啊，二七广场全是人啊啊，二七广场 二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广二七广场全是人啊，二七广场全是人啊，场全是人啊，二七广场全是人啊啊，二七广场 全是人啊 ….</div>
        <div class="img_box jcs">
          <div class="img">
            <img :src="require('@assets/img/fj1.jpg')" alt />
          </div>
          <div class="img">
            <img :src="require('@assets/img/fj1.jpg')" alt />
          </div>
          <div class="img">
            <img :src="require('@assets/img/fj1.jpg')" alt />
          </div>
        </div>
        <div class="star_com_sy jcs">
          <div class="left">
            <div class="star">
              <i class="iconfont icon-tubiaozhizuomoban"></i>
            </div>
            <div class="img" v-for="(t,i) in 10" :key="i+'img1'">
              <img :src="require('@assets/img/t2.jpg')" alt />
            </div>
          </div>
          <div class="right">
            <span>
              <i class="iconfont icon-xing-copy"></i>收藏
            </span>
            <span>
              <i class="iconfont icon-pinglun"></i>5
            </span>
            <span>
              <i class="iconfont icon-zan1"></i>1.3万
            </span>
          </div>
        </div>
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
      reportDia: false,
      reportList: []
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less">
</style>
