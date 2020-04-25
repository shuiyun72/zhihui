<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch></HeaderSearch>
    </div>
    <HeaderNav></HeaderNav>
    <Side></Side>
    <div id="home">
      <div class="part1">
        <Part1Left></Part1Left>
        <Part1Center></Part1Center>
        <Part1Right></Part1Right>
      </div>
      <Part2></Part2>
      <Part3></Part3>
    </div>
  </div>
</template>

<script>
//part1
import Part1Left from "@views/Home/components/Part1Left.vue";
import Part1Center from "@views/Home/components/Part1Center.vue";
import Part1Right from "@views/Home/components/Part1Right.vue";
//part2
import Part2 from "@views/Home/components/Part2.vue";
//part3
import Part3 from "@views/Home/components/Part3.vue";
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderSearch from "@components/Header/HeaderSearch.vue";
import HeaderNav from "@components/Header/HeaderNav.vue";
import Side from "@components/Side.vue";
export default {
  components: {
    HeaderTop,
    HeaderSearch,
    HeaderNav,
    Part1Left,
    Part1Center,
    Part1Right,
    Part2,
    Part3,
    Side
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
.link_more {
  text-align: center;
  padding: 15px;
  color: #0027fd;
  cursor: pointer;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  letter-spacing: 20px;
  font-size: 20px;
  margin-bottom: 16px;
}
.shop_show_item {
  width: 380px;
  height: 304px;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  margin-bottom: 16px;
  img {
    display: block;
    margin: 0 auto;
  }
  .info {
    padding: 12px 15px;
    display: flex;
    justify-content: space-between;
    .name {
      font-size: 19px;
    }
    .number {
      font-size: 12px;
      line-height: 19px;
    }
  }
  .handle {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    .money_new {
      color: #f00;
      font-size: 19px;
    }
    .money_old {
      color: #999;
      font-size: 15px;
      line-height: 26px;
      text-align: left;
      width: 120px;
      text-decoration: line-through;
    }
    .add_car {
      width: 103px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      background: rgba(248, 133, 9, 1);
      border-radius: 20px;
      font-size: 15px;
      color: #fff;
      cursor: pointer;
    }
  }
}
.link {
  color: #0027fd;
  cursor: pointer;
}
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
.lunbo {
  position: relative;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  i {
    width: 20px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #d3d3d3;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    color: #fff;
    &.el-icon-arrow-left {
      left: 0;
    }
    &.el-icon-arrow-right {
      right: 0;
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
      .lunbo {
        margin-top: 16px;
        height: 124px;
        .shop {
          justify-content: space-between;
          .shop_child {
            display: flex;
            width: 240px;
            img {
              width: 114px;
              height: 85px;
            }
            .info {
              margin-top: 16px;
              p {
                color: #666666;
                font-size: 14px;
                margin-bottom: 4px;
              }
              .detail {
                width: 100px;
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                font-size: 10px;
                .money {
                  color: #ff0000;
                }
              }
            }
          }
        }
      }
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
    .lunbo {
      padding: 20px 30px 10px;
    }
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
