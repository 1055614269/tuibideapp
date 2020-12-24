<template>
  <div class="script-search-works-thumbs-comment">
    <ScriptPage
      :title="'搜索作品评论'"
      @start="start"
      :buttonName="'开始评论'"
      :data="data"
    >
      <template slot-scope="scope">
       
        <div class="tips">搜索关键字</div>
        <van-field
          v-model="scope.row.name1"
          placeholder="输入关键词搜索作品进行评论，如：减肥代餐粉"
        />
        <div class="tips">评论内容</div>
        <van-field
          v-model="scope.row.name2"
          rows="2"
          autosize
          type="textarea"
          maxlength="1000"
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
  name: "ScriptSearchWorksThumbsComment",
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
.script-comments-reply {
}
</style>
  