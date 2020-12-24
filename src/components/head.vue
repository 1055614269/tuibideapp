<template>
  <div class="head">
    <div class="nav-bar">
      <div class="demo" @click="bock">
        <van-icon name="arrow-left" />
      </div>
      <div class="title">{{title}}</div>
      <!-- <div class="bar-right">
        <van-icon name="star-o" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {};
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
  created() {},

  methods: {
    bock(){
      this.$router.go(-1); //返回上一页
    }
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
.head {
  background-color: rgba(64, 154, 255, 1);
  height: 80px;
  color: rgba(255, 255, 255, 1);
  .nav-bar {
    height: 54px;
    position: relative;
    bottom: -26px;
    line-height: 54px;
    text-align: center;
    .demo {
      position: absolute;
      padding: 0 16px;
      font-size: 16px;
      cursor: pointer;
    }

    .title {
      font-size: 16px;
    }

    .bar-right {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      padding: 0 16px;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>
  