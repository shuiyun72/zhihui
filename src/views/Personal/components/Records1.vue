<template>
  <div class="person_right bs">
    <div class="records_body">
      <div class="g_title">历史发布合作</div>
      <el-table :data="DataFor(3,tableData)" style="width: 100%" stripe>
        <el-table-column prop="title" label="活动名称" align="center" width="300"></el-table-column>
        <el-table-column prop="name" label="所属行业" align="center"></el-table-column>
        <el-table-column prop="date" label="费用" align="center"></el-table-column>
        <el-table-column prop="have" label="状态" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <span class="link">{{scope.row.dou}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          title: "郑州飞成寻求施工安装调试服务",
          name: "机房监控系统",
          date: "100万/预算",
          have: "正在进行",
          dou: "编辑"
        },
        {
          title: "郑州飞成寻求施工安装调试服务",
          name: "机房监控系统",
          date: "100万/预算",
          have: "已结束",
          dou: "编辑"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less">

</style>
