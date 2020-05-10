<template>
  <div class="person_right bs">
    <div class="group_body ">
      <div class="g_title">收益详情</div>
      <div class="g_box jcs">
        <div class="g_item">
          <p>一级</p>
          <p>人数：4人</p>
          <p>
            智汇币：
            <span class="blue2">+ 40</span>
          </p>
          <p>
            智红豆：
            <span class="red">+ 6</span>
          </p>
        </div>
        <div class="g_item">
          <p>二级</p>
          <p>人数：3人</p>
          <p>
            智汇币：
            <span class="blue2">+ 30</span>
          </p>
          <p>
            智红豆：
            <span class="red">+ 0</span>
          </p>
        </div>
      </div>
      <div class="br"></div>
      <div class="g_table_box jcs">
        <div class="g_item_table">
          <div class="title">一级团队</div>
          <el-table :data="DataFor(7,tableData)" style="width: 100%" stripe>
            <el-table-column label="头像" align="center" width="52">
              <template slot-scope="scope">
              <img :src="require('@assets/img/'+scope.row.img)" alt />
            </template>
            </el-table-column>
            <el-table-column prop="name" label="昵称" align="center" width="110"></el-table-column>
            <el-table-column prop="date" label="日期" align="center" width="100"></el-table-column>
            <el-table-column label="智汇币收益" align="center">
              <template slot-scope="scope">
              <span class="blue2">{{scope.row.have}}</span>
            </template>
            </el-table-column>
            <el-table-column label="智汇豆收益" align="center">
               <template slot-scope="scope">
              <span class="red">{{scope.row.dou}}</span>
            </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="g_item_table">
          <div class="title">二级团队</div>
          <el-table :data="DataFor(7,tableData)" style="width: 100%" stripe>
            <el-table-column label="头像" align="center">
              <template slot-scope="scope">
              <img :src="require('@assets/img/'+scope.row.img)" alt />
            </template>
            </el-table-column>
            <el-table-column prop="name" label="昵称" align="center"  width="110"></el-table-column>
            <el-table-column prop="date" label="日期" align="center"  width="100"></el-table-column>
            <el-table-column label="智汇币收益" align="center">
              <template slot-scope="scope">
              <span class="blue2">{{scope.row.have}}</span>
            </template>
            </el-table-column>
            <el-table-column label="智汇豆收益" align="center">
               <template slot-scope="scope">
              <span class="red">{{scope.row.dou}}</span>
            </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="absolute_b">
        <PageNum></PageNum>
      </div>
    </div>
  </div>
</template>

<script>
import PageNum from "@components/PageNum";
export default {
  components: { PageNum },
  data() {
    return {
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value1: "",   
      tableData:[{img:"xiaoya.png",name:"人生若只如初见",date:"2019-08-01",have:"+ 10",dou:"+ 1"}]
    };
  },
  methods: {}
};
</script>
<style lang="less">
.group_body {
  padding: 30px 0;
  .g_title {
    margin: 0 40px;
    font-size: 16px;
    border-bottom: 1px solid #999;
    color: #666;
    width: 70px;
    padding-bottom: 6px;
    display: inline-bolck;
  }
  .g_box {
    .g_item {
      width: 49%;
      color: #666;
      padding: 10px 0;
      margin: 10px 0 16px;
      &:first-child {
        border-right: 1px solid #999;
      }
      p {
        padding-left: 45%;
        line-height: 22px;
      }
    }
  }
  .br {
    background-color: #99dfe2;
    height: 8px;
    margin-bottom: 30px;
  }
  .g_table_box{
    width: 98%;
    margin: 0 auto;
    .g_item_table{
      width: 49%;
      img{
        width: 40px;
        height: auto;
      }
      .title{
        text-align: center;
        color: #F88F00;
        font-size: 16px;
        padding-bottom: 16px;
        border-bottom: 3px solid #F88F00;
      }
      .el-table{
        th,td{
          font-size: 12px;
        }
        th{
          background-color: #eee;
        }
      }
    }
  }
  .absolute_b{
    padding: 80px 0 20px;
  }
}
</style>
