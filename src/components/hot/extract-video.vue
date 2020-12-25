<template>
  <div class="extract-video">
    <ScriptPage
      :title="'提取视频'"
      @start="start"
      :buttonName="'提取视频'"
      :data="data"
    >
      <template slot-scope="scope">
        <div class="tips">输入分享链接</div>
        <van-field
          v-model="scope.row.name"
          rows="2"
          autosize
          type="textarea"
          placeholder="请输入分享链接"
          show-word-limit
        />
      </template>
    </ScriptPage>
    <Popup
      :show.sync="information"
      :val="'检测到链接，是否粘贴'"
      @ok="ok"
      :img="'../../static/img/icon-10015.png'"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import ScriptPage from "@/components/script-page"; //脚本页面
import Popup from "@/components/popup"; //弹出框
export default {
  name: "ExtractVideo",
  components: {
    ScriptPage: ScriptPage,
    Popup: Popup,
  },
  data() {
    return {
      data: {
        name: "",
      },
      information: true,
      // value:10
    };
  },
  props: {},
  //加载前执行
  created() {},

  methods: {
    start() {
      console.log("start");
    },
    ok() {
      console.log("ok");
    },
  },

  //加载后执行
  mounted() {

  },
};
</script>

<style lang="less" scoped>
.extract-video {
}
</style>
  