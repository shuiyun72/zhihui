<template>
  <div class="person_right ">
    <div class="records_body bs">
      <div class="g_title">评论消息</div>    
      <el-table :data="[...(DataFor(7,[tableData[0]])),...(DataFor(1,[tableData[1]]))]" style="width: 100%" stripe>
        <el-table-column label="标题" align="center"  width="400">
          <template slot-scope="scope">
            <i class="iconfont icon-dian4 blue pr6" :class="scope.row.active?'':'hidden'"></i>
            <span :class="scope.row.active?'blue2':''">{{scope.row.title}}</span>
          </template>  
        </el-table-column>
        <el-table-column prop="name" label="频道" align="center" ></el-table-column>
        <el-table-column prop="date" label="最新评论时间" align="center" ></el-table-column>
      </el-table>
      <div class="foot_more t_center">
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
    <div class="h16"></div>
    <div class="records_body bs">
      <div class="g_title">点赞消息</div>    
      <el-table :data="[...(DataFor(5,[tableData[2]])),...(DataFor(3,[tableData[3]]))]" style="width: 100%" stripe>
        <el-table-column label="标题" align="center"  width="400">
          <template slot-scope="scope">
            <i class="iconfont icon-dian4 blue pr6" :class="scope.row.active?'':'hidden'"></i>
            <span :class="scope.row.active?'blue2':''">{{scope.row.title}}</span>
          </template>  
        </el-table-column>
        <el-table-column prop="date" label="最新点赞时间" align="center" ></el-table-column>
      </el-table>
      <div class="foot_more t_center">
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {      
          title: "弱电工程安装寻求工程技术服务合作",
          name: "合作频道",
          date: "2019-10-12 12:21:54",
          active:1
        },
        {    
          title: "弱电工程安装寻求工程技术服务合作",
          name: "合作频道",
          date: "2019-10-12 12:21:54",
          active:0
        },
        {    
          title: "今天Tina气真好呀",
          date: "2019-10-12 12:21:54",
          active:1
        }, 
        {    
          title: "今天Tina气真不好",
          date: "2019-10-12 12:21:54",
          active:0
        },
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less">

</style>
