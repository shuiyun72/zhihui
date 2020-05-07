<template>
  <div class="project_home">
    <Side></Side>
    <div class="light_body wm">
      <div class="light_title wm jcs boxs">
        <div class="left">
          <div class="box">
            <router-link :to="{path:'/lightCurrent/home'}" tag="div" class="li pointer">附近动态</router-link>
            <router-link
              :to="{path:'/lightCurrent/child2'}"
              tag="div"
              class="li pointer active"
            >我发布的</router-link>
            <router-link :to="{path:'/lightCurrent/child3'}" tag="div" class="li pointer">我参与的</router-link>
            <router-link :to="{path:'/lightCurrent/child4'}" tag="div" class="li pointer">我关注的</router-link>
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
              <el-breadcrumb-item>我发布的社区信息详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
      </div>
      <div class="h16"></div>
      <div class="part1 wm boxs bs">
        <div class="title_card_com_sy jcs">
          <div class="left">
            <div class="img">
              <img :src="require('@assets/img/xiaoya.png')" alt />
            </div>
            <div class="text">
              <h2>小美女</h2>
              <p>
                <span>2019-10-12 16:00</span>
                <span>行业：计算机网络系统</span>
              </p>
            </div>
          </div>
          <!-- <div class="right">
            <el-button class="btn_p5 btn_ra" type="warning">已关注</el-button>
            <el-button class="btn_p5 btn_ra" type="info" @click="reportDia = true">举报</el-button>
          </div> -->
        </div>
        <div
          class="p_text"
        >二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广二七广场全二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广二七广场全二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广场全是人啊，二七广二七广场全是人啊，二七广场全是人啊，场全是人啊，，二七广场全是人啊啊，二七广场 全是人啊 ….</div>
        <div class="img_box">
          <div class="img big t_center">
            <img :src="require('@assets/img/fjbig.jpg')" alt />
          </div>
        </div>
        <div class="img_box">
          <div class="img big t_center">
            <img :src="require('@assets/img/fjbig.jpg')" alt />
          </div>
        </div>
        <div class="img_box">
          <div class="img big t_center">
            <img :src="require('@assets/img/fjbig.jpg')" alt />
          </div>
        </div>
        <div class="star_com_sy jcs">
          <div class="left hidden">
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
              <i class="iconfont icon-zan1 none"></i>1.3万
            </span>
          </div>
        </div>
        <div class="h16"></div>
        <div class="table_img">
          <el-row class="table_img_text_sy">
            <el-col :span="4">
              <img :src="require('@assets/img/t1.jpg')" alt />
              <span>专业课</span>
            </el-col>
            <el-col :span="14">评论内容：这么快都结束了吗？？</el-col>
            <el-col :span="6" class="t_right">
              2019-10-12 14:30
              <el-button class="btn_p5" type="info">回复</el-button>
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
              <el-button class="btn_p5" type="info">回复</el-button>
            </el-col>
          </el-row>
        </div>
        <div class="detial3_say">
          <div class="textarea_light">
            <el-input type="textarea" placeholder="赶快说是你的感受吧……"></el-input>
          </div>
          <div class="t_right">
            <el-button class="blue_btn btn_p3">回复</el-button>
          </div>
        </div>
      </div>
      <!-- <div class="more_icon">
        <i class="el-icon-arrow-down"></i>
      </div>-->
    </div>
    <el-dialog title="举报" :visible.sync="reportDia" width="400px" class="playing_dialog_com_sy">
      <div class="jubao_pl_com_sy light">
        <el-checkbox-group v-model=" reportList">
          <el-checkbox label="内容包含色情"></el-checkbox>
          <el-checkbox label="内容包含欺诈信息"></el-checkbox>
          <el-checkbox label="内容包含暴力恐怖信息"></el-checkbox>
          <el-checkbox label="内容包含政治敏感信息"></el-checkbox>
          <el-checkbox label="内容包含赌博信息"></el-checkbox>
          <el-checkbox label="内容可能包含谣言信息"></el-checkbox>
          <el-checkbox label="内容包含不明或“钓鱼”链接"></el-checkbox>
          <el-checkbox label="内容包含其它有害信息"></el-checkbox>
        </el-checkbox-group>
        <div class="photo">
          <span>上传截图：</span>
          <el-button class="st">选择图片</el-button>
        </div>
        <p class="p">注：提交投诉行为，需确定投诉信息有害，经智汇优库平台鉴定后判断并处理，除 去法律规定的情形外，平台不会向任何第三方透露举报者的个人信息。</p>
        <div class="pl_submit">
          <el-button @click="reportDia = false" class="btn_p4">提交</el-button>
        </div>
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
      reportDia: false,
      reportList: []
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less">
.person_info_crad_sy {
  padding: 20px 30px;
  &.mt20 {
    margin: 20px 0;
  }
  .left {
    width: 60px;
  }
  .right {
    width: 94%;
    .part1_p {
      .l {
        padding-top: 10px;
        font-size: 16px;
      }
      border-bottom: 1px solid #ccc;
      border-radius: 0;
      padding: 6px 0px 10px 20px;
    }
    .part2_p {
      color: #666;
      .l {
        padding: 10px 20px;
        p {
          line-height: 26px;
        }
      }
      .r {
        padding-top: 70px;
      }
    }
  }
}
</style>
