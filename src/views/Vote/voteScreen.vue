<template>
  <div class="vote_home">
    <Side></Side>
    <div class="bg_img_top"></div>
    <div class="vote_body wm">
      <div class="title_Progress">
        <div class="left">
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/vote' }">投票频道</el-breadcrumb-item>
            <el-breadcrumb-item>2019最美汽车排行投票</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="vote_detail_body">
        <div class="take_in">
          <div class="p1 jcs">
            <div class="item">
              <h2>80</h2>
              <p>参与者</p>
            </div>
            <div class="item">
              <h2>66021</h2>
              <p>投票数</p>
            </div>
            <div class="item">
              <h2>589032</h2>
              <p>访问量</p>
            </div>
          </div>
          <div class="p2 jcs">
            <div class="orange title">2019最美汽车排行投票</div>
            <div class="time t_center">
              <span v-if=" outTime > 0">
                投票结束倒计时：
                <span class="orange">0天0小时0分{{outTime}}秒</span>
              </span>
              <span class="red" v-else>投票已结束</span>
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
          <div class="p3">
            <el-input placeholder="请输入内容" v-model="input2">
              <template slot="append">搜索</template>
            </el-input>
          </div>
        </div>
        <div class="vote_content jcs">
          <div class="left_l">
            <div class="vote_title v_d jcs bgfff">
              <div class="slot">
                <span class="active">默认排序</span>
                <span>热度排序</span>
              </div>
            </div>
            <div class="show_list jcs bgfff">
              <div class="item">
                <div class="card_vote_com_sy bs">
                  <div class="p0 jcs">
                    <div class="img">
                      <img :src="require('@assets/img/evm.jpg')" alt />
                    </div>
                    <div class="text bgfff">
                      <p>投票结束时间：</p>
                      <p>2019-12-30</p>
                      <p class="pb">12:00:00</p>
                      <p>仅限微信用户扫码</p>
                      <p>进入投票或分享！</p>
                    </div>
                  </div>
                  <div class="p2 jcs">
                    <div class="l">12号 海达队</div>
                    <div class="r">
                      <i class="iconfont icon-zhuxingtu"></i>
                      <span class="orange">5678票</span>
                    </div>
                  </div>
                  <div class="p3">投票</div>
                </div>
              </div>
              <div class="item" v-for="(t,i) in 11" :key="i+'t'">
                <div class="card_vote_com_sy bs">
                  <div class="p1">
                    <div class="l_t"></div>
                    <router-link :to="{path:'/vote/prize'}">
                      <img :src="require('@assets/img/car.jpg')" alt />
                    </router-link>
                  </div>
                  <div class="p2 jcs">
                    <div class="l">12号 海达队</div>
                    <div class="r">
                      <i class="iconfont icon-zhuxingtu"></i>
                      <span class="orange">5678票</span>
                    </div>
                  </div>
                  <div class="p3">投票</div>
                </div>
              </div>
            </div>
            <div class="foot_more bgfff">
              <i class="el-icon-caret-bottom"></i>
            </div>
          </div>
          <div class="right_l">
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
  </div>
</template>

<script>
import Side from "@components/Side.vue";
import { addressList1 } from "@const";
export default {
  components: { Side },
  mounted() {
    let timer = setInterval(() => {
      if (this.outTime > 0) {
        --this.outTime;
      } else {
        clearInterval(timer);
      }
    }, 1000);
  },
  data() {
    return {
      addressList: addressList1,
      addressModel: [],
      input2: "",
      outTime: 20,
      infoMsg: [
        {
          img: "info.png",
          state: ["正在招募", "正在进行", "正在直播", "直播结束"],
          title: "视频监控最佳设计奖投票",
          hy: "综合布线系统",
          date: "结束时间：2020-05-25 24:00"
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
