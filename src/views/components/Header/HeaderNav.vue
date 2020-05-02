<template>
  <div id="header_nav">
    <ul>
      <router-link tag="li" :to="{path:'/'+item.router}" v-for="(item,index) in HeaderNavList"
        :key="index"
        :class="{'is_active':item.text==HeaderNav}">
        {{item.text}}
      </router-link>
    </ul>
  </div>
</template>

<script>
import * as Const from "@/common/const";
export default {
  props:{
    HeaderNav:{
      default:"首页"
    },
    HeaderNavList:{
      default:()=>{
        return Const.topNav
      }
    }
  },
  data() {
    return {
      input2: "",
      
    };
  },
  mounted(){
    
  },
  methods: {
    
  }
};
</script>

<style scoped lang="less">
#header_nav {
  width: 100%;
  background-color: #01b0b7;
  ul {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    line-height: 30px;
    height: 30px;
    li {
      cursor: pointer;
      &.is_active,&:hover {
        background-color: #27898d;
      }
      padding: 0 20px;
      text-align: center;
      font-size: 18px;
      color: #fff;
    }
  }
}
</style>
