<template>
  <div class="accurate-customers">
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

              <div class="val p-top22 customers-val">
                <div class="user-val">用户昵称：厉害了我的国</div>
                <div class="user-val">评论内容：哇，我什么时候也能瘦下来？</div>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccurateCustomers",

  data() {
    return {
      SearchName: "",
      checked: "",
      list: [],
      loading: false,
      finished: false,
      information: false,
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
  