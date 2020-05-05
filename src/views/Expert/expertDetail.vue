<template>
  <div class="crow_detail">
    <Side :isShowRightPart1="false"></Side>
    <div class="title_Progress part0">
      <div class="left">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/expert' }">达人活动</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="box_part1_help_sy bs">
      <div class="left_img">
        <img :src="require('@assets/img/info.png')" alt />
      </div>
      <div class="right_box">
        <div class="right_content">
          <div class="box1">
            <div class="title">活动名称活动名称活动名称活动名称活动名称</div>
            <p>招募截止日期：2019-12-30 00:00</p>
            <p>所在区域：上海市</p>
            <p>活动时间：2020-05-25 15:30 至 2020-05-25 18：30</p>
            <p>活动地址：********（报名审核后显示）</p>
          </div>
          <div class="box2">
            <div @click="zhidingDialog = true">帮TA置顶</div>
            <div
              @click="expertDialog1 = true"
              v-show="!isPartIn&&!isCrowdTrue"
              class="blue_btn"
            >报名参加</div>
            <!-- <router-link
              tag="div"
              class="part_in info_btn"
              :to="{path:'/crowds/detail2'}"
              v-show="isPartIn&&!isCrowdTrue"
            >已报名 等待审核</router-link>-->
            <div
              class="part_in info_btn"
              v-show="isPartIn&&!isCrowdTrue&&!whatTrue"
              @click="whatTrue = true"
            >已报名 等待审核</div>
            <div class="part_in blue_btn" v-show="isPartIn&&!isCrowdTrue&&whatTrue">已通过 找TA聊一聊</div>
            <div v-show="isCrowdTrue" class="blue_btn" @click="stopVisible = true">提前截止</div>
            <div v-show="isCrowdTrue" class="blue_btn" @click="evmVisible= true">扫描二维码</div>
            <router-link
              tag="div"
              :to="{path:'/expert/detail3'}"
              class="blue_btn"
              v-show="isCrowdTrue"
            >查看报名</router-link>
          </div>
        </div>
        <div class="right_foot">
          <div class="box1">
            <span>
              <i class="el-icon-star-on"></i>收藏
            </span>
            <span>
              <i class="iconfont icon-liulan"></i>88人关注
            </span>
          </div>
          <div class="box2">
            <div class="share">
              <!-- 这个是插件的应用，我简单写个样式 -->
              <span>分享到：</span>
              <svg class="iconfont" aria-hidden="true" :style="W(16)">
                <use xlink:href="#icon-QQ" />
              </svg>
              <svg class="iconfont" aria-hidden="true" :style="W(16)">
                <use xlink:href="#icon-weixinmendian" />
              </svg>
              <svg class="iconfont" aria-hidden="true" :style="W(16)">
                <use xlink:href="#icon-QQkongjian" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part2 wm jcs">
      <div class="left">
        <div class="p2_p1 bs">
          <div class="title_p_com_cr_sy">合作详情</div>
          <p
            class="tin"
          >专业光纤光缆熔接、光纤断点测试、光纤验收测试出报告、光纤光缆铺设施工、光纤光缆抢修、网络工程测试等服务。 河南视连电子科技有限公司是一家以光纤光缆熔接、抢修、铺设，光纤网线福碌克验收测试业务为主的科技公司。公司有多年施工经验，依据行业相关标准，采用标准流程，结合客户需求，为广大客户提供专业、专业服务，以热情、耐心、诚信、细心、标准、完美、服务好、收费低、施工质 量好，真诚面对每一位客户，专业服务值得信赖。 公司优势： 人才优势：公司有十年施工经验丰富技术人才。政府、部队、军工、商场等经验丰富技术实力雄厚，数据中心IDC机房、大型干线、通讯抢修等经验丰富。人员素养高忠实可靠，可以为客户提供专业设计服务。 2．设备优势口：公司有藤仓、住友等进口机器保障质量，美国JDSU OTDR、日本横河OTDR，和长飞、烽火等厂家保持良好的合作关系，光纤跳线，终端盒，ODF架等光纤配件 3.施工质量：公司始终坚持质量**，培训要求每位员工自身素养、职业道德做好每一环节，和标准化的施工流程和验收体系。 4.服务保障：公司施工坚持客户至上原则，客户的满意始终是我们每次合作的目标，3辆施工车辆、效率高、服务好。及时响应客户需求。 5.价格优势：公司以专业的人员和设备，在保证施工质量的同时，价格更加低，期待与您长期更好合作。</p>
        </div>
        <div class="p2_p2 bs">
          <div class="title_p_com_cr_sy">评论区</div>
          <el-input
            type="textarea"
            placeholder="赶快说是你的感受吧……"
            v-model="textarea"
            maxlength="100"
            show-word-limit
          ></el-input>
          <div class="cro_submit">
            <el-button class="blue_btn">发布</el-button>
          </div>
          <div class="interflow_box_com_sy">
            <el-row class="item">
              <el-col :span="2">
                <img :src="require('@assets/img/xiaoya.png')" alt />
              </el-col>
              <el-col :span="2" class="name_time">
                <p>零度</p>
                <p class="p2">2小时前</p>
              </el-col>
              <el-col :span="18" class="name_text">评论内容：合作以及结束了吗？？</el-col>
              <el-col :span="2" class="name_btn">
                <el-button size="mini">删除</el-button>
              </el-col>
            </el-row>
            <el-row class="item">
              <el-col :span="2">
                <img :src="require('@assets/img/xiaoya.png')" alt />
              </el-col>
              <el-col :span="2" class="name_time">
                <p>智汇优库</p>
                <p class="p2">2小时前</p>
              </el-col>
              <el-col :span="18" class="name_text">
                回复
                <span>零度的</span>评论内容：合作以及结束了吗？？
              </el-col>
              <el-col :span="2" class="name_btn">
                <!-- <el-button size="mini">删除</el-button> -->
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="right bs">
        <div class="title_r">其它合作</div>
        <div class="item">
          <div class="h2_part9_item" v-for="(t,i) in DataFor(3,infoMsg)" :key="i">
            <div class="info_item_co_sy">
              <!-- <div class="state_p">{{t.state[2]}}</div> -->
              <div class="img">
                <img :src="require('@assets/img/'+t.img)" alt />
              </div>
              <div class="box">
                <div class="title">{{t.title}}</div>
                <el-row class="info">
                  <el-col :span="16">行业：{{t.hy}}</el-col>
                  <el-col :span="8">地址：{{t.address}}</el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title :visible.sync="zhidingDialog" width="432px" class="no_bg_huojian">
      <div class="huojian_bg_dia">
        <div class="title_l">帮助置顶</div>
        <div class="huojian_body">
          <div class="title">置顶优势</div>
          <p>1.刷新合作信息至前端；</p>
          <p>2.提高自己在同类型的合作信息的曝光率；</p>
          <p>3.促进企业合作及平台互动；</p>
          <p class="p">注：刷新置顶一次需消耗50个智汇币</p>
        </div>
        <div class="pull">- 50个智汇币</div>
        <div class="btn">
          <el-button class="blue_btn" @click="zhidingSucess=true">提交</el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      title="置顶成功"
      :visible.sync="zhidingSucess"
      width="400px"
      class="playing_dialog_com_sy"
    >
      <div class="cro_zhiding_body">
        <div class="img">
          <img :src="require('@assets/img/zhiding1.png')" alt />
        </div>
        <p>置顶成功</p>
        <p>您刷新的信息已经排名靠前</p>
        <div class="submit">
          <el-button class="blue_btn" @click="zhidingSucess = false;zhidingDie = true">确定</el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="置顶失败" :visible.sync="zhidingDie" width="400px" class="playing_dialog_com_sy">
      <div class="cro_zhiding_body">
        <div class="img">
          <img :src="require('@assets/img/zhiding2.png')" alt />
        </div>
        <p>支付失败</p>
        <p>您的智汇币余额不足！</p>
        <div class="submit">
          <el-button class="blue_btn" @click="zhidingDie = false">确定</el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      title="活动报名"
      :visible.sync="expertDialog1"
      width="600px"
      class="playing_dialog_com_sy"
    >
      <div class="expert_dia_body">
        <div class="title">河南海达之光通信设备有限公司客户答谢会</div>
        <p class="p">活动时间：2019.10.24 - 2019.10.27</p>
        <p class="p">支付方式：线下支付</p>
        <div class="box jcs bs">
          <div class="left">
            <img :src="require('@assets/img/xiaoya.png')" alt />
            <p>昵称：零度</p>
          </div>
          <div class="right">
            <div class="item">
              <span>参与人姓名：</span>
              <el-input v-model="value1"></el-input>
            </div>
            <div class="item">
              <span>参与人电话：</span>
              <el-input v-model="value2"></el-input>
            </div>
          </div>
        </div>
      </div>
      <div class="submit_center_btn_sy pb30">
        <el-button class="blue_btn" @click="crowdsDialogSuccess = true">提交</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="报名成功"
      :visible.sync="crowdsDialogSuccess"
      width="400px"
      class="playing_dialog_com_sy"
    >
      <div class="cro_zhiding_body">
        <div class="img">
          <img :src="require('@assets/img/zhiding1.png')" alt />
        </div>
        <p>恭喜您已报名成功</p>
        <p class="orange_p">+2个智汇币</p>
        <p>请耐心等待主办方确认</p>
        <div class="submit">
          <el-button class="blue_btn" @click="returnCrowdTrue">确定</el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="截止活动" :visible.sync="stopVisible" width="400px" class="playing_dialog_com_sy">
      <div class="crowds4_dialog_body">
        <p class="crowds4_p expert_p">你确定要提前截止该活动吗？</p>
        <div class="submit_blue_btn_sy">
          <el-button @click="stopVisible = false" class="info_btn">取消</el-button>
          <el-button @click="stopVisible = false">确定</el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="活动验证通道" :visible.sync="evmVisible" width="400px" class="playing_dialog_com_sy">
        <div class="crowds4_dialog_body">
          <div class="info">
            <img :src="require('@assets/img/xiaoya.png')" alt />
            <span>昵称：零度</span>
          </div>
          <p class="expert_p">IT精英组织了技术交流类活动</p>
          <p class="expert_p">扫码验证入场资格</p>
          <p class="expert_p"><i class="iconfont icon-erweima"></i></p>
          <p class="expert_p">来自智汇优库达人活动</p>
          <div class="submit_blue_btn_sy">
            <el-button @click="evmVisible = false">返回</el-button>
          </div>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
export default {
  components: { Side },
  data() {
    return {
      textarea: "",
      isPartIn: false,
      whatTrue: false,
      stopVisible:false,
      evmVisible:false,
      infoMsg: [
        {
          img: "info.png",
          state: ["正在招募", "正在进行", "正在直播"],
          title: "合作信息标题合作信息标题合作信",
          hy: "综合布线系统",
          address: "郑州",
          date: "2020-05-25"
        }
      ],
      value1: "",
      value2: "",
      zhidingDialog: false,
      zhidingSucess: false,
      zhidingDie: false,
      expertDialog1: false,
      crowdsDialogSuccess: false,
      input1: ""
    };
  },
  computed: {
    isCrowdTrue() {
      return sessionStorage.getItem("login") == 1 ? true : false;
    }
  },
  mounted() {
    console.log(this.isCrowdTrue);
  },
  methods: {
    returnCrowdTrue() {
      this.crowdsDialogSuccess = false;
      this.isPartIn = true;
      this.expertDialog1 = false;
    }
  }
};
</script>

<style lang="less">
.expert_dia_body {
  padding: 20px 40px 40px;
  .title {
    border-bottom: 1px solid #999;
    padding-bottom: 10px;
    text-align: center;
    margin-bottom: 10px;
    font-size: 16px;
  }
  .p {
    padding: 6px 0 6px 40px;
  }
  .box {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px 34px;
    margin-top: 16px;
    .left {
      text-align: center;
      p {
        padding-top: 10px;
      }
    }
    .right {
      width: 360px;
      .item {
        display: flex;
        span {
          display: inline-blick;
          width: 126px;
          line-height: 30px;
        }
        &:first-child {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
