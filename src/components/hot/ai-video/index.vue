<template>
  <div class="ai-video">
    <Head :title="'AI视频'" />
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
      <CloudVideo v-show="tabName === '云视频库'" />
      <Processed v-show="tabName === '已处理'" />
      <!-- <AccurateCustomers v-show="tabName === '精确客户'" /> -->
    </div>

  
  </div>
</template>

<script>
import Head from "@/components/head";
import CloudVideo from "@/components/hot/ai-video/cloud-video";
import Processed from "@/components/hot/ai-video/processed";
// import AccurateCustomers from "@/components/hot/ai-video/accurate-customers";

export default {
  name: "AiVideo",
  components: {
    Head: Head,
    CloudVideo: CloudVideo,
    Processed: Processed,
    // AccurateCustomers: AccurateCustomers,
  },
  data() {
    return {
      tabName: "云视频库",
      tabs: [
        { name: "云视频库",  choice: true },
        { name: "已处理",  choice: false },
        { name: "已上传",  choice: false },
      ],

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

  },

  methods: {
    tabChoice(_d) {
      this.tabs.map((params) => {
        params.choice = false;
      });

      this.tabName = _d.name;
  
      _d.choice = true;
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
  