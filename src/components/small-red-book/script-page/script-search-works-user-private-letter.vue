<template>
  <div class="script-search-works-user-private-letter">
    <ScriptPage
      :title="'搜索用户私信'"
      @start="start"
      :buttonName="'开始私信'"
      :data="data"
    >
      <template slot-scope="scope">
        <div class="tips">小红书号</div>

        <van-field
          v-model="_d.url"
          v-for="(_d, key) in scope.row.contents"
          :key="key"
          center
          clearable
          placeholder="输入用户小红书号，搜索用户进行私信"
        >
          <template #right-icon>
            <van-icon @click="removeInput(_d)" color="#4097FF" name="clear" />
          </template>
        </van-field>

        <div class="add-input">
          <van-icon @click="addInput" size="25px" color="#4097FF" name="add" />
        </div>




        <div class="tips">私信内容</div>
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
  name: "ScriptSearchWorksUserPrivateLetter",
  components: {
    ScriptPage: ScriptPage,
  },
  data() {
    return {
     
      data: {
         contents: [
          { id: 1, url: "" },
        ],
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
      // Toast("私信每天只能私信20条哦，请明天再来吧~");
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
  mounted() {},
};
</script>

<style lang="less" scoped>
.script-search-works-user-private-letter {
}
</style>
  