<template>
  <div class="person_right">
    <div class="title_time">发布的尾货</div>
    <div class="edit_el_tabs_com_sy">
      <el-row class="title_d pt10">
        <el-col :span="8" class="t_center">宝贝</el-col>
        <el-col :span="4" class="t_center">商品名称</el-col>
        <el-col :span="3" class="t_center">参数</el-col>
        <el-col :span="2" class="t_center">单价</el-col>
        <el-col :span="2" class="t_center">数量</el-col>
        <el-col :span="2" class="t_center">原价</el-col>
        <el-col :span="3" class="t_center">操作</el-col>
      </el-row>
      <div v-for="(t,i) in [1,2,3,4]" :key="i+'pp'">
        <div class="personal_d" v-show="t != 10">
          <el-row>
            <el-col :span="7">
              <span class="time">2020-04-15 15:35:21</span>
            </el-col>
          </el-row>
        </div>
        <el-row class="bg_detail_com_sy small">
          <el-col :span="8" class="t_center">
            <img :src="require('@assets/img/sps2.jpg')" class="bs" />
          </el-col>
          <el-col :span="4">
            <p class="fwb">索尼球形监控HKGH-32索 尼球形监控HKGH-32…</p>
            <p>
              <span class="bg_blue ss">一口价</span>
              <span class="bg_orange ss">包邮</span>
            </p>
          </el-col>
          <el-col :span="3" class="cs">
            <p>接口：24</p>
            <p>颜色：白色</p>
            <p>重量：290g</p>
            <p>类型：随便</p>
            <p>分类：随便</p>
            <p>参数：随便</p>
          </el-col>
          <el-col :span="2" class="t_center">284.00</el-col>
          <el-col :span="2" class="t_center">1</el-col>
          <el-col :span="2" class="t_center">
            <span class="text_t">￥1868.00</span>
          </el-col>
          <el-col :span="3" class="t_center all_link_box">
            <span>上架</span>
            <span class="link">下架</span>
            <span class="link">编辑</span>
            <span class="link">删除</span>
          </el-col>
        </el-row>
      </div>
      <div class="submit_btn_sy mbt or">
        <i class="iconfont icon-jiahaocu" @click="routerTo('Seller1Add')" ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      
    };
  },
  methods: {
    childHandle(i, ic, el) {
      this.$parent.childHandle(i, ic, el);
    },
    routerTo(el) {
      this.childHandle(7, 0, el);
    }
  }
};
</script>
<style lang="less">

</style>
