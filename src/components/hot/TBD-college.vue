<template>
  <div class="TBD-college">
    <Head :title="'TBD学院'" />
    <div class="parameters">
      <div class="mapping-img"></div>
      <div class="title-name">TBD新手教程</div>
      <div class="nr">
        <div class="t">云数据操作指南</div>
        <div class="t">AI视频制作教程</div>
        <div class="t">...........</div>
      </div>
       <div class="title-name">新媒体教程</div>
      <div class="nr">
        <div class="t">如何写标题</div>
        <div class="t">AI视频制作教程</div>
        <div class="t">...........</div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/head";
export default {
  name: "TBDCollege",
  components: {
    Head: Head,
  },
  data() {
    return {
      // value:10
    };
  },

  //加载前执行
  created() {},

  methods: {
    start() {
      this.$emit("start");
    },
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
.TBD-college {
  .parameters {
    padding: 20px 15px;
    .mapping-img {
      background-color: antiquewhite;
      height: 180px;
      width: 100%;
    }
    .title-name {
      width: 100%;
      height: 24px;
      // background-color: aliceblue;
      font-size: 16px;
      font-weight: bold;
      margin-top: 30px;
    }
    .nr {
      text-align: center;
      display: flow-root;
      .t {
          float: left;
        height: 50px;
        width: calc(calc(100% / 2) - 20px);
        background-color: aliceblue;
        // line-height: 50px;
        line-height: 50px;
        margin: 10px ;
        // padding: 7px;
      }
    }
  }
}
</style>
  