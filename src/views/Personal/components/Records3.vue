<template>
  <div class="person_right bs">
    <div class="records_body">
      <div class="g_title">历史发布直播</div>
      <div class="r_auido">
        <div class="r_auido_item" v-for="(t,i) in DataFor(5,infoMsg)" :key="i">
          <div class="info_item_co_sy">
            <div class="state_p">{{t.state[2]}}</div>
            <div class="img">
              <img :src="require('@assets/img/'+t.img)" alt />
            </div>
            <div class="box">
              <div class="title jcs">
                <span>{{t.title}}</span>
                <span class="link">编辑</span>
              </div>
              <p>行业：{{t.hy}}</p>
              <el-row class="info">
                <el-col :span="16">地址：{{t.address}}</el-col>
                <el-col :span="8" class="t_right">{{t.date}}</el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoMsg: [
        {
          img: "info.png",
          state: ["正在招募", "正在进行", "正在直播", "直播结束"],
          title: "直播间标题直播间标题直播间标题",
          hy: "综合布线系统",
          address: "郑州",
          date: "2020-05-25 12:30"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less">
</style>
