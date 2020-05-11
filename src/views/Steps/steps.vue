<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch></HeaderSearch>
    </div>
    <router-view />
  </div>
</template>

<script>
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderSearch from "@components/Header/HeaderSearch.vue";
export default {
  components: {
    HeaderTop,
    HeaderSearch,
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
</style>
