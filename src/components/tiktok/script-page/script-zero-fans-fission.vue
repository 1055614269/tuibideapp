<template>
  <div class="script-zero-fans-fission">
    <ScriptPage :title="'零粉裂变'" @start="start" :buttonName="'开始裂变'" :data="data">
      <template slot-scope="scope">
      
        <div class="tips">作品连接</div>
        <van-field
          v-model="scope.row.name"
          rows="2"
          autosize
          type="textarea"
          placeholder="输入作品链接，将会自动转发分享作品，以私信发给粉丝。"
          show-word-limit
        />
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import { Toast } from 'vant';
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptZeroFansFission",
  components: {
    ScriptPage: ScriptPage,
  },
  data() {
    return {
      data: {
        name: "",
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
    start(){
      Toast('私信每天只能分享20条哦，请明天再来吧~');
      console.log("start");
    }
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
.script-normal-breed {
  
}
</style>
  