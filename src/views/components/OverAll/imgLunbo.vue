<template>
  <div class="c_d_img_lunbo">
    <div class="big_img">
      <img :src="require('@assets/commodity/shop3big.png')" alt />
    </div>
    <div class="small_show">
      <i class="pre el-icon-arrow-left"></i>
      <i class="next el-icon-arrow-right"></i>
      <div class="small_show_box">
        <img
          :src="require('@assets/commodity/shop3.png')"
          alt
          v-for="(item,index) in 4"
          :key="index"
          :class="{'is_active':index==0}"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input3: 2
    };
  }
};
</script>

<style lang="less">
.c_d_img_lunbo {
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  width: 450px;
  .big_img {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .small_show {
    padding: 22px 26px;
    position: relative;
    .pre,
    .next {
      position: absolute;
      font-size: 20px;
      height: 66px;
      line-height: 66px;
      top: 50%;
      margin-top: -33px;
      font-weight: bold;
      text-align: center;
      width: 24px;
      cursor: pointer;
      &:hover{
        background-color: #eee;
      }
    }
    .pre {
      left: 0;
    }
    .next {
      right: 0;
    }
    .small_show_box {
      img {
        border: 2px solid transparent;
        border-radius: 6px;
        margin-right: 2px;
        width: 92px;
        &.is_active {
          border: 2px solid #03c1c9;
        }
      }
    }
  }
}
</style>
