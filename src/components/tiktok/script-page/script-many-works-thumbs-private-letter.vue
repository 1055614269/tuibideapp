<template>
  <div class="script-many-works-thumbs-private-letter">
    <ScriptPage
      :title="'多作品私信'"
      @start="start"
      :buttonName="'开始私信'"
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
          placeholder="输入作品连接"
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
          v-model="scope.row.name"
          rows="2"
          autosize
          type="textarea"
          placeholder="可换行设置多条评论内容，每一行内容随机评论"
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
  name: "ScriptManyWorksThumbsPrivateLetter",
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
        Toast("多作品私信每天只能分享20条哦，请明天再来吧~")
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
.script-many-works-thumbs-comment {
}
</style>
  