<template>
  <div class="script-focus-on-the-anchor">
    <ScriptPage
      :title="'关注主播'"
      @start="start"
      :buttonName="'关注主播'"
      :data="data"
    >
      <template slot-scope="scope">
        <div class="tips">用户抖音号</div>

        <van-field
          v-model="_d.url"
          v-for="(_d, key) in scope.row.contents"
          :key="key"
          center
          clearable
          placeholder="输入主播抖音号"
        >
          <template #right-icon>
            <van-icon @click="removeInput(_d)" color="#4097FF" name="clear" />
          </template>
        </van-field>

        <div class="add-input">
          <van-icon @click="addInput" size="25px" color="#4097FF" name="add" />
        </div>
        
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import { Toast } from "vant";
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptFocusOnTheAnchor",
  components: {
    ScriptPage: ScriptPage,
  },
  data() {
    return {
      data:{
        contents: [
          { id: 1, url: "" },
        ],
        name:""
      }
      // value:10
    };
  },
  props: {
  
  },
  //加载前执行
  created() {},

  methods: {
    start() {
      console.log("start");
    },
    removeInput(_d) {
      var _this = this;
      this.data.contents.map(function (obj, key) {
        if (obj.id === _d.id) {
          _this.data.contents.splice(key, 1);
          Toast("删除成功")
        }
      });
    },
    addInput() {
      let id = 1;
      if (this.data.contents.length >= 1) {
        id = this.data.contents[this.data.contents.length - 1].id + 1;
      }
      this.data.contents.push({
        id: id,
        url: "",
      });
    },
  },

  //加载后执行
  mounted() {

  },
};
</script>

<style lang="less" scoped>
.script-focus-on-the-anchor{
}
</style>
  