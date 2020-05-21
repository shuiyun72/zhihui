<template>
  <div>
    <div id="leftside">
      <div class="bs">
        <div class="is_active item_box">
          <div class="item">
            采购
            <br />订单
          </div>
          <div class="span">10</div>
        </div>
        <router-link :to="{path:'/steps2'}" tag="div" class="is_active item_box">
          <!-- <div class="is_active item_box"> -->
          <div class="item">
            我的
            <br />购物车
          </div>
          <!-- </div> -->
        </router-link>
        <div class="item_box">
          <div class="item">
            添加
            <br />尾货
          </div>
        </div>
        <div class="item_box">
          <div class="item_last">
            立即
            <br />发货
          </div>
          <div class="span">10</div>
        </div>
      </div>
      <div class="left_add bs" v-if="toUrl == ''">
        立即
        <br />发布
      </div>
      <router-link v-else tag="div" :to="{path:'/'+toUrl+'/publish'}" class="left_add bs">
        <!-- <div class="left_add bs"> -->
        立即
        <br />发布
        <!-- </div> -->
      </router-link>
    </div>
    <div id="rightside">
      <div
        class="connection_qq_com_sy bs"
        v-show="isShow"
        @mouseenter="showConnectionS"
        @mouseleave="showConnectionH"
      >
        <div>
          <i class="iconfont icon-zuojitianchong"></i>
          <span>客服电话：400-118-6800</span>
        </div>
        <div>
          <i class="iconfont icon-custom-service"></i>
          <span>
            在线客服：
            <svg class="iconfont" aria-hidden="true" :style="W(24)">
              <use xlink:href="#icon-QQ" />
            </svg>
          </span>
        </div>
        <div>
          <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_helihuajianyi"></i>
          <span>
            建议反馈：
            <span class="link">前往填写内容</span>
          </span>
        </div>
      </div>
      <transition name="fade">
        <div class="part1" v-show="isShowRightPart1 && isShowRightPart1S">
          <div
            class="item_box"
            v-for="(t,i) in sideRightNav"
            :key="i+'xx'"
            :class="{'is_active':t.active}"
          >
            <div class="item" @click="routeTo(t,i)">
              {{t.text1}}
              <br />
              {{t.text2}}
            </div>
          </div>
        </div>
      </transition>
      <div class="part2" @mouseenter="showConnectionS" @mouseleave="showConnectionH">
        <i class="el-icon-chat-line-round"></i>
        <div class="green">
          联系
          <br />我们
        </div>
      </div>
      <div class="part3">
        <i class="el-icon-picture"></i>
      </div>
      <div class="part3" @click="toTop">
        <i class="el-icon-upload2"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      sideRightNav: [
        { text1: "平台", text2: "首页", route: "/home/home", active: 0 },
        { text1: "尾货", text2: "专场", route: "/tailCargo/home", active: 0 },
        { text1: "项目", text2: "信息", route: "/project/home", active: 0 },
        { text1: "企业", text2: "入驻", route: "/enterprise/home", active: 0 },
        { text1: "众包", text2: "合作", route: "/crowds/home", active: 0 },
        { text1: "达人", text2: "活动", route: "/expert/home", active: 0 },
        {
          text1: "弱电",
          text2: "社区",
          route: "/lightCurrent/home",
          active: 0
        },
        { text1: "个人", text2: "中心", route: "/personal/admin", active: 0 }
      ],
      isShowRightPart1S: false,
      setTimeoutTimer:null
    };
  },
  mounted() {
    let thisRoute = this.$route.path.split("/")[1];
    if (thisRoute != "playing" && thisRoute != "vote") {
      let indss = _.findIndex(this.sideRightNav, res => {
        return res.route.split("/")[1] == thisRoute;
      });
      if(this.sideRightNav[indss]){
        this.sideRightNav[indss].active = 1;
      }
    }
    window.addEventListener("scroll", this.windowScroll);
  },
  props: {
    isShowRightPart1: {
      default: true
    },
    toUrl: {
      default: ""
    }
  },
  methods: {
    windowScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop <= 400) {
        this.isShowRightPart1S = false;
      } else {
        this.isShowRightPart1S = true;
      }
    },
    showConnectionS() {
      this.isShow = true;
      clearTimeout(this.setTimeoutTimer)
    },
    showConnectionH() {
      this.setTimeoutTimer = setTimeout(()=>{
        this.isShow = false;
      },600) 
    },
    routeTo(t, i) {
      if (t.route != this.$route.path) {
        this.$router.push({ path: t.route });
      }
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 20;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 20);
    }
  }
};
</script>

<style scoped lang="less">
#leftside,
#rightside {
  width: 50px;
  font-size: 12px;
  position: fixed;
  left: calc(50vw);
  text-align: center;
  z-index: 10;
  box-sizing: border-box;
  cursor: pointer;
}
#leftside {
  bottom: 50px;
  margin-left: -690px;
  .bs {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  }
  .left_add {
    width: 50px;
    padding: 10px 0;
    line-height: 14px;
    margin-top: 30px;
    border-radius: 50%;
    background-color: #f88f00;
    color: #fff;
  }
  .item_box {
    position: relative;
    width: 50px;
    padding: 10px 7px 0;
    line-height: 14px;
    color: #000;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    .item_last {
      padding-bottom: 10px;
    }
    .item {
      border-bottom: 1px solid #000;
      padding-bottom: 10px;
      box-sizing: border-box;
    }
    &.is_active {
      .item {
        border-bottom: 1px solid #fff;
      }
      color: #fff;
      background: rgba(53, 192, 198, 1);
    }
    &.is_active ~ .is_active {
      .item {
        border-bottom: 1px solid rgba(53, 192, 198, 1);
      }
    }
    .span {
      position: absolute;
      top: 50%;
      right: -20px;
      border-radius: 50%;
      font-size: 10px;
      border: 1px solid #f00;
      color: #f00;
      padding: 2px;
      margin-top: -20px;
      transform: scale(0.6);
    }
  }
}
#rightside {
  bottom: 50px;
  margin-left: 620px;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .part1 {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
    .item_box + .item_box {
      .item {
        border-top: 1px solid #35c0c6;
      }
    }
    .item_box.is_active + .item_box,
    .item_box:hover + .item_box {
      .item {
        border-top: 1px solid transparent;
      }
    }
    .item_box {
      width: 50px;
      padding: 0px 9px 10px;
      line-height: 14px;
      color: #000;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 1);
      .item_last {
        padding-top: 10px;
        color: #35c0c6;
      }
      .item {
        padding-top: 10px;
        box-sizing: border-box;
        color: #35c0c6;
      }
      &.is_active,
      &:hover {
        .item {
          color: #fff;
        }
        background: #35c0c6;
      }
    }
  }
  .part2 {
    width: 50px;
    height: 97px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
    border-radius: 30px;
    margin-top: 20px;
    line-height: 14px;
    i {
      font-size: 26px;
      padding: 14px 0 10px;
    }
    .green {
      color: #01b0b7;
    }
  }
  .part3 {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
    border-radius: 50%;
    margin-top: 20px;
    font-size: 26px;
    line-height: 50px;
    color: #01b0b7;
  }
}
.connection_qq_com_sy {
  width: 294px;
  height: 190;
  position: absolute;
  bottom: 100px;
  left: -310px;
  box-sizing: border-box;
  padding: 40px 20px;
  background-color: #fff;
  color: #999;
  & > div {
    text-align: left;
    &:nth-child(1) {
      padding-bottom: 20px;
    }
    &:nth-child(2) {
      padding-bottom: 30px;
    }
    i {
      font-size: 20px;
      margin-right: 10px;
      color: #333;
    }
  }
}
</style>
