<template>
  <div class="crowds_publish">
    <Side :isShowRightPart1="false"></Side>
    <div class="title_Progress part0">
      <div class="left">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/crowds' }">众包合作</el-breadcrumb-item>
          <el-breadcrumb-item>发布众包</el-breadcrumb-item>
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
            <el-col :span="2" class="p">众包标题：</el-col>
            <el-col :span="17">
              <el-input placeholder="请输入自定义合作标题" v-model="input1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="2" class="p">公司名称：</el-col>
            <el-col :span="17">
              <el-input placeholder="请输入发起合作的公司名称" v-model="input2"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="2" class="p">众包需求：</el-col>
            <el-col :span="17">
              <el-input type="textarea" v-model="textarea"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red none">*</span>
            </el-col>
            <el-col :span="2" class="p">上传附件：</el-col>
            <el-col :span="17" class="p">
              <i class="el-icon-tickets"></i>附件文件格式可以为WORD/PDF等文档，大小不超过2M
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="2" class="p">选择行业：</el-col>
            <el-col :span="8">
              <el-select v-model="value" placeholder="请选择相对应的行业">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="2" class="p">众包类型：</el-col>
            <el-col :span="8">
              <el-select v-model="value" placeholder="选择相对应的合作类型">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="2" class="p">众包区域：</el-col>
            <el-col :span="8">
              <el-select v-model="value" placeholder="选择意向合作地区">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="2" class="p">众包预算：</el-col>
            <el-col :span="8">
              <el-input placeholder="请输入合作预算金额 元" v-model="input1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="2" class="p">手机号码：</el-col>
            <el-col :span="8">
              <el-input placeholder="可接收验证码的手机号" v-model="input2">
                <template slot="append">发送验证码</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1" class="t_right">
              <span class="point_red">*</span>
            </el-col>
            <el-col :span="2" class="p">验 证 码：</el-col>
            <el-col :span="8">
              <el-input placeholder="请输入手机接收到的验证码" v-model="input1"></el-input>
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
        <p class="title_c">二、责任范围和责任限制</p>
        <p v-for="(t,i) in agreementList2" :key="i+'t2'">{{t}}</p>
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
        <p>恭喜您合作信息发布成功</p>
        <p class="orange_p">+10个智汇币</p>
        <p>请及时关注合作意向人的报名信息</p>
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
  data() {
    return {
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
      crowdsDialog2: false
    };
  },
  computed: {
    agreementList1() {
      return "1.1、通过智汇优库平台，您可以按照智汇优库的规则发布各种弱电行业相关信息。但所发布之信息不得含有如下内容： 11.1反对宪法所确定的基本原则，煽动抗拒、破坏宪法和法律、行政法规实施的； 11.2煽动危害国家安全、泄露国家秘密、颠覆国家政权，推翻社会主义制度的； 1.1.3煽动分裂国家、破坏国家统一、损害国家荣誉和民族利益的； 1.1.4煽动民族仇恨、民族歧视，破坏民族团结的； 1.1.5捏造或者歪曲事实，散布谣言，扰乱社会秩序的； 1.1.6进行政治宣传或破坏国家宗教政策、宣扬封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的； 1.1.7公然侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的； 1.1.8损害国家机关信誉的； 11.9其他违反宪法和法律法规的； 1.2在接受智汇优库服务的过程中，您不得从事下列行为： 1.2.1发表、传送、传播、储存侵害他人知识产权、商业秘密权等合法权利的内容，包含病毒、木马、定时炸弹等可能对智汇优库系统造成伤害或影响其稳定性的内容制造虚假身份以误导、欺骗他人； 1.2.2传送或散布以其他方式实现传送的含有受到知识产权法律保护的图像、相片、软件或其他资料的文件，作为举例（但不限于此）：包括版权或商标法（或隐私权或公开权），除非用户拥有或控制着相应的权利或已得到所有必要的认可； 1.2.3使用任何包含有通过侵犯商标、版权、专利、商业机密或任何一方的其他专有权利的方式利用本“软件”获得的图像或相片的资料或信息； 1.2.4进行危害计算机网络安全的行为，包括但不限于：使用未经许可的数据或进入未经许可的服务器/帐号；未经允许进入公众计算机网络或者他人计算机系统并删除、修改、增加存储信息；未经许可，企图探查、扫描、测试本平台系统或网络的弱点或其它实施破坏网络安全的行为；企图干涉、破坏本平台系统或网站的正常运行，故意传播恶意程序或病毒以及其他破坏干扰正常网络信息服务的行为；伪造TCP/IP数据包名称或部分名称； 1.2.5修改或伪造软件作品运行中的指令、数据、数据包，增加、删减、变动软件的功能或运行效果，不得将用于上述用途的软件通过信息网络向公众传播或者运营； 1.2.6在未经智汇优库书面明确授权前提下，出售、出租、出借、散布、转移或转授权软件和服务或相关的链接或从使用软件和服务或软件和服务的条款中获利，无论以上使用是否为直接经济或金钱收益； 1.2.7违背智汇优库页面公布之活动规则，包括但不限于发布虚假信息、作弊或通过其他手段进行虚假交易。 1.3您了解并同意，智汇优库有权应政府部门（包括司法及行政部门）的要求，向其提供您在智汇优库平台填写的注册信息和发布纪录等必要信息，且无须征得您的同意或提前通知于您。 1.4在智汇优库平台上使用智汇优库服务过程中，您承诺遵守以下约定： 1.4.1在使用智汇优库平台服务过程中实施的所有行为均遵守国家法律、法规等规范文件及智汇优库平台各项规则的规定和要求，不违背社会公共利益或公共道德，不损害他人的合法权益，不违反本协议及相关规则。您如果违反前述承诺，产生任何法律后果的，您应以自己的名义独立承担所有的法律责任，并确保智汇优库免于因此产生任何损失或增加费用。 1.4.2不发布国家禁止发布的信息（除非取得合法且足够的许可），不发布涉嫌侵犯他人知识产权或其它合法权益的信息，不发布违背社会公共利益或公共道德、公序良俗的信息，不发布其它涉嫌违法或违反本协议及各类规则的信息。 1.4.3不对智汇优库平台上的任何数据作商业性利用，包括但不限于在未经智汇优库事先书面同意的情况下，以复制、传播等任何方式使用智汇优库网站上展示的资料。 1.4.5不使用任何装置、软件或例行程序干预或试图干预智汇优库平台的正常运作或正在智汇优库平台上进行的任何活动。您不得采取任何将导致不合理的庞大数据负载加诸智汇优库平台网络设备的行动。 1.5您了解并同意： 1.5.1您违反上述承诺时，智汇优库有权依据本协议的约定，做出相应处理或终止向您提供服务，且无须征得您的同意或提前通知于您。 1.5.2根据相关法令的指定或者智汇优库服务规则的判断，您的行为涉嫌违反法律法规的规定或违反本协议和/或规则的条款的，智汇优库有权采取相应措施，包括但不限于直接屏蔽、删除侵权信息、降低您的信用值或直接停止提供服务。如因此使智汇优库遭受损失，或受到任何第三方的索赔，或受到任何行政管理部门的处罚，您应当赔偿智汇优库因此造成的损失及（或）发生的费用，包括合理的律师费用。 1.5.3对于您在智汇优库平台上实施的行为，包括您未在智汇优库上实施但已经对智汇优库平台及其用户产生影响的行为，智汇优库有权单方认定您行为的性质及是否构成对本协议和/或规则的违反，并据此采取相应的处理措施。您应自行保存与您行为有关的全部证据，并应对无法提供充要证据承担不利后果。 1.5.4)对于您涉嫌违反承诺的行为对任意第三方造成损害的，您均应当以自己的名义独立承担所有的法律责任，并应确保智汇优库免于承担因此产生的损失或增加的费用。 ".split(
        " "
      );
    },
    agreementList2() {
      return "2.1、智汇优库负责向您提供智汇优库平台服务。但智汇优库对智汇优库平台服务不作任何明示或暗示的保证，包括但不限于智汇优库平台服务的适用性、没有错误或疏漏、持续性、准确性、可靠性、适用于某一特定用途。同时，智汇优库也不对智汇优库平台服务所涉及的技术及信息的有效性、准确性、正确性、可靠性、稳定性、完整性和及时性作出任何承诺和保证。 2.2、智汇优库仅向您提供智汇优库平台服务，您了解智汇优库平台上的信息系用户自行发布，由于海量信息的存在，且智汇优库平台无法杜绝可能存在风险和瑕疵。您应谨慎判断确定相关信息的真实性、合法性和有效性，并注意保留相应的证据以利于维权，如可能，尽量采用网站建议的交易方式进行。 2.3、智汇优库平台与其他的在线使用的互联网网站一样，也会受到各种不良信息、网络安全和网络故障问题的困扰，包括但不限于： 2.3.1其他用户可能会发布诈骗或虚假信息，或者发表有谩骂、诅咒、诋毁、攻击内容的，或者含有淫秽、色情、下流、反动、煽动民族仇恨等让人反感、厌恶的内容的非法言论； 2.3.2其他用户可能会发布一些侵犯您或者其他第三方知识产权、肖像权、姓名权、名誉权、隐私权和/或其他合法权益的图片、照片、文字等资料； 2.3.3面临着诸如黑客攻击、计算机病毒困扰、系统崩溃、网络掉线、网速缓慢、程序漏洞等问题的困扰和威胁。您充分了解并同意：上述的各种不良信息、网络安全和网络故障问题，并不是智汇优库或者智汇优库平台所导致的问题，由此可能会造成您感到反感、恶心、呕吐等精神损害，或者给您造成其他的损失，概由您自行承担，智汇优库无须向您承担任何责任。 2.4、您同意，在发现本网站任何内容不符合法律规定，或不符合本用户协议规定的，您有义务及时通知智汇优库。如果您发现您的个人信息被盗用、您的版权或者其他权利被侵害，请将此情况告知智汇优库并同时提供如下信息和材料： 2.4.1侵犯您权利的信息的网址，编号或其他可以找到该信息的细节； 2.4.2您是所述的版权或者其他权利的合法拥有者的权利证明； 2.4.3您的联系方式，包括联系人姓名，地址，电话号码和电子邮件； 2.4.4您的身份证复印件、营业执照等其他相关资料。经审查得到证实的，我们将及时删除相关信息。我们仅接受邮寄、电子邮件或传真方式的书面侵权通知。情况紧急的，您可以通过客服电话先行告知，我们会视情况采取相应措施。 2.5、您了解并同意，智汇优库不对因下述任一情况而导致您的任何损害赔偿承担责任，包括但不限于利润、商誉、使用、数据等方面的损失或其它无形损失的损害赔偿： 2.5.1使用或未能使用智汇优库平台服务； 2.5.2第三方未经批准地使用您的账户或更改您的数据； 2.5.3通过智汇优库平台服务购买或获取任何商品、样品、数据、信息等行为或替代行为产生的费用及损失； 2.5.4您对智汇优库平台服务的误解； 2.5.5任何非因智汇优库的原因而引起的与智汇优库平台服务有关的其它损失。 2.6、您在智汇优库上使用第三方提供的产品或服务时，除遵守本协议约定外，还应遵守第三方的用户协议。智汇优库和第三方对可能出现的纠纷在法律规定和约定的范围内各自承担责任。 2.7、您同意在使用智汇优库平台服务过程中显示智汇优库自行或由第三方服务商向您发送的推广或宣传信息（包括商业与非商业信息），其方式和范围可不经向您特别通知而变更。除法律法规明确规定外，您应自行对依该推广信息进行的交易负责，对用户因依该推广信息进行的交易或前述第三方服务商提供的内容而遭受的损失或损害，智汇优库不承担任何责任。 2.8、智汇优库对下列不可抗力行为免责：信息网络正常的设备维护，信息网络连接故障，电脑、通讯或其他系统的故障，电力故障，罢工，劳动争议，暴乱，起义，骚乱，生产力或生产资料不足，火灾，洪水，风暴，爆炸，战争，政府行为，司法行政机关的命令或第三方的不作为而造成的不能服务或延迟服务。 2.9、您应当严格遵守本协议及智汇优库发布的其他协议、活动规则，因您违反协议或规则的行为给第三方或智汇优库造成损失的，您应当承担全部责任。 2.10、智汇优库保留在中华人民共和国大陆地区法施行之法律允许的范围内独立决定拒绝服务、关闭用户账户、清除或编辑内容或取消订单的权利。".split(
        " "
      );
    }
  }
};
</script>

<style lang="less">
.crowds_publish_body {
  margin-top: 16px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  .title_c {
    padding: 8px 20px;
    background-color: #ccc;
    color: #000;
  }
  .content {
    padding: 60px 80px 20px;
    .left {
      width: 150px;
      img {
        width: 100%;
      }
      p {
        text-align: center;
        padding-top: 20px;
        font-size: 18px;
        color: #666;
      }
    }
    .right {
      width: 850px;
      color: #666;
      .el-row {
        padding-bottom: 10px;
        .t_right {
          padding-right: 6px;
          line-height: 30px;
        }
        .p {
          line-height: 30px;
        }
        textarea {
          height: 80px;
        }
        .el-icon-tickets {
          font-size: 26px;
          margin-right: 6px;
        }
      }
    }
  }
  .crowds_pub_foot {
    width: 80%;
    margin: 0 auto;
    border-top: 1px solid #ccc;
    .part1 {
      text-align: center;
      padding: 30px 0 40px;
    }
    .part2 {
      text-align: center;
      button {
        padding: 4px 20px;
        border-radius: 20px;
      }
      .blue_btn {
        margin-left: 60px;
      }
    }
  }
}
.crow_agreement_body {
  font-size: 12px;
  padding: 20px 50px 100px;
  .title {
    font-weight: bold;
    border-bottom: 1px solid #ccc;
    text-align: center;
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-size: 16px;
  }
  p {
    margin-bottom: 16px;
    line-height: 16px;
  }
  .title_c {
    margin-top: 40px;
  }
}
</style>
