<template>
  <div class="script-fan-group-lantern">
    <ScriptPage
      :title="'粉丝团灯牌'"
      @start="start"
      :buttonName="'开始赠送'"
      :data="data"
    >
      <template slot-scope="scope">
         <div class="tips">用户抖音号</div>
        <van-field
          v-model="scope.row.name1"
          placeholder="输入用户抖音号"
        />
     
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import { Toast } from "vant";
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptFanGroupLantern",
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
      Toast("请确认抖币充足，抖币不足无法赠送");
      console.log("start");
    },
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
.script-fan-group-lantern{

}
</style>
  