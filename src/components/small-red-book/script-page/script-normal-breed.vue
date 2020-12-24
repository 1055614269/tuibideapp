<template>
  <div class="script-normal-breed">
    <ScriptPage
      :title="'正常养号'"
      @start="start"
      :buttonName="'开始养号'"
      :data="data"
    >
      <template slot-scope="scope">
        <div class="tips">养号时间(分钟)</div>
        <van-field v-model="scope.row.val1" placeholder="养号时间" />
        <div class="tips">观看视频最短时间(秒)</div>
        <van-field v-model="scope.row.val2" placeholder="最短时间" />
        <div class="tips">观看视频最长时间(秒)</div>
        <van-field v-model="scope.row.val3" placeholder="最长时间" />
        <div class="tips">评论次数(次)</div>
        <van-field v-model="scope.row.val4" placeholder="评论次数" />
        <div class="tips">点赞次数(次)</div>
        <van-field v-model="scope.row.val5" placeholder="点赞次数" />
        <div class="tips">收藏次数(次)</div>
        <van-field v-model="scope.row.val6" placeholder="收藏次数" />
        <div class="tips">关注人数(人)</div>
        <van-field v-model="scope.row.val6" placeholder="关注人数" />
        <div class="tips">评论内容</div>
        <van-field
          v-model="scope.row.name"
          rows="2"
          autosize
          type="textarea"
          maxlength="1000"
          placeholder="可换行多条评论内容随机评论。"
          show-word-limit
        />
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptNormalBreed",
  components: {
    ScriptPage: ScriptPage,
  },
  data() {
    return {
      data: {
        name: "赞👍 ！",
        val1: 30,
        val2: 5,
        val3: 15,
        val4: 10,
        val5: 10,
        val6: 10,
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
      console.log("start");
    },
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
.script-normal-breed {
}
</style>
  