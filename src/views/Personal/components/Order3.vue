<template>
  <div class="person_right bs">
    <div class="order_body">
      <div class="home_title jcs">
        <div class="a_l">开票信息管理</div>
      </div>
      <el-table
        :data="DataFor(4,[...tableData])"
        style="width: 100%"
        stripe
        class="table_title_com_sy"
      >
        <el-table-column prop="prop1" label="收货人" align="center"></el-table-column>
        <el-table-column prop="prop2" label="所在区域" align="center" width="180"></el-table-column>
        <el-table-column prop="prop3" label="详细地址" align="center" width="220"></el-table-column>
        <el-table-column prop="prop4" label="联系电话" align="center" width="140"></el-table-column>
        <el-table-column prop="prop5" label="删除" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="isDeleteDia = true">{{scope.row.prop5}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="prop6" label="修改" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleEdit(scope.row)">{{scope.row.prop6}}</el-button>
          </template>
        </el-table-column>
        <el-table-column  label="默认地址" align="center">
          <template slot-scope="{scope,$index}">
            <el-radio v-model="radio" :label="''+$index+''"><span class="hidden">{{$index}}</span></el-radio>
          </template>
        </el-table-column>
      </el-table>
      <div class="save_btn bdb_d">
        <el-button class="btn_p3">保存</el-button>
      </div>
      <div class="home_title jcs">
        <div class="a_l">收货地址管理</div>
      </div>
      <el-row>
        <el-col :span="3" :offset="1">选择区域：</el-col>
        <el-col :span="8">
          <el-cascader v-model="addressModel" :options="addressList" placeholder="请选择省、市、区"></el-cascader>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" :offset="1">详细地址：</el-col>
        <el-col :span="8">
          <el-input v-model="value1"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" :offset="1">收件人：</el-col>
        <el-col :span="8">
          <el-input v-model="value1"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" :offset="1">联系电话：</el-col>
        <el-col :span="8">
          <el-input v-model="input1" placeholder="请输入手机验证码" class="login_input">
            <template slot="append">获取验证码</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" :offset="1">手机验证码：</el-col>
        <el-col :span="8">
          <el-input v-model="value1"></el-input>
        </el-col>
      </el-row>
      <div class="submit_btn_sy mbt">
        <button type="button" class="el-button el-button--default el-button--small">
          <span>确认添加</span>
        </button>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="isDeleteDia" width="560px" class="playing_dialog_com_sy">
      <div class="cro_zhiding_body">
        <p class="pt30">确认删除这条地址信息吗？</p>
        <div class="submit">
          <el-button class=" btn_p4" @click="isDeleteDia = false">取消</el-button>
          <el-button class="blue_btn btn_p3" @click="isDeleteDia = false">确定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addressList2 } from "@const";
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          prop1: "陆先生",
          prop2: "河南省郑州市金水区 文化街道",
          prop3: "东风路栋18号金城国际广场 6号楼东单元1005",
          prop4: "13405555514",
          prop5: "删除",
          prop6: "修改",
          prop7: "1"
        }
      ],
      addressModel: [],
      addressList: addressList2,
      value1: "",
      input1: "",
      isDeleteDia: false,
      radio:"0"
    };
  },
  methods: {
    handleEdit(el) {
      this.childHandle(6, 2, "Order3Edit");
    },
    childHandle(i, ic, el) {
      this.$parent.childHandle(i, ic, el);
    }
  }
};
</script>
<style lang="less">

</style>
