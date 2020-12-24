<template>
  <div class="user-data">
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

              <div class="val p-top10">
                <div class="user-val">昵称：厉害了我的国</div>
                <div class="user-val">
                  抖音号：dy202b2x8f
                </div>
                <div class="user-val">
                 <span class="t">粉丝数：11.4w</span>
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

    <PopupCard title="用户详情" :show.sync="information" :data="data" />
  </div>
</template>

<script>
import PopupCard from "@/components/hot/popup-card"; //卡片弹出框
export default {
  name: "UserData",
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
        { name: "作者昵称", val: "@厉害了我的国", copy: true },
        { name: "抖音号", val: "dy202b2x8f", copy: true },
        {
          name: "抖音签名",
          val: "快来跟我一起看吧，厉害了我的国！这里充满……",
          copy: true,
        },
        { name: "地        区", val: "浙江·杭州" },
        { name: "性        别", val: "男" },
        { name: "性        别", val: "17" },
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
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
@import "index";
</style>
  