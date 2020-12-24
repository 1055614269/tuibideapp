<template>
  <div class="script-browse-shopping-cart">
    <ScriptPage
      :title="'浏览购物车'"
      @start="start"
      :buttonName="'开始预览'"
      :data="data"
    >
      <template slot-scope="scope">
         <div class="tips">用户抖音号</div>
        <van-field
          v-model="scope.row.name1"
          placeholder="输入用户抖音号"
        />
         <div class="tips">预览次数（次）</div>
        <van-field
          v-model="scope.row.name2"
          placeholder="预览次数"
        />
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import { Toast } from "vant";
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptBrowseShoppingCart",
  components: {
    ScriptPage: ScriptPage,
  },
  data() {
    return {
      data: {
        name: "",
        name1: "",
        name2: 20,
      },
      // value:10
    };
  },
  props: {
    closeType: {
      type: Boolean,
      default: false,
    },
  },
  //加载前执行
  created() {},

  methods: {
    start() {
      // Toast("评论回复每天只能分享20条哦，请明天再来吧~");
      console.log("start");
    },
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
.script-browse-shopping-cart{

}
</style>
  