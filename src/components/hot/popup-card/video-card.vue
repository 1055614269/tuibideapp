<template>
  <div class="video-card">
    <van-popup :close-on-click-overlay="false" v-model="show" round>
      <div class="popup-nr">
        <div class="close-popup">
          <van-icon @click="close" name="cross" />
        </div>
        <div class="title">{{ title }}</div>
        <div class="nr">
          <video
            ref="myVideo"
            class="video"
            width="100%"
            height="100%"
            webkit-playsinline=""
            playsinline=""
            x5-playsinline=""
            x-webkit-airplay="allow"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
            x5-video-orientation="portraint"
            webkit-playsinline="true"
            src="https://www.runoob.com/try/demo_source/mov_bbb.mp4"
            controls="controls"
            preload="auto"
            poster=""
          >
            您的手机不支持该视频文件！！！
          </video>
          <div class="entrance">
            <div class="left">
              <div class="t">
                <div class="img" @click="">
                  <van-image
                    round
                    class="right-img"
                    src="../../../../static/img/icon-10014.png"
                  />
                </div>
                <div class="name">下载视频</div>
              </div>
            </div>
            <div class="right">
              <div class="t" @click="() => JumpEntrance('ReleaseVideo')">
                <div class="img">
                  <van-image
                    round
                    class="right-img"
                    src="../../../../static/img/icon-10017.png"
                  />
                </div>
                <div class="name">发布视频</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { List, Toast } from "vant";
export default {
  name: "VideoCard",
  data() {
    return {};
  },

  props: {
    url: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },

    show: {
      //是否取消关注弹出框
      type: Boolean,
      default: false,
    },
  },

  //加载前执行
  created() {
    // console.log(this.show);
    // this.Show = this.value;
  },

  methods: {
    close() {
      this.$emit("update:show", false);
    },

    copy(val) {
      // var val = "复制测试内容";
      this.$copyText(val).then(
        function (e) {
          Toast("复制成功");
          // console.log(e)
        },
        function (e) {
          Toast("复制失败");
          // console.log(e)
        }
      );
    },
    JumpEntrance(to) {
      if (to) {
        this.$router.push({ path: "/" + to });
      }
    },
    playPause() {
      var myVideo = this.$refs.myVideo;
      if (myVideo.paused) myVideo.play();
      else myVideo.pause();
    },
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
.video-card {
  .popup-nr {
    min-height: 200px;
    width: 270px;
    padding: 15px 20px;
    background-color: #ceebff;
    text-align: center;
    .title {
      margin-bottom: 20px;
      &:before {
        content: " ";
        position: absolute;
        width: 20px;
        height: 2px;
        top: 40px;
        left: calc(50% - 10px);
        background-color: #4098ff;
      }
    }
    .nr {
      .video {
        width: 180px;
        height: 300px;
        background-color: #000;
      }
      .entrance {
        height: 60px;
        width: 180px;
        margin: 0 auto;
        padding-top: 16px;
        .right {
          float: right;
        }
        .left {
          float: left;
        }
        .t {
          .img {
            width: 40px;
            height: 40px;
            margin: 0 auto;
            .right-img {
              width: 40px;
              height: 40px;
            }
          }
          .name {
            padding-top: 5px;
          }
        }
      }
    }
  }
  .close-popup {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 22px;
    color: #ffffff;
  }
  /deep/.van-popup--center.van-popup--round {
    border-radius: 15px;
    box-shadow: 0px 4px 16px 0px #ffffff99;
  }
}
</style>
  