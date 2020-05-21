<template>
  <div class="person_right">
    <div class="subsc_body">
      <div class="s_title">我订阅的消息</div>
      <div class="s_content bs">
        <div class="s_p1">
          <el-row>
            <el-col :span="9" :offset="4">
              <span class="link">您还没有绑定微信，不能第一时间收到通知</span>
            </el-col>
            <el-col :span="4">
              <el-button class="or_btn_p1">立即关注绑定</el-button>
            </el-col>
            <el-col :span="6" class="t_right">
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
            </el-col>
          </el-row>
        </div>
        <div class="s_p2">
          <div class="p3_p1 jcs">
            <div class="left">
              <div class="select_box_com_sy">
                <div class="item" v-for="(t,i) in selectList" :key="i">
                  <span class="title">{{t.title}}：</span>
                  <ul>
                    <li class="is_active">全部</li>
                    <li v-for="(tc,i) in t.li" :key="i+'c'">{{tc.address}}</li>
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
                      placeholder="查询时间"
                      v-model="startTime"
                      :picker-options="{
                      start: '08:30',
                      step: '00:15',
                      end: '18:30'
                    }"
                    ></el-time-select>-
                    <el-time-select
                      placeholder="截止时间"
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
        <div class="s_p3">   
          <div class="title_c">已订阅的项目列表</div>
          <el-table :data="DataFor(10,tableData)" style="width: 100%" class="link_table" stripe>
            <el-table-column prop="title" label="项目标题" width="300" align="center"></el-table-column>
            <el-table-column prop="addr" label="地址" align="center"></el-table-column>
            <el-table-column prop="p" label="联系人" align="center"></el-table-column>
            <el-table-column prop="date" label="发布时间" align="center"></el-table-column>
          </el-table>
        </div>
        <PageNum v-show="tableData.length > 0"></PageNum>
      </div>
      
    </div>
  </div>
</template>

<script>
import PageNum from "@components/PageNum";
export default {
  components: { PageNum },
  props: {},
  computed: {},
  data() {
    return {
      tableData: [{
        title:"河南长葛市双洎河国家湿地公园科普项目",   
        addr:"河南省长葛市",
        p:"有",
        date:"2019-10-12"
      }],
      selectList: [
        {
          title: "行业选择",
          li: [
            { address: "弱电线缆", value: "" },
            { address: "智慧城市", value: "" },
            { address: "视频监控", value: "" },
            { address: "弱电线缆", value: "" },
            { address: "智慧城市", value: "" },
            { address: "视频监控", value: "" },
            { address: "弱电线缆", value: "" }
          ]
        },
        {
          title: "地区选择",
          li: [
            { address: "北京市", value: "" },
            { address: "上海市", value: "" },
            { address: "江苏省", value: "" },
            { address: "河南省", value: "" },
            { address: "浙江省", value: "" },
            { address: "江西省", value: "" },
            { address: "湖北省", value: "" },
            { address: "浙江省", value: "" },
            { address: "江西省", value: "" }
          ]
        }
      ],
      startTime: "",
      endTime: ""
    };
  },
  methods: {
    childHandle(i, ic, el) {
      this.$parent.childHandle(i, ic, el);
    }
  }
};
</script>
<style lang="less">

</style>
