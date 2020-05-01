<template>
  <div id="firm">
    <div class="bg_img_top">
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
          <el-button>自助免费入驻</el-button>
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
            <i class="iconfont icon-QQ"></i>
            <i class="iconfont icon-QQ"></i>
            <i class="iconfont icon-QQ"></i>
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
            <el-button>进入主页</el-button>
          </div>
        </div>
        <PageNum></PageNum>
      </div> 
    </div>
  </div>
</template>

<script>
import PageNum from "@components/PageNum";
export default {
  components: {PageNum},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less">
.frem_body {
  background-color: #f0f0f0;
  padding: 20px 0 40px;
  .part1 {
    width: 1200px;
    margin: 0 auto;
    .left {
      width: 940px;
      background-color: #fff;
    }
    .right {
      width: 240px;
    }
  }
  .part2 {
    background-color: #fff;
    padding: 6px 30px;
    box-sizing: border-box;
    margin-top: 20px;
    .left {
      div {
        display: inline-block;
        font-size: 16px;
        padding: 0 30px;
        &.active {
          color: #01b0b7;
        }
      }
    }
  }
  .part3 {
    padding: 40px;
    background-color: #fff;
    margin-top: 6px;
    .md{
      margin-bottom: 40px;
    }
  }
}

.xinxi_qiye_com_sy {
  .left {
    width: 800px;
    display: inline-flex;
    border-bottom: 1px dotted #666;
    .img {
      img {
        width: 190px;
        height: 190px;
      }
    }
    .text{
      margin-left: 40px;
      .title{
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 30px;
      }
      .renzheng{
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 10px;
        span{
          display: inline-block;
          margin-right: 40px;
          img{
            margin-right: 4px;
          }
        }
       
      }
       p{
          color: #999;
          font-size: 12px;
          margin-bottom: 30px;
        }
    }
  }
  .right{
    button{
      padding: 4px 20px;
      color: #fff;
      background-color: #E58E03;
      border-radius: 20px;
      font-size: 14px;
    }
  }
}
.img_text_one_sy {
  text-align: center;
  background-color: #fff;
  button {
    background-color: #01b0b7;
    color: #fff;
    padding: 4px 30px;
    border-radius: 10px;
  }
}
.firm_num_box_sy {
  padding: 30px 0;
  .firm_num_box {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .item {
    display: inline-flex;
    i {
      font-size: 50px;
      margin-right: 16px;
      line-height: 72px;
    }
    p {
      font-size: 28px;
      color: #666;
      text-align: center;
      line-height: 36px;
    }
  }
}
</style>
