<template>
  <div id="header_nav">
    <ul>
      <li v-for="(item,index) in topNav" :key="index" :class="{'is_active':isActive==index}">{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
import * as Const from "@/common/const";
export default {
  data() {
    return {
      input2: "",
      topNav:Const.topNav,
      isActive:0
    };
  },
  methods: {
    linkPhone() {
      console.log("跳转手机");
    }
  }
};
</script>

<style scoped lang="less">

  #header_nav{
    width: 100%;
    background-color:#01B0B7;
    ul{
      width: 1200px;
      margin: 0 auto;
      display: flex;
      line-height: 40px;
      height: 40px;
      li{
        &.is_active{
          background-color: #27898D;
        }
        flex-grow:1;
        text-align: center;
        font-size: 18px;
        color: #fff;
      }
    }
  }
  
</style>
