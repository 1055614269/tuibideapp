<template>
  <div class="kwaiFu">
    <div class="classification">
      <van-image
        class="classification-img"
        src="../../static/img/icon-101.png"
      />
      <span class="t">热门</span>
    </div>
    <div class="collection-entrance">
      <div
        class="entrance"
        v-if="_d.visual"
        v-for="(_d, key) in HotEntrance"
        :key="key"
      >
        <div class="hot-entrance-img">
          <van-image class="hot-entrance-img" :src="_d.img" />
          <div v-if="_d.bright != ''" class="hot">
            <van-image class="hot-img" :src="_d.bright" />
          </div>
        </div>
        <div class="hot-entrance-name">{{ _d.name }}</div>
      </div>
    </div>

    <div class="classification">
      <div class="entrance-title">常用</div>
    </div>

    <div class="collection-entrance">
      <div
        class="entrance"
        v-if="_d.visual"
        v-for="(_d, key) in CommonlyUsedEntrance"
        @click="entrance(_d)"
        :key="key"
      >
        <div class="entrance-img">
          <van-image class="entrance-img" :src="_d.img" />
        </div>
        <div class="entrance-name">{{ _d.name }}</div>
      </div>
      <Popup
        :show.sync="CancelAttentionShow"
        :val="'是否取消所有关注的账号'"
        :img="'../../static/img/entrance-img/icon-206.png'"
      />
      <Popup
        :show.sync="BackToHomePageShow"
        :val="'是否返回快手首页'"
        :img="'../../static/img/entrance-img/icon-204.png'"
      />
      <Popup
        :show.sync="KwaiFuShow"
        :val="'是否打开快手'"
        :img="'../../static/img/entrance-img/icon-207.png'"
      />
    </div>

    <div class="classification">
      <div class="entrance-title">拓客</div>
    </div>

    <div class="collection-entrance">
      <div
        class="entrance"
        v-if="_d.visual"
        v-for="(_d, key) in DesignatedWorksEntrance"
        @click="entrance(_d)"
        :key="key"
      >
        <div class="entrance-img">
          <van-image class="entrance-img" :src="_d.img" />
        </div>
        <div class="entrance-name">{{ _d.name }}</div>
      </div>
    </div>
    <van-divider />

    <div class="subhead">直播</div>
    <div class="collection-entrance">
      <div
        class="entrance"
        v-if="_d.visual"
        v-for="(_d, key) in LiveBroadcastEntrance"
        @click="entrance(_d)"
        :key="key"
      >
        <div class="entrance-img">
          <van-image class="entrance-img" :src="_d.img" />
        </div>
        <div class="entrance-name">{{ _d.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Popup from "@/components/popup"; //弹出框
export default {
  name: "kwaiFu",
  components: {
    Popup: Popup,
  },
  data() {
    return {
      CancelAttentionShow: false, //是否取消关注弹出框
      BackToHomePageShow: false, //返回首页弹出框
      KwaiFuShow: false, //打开快手弹出框
      HotEntrance: [
        //热门
        {
          name: "云数据",
          img: "../../static/img/icon-ysj.png",
          visual: true,
          bright: "../../static/img/icon-HOT.png",
        },
        {
          name: "AI视频",
          img: "../../static/img/icon-08.png",
          visual: true,
          bright: "",
        },
        {
          name: "提取视频",
          img: "../../static/img/icon-tqsp.png",
          visual: true,
          bright: "",
        },
        {
          name: "TBD学院",
          img: "../../static/img/icon-TBD.png",
          visual: true,
          bright: "",
        },
      ],
      CommonlyUsedEntrance: [
        //常用
        {
          name: "打开快手",
          img: "../../static/img/entrance-img/icon-207.png",
          to: "",
          visual: true,
          bright: "",
        },
        {
          name: "正常养号",
          img: "../../static/img/entrance-img/icon-205.png",
          to: "ScriptNormalBreed",
          visual: true,
          bright: "",
        },
        {
          name: "垂直养号",
          img: "../../static/img/entrance-img/icon-201.png",
          to: "ScriptVerticalBreed",
          visual: true,
          bright: "",
        },
        {
          name: "发布作品",
          img: "../../static/img/entrance-img/icon-203.png",
          to: "ScriptPublishingWorks",
          visual: true,
          bright: "",
        },
        {
          name: "取消关注",
          img: "../../static/img/entrance-img/icon-206.png",
          to: "",
          visual: true,
          bright: "",
        },
        {
          name: "返回首页",
          img: "../../static/img/entrance-img/icon-204.png",
          to: "",
          visual: true,
          bright: "",
        },
      ],
      DesignatedWorksEntrance: [
        //指定作品
        {
          name: "零粉裂变",
          img: "../../static/img/entrance-img/icon-311.png",
          to: "ScriptZeroFansFission",
          visual: true,
          bright: "",
        },
        {
          name: "关注私信用户",
          img: "../../static/img/entrance-img/icon-313.png",
          to: "ScriptFocusOnPrivateMessageUsers",
          visual: true,
          bright: "",
        },
        {
          name: "点赞评论作品",
          img: "../../static/img/entrance-img/icon-322.png",
          to: "ScriptCommentsOnWorks",
          visual: true,
          bright: "",
        },
      ],
      LiveBroadcastEntrance: [
        //直播
        {
          name: "进入直播间",
          img: "../../static/img/entrance-img/icon-309.png",
          to: "ScriptEnterTheStudio",
          visual: true,
          bright: "",
        },
        {
          name: "直播间点赞",
          img: "../../static/img/entrance-img/icon-318.png",
          to: "ScriptLikeTheLiveRoom",
          visual: true,
          bright: "",
        },
        {
          name: "直播间留言 ",
          img: "../../static/img/entrance-img/icon-319.png",
          to: "ScriptLiveRoomMessage",
          visual: true,
          bright: "",
        },
        {
          name: "关注主播",
          img: "../../static/img/entrance-img/icon-308.png",
          to: "ScriptFocusOnTheAnchor",
          visual: true,
          bright: "",
        },
        {
          name: "关注@观众",
          img: "../../static/img/entrance-img/icon-307.png",
          to: "ScriptFocusOnTheAudience",
          visual: true,
          bright: "",
        },
        {
          name: "浏览小黄车",
          img: "../../static/img/entrance-img/icon-312.png",
          to: "ScriptBrowseYellowCars",
          visual: true,
          bright: "",
        },
        {
          name: "对手直播间",
          img: "../../static/img/entrance-img/icon-301.png",
          to: "ScriptEnterTheOpponentStudio",
          visual: true,
          bright: "",
        },
        {
          name: "直播间裂变",
          img: "../../static/img/entrance-img/icon-324.png",
          to: "ScriptFissionInLiveBroadcastingRoom",
          visual: true,
          bright: "",
        },
      ],
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
    entrance(_d) {
      if (_d.to) {
        this.$router.push({ path: "/kwaiFu/" + _d.to });
      } else {
        if (_d.name.indexOf("取消关注") != -1) {
          this.CancelAttentionShow = true;
        } else if (_d.name.indexOf("返回首页") != -1) {
          this.BackToHomePageShow = true;
        } else if (_d.name.indexOf("打开快手") != -1) {
          this.KwaiFuShow = true;
        }
      }
    },
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
@import "index";
</style>
  