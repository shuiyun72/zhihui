<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch></HeaderSearch>
    </div>
    <HeaderNav :HeaderNav="'个人中心'"></HeaderNav>
    <Side :isShowRightPart1="false"></Side>
    <div class="personal_top_up wm jcs">

    </div>
  </div>
</template>

<script>
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderSearch from "@components/Header/HeaderSearch.vue";
import HeaderNav from "@components/Header/HeaderNav.vue";
import Side from "@components/Side.vue";


import Msg1 from "./components/Msg1.vue";
export default {
  components: {
    HeaderTop,
    HeaderSearch,
    HeaderNav,
    Side,
  },
  data() {
    return {
      
    };
  },
  mounted(){
    
  },
  methods: {
    
  }
};
</script>
<style lang="less">
</style>
