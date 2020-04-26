<template>
  <div id="app">
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@components/Footer.vue";

export default {
  components: {
    Footer
  },
  props: {
    msg: String
  }
};
</script>
<style lang="less">
.part_title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  align-items: flex-end;
  .text {
    font-size: 36px;
    color: #000;
  }
  .share {
    align-items: flex-end;
    font-size: 24px;
    i {
      font-size: 26px;
      color: #7cb6f1;
      margin-left: 8px;
    }
  }
}

#home {
  width: 1592px;
  margin: 0 auto;
  padding-top: 10px;
  .part1 {
    display: flex;
    justify-content: space-between;
    .part1_left {
      width: 200px;
    }
    .part1_center {
      width: 1100px;
    }
    .part1_right {
      width: 254px;
      .part1_right_box {
        width: 254px;
        height: 379px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
        padding: 20px 0;
        box-sizing: border-box;
        margin-bottom: 12px;
      }
      h2 {
        font-size: 18px;
        color: #000;
        text-align: center;
        margin-bottom: 10px;
      }
      .title_box {
        width: 200px;
        height: 25px;
        line-height: 25px;
        background: rgba(175, 138, 68, 1);
        border-radius: 2px;
        color: #fff;
        text-align: center;
        margin: 0 auto 10px;
      }
      .shop_nav {
        width: 192px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .option {
          i {
            font-size: 36px;
            color: #f00;
            margin-bottom: 2px;
            padding-top: 14px;
          }
          width: 48px;
          font-size: 12px;
          text-align: center;
        }
      }
      .sell_box {
        position: relative;
        height: 100px;
        padding-left: 36px;
        .sell {
          flex-wrap: wrap;
          &.second {
            margin-top: 24px;
          }
        }
        .side {
          width: 23px;
          height: 147px;
          background: rgba(3, 193, 201, 0.3);
          position: absolute;
          top: 0;
          left: 0;
          text-align: center;
          color: #03c1c9;
          font-size: 16px;
          box-sizing: border-box;
          line-height: 20px;
          padding-top: 48px;
        }
      }
      .procurement_box {
        position: relative;
        height: 100px;
        padding-left: 36px;
        .procurement {
          border-bottom: 2px dashed #707070;
          padding-bottom: 24px;
        }
        .side {
          width: 23px;
          height: 76px;
          background: rgba(3, 193, 201, 0.3);
          position: absolute;
          top: 0;
          left: 0;
          text-align: center;
          color: #03c1c9;
          font-size: 16px;
          box-sizing: border-box;
          line-height: 20px;
          padding-top: 16px;
        }
      }
      .img {
        width: 254px;
        padding: 6px;
        box-sizing: border-box;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
        margin-top: 7px;
        img {
          width: 242px;
        }
      }
    }
  }
  .part2 {
    margin-top: 20px;
    margin-bottom: 20px;
    .part2_body {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        border: 1px solid rgba(112, 112, 112, 1);
        margin-bottom: 10px;
      }
    }
  }
  .part3_body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
