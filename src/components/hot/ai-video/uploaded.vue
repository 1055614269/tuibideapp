<template>
  <div class="uploaded">
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
      :val="'是否删除视频'"
      :img="'../../static/img/icon-10016.png'"
    />
    <Popup
      :show.sync="information2"
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
                <div class="val-name">
                  <span
                    class=""
                    @click="uploadInformation = !uploadInformation"
                  >
                    视频文件名称
                  </span>
                  <van-icon
                    class="icon"
                    @click="uploadInformation = !uploadInformation"
                    color="#228AFF"
                    name="records"
                  />
                  <span @click="clear" class="clear"
                    ><van-icon name="clear"
                  /></span>
                </div>
                <div class="val-entrance">
                  <span class="date">上传时间：2020/12/24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </div>
    <PopupCard
      title="已上传视频"
      :ok_show="true"
      :no_show="true"
      @ok="modifyOk"
      :show.sync="uploadInformation"
      :data="data"
    />
    <VideoCard :title="'视频详情'" :show.sync="isVideoCard" :url="''" />
  </div>
</template>

<script>
import Popup from "@/components/popup"; //弹出框
import PopupCard from "@/components/hot/popup-card"; //卡片
import VideoCard from "@/components/hot/popup-card/video-card"; //弹出框
import { Toast } from "vant";

export default {
  name: "Uploaded",
  components: {
    Popup: Popup,
    VideoCard: VideoCard,
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
      information2: false,
      uploadInformation: false,
      show: false,
      isVideoCard: false, //发布视频弹窗
      data: [
        { name: "视频名称", val: "视频文件名称", modify: true },
        { name: "上传时间", val: "2020/12/2" },
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
    JumpEntrance(to) {
      if (to) {
        this.$router.push({ path: "/" + to });
      }
    },
    clear() {
      this.information = !this.information;
    },
    modifyOk(){
      console.log('OK');
    }
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
@import "index";

.uploaded {
  .content-nr > .nr > .val {
    width: calc(100% - 10px) !important;
  }
  .clear {
    float: right;
    font-size: 20px;
    color: #3f88fe;
  }
  .val-entrance {
    .date {
      color: #000000b3;
      font-size: 12px;
      float: left;
      margin-top: 10px;
    }
    .icon {
      float: left;
    }
  }
}
</style>
  