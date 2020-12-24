<template>
  <div class="script-giving-gifts">
    <ScriptPage
      :title="'送礼物'"
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
         <div class="tips">赠送礼物最短时间（秒）</div>
        <van-field
          v-model="scope.row.val1"
          placeholder="赠送礼物最短时间"
        />
          <div class="tips">赠送礼物最短时间（秒）</div>
        <van-field
          v-model="scope.row.val2"
          placeholder="赠送礼物最短时间"
        />
          <div class="tips">赠送礼物个数（个）</div>
        <van-field
          v-model="scope.row.val3"
          placeholder="点赞次数"
        />
        <div class="notes">
          默认选择“礼物”分类第一个进行赠送
        </div>
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import { Toast } from "vant";
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptGivingGifts",
  components: {
    ScriptPage: ScriptPage,
  },
  data() {
    return {
      data: {
        name: "",
        name1: "",
        val1: 10,
        val2: 20,
        val3: 10,
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
.script-giving-gifts{

}
</style>
  