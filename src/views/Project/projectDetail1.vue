<template>
  <div class="project_home">
    <Side></Side>
    <!-- <div class="bg_img_top">
      <div class="click">点击竞价此展示位</div>
    </div>-->
    <div class="project_body wm">
      <div class="title_Progress">
        <div class="left">
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/project' }">项目信息</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/project/list2' }">中标信息</el-breadcrumb-item>
            <el-breadcrumb-item>项目详情</el-breadcrumb-item>
          </el-breadcrumb>
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
      <div class="pro_detail">
        <div class="part1 wm bs">

        </div>
       
      </div>
    </div>
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
              address: "郑州郑州",
              value: ""
            }
          ]
        }
      ],
      tableData: [
        {
          title: "河南长葛市双洎河国家湿地公园科普项目",
          address: "河南省长葛市",
          person: "有",
          date: "2019-10-12"
        }
      ],
      startTime: "",
      endTime: ""
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less">
</style>
