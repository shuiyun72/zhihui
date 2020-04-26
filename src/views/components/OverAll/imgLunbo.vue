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
.c_d_img_lunbo{
  background-color: #fff;
  box-shadow:0px 3px 6px rgba(0,0,0,0.5);
  width: 600px;
  .big_img{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .small_show{
    padding: 22px 44px;
    position:relative;
    .pre,.next{
      position:absolute;
      font-size: 20px;
      height: 86px;
      line-height: 86px;
      top: 50%;
      margin-top: -43px;
      font-weight: bold;
      text-align: center;
      width: 30px;
      cursor: pointer;
      background-color: #eee;
    }
    .pre{
      left: 0;
    }
    .next{
     right: 0;
    }
    .small_show_box{
      img{
        border: 2px solid transparent;
        border-radius:6px;
        margin-right: 2px;
        &.is_active{
          border: 2px solid #03C1C9;
        }
      }
    }
  }
}
</style>
