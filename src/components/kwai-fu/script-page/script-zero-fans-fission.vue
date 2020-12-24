<template>
  <div class="script-zero-fans-fission">
    <ScriptPage
      :title="'零粉裂变'"
      @start="start"
      :buttonColor="'#FD973C'"
      :buttonName="'开始裂变'"
      :data="data"
    >
      <template slot-scope="scope">
        <div class="tips">作品连接</div>

        <van-field
          v-model="_d.url"
          v-for="(_d, key) in scope.row.contents"
          :key="key"
          center
          clearable
          placeholder="输入用户快手号，将以私信发送"
        >
          <template #right-icon>
            <van-icon @click="removeInput(_d)" color="#4097FF" name="clear" />
          </template>
        </van-field>

        <div class="add-input">
          <van-icon @click="addInput" size="25px" color="#4097FF" name="add" />
        </div>
        <div class="tips">作品连接</div>

        <van-field
          v-model="scope.row.name"
          center
          clearable
          placeholder="输入作品链接，将会自动转发分享，以私信发给用户"
        >
        </van-field>
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import { Toast } from "vant";
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptZeroFansFission",
  components: {
    ScriptPage: ScriptPage,
  },
  data() {
    return {
      data: {
        contents: [{ id: 1, url: "" }],
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
    start() {
      Toast("私信每天只能分享20条哦，请明天再来吧~");
      console.log("start");
    },
    removeInput(_d) {
      var _this = this;
      this.data.contents.map(function (obj, key) {
        if (obj.id === _d.id) {
          _this.data.contents.splice(key, 1);
          Toast("删除成功");
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
  mounted() {},
};
</script>

<style lang="less" scoped>
.script-normal-breed {
}
</style>
  