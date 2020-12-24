<template>
  <div class="smallRedBook">
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
      <!-- <div
        class="entrance"
        v-if="CommonlyUsedEntrance[0].name === '打开小红书'"
        @click="entrance(CommonlyUsedEntrance[0])"
      >
        <div
          class="entrance-img"
          style="width: 50px; height: 18px; margin-top: 8px"
        >
          <van-image
            class="entrance-img"
            style="width: 50px; height: 18px"
            :src="CommonlyUsedEntrance[0].img"
          />
        </div>
        <div class="entrance-name">{{ CommonlyUsedEntrance[0].name }}</div>
      </div> -->

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
        :show.sync="SmallRedBookShow"
        :val="'是否打开小红书'"
        :img="'../../static/img/entrance-img/icon-209.png'"
      />
    </div>
  </div>
</template>

<script>
import Popup from "@/components/popup"; //弹出框
export default {
  name: "smallRedBook",
  components: {
    Popup: Popup,
  },
  data() {
    return {
      SmallRedBookShow: false, //打开小红书弹出框
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
          img: "../../static/img/icon-07.png",
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
          name: "打开小红书",
          img: "../../static/img/entrance-img/icon-209.png",
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
          name: "搜索用户私信",
          img: "../../static/img/entrance-img/icon-210.png",
          to: "ScriptSearchWorksUserPrivateLetter",
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
        this.$router.push({ path: "/SmallRedBook/" + _d.to });
      } else {
        if (_d.name.indexOf("打开小红书") != -1) {
          this.SmallRedBookShow = true;
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
  