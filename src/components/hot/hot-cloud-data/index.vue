<template>
  <div class="hot-cloud-data">
    <Head :title="'云数据'" />
    <div class="tab-content">
      <div class="tabs">
        <div
          :class="'tab ' + (_d.choice ? 'ok-tab' : '')"
          :style="{ width: 100 / +tabs.length + '%' }"
          v-for="(_d, key) in tabs"
          :key="key"
          @click="() => tabChoice(_d)"
        >
          <div class="tab-nr">
            <div class="tab-t">
              {{ _d.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <VideoData v-show="tabName === '视频数据'" />
      <UserData v-show="tabName === '用户数据'" />
      <AccurateCustomers v-show="tabName === '精确客户'" />
    </div>

    <div class="suspended-interface">
      <div class="select-all">
        <van-checkbox v-model="checked" shape="square">全选</van-checkbox>
      </div>
      <div class="s-tab-content">
        <div class="tabs">
          <div
            :class="'tab ' + (_d.choice ? 'ok-tab' : '')"
            v-for="(_d, key) in onekeys"
            :style="{ width: 100 / +onekeys.length + '%' }"
            :key="key"
            @click="() => _tabChoice(_d)"
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
    </div>
  </div>
</template>

<script>
import Head from "@/components/head";
import VideoData from "@/components/hot/hot-cloud-data/video-data";
import UserData from "@/components/hot/hot-cloud-data/user-data";
import AccurateCustomers from "@/components/hot/hot-cloud-data/accurate-customers";


export default {
  name: "HotCloudData",
  components: {
    Head: Head,
    VideoData: VideoData,
    UserData: UserData,
    AccurateCustomers:AccurateCustomers
  },
  data() {
    return {
      tabName: "视频数据",
      tabs: [
        { name: "视频数据", img: "./../static/img/icon-01.png", choice: true },
        { name: "用户数据", img: "./../static/img/icon-02.png", choice: false },
        { name: "精确客户", img: "./../static/img/icon-03.png", choice: false },
      ],

      onekeys: [], //一键
      checked: false,
    };
  },

  props: {
    title: {
      type: String,
      default: "",
    },
    closeType: {
      type: Boolean,
      default: false,
    },
  },
  //加载前执行
  created() {
    this.onekey(this.tabName);
  },

  methods: {
    tabChoice(_d) {
      this.tabs.map((params) => {
        params.choice = false;
      });

      this.tabName = _d.name;
      this.onekey(_d.name);
      _d.choice = true;
    },
    onekey(key) {
      switch (key) {
        case "视频数据":
          this.onekeys = [
            {
              name: "一键私信",
              img: "./../static/img/icon-10013.png",
              choice: true,
            },
            {
              name: "一键评论",
              img: "./../static/img/icon-10012.png",
              choice: false,
            },
            {
              name: "一键关注",
              img: "./../static/img/icon-10011.png",
              choice: false,
            },
          ];
          break;
        case "用户数据":
        case "精确客户":
          this.onekeys = [
            {
              name: "一键私信",
              img: "./../static/img/icon-10013.png",
              choice: true,
            },
            {
              name: "一键关注",
              img: "./../static/img/icon-10011.png",
              choice: false,
            },
          ];
          break;
        default:
          break;
      }
    },

    _tabChoice() {},
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
@import "index";

</style>
  