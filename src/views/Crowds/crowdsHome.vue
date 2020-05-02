<template>
  <div class="crow_home1">
    <Side></Side>
    <div class="bg_img_top"></div>
    <div class="crow_part1 bs">
      <div class="select_box_com_sy">
        <div class="item" v-for="(t,i) in DataFor(3,selectList)" :key="i">
          <span class="title">{{t.title}}：</span>
          <ul>
            <li class="is_active">全部</li>
            <li v-for="(tc,i) in DataFor(20,t.li)" :key="i+'c'">{{tc.address}}</li>
          </ul>
          <span class="more">
            更多
            <i class="el-icon-caret-bottom"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="crow_part2">
      <div class="new_head_title_sy">
        <span class="title">周边合作信息</span>
        <span>Peripheral cooperation information</span>
      </div>
      <div class="crow_part2_box">
        <div class="bs" v-for="(t,i) in DataFor(12,infoMsg)" :key="i">
          <router-link :to="{path:'/crowds/detail'}">
            <div class="new_goods_com_sy">
              <div class="state">{{t.state[0]}}</div>
              <img :src="require('@assets/img/'+t.img)" alt />
              <div class="box">
                <div class="title">{{t.title}}</div>
                <p>行业：{{t.hy}}</p>
                <p>地址：{{t.address}}</p>
                <p>招募截止时间：{{t.time}}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <PageNum></PageNum>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
import PageNum from "@components/PageNum";
export default {
  components: { PageNum, Side },
  data() {
    return {
      selectList: [
        {
          title: "地区选择",
          li: [
            {
              address: "郑州",
              value: ""
            }
          ]
        }
      ],
      infoMsg: [
        {
          img: "info.png",
          state: ["正在招募", "正在进行", "正在直播"],
          title: "合作信息标题合作信息标题合作信",
          hy: "综合布线系统",
          address: "郑州",
          time: "2020-05-25 12:00"
        }
      ]
    };
  },
  computed: {
    
  },
  methods: {}
};
</script>

<style lang="less">
.crow_part2_box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 20px;
  & > div {
    width: 384px;
    margin-bottom: 20px;
  }
}
.crow_home1 {
  padding-bottom: 20px;
}
.crow_part2 {
  width: 1200px;
  margin: 0 auto;
}
.crow_part1 {
  width: 1200px;
  margin: 20px auto 20px;
}
</style>
