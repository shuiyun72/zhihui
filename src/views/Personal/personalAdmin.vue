<template>
  <div>
    <div id="header">
      <HeaderTop></HeaderTop>
      <HeaderSearch></HeaderSearch>
    </div>
    <HeaderNav :HeaderNav="'个人中心'"></HeaderNav>
    <Side :isShowRightPart1="false"></Side>
    <div class="personal_body wm jcs">
      <div class="show_list_com_sy bs">
        <div class="title_top">个人中心</div>
        <div class="item" v-for="(t,i) in PersonalList" :key="i+'t'">
          <el-row @click.native="parentHandle(i)">
            <el-col :span="6" class="t_right">
              <i
                :class="t.number > 0 ?'el-icon-caret-bottom':'el-icon-caret-right'"
              ></i>
            </el-col>
            <el-col :span="6">
              <span class="title_span">{{t.title}}</span>
            </el-col>
            <el-col :span="12">
              <span class></span>
            </el-col>
          </el-row>
          <el-row
            v-show="t.number"
            v-for="(tc,ic) in t.children"
            :key="i+ic+'tc'"
            @click.native="childHandle(i,ic,tc.router)"
            :class="{'active':tc.show}"
            class="child_nav"
          >
            <el-col :span="6" :offset="6">
              <span class="c_span">{{tc.title}}</span>
            </el-col>
            <el-col :span="12">
              <span class="stateC stateR" v-show="tc.number>0">（{{tc.number}}）</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div :is="rightComponent" :AccountHomeData="AccountHomeData"></div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@components/Header/HeaderTop.vue";
import HeaderSearch from "@components/Header/HeaderSearch.vue";
import HeaderNav from "@components/Header/HeaderNav.vue";
import Side from "@components/Side.vue";
import _ from "lodash";
import { PersonalList } from "@const";
import {
  AccountHomeData1,
  AccountHomeData2,
  AccountHomeData3
} from "@/common/commodity";
//我的资料
import Datum1 from "./components/Datum1.vue";
import Datum2 from "./components/Datum2.vue";
import Datum3 from "./components/Datum3.vue";
import Datum4 from "./components/Datum4.vue";
//我的账户
import AccountHome1 from "./components/AccountHome.vue";
import AccountHome2 from "./components/AccountHome.vue";
import AccountHome3 from "./components/AccountHome.vue";
import AccountHome4 from "./components/AccountHome.vue";
import Account1 from "./components/Account1.vue";
import Account1Detail from "./components/Account1Detail.vue";
import Account1Detail2 from "./components/Account1Detail2.vue";
import Account1Detail3 from "./components/Account1Detail3.vue";
import Account2 from "./components/Account2.vue";
import Account3 from "./components/Account3.vue";
import Account4 from "./components/Account4.vue";
//我的团队
import Group1 from "./components/Group1.vue";
//历史发布
import Records1 from "./components/Records1.vue";
import Records2 from "./components/Records2.vue";
import Records3 from "./components/Records3.vue";
//我的竞赛
import Player from "./components/Player.vue";
import PlayerAdd from "./components/PlayerAdd.vue";
//我的消息
import Msg1 from "./components/Msg1.vue";
import Msg2 from "./components/Msg2.vue";
import Msg3 from "./components/Msg3.vue";
import Msg4 from "./components/Msg4.vue";
import Msg5 from "./components/Msg5.vue";

export default {
  components: {
    HeaderTop,
    HeaderSearch,
    HeaderNav,
    Side,
    Datum1,
    Datum2,
    Datum3,
    Datum4,
    AccountHome1,
    AccountHome2,
    AccountHome3,
    AccountHome4,
    Account1,
    Account2,
    Account3,
    Account4,
    Account1Detail,
    Account1Detail2,
    Account1Detail3,
    Group1,
    Records1,
    Records2,
    Records3,
    Player,
    PlayerAdd,
    Msg1,
    Msg2,
    Msg3,
    Msg4,
    Msg5
  },
  data() {
    return {
      PersonalList: _.cloneDeep(PersonalList),
      rightComponent: "Account1Detail2",
      AccountHomeData: []
    };
  },
  mounted() {
    if (sessionStorage.getItem("PersonalR")) {
      let r = JSON.parse(sessionStorage.getItem("PersonalR"));
      this.childHandle(r.i, r.ic, r.router);
    }
  },
  methods: {
    parentHandle(i) {
      this.PersonalList[i].number = this.PersonalList[i].number == 0 ? 1 : 0 ;
    },
    childHandle(i, ic, router) {
      _.map(this.PersonalList, item => {
        _.map(item.children, child => {
          child.show = 0;
        });
      });
      if (router == "AccountHome1") {
        this.AccountHomeData = { data: AccountHomeData1, home: "h1" };
      } else if (router == "AccountHome2") {
        this.AccountHomeData = { data: AccountHomeData2, home: "h2" };
      } else if (router == "AccountHome3") {
        this.AccountHomeData = { data: AccountHomeData3, home: "h3" };
      } else if (router == "Records4") {
        this.$router.push({ path: "/personal/Records4" });
      }
      if (router != "Records4") {
        this.PersonalList[i].children[ic].show = 1;
        this.rightComponent = router;
        sessionStorage.setItem(
          "PersonalR",
          JSON.stringify({ router: router, i: i, ic: ic })
        );
      }
    }
  }
};
</script>
<style lang="less">
</style>
