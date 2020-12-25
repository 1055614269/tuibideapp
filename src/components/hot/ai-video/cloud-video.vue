<template>
  <div class="video-data">
    <div class="classification">
      <van-popup v-model="show" position="top" :style="{ height: '320px' }">
        <div class="van-popup-screen">
          <div class="select-label">请您选择分类标签 <span>2 / 3</span></div>
          <div class="label" ref="introduce">
            <div class="label-box">
              <div
                :class="'nr ' + (key % 2 == 0 ? '_l' : '_h')"
                :key="key"
                v-for="(val, key) in labelList"
              >
                {{ val }}
              </div>
            </div>
          </div>
          <div class="scroll-bar-nr">
            <div ref="scrollbar" class="scroll-bar scroll-bar-1">
              <div
                :style="{
                  width: '120px',
                }"
                class="scrollbar"
              ></div>
            </div>
          </div>

          <div class="button">
            <van-button color="#4097FF" type="primary" block
              >确定选择</van-button
            >
          </div>
        </div>
      </van-popup>
      <span class="l g-classification">
        当前分类：
        <span class="nr"> 生活 </span>
        <span class="nr"> 科技 </span>
      </span>
      <span class="r" @click="onShow">
        <div class="i">
          <van-icon size="25" color="#4097FF" name="wap-nav" />
        </div>
        <div class="d">更多</div>
      </span>
    </div>

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
    <Popup
      :show.sync="information"
      :ok_show="false"
      :no_show="false"
      :val="'下载中，请稍后'"
      :img="'../../static/img/icon-10015.png'"
    />
    <div class="contents">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="content" v-for="item in list" :key="item">
          <div class="content-left" @click="() => onVideoCard()">
            <van-image
              radius="8"
              width="100"
              height="100"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            >
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
            <div class="play-chart">
              <div class="chart">
                <van-icon class="i" name="play" size="20" />
              </div>
            </div>
          </div>

          <div class="content-nr">
            <div class="nr">
              <div class="val">
                <div class="val-name">宝贝刚满月，应该这么做</div>
                <div class="val-slogan">
                  <div class="label">亲子母婴</div>
                  <div class="label">生活</div>
                </div>
                <div class="val-type">
                  <van-image
                    class="img"
                    src="../../../../static/img/icon-101.png"
                  /><span class="t">1069</span>
                </div>
              </div>
              <div class="content-right">
                <!-- <RoundProgressBar /> -->
                <van-image
                  @click="information = !information"
                  round
                  class="right-img"
                  src="../../../../static/img/icon-10014.png"
                />
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </div>
    <VideoCard :title="'视频详情'" :show.sync="isVideoCard" :url="''" />
  </div>
</template>

<script>
import VideoCard from "@/components/hot/popup-card/video-card"; //弹出框
import RoundProgressBar from "@/components/hot/round-progress-bar"; //进度条
import Popup from "@/components/popup"; //弹出框
import { Toast } from "vant";

export default {
  name: "VideoData",
  components: {
    RoundProgressBar: RoundProgressBar,
    Popup: Popup,
    VideoCard: VideoCard,
  },
  // components: {},
  data() {
    return {
      SearchName: "",
      checked: "",
      list: [],
      labelList: [
        "颜值达人",
        "音乐",
        "运动健身",
        "财经投资",
        "萌宠",
        "艺术文化",
        "舞蹈",
        "美食",
        "美妆",
        "科技数码",
        "生活",
        "游戏",
        "测评",
        "汽车",
        "母婴亲子",
        "明星",
        "时尚",
        "旅行",
        "教育培训",
        "政务",
        "才艺技能",
        "情感",
        "影视娱乐",
        "家居家装",
        "园艺",
        "二次元",
        "三农",
      ],
      loading: false,
      finished: false,
      information: false,
      isVideoCard: false, //发布视频弹窗
      show: false,
      data: [
        { name: "作者昵称", val: "@我们的歌", copy: true },
        {
          name: "视频描述",
          val:
            " 视频描述：#邓紫棋在#东方卫视唱的新歌太好听了！打开抖音搜索#邓紫棋，直接观看...",
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
    this.onLoad();
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
    onVideoCard() {
      this.isVideoCard = true;
    },
    onShow() {
      this.show = !this.show;
      var _this = this;
      setTimeout(() => {
        //产品介绍的滚动条互相绑定
        let introduce = this.$refs.introduce; //滚动条mod
        let scrollbar = this.$refs.scrollbar; //内容mod
        introduce.onscroll = function (e) {
          var startX = e.target.scrollLeft; //获取内容滚动条位置
          scrollbar.scrollLeft = startX / 10; //赋值给滚动条
          // console.log('scrollbar',e.target.scrollLeft);
        };
      }, 500);
    },
  },

  //加载后执行
  mounted() {
    // scrollbar.onscroll = function (e) {
    //   var startX = e.target.scrollLeft; //获取滚动条位置
    //   introduce.scrollLeft = startX * (introduce.clientWidth / 100); //赋值给内容快滚动条
    //   // console.log("introduce", introduce.scrollLeft);
    // };
    //   scrollbar.onmouseup = function (e) {
    //     var startX = e.target.scrollLeft; //获取滚动条位置
    // debugger
    //     scrollbar.scrollLeft = Math.ceil((startX - 50) / 100) * 100;
    //     // console.log(scrollbar.scrollLeft,startX);
    //   };
  },
};
</script>

<style lang="less" scoped>
@import "index";
</style>
  