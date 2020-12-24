<template>
  <div class="script-browse-yellow-cars">
    <ScriptPage
      :title="'浏览小黄车'"
      @start="start"
      :buttonColor="'#FD973C'"
      :buttonName="'开始浏览'"
      :data="data"
    >
      <template slot-scope="scope">
         <div class="tips">用户快手号/ID</div>
        <van-field
          v-model="scope.row.name1"
          placeholder="输入用户快手号/ID"
        />
         <div class="tips">浏览次数（秒）</div>
        <van-field
          v-model="scope.row.name2"
          placeholder="浏览次数"
        />
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import { Toast } from "vant";
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptBrowseYellowCars",
  components: {
    ScriptPage: ScriptPage,
  },
  data() {
    return {
      data: {
        name: "",
        name1: "",
        name2: 5,
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
.script-browse-yellow-cars{

}
</style>
  