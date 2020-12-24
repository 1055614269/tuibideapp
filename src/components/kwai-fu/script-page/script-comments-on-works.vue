<template>
  <div class="script-comments-on-works">
    <ScriptPage
      :title="'作品点赞评论'"
      @start="start"
      :buttonColor="'#FD973C'"
      :buttonName="'开始操作'"
      :data="data"
    >
      <template slot-scope="scope">
        <div class="tips">时间间隔最短时间（秒）</div>
        <van-field v-model="scope.row.val1" placeholder="时间间隔最短时间" />
        <div class="tips">时间间隔最长时间（秒）</div>
        <van-field v-model="scope.row.val2" placeholder="时间间隔最长时间" />
        <div class="tips">是否关注</div>
        <van-radio-group direction="horizontal" v-model="scope.row.val3">
          <div class="radio-group">
            <van-radio name="1">是</van-radio>
          </div>
          <div class="radio-group">
            <van-radio name="2">否</van-radio>
          </div>
        </van-radio-group>
        <div class="tips">是否私信</div>
        <van-radio-group direction="horizontal" v-model="scope.row.val4">
          <div class="radio-group">
            <van-radio name="1">是</van-radio>
          </div>
          <div class="radio-group">
            <van-radio name="2">否</van-radio>
          </div>
        </van-radio-group>
        <div class="tips">私信内容</div>
        <van-field
          v-model="scope.row.name"
          rows="2"
          autosize
          type="textarea"
          maxlength="1000"
          placeholder="可换行设置多条评论内容，每一行内容随机评论"
          show-word-limit
        />

        <div class="tips">用户账号</div>
        <van-field
          v-model="_d.url"
          v-for="(_d, key) in scope.row.contents"
          :key="key"
          center
          clearable
          placeholder="输入用户账号"
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
  name: "ScriptCommentsOnWorks",
  components: {
    ScriptPage: ScriptPage,
  },
  data() {
    return {
      data: {
        contents: [{ id: 1, url: "" }],
        name: "",
        val1: 10,
        val2: 20,
        val3: "1",
        val4: "2",
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
      // Toast("私信每天只能分享20条哦，请明天再来吧~");
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
.script-comments-on-works {
}
</style>
  