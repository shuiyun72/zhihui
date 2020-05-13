<template>
  <div class="person_right">
    <div class="title_return_com_sy">
      <div class="left">
        <span class="r1" @click="routerTo('Seller1')">发布的尾货</span>
        <span class="r0">></span>
        <span class="r2">添加尾货</span>
      </div>
    </div>
    <div class="seller_add_com_sy bs p10">
      <el-row>
        <el-col :span="3" class="t_right">尾货名称：</el-col>
        <el-col :span="7">
          <el-input v-model="v1" placeholder="输入商品名称"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" class="t_right">上传图片：</el-col>
        <el-col :span="20">（精美的商品主图让商品脱颖而出,请上传1-5张主图，保证清晰美观）</el-col>
      </el-row>
      <el-row>
        <el-col :span="7" :offset="3">
          <img :src="require('@assets/img/re2.jpg')" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" class="t_right">出售方式：</el-col>
        <el-col :span="20">
          <el-radio v-model="radio" label="1">一口价出售</el-radio>
          <el-radio v-model="radio" label="2">0元竞拍</el-radio>
          <el-radio v-model="radio" label="3">底价竞拍</el-radio>
          <el-radio v-model="radio" label="4">降价竞拍</el-radio>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" class="t_right">商品状态：</el-col>
        <el-col :span="7">
          <el-input v-model="v1"></el-input>
        </el-col>
        <el-col :span="3" class="t_right" :offset="1">商品分类：</el-col>
        <el-col :span="7">
          <el-select v-model="value" placeholder="请选择">
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
        <el-col :span="3" class="t_right">品牌名称：</el-col>
        <el-col :span="7">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="3" class="t_right" :offset="1">商品型号：</el-col>
        <el-col :span="7">
          <el-select v-model="value" placeholder="请选择">
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
        <el-col :span="3" class="t_right">参数规格：</el-col>
        <el-col :span="18">
          <div class="parameter_box_com_sy">
            <div class="p_p1">
              <span class="l">例</span>
              <span class="btn_f">颜色</span> ：
              <span class="btn_f">黑色</span>
            </div>
            <div class="p_p2">
              <el-input class="inp1" v-model="v2"></el-input>：
              <el-input class="inp2" v-model="v3"></el-input>
            </div>
            <div class="p_p2">
              <el-input class="inp1" v-model="v2"></el-input>：
              <el-input class="inp2" v-model="v3"></el-input>
            </div>
            <div class="p_p3">
              <span class="link">添加参数</span>
              <span class="iconfont icon-jiahaocu"></span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" class="t_right">是否上架：</el-col>
        <el-col :span="7">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="3" class="t_right" :offset="1">计量单位：</el-col>
        <el-col :span="7">
          <el-select v-model="value" placeholder="请选择">
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
        <el-col :span="3" class="t_right">原价：</el-col>
        <el-col :span="7">
          <el-input v-model="v1"></el-input>
        </el-col>
        <el-col :span="3" class="t_right" :offset="1">甩手价：</el-col>
        <el-col :span="7">
          <el-input v-model="v1"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" class="t_right">商品所在地：</el-col>
        <el-col :span="7">
          <el-input v-model="v1"></el-input>
        </el-col>
        <el-col :span="3" class="t_right" :offset="1">库存：</el-col>
        <el-col :span="7">
          <el-input v-model="v1"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" class="t_right">配送方式：</el-col>
        <el-col :span="7">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="3" class="t_right" :offset="1">运费设置：</el-col>
        <el-col :span="7">
          <el-select v-model="value" placeholder="请选择">
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
        <el-col :span="3" class="t_right">商品图文详情：</el-col>
        <el-col :span="18">
          <el-input
            type="textarea"
            :autosize="{ minRows: 6}"
            placeholder="图文编辑器"
            v-model="textarea1"
          ></el-input>
        </el-col>
      </el-row>
      <div class="submit_btn_sy mbt or">
        <el-button>立即发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v1: "",
      v2: "",
      v3: "",
      radio: "1",
      value: "",
      textarea1: "",
      options: [
        {
          value: "选项1",
          label: "选项1"
        },
        {
          value: "选项2",
          label: "选项2"
        }
      ]
    };
  },
  methods: {
    childHandle(i, ic, el) {
      this.$parent.childHandle(i, ic, el);
    },
    routerTo(el) {
      this.childHandle(7, 0, el);
    }
  }
};
</script>
<style lang="less">
</style>
