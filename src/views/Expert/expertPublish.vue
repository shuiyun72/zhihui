<template>
  <div class="crowds_publish">
    <Side :isShowRightPart1="false"></Side>
    <div class="title_Progress part0">
      <div class="left">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/expert' }">达人活动</el-breadcrumb-item>
          <el-breadcrumb-item>发起活动</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="crowds_publish_body bs wm">
      <div class="title_c">请认真如实填写</div>
      <div class="content jcs">
        <div class="left">
          <div class="img">
            <img :src="require('@assets/img/img2.png')" alt />
          </div>
          <p>昵称：零度</p>
        </div>
        <div class="right boxs">
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="3" class="p t_right">活动标题：</el-col>
            <el-col :span="17">
              <el-input placeholder="请输入自定义活动标题" v-model="input1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="3" class="p t_right">活动主体：</el-col>
            <el-col :span="17">
              <el-input placeholder="请输入发起活动的公司名称或个人名称" v-model="input1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="3" class="p t_right">上传海报：</el-col>
            <el-col :span="17" class="p">
              <p style="font-size:12px">海报封面文件格式可以为PNG/JPG格式，大小不超过1M</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red none">*</span>
            </el-col>
            <el-col :span="3" class="p">设置收费标准：</el-col>
            <el-col :span="8">
              <el-input placeholder="默认0元免费参加" v-model="input1"></el-input>
            </el-col>
            <el-col :span="5" class="p">
              <span style="padding-right:8px"></span> 元/人 （线下支付）
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red none">*</span>
            </el-col>
            <el-col :span="3" class="p t_right">实际费用包含：</el-col>
            <el-col :span="17" class="p">
              <el-checkbox-group v-model="includeSelect" class="check_btn_com_sy">
                <el-checkbox-button v-for="city in includeList" :label="city" :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="3" class="p t_right">编辑活动详情：</el-col>
            <el-col :span="17">
              <el-input type="textarea" v-model="textarea" placeholder="文本编辑器"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="3" class="p t_right">自定义标题：</el-col>
            <el-col :span="8">
              <el-input placeholder="请输入自定义标题" v-model="input1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="3" class="p t_right">活动区域：</el-col>
            <el-col :span="8">
              <el-cascader v-model="addressModel" :options="addressList" @change="addressChange" placeholder="请选择省、市"></el-cascader>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="3" class="p t_right">具体地址：</el-col>
            <el-col :span="8">
              <el-input placeholder="请输入具体地址" v-model="input1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="3" class="p t_right">报名截止时间：</el-col>
            <el-col :span="8">
              <el-input placeholder="请选择报名截止时间" v-model="input1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="3" class="p t_right">活动开始时间：</el-col>
            <el-col :span="8">
              <el-input placeholder="请选择活动开始时间" v-model="input1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="3" class="p t_right">活动结束时间：</el-col>
            <el-col :span="8">
              <el-input placeholder="请选择活动结束时间" v-model="input1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="3" class="p t_right">手机号码：</el-col>
            <el-col :span="8">
              <el-input placeholder="请输入联系电话" v-model="input2">
                <template slot="append">发送验证码</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="3" class="p t_right">验 证 码：</el-col>
            <el-col :span="8">
              <el-input placeholder="请输入验证码" v-model="input1"></el-input>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="crowds_pub_foot">
        <div class="part1">
          <el-radio v-model="radio" label="1">同意</el-radio>
          <span class="link" @click="dialogAgreement = true">《智汇优库发布协议》</span>
        </div>
        <div class="part2">
          <el-button type="info">取消发布</el-button>
          <el-button class="blue_btn" @click="crowdsDialog2 = true">确认发布</el-button>
        </div>
      </div>
    </div>
    <el-dialog
      title="智汇优库发布协议"
      :visible.sync="dialogAgreement"
      class="playing_dialog_com_sy"
      width="1100px"
    >
      <div class="crow_agreement_body">
        <div class="title">智汇优库发布协议</div>
        <p v-for="(t,i) in agreementList1" :key="i+'t1'">{{t}}</p>
      </div>
    </el-dialog>
    <el-dialog
      title="发布成功"
      :visible.sync="crowdsDialog2"
      width="400px"
      class="playing_dialog_com_sy"
    >
      <div class="cro_zhiding_body">
        <div class="img">
          <img :src="require('@assets/img/zhiding1.png')" alt />
        </div>
        <p>恭喜您活动信息发布成功</p>
        <p class="orange_p">+10个智汇币</p>
        <p>请及时关注活动的报名信息</p>
        <div class="submit">
          <el-button class="blue_btn" @click="crowdsDialog2=false">确定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Side from "@components/Side.vue";
import { tableApply } from "@/common/commodity";
export default {
  components: { Side },
  methods:{
    addressChange(){
      
    }
  },
  data() {
    return {
      addressList:[{
        value: 'henansheng',
        label: '河南省',
        children: [{
          value: 'zhengzhou',
          label: '郑州'
        },{
          value: 'xuchang',
          label: '许昌'
        }]
      },
      {
        value: 'heibeisheng',
        label: '河北省',
        children: [{
          value: 'beijing',
          label: '北京',
        }]
      }],
      addressModel:[],
      options: [
        {
          value: "sel1",
          label: "行业1"
        },
        {
          value: "sel2",
          label: "行业2"
        }
      ],
      value: "",
      input1: "",
      input2: "",
      textarea: "",
      radio: "",
      dialogAgreement: false,
      crowdsDialog2: false,
      includeList: ["无", "餐费", "交通", "场地", "住宿", "其它"],
      includeSelect: ["无"]
    };
  },
  computed: {
    agreementList1() {
      return "1.1、通过智汇优库平台，您可以按照智汇优库的规则发布各种弱电行业相关信息。但所发布之信息不得含有如下内容： 11.1反对宪法所确定的基本原则，煽动抗拒、破坏宪法和法律、行政法规实施的； 11.2煽动危害国家安全、泄露国家秘密、颠覆国家政权，推翻社会主义制度的； 1.1.3煽动分裂国家、破坏国家统一、损害国家荣誉和民族利益的； 1.1.4煽动民族仇恨、民族歧视，破坏民族团结的； 1.1.5捏造或者歪曲事实，散布谣言，扰乱社会秩序的； 1.1.6进行政治宣传或破坏国家宗教政策、宣扬封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的； 1.1.7公然侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的； 1.1.8损害国家机关信誉的； 11.9其他违反宪法和法律法规的； 1.2在接受智汇优库服务的过程中，您不得从事下列行为： 1.2.1发表、传送、传播、储存侵害他人知识产权、商业秘密权等合法权利的内容，包含病毒、木马、定时炸弹等可能对智汇优库系统造成伤害或影响其稳定性的内容制造虚假身份以误导、欺骗他人； 1.2.2传送或散布以其他方式实现传送的含有受到知识产权法律保护的图像、相片、软件或其他资料的文件，作为举例（但不限于此）：包括版权或商标法（或隐私权或公开权），除非用户拥有或控制着相应的权利或已得到所有必要的认可； 1.2.3使用任何包含有通过侵犯商标、版权、专利、商业机密或任何一方的其他专有权利的方式利用本“软件”获得的图像或相片的资料或信息； 1.2.4进行危害计算机网络安全的行为，包括但不限于：使用未经许可的数据或进入未经许可的服务器/帐号；未经允许进入公众计算机网络或者他人计算机系统并删除、修改、增加存储信息；未经许可，企图探查、扫描、测试本平台系统或网络的弱点或其它实施破坏网络安全的行为；企图干涉、破坏本平台系统或网站的正常运行，故意传播恶意程序或病毒以及其他破坏干扰正常网络信息服务的行为；伪造TCP/IP数据包名称或部分名称； 1.2.5修改或伪造软件作品运行中的指令、数据、数据包，增加、删减、变动软件的功能或运行效果，不得将用于上述用途的软件通过信息网络向公众传播或者运营； 1.2.6在未经智汇优库书面明确授权前提下，出售、出租、出借、散布、转移或转授权软件和服务或相关的链接或从使用软件和服务或软件和服务的条款中获利，无论以上使用是否为直接经济或金钱收益； 1.2.7违背智汇优库页面公布之活动规则，包括但不限于发布虚假信息、作弊或通过其他手段进行虚假交易。 1.3您了解并同意，智汇优库有权应政府部门（包括司法及行政部门）的要求，向其提供您在智汇优库平台填写的注册信息和发布纪录等必要信息，且无须征得您的同意或提前通知于您。 1.4在智汇优库平台上使用智汇优库服务过程中，您承诺遵守以下约定： 1.4.1在使用智汇优库平台服务过程中实施的所有行为均遵守国家法律、法规等规范文件及智汇优库平台各项规则的规定和要求，不违背社会公共利益或公共道德，不损害他人的合法权益，不违反本协议及相关规则。您如果违反前述承诺，产生任何法律后果的，您应以自己的名义独立承担所有的法律责任，并确保智汇优库免于因此产生任何损失或增加费用。 1.4.2不发布国家禁止发布的信息（除非取得合法且足够的许可），不发布涉嫌侵犯他人知识产权或其它合法权益的信息，不发布违背社会公共利益或公共道德、公序良俗的信息，不发布其它涉嫌违法或违反本协议及各类规则的信息。".split(
        " "
      );
    }
  }
};
</script>

<style lang="less">

</style>
