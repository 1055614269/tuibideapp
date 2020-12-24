<template>
  <div class="script-search-works-user-follow">
    <ScriptPage
      :title="'搜索用户关注'"
      @start="start"
      :buttonName="'开始关注'"
      :data="data"
    >
      <template slot-scope="scope">
         <div class="tips">搜索关键字</div>
        <van-field
          v-model="scope.row.name1"
          placeholder="如：减肥代餐粉"
        />
       
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import { Toast } from "vant";
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptSearchWorksUserFollow",
  components: {
    ScriptPage: ScriptPage,
  },
  data() {
    return {
      data: {
        name: "",
        name1: "",
        name2: "",
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
.script-search-works-user-follow{
}
</style>
  