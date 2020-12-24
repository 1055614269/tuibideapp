<template>
  <div class="script-publishing-works">
    <ScriptPage
      :title="'发布作品'"
      @start="start"
      :buttonName="'发布视频'"
      :tips="'*该功能默认从手机相册中选择排列顺序第一位的视频进行发布'"
      :data="data"
    >
      <template slot-scope="scope">
        <div class="publishing-works-box">
          <div class="left-box">
            <div class="tips">视频描述</div>
            <van-field
              v-model="scope.row.name"
              rows="2"
              autosize
              type="textarea"
              maxlength="100"
              placeholder="请输入视频描述"
              show-word-limit
            />

            <div class="tips">#视频话题</div>
            <van-field
              v-model="scope.row.name2"
              rows="2"
              autosize
              type="textarea"
              maxlength="100"
              placeholder="#请输入视频话题"
              show-word-limit
            />

            <div class="tips">@好友</div>
            <van-field
              v-model="scope.row.name3"
              rows="2"
              autosize
              type="textarea"
              maxlength="100"
              placeholder="@抖音小助手"
              show-word-limit
            />
          </div>

          <div class="right-box">
            <div class="img-box">
              <van-image
                width="83px"
                height="105px"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              >
                <template v-slot:loading>
                  <van-loading type="spinner" size="20" />
                </template>
              </van-image>

              <div class="t">封面</div>
            </div>
          </div>
          <div class="location">
            定位 <span class="z">让更多人看到你的作品</span>
            <span class="location-icon"><van-icon name="arrow" /></span>
          </div>
          <div class="position">
            <div class="position-name">北京王府井大街</div>
          </div>
        </div>
      </template>
    </ScriptPage>
  </div>
</template>

<script>
import ScriptPage from "@/components/script-page"; //脚本页面
export default {
  name: "ScriptPublishingWorks",
  components: {
    ScriptPage: ScriptPage,
  },
  data() {
    return {
      data: {
        name: "",
        name2: "",
        name3: "@抖音小助手",
        val1: [{ name: "杭州市", x: "251.153264", y: "30.165525" }],
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
      console.log("start");
    },
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
.script-vertical-breed {
}
</style>
  