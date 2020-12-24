<template>
  <div id="AppIndex">
    <div class="top">
      <!-- <div class="head"></div> -->
      <div class="title">
        <van-image class="title-img" src="../../static/img/tuibide.jpg" />
        <div class="control">
          <van-image
            class="control-img"
            src="../../static/img/personal-center.png"
          />
          <van-image class="control-img" src="../../static/img/news.png" />
        </div>
      </div>
    </div>
    <div class="tab-content">
      <div class="tabs">
        <div
          :class="'tab ' + (_d.choice ? 'ok-tab' : '')"
          v-for="(_d, key) in tabs"
          :key="key"
          @click="() => tabChoice(_d)"
        >
          <div class="tab-nr">
            <div class="tab-img">
              <van-image class="tab-img" :src="_d.img" />
            </div>
            <div class="tab-t">
              {{ _d.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <Tiktok v-show="tabName === '抖音'" />
      <KwaiFu v-show="tabName === '快手'" />
      <SmallRedBook v-show="tabName === '小红书'" />
      <VideoNumber v-show="tabName === '视频号'" />
    </div>
  </div>
</template>

<script>
import utils from "@/http.utils";
import Tiktok from "@/components/tiktok"; //抖音
import KwaiFu from "@/components/kwai-fu"; //快手
import SmallRedBook from "@/components/small-red-book"; //小红书
import VideoNumber from "@/components/video-number"; //视频号
export default {
  name: "index",
  components: {
    Tiktok: Tiktok,
    KwaiFu: KwaiFu,
    SmallRedBook: SmallRedBook,
    VideoNumber: VideoNumber,
  },
  data() {
    return {
      active: 1,
      tabName: "抖音",
      tabs: [
        { name: "抖音", img: "./../static/img/icon-01.png", choice: true },
        { name: "快手", img: "./../static/img/icon-02.png", choice: false },
        { name: "小红书", img: "./../static/img/icon-03.png", choice: false },
        { name: "视频号", img: "./../static/img/icon-04.png", choice: false },
      ],
    };
  },

  //加载前执行
  created() {},

  methods: {
    tabChoice(_d) {
      this.tabs.map((params) => {
        params.choice = false;
      });
      this.tabName = _d.name;
      _d.choice = true;
    },
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
@import "index";
</style>
  