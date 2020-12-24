<template>
  <div class="script-live-room-message">
    <ScriptPage
      :title="'直播间留言'"
      @start="start"
      :buttonName="'开始留言'"
      :data="data"
    >
      <template slot-scope="scope">
         <div class="tips">用户抖音号</div>
        <van-field
          v-model="scope.row.name1"
          placeholder="输入用户抖音号"
        />
         <div class="tips">留言内容</div>
        <van-field
          v-model="scope.row.name2"
          rows="2"
          autosize
          type="textarea"
          maxlength="1000"
          placeholder="可换行设置多条回复内容，每一行内容随机回复"
          show-word-limit
        />

         <div class="tips">留言次数（次）</div>
        <van-field
          v-model="scope.row.val3"
          placeholder="点赞次数"
        />
          <div class="tips">留言间隔最短时间（秒）</div>
        <van-field
          v-model="scope.row.val1"
          placeholder="留言间隔最短时间"
        />
          <div class="tips">留言间隔最长时间（秒）</div>
        <van-field
          v-model="scope.row.val2"
          placeholder="留言间隔最长时间"
        />
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import { Toast } from "vant";
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptLiveRoomMessage",
  components: {
    ScriptPage: ScriptPage,
  },
  data() {
    return {
      data: {
        name: "",
        name1: "",
        name2: "赞！",
        val1: 10,
        val2: 20,
        val3: 20,
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
.script-live-room-message{

}
</style>
  