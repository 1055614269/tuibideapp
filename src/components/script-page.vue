<template>
  <div class="script-page">
    <Head :title="title" />
    <div class="parameters">
      <div class="parameters-nr">
        <slot :row="data"></slot>
      </div>
      <van-button :color="buttonColor" @click="start" type="primary" block>{{
        buttonName
      }}</van-button>
      <div class="parameters-tips">
        {{ tips }}
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/head";
export default {
  name: "scriptPage",
  components: {
    Head: Head,
  },
  data() {
    return {
      // value:10
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    buttonName: {
      type: String,
      default: "开始",
    },
    buttonColor: {
      type: String,
      default: "#4097FF",
    },
    data: {
      type: Object | Array | String,
      default: {},
    },
    tips: {
      type: String,
      default: "",
    },
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
.script-page {
  .parameters {
    padding: 20px 15px;
    .parameters-nr {
      padding: 20px 15px;
      box-shadow: 0px 1px 40px 0px rgba(178, 178, 178, 0.6);
      border-radius: 8px;
      margin-bottom: 25px;
      display: flow-root;
      .publishing-works-box {
        .left-box {
          float: left;
          width: calc(100% - 100px);
          //background-color: aqua;
        }
        .right-box {
          float: left;
          width: 100px;
          text-align: right;
          //   background-color: antiquewhite;
          .img-box {
            .t {
              position: absolute;
              margin-top: -25px;
              background-color: #0000004d;
              width: 83px;
              margin-left: 17px;
              color: #ffffff;
              text-align: center;
              letter-spacing: 10px;
              text-indent: 10px;
            }
          }
        }
      }
      .location {
        margin: 8px 0;
        margin-left: 16px;
        float: left;
        width: 100%;
        .location-icon {
          float: right;
          margin-right: 10px;
        }
      }
      .z {
        color: #00000080;
        font-size: 12px;
      }
      .position {
        float: left;
        .position-name {
          height: 20px;
          padding: 0 20px;
          margin: 10px 16px;
          border-radius: 30px;
          border: 1px solid #00000050;
          float: left;
          max-width: calc(100vw - 130px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .add-input {
        margin: 20px auto;
        width: 25px;
      }
      .notes {
        color: #00000080;
        font-size: 12px;
        margin: 16px;
      }
      /deep/.van-cell {
        padding: 5px 16px;
        margin-bottom: 5px;
      }
    }
    /deep/.van-radio-group--horizontal {
      .radio-group {
        width: 70px;
        margin: 20px;
      }
    }

    .parameters-button {
      background-color: antiquewhite;
    }
    .tips {
      position: relative;
      left: 16px;
      top: 5px;
      z-index: 10;
      color: #636566;
    }
    .r {
      color: #a3a9af80;
      font-size: 12px;
    }
  }
  .parameters-tips {
    color: #00000050;
    font-size: 12px;
    margin: 10px 0;
  }
  /deep/.van-field__control {
    color: #00000080;
    &::-webkit-input-placeholder {
      font-size: 12px;
    }
    &::-moz-placeholder {
      font-size: 12px;
    }
    &:-ms-input-placeholder {
      font-size: 12px;
    }
  }
  /deep/.van-field__word-limit {
    color: #00000030;
  }
}
</style>
  