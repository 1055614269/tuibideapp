<template>
  <div class="round-progress-bar">
    <div class="circle-bar-left" :style="{'transform':left_circle}"></div>
    <div class="circle-bar-right" :style="{'transform':right_circle}"></div>
    <div class="mask">
      <van-image
        round
        class="right-img"
        src="../../../static/img/icon-10014.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "RoundProgressBar",

  data() {
    return {
      right_circle: "",
      left_circle: "",
      right_circle_color: "",
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
  created() {},

  methods: {},

  //加载后执行
  mounted() {
    var percent = 60;
    // var color = circleBar.css("background-color");

    if (percent <= 50) {
      var rotate = "rotate(" + percent * 3.6 + "deg)";
      this.right_circle = rotate;
      this.right_circle_color = "#333"; //背景色设置为进度条的颜色
    } else {
      var rotate = "rotate(" + (percent - 50) * 3.6 + "deg)";
      //   console.log(color);

      this.right_circle_color = "#fff"; //背景色设置为进度条的颜色
      this.right_circle = "rotate(0deg)"; //右侧不旋转
      // left_circle.css3('transform', rotate);//左侧旋转
      this.left_circle = rotate;
    }
  },
};
</script>

<style lang="less" scoped>
/*支持IE9及以上*/
.round-progress-bar {
  font-size: 20px;
  width: 1em;
  height: 1em;
  position: relative;
  background-color: #fff;

  .circle-bar-left {
    width: 1em;
    height: 1em;
    background-color: #333;
    /* -webkit-animation: circleProgressLoad_left 5s linear infinite; */
  }

  .circle-bar-right {
    width: 1em;
    height: 1em;
    background-color: #333;
    /* -webkit-animation: circleProgressLoad_right 5s linear infinite; */
  }

  .circle-bar-right {
    clip: rect(0, auto, auto, 0.5em);
  }

  .circle-bar-left {
    clip: rect(0, 0.5em, auto, 0);
  }

  .mask {
    width: 0.8em;
    height: 0.8em;
    /* background-color: #fff; */
    text-align: center;
    line-height: 0.2em;
    color: rgba(0, 0, 0, 0.5);
  }

  .mask :first-child {
    font-size: 0.3em;
    height: 0.8em;
    line-height: 0.8em;
    display: block;
  }

  /*所有的后代都水平垂直居中，这样就是同心圆了*/
  & * {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  /*自身以及子元素都是圆*/
  &,
  & > * {
    border-radius: 50%;
  }
}
</style>
  