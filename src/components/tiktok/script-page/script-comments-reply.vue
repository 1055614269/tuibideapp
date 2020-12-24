<template>
  <div class="script-comments-reply">
    <ScriptPage
      :title="'评论回复'"
      @start="start"
      :buttonName="'开始回复'"
      :data="data"
    >
      <template slot-scope="scope">
        <div class="tips">作品连接</div>
        <van-field
          v-model="scope.row.name"
          rows="2"
          autosize
          type="textarea"
          placeholder="输入作品连接"
          show-word-limit
        />
        <div class="tips">评论关键字</div>
        <van-field
          v-model="scope.row.name1"
          placeholder="输入关键词，筛选用户评论进行回复，如：减肥"
        />
        <div class="tips">回复内容</div>
        <van-field
          v-model="scope.row.name2"
          rows="2"
          autosize
          type="textarea"
          maxlength="100"
          placeholder="可换行设置多条回复内容，每一行内容随机回复"
          show-word-limit
        />
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import { Toast } from "vant";
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptCommentsReply",
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
      Toast("评论回复每天只能分享20条哦，请明天再来吧~");
      console.log("start");
    },
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
.script-comments-reply {
}
</style>
  