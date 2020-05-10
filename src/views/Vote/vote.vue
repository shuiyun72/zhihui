<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch></HeaderSearch>
    </div>
    <HeaderNav :HeaderNav="'投票频道'"></HeaderNav>
    <div id="vote">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderSearch from "@components/Header/HeaderSearch.vue";
import HeaderNav from "@components/Header/HeaderNav.vue";
export default {
  components: {
    HeaderTop,
    HeaderSearch,
    HeaderNav
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
</style>
