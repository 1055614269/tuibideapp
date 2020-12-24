<template>
  <div class="video-data">
    <van-search
      v-model="SearchName"
      show-action
      shape="round"
      left-icon=""
      placeholder="输入您想搜索的视频数据"
      @search="onSearch"
    >
      <template #label>
        <img
          class="search-img"
          src="../../../../static/img/icon-search.png"
          alt=""
        />
      </template>
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>

    <div class="contents">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="content" v-for="item in list" :key="item">
          <div class="content-left">
            <div class="checkbox">
              <van-checkbox v-model="checked" shape="square" />
            </div>
          </div>
          <div class="content-nr">
            <div class="nr">
              <div class="user-portrait">
                <van-image
                  round
                  class="user-img"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              </div>

              <div class="val">
                <div class="val-name">昵称：我们的歌</div>
                <div class="val-slogan">
                  视频描述：#邓紫棋在#东方卫视唱的新歌太好听了！打开抖音搜索#邓紫棋，直接观看...
                </div>
                <div class="val-type">
                  <van-icon name="like-o" /><span class="t">11.4w</span>
                </div>
              </div>
              <div class="content-right">
                <van-image
                  @click="information = !information"
                  round
                  class="right-img"
                  src="../../../../static/img/icon-100010.png"
                />
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </div>

    <PopupCard title="视频详情" :show.sync="information" :data="data" />
  </div>
</template>

<script>
import PopupCard from "@/components/hot/popup-card"; //卡片弹出框
export default {
  name: "VideoData",
  components: {
    PopupCard: PopupCard,
  },
  data() {
    return {
      SearchName: "",
      checked: "",
      list: [],
      loading: false,
      finished: false,
      information: false,
      data: [
        { name: "作者昵称", val: "@我们的歌", copy: true },
        {
          name: "视频描述",
          val: " 视频描述：#邓紫棋在#东方卫视唱的新歌太好听了！打开抖音搜索#邓紫棋，直接观看...",
        },
        { name: "视频点赞数", val: "11.4w" },
        { name: "视频点赞数", val: "1.6W" },
        { name: "视频分享数", val: "7604" },
      ],
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
      this.onLoad()
  },

  methods: {
    onSearch(val) {
      Toast(val);
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
@import "index";
</style>
  