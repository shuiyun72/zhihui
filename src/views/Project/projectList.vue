<template>
  <div class="project_home">
    <Side :toUrl="''"></Side>
    <!-- <div class="bg_img_top">
      <div class="click">点击竞价此展示位</div>
    </div>-->
    <div class="project_body wm">
      <div class="title_Progress">
        <div class="left">
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/project' }">项目信息</el-breadcrumb-item>
            <el-breadcrumb-item>招采信息</el-breadcrumb-item>
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
      <div class="part3 bs">
        <div class="p3_p1 jcs">
          <div class="left">
            <div class="select_box_com_sy">
              <div class="item" v-for="(t,i) in DataFor(2,selectList)" :key="i">
                <span class="title">{{t.title}}：</span>
                <ul>
                  <li class="is_active">全部</li>
                  <li v-for="(tc,i) in DataFor(12,t.li)" :key="i+'c'">{{tc.address}}</li>
                </ul>
                <span class="more">
                  更多
                  <i class="el-icon-caret-bottom"></i>
                </span>
              </div>
              <div class="d_flex">
                <span class="title">招标时间：</span>
                <div class="t_left">
                  <el-time-select
                    placeholder="起始时间"
                    v-model="startTime"
                    :picker-options="{
                      start: '08:30',
                      step: '00:15',
                      end: '18:30'
                    }"
                  ></el-time-select>-
                  <el-time-select
                    placeholder="结束时间"
                    v-model="endTime"
                    :picker-options="{
                      start: '08:30',
                      step: '00:15',
                      end: '18:30',
                      minTime: startTime
                    }"
                  ></el-time-select>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <el-button class="blue_btn btn_p2" round>重置筛选</el-button>
          </div>
        </div>
        <div class="p3_p2">
          <span>关键字搜索：</span>
          <el-input class="input_p1 inline" size="mini"></el-input>
          <el-button class="blue_btn btn_p2" round>搜 索</el-button>
        </div>
      </div>
      <div class="p_list_p1 bs">
        <div class="part_list_com_sy">
          <div class="title">项目信息</div>
          <el-table
            :data="DataFor(15,tableData)"
            style="width: 100%"
            stripe
            @cell-click="cellClick"
          >
            <el-table-column prop="title" label="项目标题" align="center"></el-table-column>
            <el-table-column prop="address" label="地址" align="center"></el-table-column>
            <el-table-column prop="person" label="联系人" align="center"></el-table-column>
            <el-table-column prop="date" label="发布时间" align="center"></el-table-column>
          </el-table>
        </div>
        <PageNum></PageNum>
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
  methods: {
    cellClick(el) {
      this.$router.push({ path: "/project/detail1" });
    }
  }
};
</script>

<style lang="less">
</style>
