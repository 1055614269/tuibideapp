<template>
  <div class="script-focus-on-the-audience">
    <ScriptPage
      :title="'关注@观众'"
      @start="start"
      :buttonName="'开始@关注'"
      :data="data"
    >
      <template slot-scope="scope">
        <div class="tips">用户抖音号</div>
        <van-field v-model="scope.row.name1" placeholder="输入用户抖音号" />

        <div class="tips">观众序号</div>
        <van-field
          v-model="scope.row.name1"
          placeholder="从序号5开始@关注观众"
        />
        <div class="tips">是否@观众</div>
        <van-radio-group direction="horizontal" v-model="scope.row.val1">
          <div class="radio-group">
            <van-radio name="1">是</van-radio>
          </div>
          <div class="radio-group">
            <van-radio name="2">否</van-radio>
          </div>
        </van-radio-group>
        <div class="tips">是否关注观众</div>
        <van-radio-group direction="horizontal" v-model="scope.row.val2">
          <div class="radio-group">
            <van-radio name="1">是</van-radio>
          </div>
          <div class="radio-group">
            <van-radio name="2">否</van-radio>
          </div>
        </van-radio-group>
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import { Toast } from "vant";
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptFocusOnTheAudience",
  components: {
    ScriptPage: ScriptPage,
  },
  data() {
    return {
      data: {
        name: "",
        name1: "",
        val1: "1",
        val2: "2",
      },
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
.script-focus-on-the-audience {
}
</style>
  