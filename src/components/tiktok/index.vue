<template>
  <div class="tiktok">
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
        @click="JumpEntrance(_d)"
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
        :val="'是否返回抖音首页'"
        :img="'../../static/img/entrance-img/icon-204.png'"
      />
      <Popup
        :show.sync="TiktokShow"
        :val="'是否打开抖音'"
        :img="'../../static/img/entrance-img/icon-202.png'"
      />
    </div>

    <div class="classification">
      <div class="entrance-title">拓客</div>
    </div>
    <div class="subhead">指定作品</div>
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
    <div class="subhead">多作品</div>
    <div class="collection-entrance">
      <div
        class="entrance"
        v-if="_d.visual"
        v-for="(_d, key) in MultipleWorksEntrance"
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
    <div class="subhead">搜索</div>
    <div class="collection-entrance">
      <div
        class="entrance"
        v-if="_d.visual"
        v-for="(_d, key) in SearchEntrance"
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
  name: "tiktok",
  components: {
    Popup: Popup,
  },
  data() {
    return {
      CancelAttentionShow: false, //是否取消关注弹出框
      BackToHomePageShow: false, //f返回首页弹出框
      TiktokShow: false, //打开抖音弹出框
      HotEntrance: [
        //热门
        {
          name: "云数据",
          img: "../../static/img/icon-ysj.png",
          to: "HotCloudData",
          visual: true,
          bright: "../../static/img/icon-HOT.png",
        },
        {
          name: "AI视频",
          img: "../../static/img/icon-AI.png",
          to: "AiVideo",
          visual: true,
          bright: "",
        },
        {
          name: "提取视频",
          img: "../../static/img/icon-tqsp.png",
          to: "ExtractVideo",
          visual: true,
          bright: "",
        },
        {
          name: "TBD学院",
          img: "../../static/img/icon-TBD.png",
          to: "TBDCollege",
          visual: true,
          bright: "",
        },
      ],
      CommonlyUsedEntrance: [
        //常用
        {
          name: "打开抖音",
          img: "../../static/img/entrance-img/icon-202.png",
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
          name: "评论点赞",
          img: "../../static/img/entrance-img/icon-321.png",
          to: "ScriptCommentsLike",
          visual: true,
          bright: "",
        },
        {
          name: "评论回复",
          img: "../../static/img/entrance-img/icon-323.png",
          to: "ScriptCommentsReply",
          visual: true,
          bright: "",
        },
        {
          name: "评论私信",
          img: "../../static/img/entrance-img/icon-320.png",
          to: "ScriptCommentsPrivateLetter",
          visual: true,
          bright: "",
        },
        {
          name: "评论关注",
          img: "../../static/img/entrance-img/icon-322.png",
          to: "ScriptCommentsFollow",
          visual: true,
          bright: "",
        },
      ],
      MultipleWorksEntrance: [
        //多作品
        {
          name: "多作品点赞",
          img: "../../static/img/entrance-img/icon-302.png",
          to: "ScriptManyWorksThumbsUp",
          visual: true,
          bright: "",
        },
        {
          name: "多作品评论",
          img: "../../static/img/entrance-img/icon-304.png",
          to: "ScriptManyWorksThumbsComment",
          visual: true,
          bright: "",
        },
        {
          name: "多作品私信",
          img: "../../static/img/entrance-img/icon-305.png",
          to: "ScriptManyWorksThumbsPrivateLetter",
          visual: true,
          bright: "",
        },
        {
          name: "多作品关注",
          img: "../../static/img/entrance-img/icon-303.png",
          to: "ScriptManyWorksThumbsFollow",
          visual: true,
          bright: "",
        },
      ],
      SearchEntrance: [
        //搜索
        {
          name: "搜索作品点赞",
          img: "../../static/img/entrance-img/icon-315.png",
          to: "ScriptSearchWorksThumbsUp",
          visual: true,
          bright: "",
        },
        {
          name: "搜索作品评论",
          img: "../../static/img/entrance-img/icon-316.png",
          to: "ScriptSearchWorksThumbsComment",
          visual: true,
          bright: "",
        },
        {
          name: "搜索作品私信 ",
          img: "../../static/img/entrance-img/icon-317.png",
          to: "ScriptSearchWorksThumbsPrivateLetter",
          visual: true,
          bright: "",
        },
        {
          name: "搜索用户关注",
          img: "../../static/img/entrance-img/icon-313.png",
          to: "ScriptSearchWorksUserFollow",
          visual: true,
          bright: "",
        },
        {
          name: "搜索用户私信",
          img: "../../static/img/entrance-img/icon-314.png",
          to: "ScriptSearchWorksUserPrivateLetter",
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
          name: "浏览购物车",
          img: "../../static/img/entrance-img/icon-312.png",
          to: "ScriptBrowseShoppingCart",
          visual: true,
          bright: "",
        },
        {
          name: "粉丝团灯牌",
          img: "../../static/img/entrance-img/icon-306.png",
          to: "ScriptFanGroupLantern",
          visual: true,
          bright: "",
        },
        {
          name: "送礼物",
          img: "../../static/img/entrance-img/icon-310.png",
          to: "ScriptGivingGifts",
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
      ],
    };
  },
  //加载前执行
  created() {},

  methods: {
    entrance(_d) {
      if (_d.to) {
        this.$router.push({ path: "/Tiktok/" + _d.to });
      } else {
        if (_d.name.indexOf("取消关注") != -1) {
          this.CancelAttentionShow = true;
        } else if (_d.name.indexOf("返回首页") != -1) {
          this.BackToHomePageShow = true;
        } else if (_d.name.indexOf("打开抖音") != -1) {
          this.TiktokShow = true;
        }
      }
    },
    JumpEntrance(_d) {
      if (_d.to) {
        this.$router.push({ path: "/" + _d.to });
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
  