<template>
  <div class="item_card_nav_com_sy" @click="parentCards(CardNav)">
    <div class="content">
      <div class="p1">
        <img :src="require('@assets/img/'+CardNav.img)" alt />
        <div class="text">
          <div class="title">{{CardNav.title}}</div>
          <p>{{CardNav.text}}</p>
        </div>
      </div>
      <div class="p2">
        <span>{{CardNav.num}}</span>条
      </div>
    </div>
    <i class="el-icon-caret-right" :class="{'active':CardNav.active}"></i>
  </div>
</template>

<script>
export default {
  props: {
    CardNav: {
      type: Object,
      default: {}
    }
  },
  methods: {
    parentCards(text) {
      this.$emit("parentCards", text);
    }
  }
};
</script>

<style lang="less">
.item_card_nav_com_sy {
  display: flex;
  cursor: pointer;
  .content {
    width: 263px;
    box-sizing: border-box;
    background-color: #eaeaea;
    padding: 20px 10px;
    .p1 {
      display: flex;
      padding: 0 20px 20px;
      border-bottom: 2px solid #aaa;
      .text {
        text-align: center;
        width: 150px;
        .title {
          font-size: 16px;
          font-weight: bold;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        p {
          color: #666;
        }
      }
    }
    .p2 {
      text-align: center;
      color: #f88f00;
      padding-top: 20px;
      span {
        font-size: 24px;
      }
    }
  }
  .el-icon-caret-right {
    font-size: 42px;
    color: transparent;
    position: relative;
    top: 30px;
    left: -16px;
    &.active {
      color: #eaeaea;
    }
  }
}
</style>
