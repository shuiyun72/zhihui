<template>
  <div class="person_right">
    <div class="person_title bs">审核消息通知</div>
    <div class="msg2_item">
      <div class="new_left_msg_com_sy bs">
        <div class="left_top">
          <i></i>
          <span>新</span>
        </div>
        <div class="text jcs">
          <div class="l">方舟科技寻求施工合作</div>
          <div class="r">行业：弱电智能化系统<span>2019-10-12 12:41:35</span> </div>
        </div>
        <div class="info">
          <p class="p">
            <span class="blue">【参与】</span>
            <span class="link">活动报名审核通过，请准时参加活动</span>
          </p>
        </div>
      </div>
    </div>
    <div class="msg2_item">
      <div class="new_left_msg_com_sy bs">
        <div class="left_top">
          <i></i>
          <span>新</span>
        </div>
        <div class="text jcs">
          <div class="l">方舟科技寻求施工合作</div>
          <div class="r">行业：弱电智能化系统<span>2019-10-12 12:41:35</span> </div>
        </div>
        <div class="info">
          <p class="p">
            <span class="blue">【参与】</span>
            <span class="link">合作报名审核通过，请及时联系合作发起人</span>
          </p>
        </div>
      </div>
    </div>
    <div class="msg2_item">
      <div class="new_left_msg_com_sy bs">
        <div class="left_top">
          <i></i>
          <span>新</span>
        </div>
        <div class="text jcs">
          <div class="l">方舟科技寻求施工合作</div>
          <div class="r">行业：弱电智能化系统<span>2019-10-12 12:41:35</span> </div>
        </div>
        <div class="info">
          <p class="p">
            <span class="orange">【发起】</span>
            <span class="red">审核未通过请及时查看更改</span>
          </p>
          <div class="edit jcs">
            <div class="l">理由：内容与标题不符</div>
            <div class="r">
              <el-button class="btn_info">编辑修改</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="msg2_item">
      <div class="new_left_msg_com_sy bs">
        <div class="left_top">
          <i></i>
          <span>新</span>
        </div>
        <div class="text jcs">
          <div class="l">方舟科技寻求施工合作</div>
          <div class="r">行业：弱电智能化系统<span>2019-10-12 12:41:35</span> </div>
        </div>
        <div class="info">
          <p class="p">
            <span class="blue">【参与】</span>
            <span class="red">审核通过</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less">
.msg2_item{
  padding-top: 14px;
}
.new_left_msg_com_sy{
  padding: 20px 20px 26px 50px;
  position: relative;
  .left_top{
    position: absolute;
    left: 0;
    top: 0;
    i{
      display: block;
      border-top: 26px solid #01B0B7;
      border-left: 20px solid #01B0B7;
      border-bottom: 26px solid #fff;
      border-right: 20px solid #fff;
    }
    span{
      color: #fff;
      position: absolute;
      left: 5px;
      top: 5px;
      font-size: 16px;
    }
  }
  .text{
    padding: 10px 20px 10px 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 16px;
    color: #333;
    .l{
      font-size: 16px;
    }
    .r{
      span{
        margin-left: 26px;
      }
    }
  }
  .info{
    .p{
      font-size: 16px;
    }
    .btn_info{
       padding: 3px 20px;
        background-color: #01B0B7;
        color: #fff;
        border-radius: 10px;
    }
    .edit{
      padding: 16px 20px 0 64px;
      .l{
        color: #999;
      }
    }
  }
}
</style>
