<template>
  <div class="script-like-the-live-room">
    <ScriptPage
      :title="'直播间点赞'"
      @start="start"
      :buttonColor="'#FD973C'"
      :buttonName="'开始点赞'"
      :data="data"
    >
      <template slot-scope="scope">
        <div class="tips">用户快手号/ID</div>
        <van-field
          v-model="scope.row.name1"
          placeholder="输入用户快手号/ID"
        />
        <div class="tips">点赞次数（次）</div>
        <van-field v-model="scope.row.name2" placeholder="点赞次数" />
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import { Toast } from "vant";
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptLikeTheLiveRoom",
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
.script-like-the-live-room {
}
</style>
  