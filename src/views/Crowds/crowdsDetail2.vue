<template>
  <div class="crow_detail">
    <Side :isShowRightPart1="false"></Side>
    <div class="title_Progress part0">
      <div class="left">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/crowds' }">众包合作</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/crowds/detail' }">合作详情</el-breadcrumb-item>
          <el-breadcrumb-item>聊一聊</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="crowds2_body wm jcs">
      <div class="left bs boxs">
        <div class="title">在线交流</div>
        <div class="content">
          <div class="box">
            <div class="p1">
              <div class="item">
                <i class="el-icon-user"></i>
                <span class>你好，欢迎咨询！</span>
              </div>
            </div>
            <div class="p2">
              <div class="p2_p1 jcs">
                <div class="left_l">
                  <el-popover placement="top-start" width="160" trigger="click">
                    <div class="crow_pop_body">
                      <i class="iconfont icon-erweima"></i>
                      <p>手机扫码拨号</p>
                    </div>
                    <i class="iconfont icon-dianhua" slot="reference"></i>
                  </el-popover>
                  <i class="el-icon-picture-outline-round"></i>
                  <i class="el-icon-message"></i>
                </div>
                <div class="right_l">
                  <el-button class="blue_btn">发送</el-button>
                </div>
              </div>
              <div class="p2_p2">
                <textarea name rows="6" placeholder="请详细描述您的问题："></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right bs boxs">
        <div class="title">合作信息标题合作信息标题合作信</div>
        <p>招募截止日期：2019-12-30 00:00</p>
        <p>所在区域：上海市</p>
        <p>合作预算：230万</p>
        <img :src="require('@assets/img/info.png')" alt />
        <div class="p">活动详情:</div>
        <p
          class="tin"
        >专业光纤光缆熔接、光纤断点测试、光纤验收测试出报告、光纤光缆铺设施工、光纤光缆抢修、网络工程测试等服务。 河南视连电子科技有限公司是一家以光纤光缆熔接、抢修、铺设，光纤网线福碌…</p>
      </div>
    </div>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
export default {
  components: { Side },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
.crowds2_body {
  .left {
    width: 780px;
    padding: 16px 30px 0;
    .title {
      padding: 0 0 6px 16px;
      border-bottom: 3px dotted #eee;
    }
    .content {
      padding: 20px;
      .box {
        border: 1px solid #ccc;
        border-radius: 8px;
        .p1 {
          padding: 20px;
          height: 240px;
          .item {
            background-color: #eee;
            width: 80%;
            padding: 6px;
            border-radius: 4px;
            margin-bottom: 6px;
            i {
              font-size: 24px;
              color: #0f0;
              margin-right: 6px;
            }
          }
        }
        .p2 {
          border-top: 1px solid #ccc;
          .p2_p1 {
            padding: 4px 10px 0 10px;
            .left_l {
              i {
                font-size: 24px;
                margin-right: 12px;
              }
            }
            .right_l {
              button {
                padding: 4px 26px;
              }
            }
          }
          .p2_p2 {
            textarea {
              width: 100%;
              padding: 6px 20px;
              border: none;
              border-radius: 8px;
            }
          }
        }
      }
    }
  }
  .right {
    width: 406px;
    padding: 16px 22px;
    .title {
      font-weight: bold;
      margin-bottom: 10px;
    }
    p {
      line-height: 20px;
      font-size: 12px;
    }
    img {
      width: 100%;
      margin: 6px 0;
    }
    .p {
      font-weight: bold;
      padding: 6px 0;
    }
  }
}
.crow_pop_body {
  text-align: center;
  .icon-erweima {
    font-size: 96px;
    line-height: 1;
  }
}
</style>
