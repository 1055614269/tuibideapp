<template>
  <div class="popup">
    <van-popup :close-on-click-overlay="false" v-model="show" round>
      <div class="popup-nr">
        <div class="close-popup">
          <van-icon @click="close" name="cross" />
        </div>
        <div class="title">{{ title }}</div>
        <div class="nr">
          <van-row class="i" v-for="(_d, key) in data" :key="key">
            <div class="l">{{ _d.name }}：</div>

            <div class="n" v-if="!_d.copy">
              <span v-if="!_d.modify"> {{ _d.val }}</span>
              <div class="n-field-box" v-else>
                <van-field
                  rows="1"
                  autosize
                  type="textarea"
                  class="n-field"
                  v-model="_d.val"
                  placeholder="视频名称不得为空"
                />
              </div>
            </div>
            <div class="_n" v-if="_d.copy">
              {{ _d.val }}
            </div>
            <div class="r" v-if="_d.copy">
              <span class="copy-button">
                <van-button
                  type="primary"
                  @click="() => copy(_d.val)"
                  color="linear-gradient(to right, #FFA23F, #FF9751)"
                  size="mini"
                  >一键复制</van-button
                >
              </span>
            </div>
          </van-row>
        </div>

        <div class="popup-button" v-if="ok_show || no_show">
          <van-row>
            <van-col span="12">
              <van-button
                @click="no"
                v-if="no_show"
                class="button"
                color="#384250"
                size="small"
                >{{ no_name }}</van-button
              >
            </van-col>
            <van-col span="12">
              <van-button
                @click="ok"
                v-if="ok_show"
                class="button"
                color="#4097FF"
                size="small"
                >{{ ok_name }}</van-button
              >
            </van-col>
          </van-row>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { List, Toast } from "vant";
export default {
  name: "Popup",
  data() {
    return {};
  },

  props: {
    data: {
      type: Array,
      default: [],
    },
    title: {
      type: String,
      default: "",
    },
    ok_show: {
      type: Boolean,
      default: false,
    },
    no_show: {
      type: Boolean,
      default: false,
    },
    ok_name: {
      type: String,
      default: "是",
    },
    no_name: {
      type: String,
      default: "否",
    },
    show: {
      //是否取消关注弹出框
      type: Boolean,
      default: true,
    },
  },

  //加载前执行
  created() {

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
    ok() {
      this.$emit("ok");
      this.$emit("update:show", false);
    },
    no() {
      this.$emit("no");
      this.$emit("update:show", false);
    },
  },

  //加载后执行
  mounted() {},
};
</script>

<style lang="less" scoped>
.popup {
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
      .l {
        float: left;
        width: 90px;
        text-align: right;
      }
      ._n {
        float: left;
        width: calc(100% - 170px);
        text-align: left;
        color: #000000b3;
      }
      .r {
        text-align: right;
        float: left;
        width: 80px;
      }

      .i {
        margin: 10px 0;
      }

      .n {
        float: left;
        width: calc(100% - 90px);
        text-align: left;
        color: #000000b3;
      }
      .n-field-box {
        position: relative;
        top: -2px;
      }
      .n-field {
        background-color: transparent;
        border-bottom: 1px solid #00000033;
        padding: 0;
        /deep/.van-field__control {
          color: #000000cc;
          font-size: 14px;
        }
      }
      .copy-button {
        position: relative;
        // top: -6px;

        /deep/.van-button--mini {
          // background: linear-gradient(-90deg, #FF9751, #FFA23F);
          box-shadow: 0px 2px 6px 0px rgba(255, 131, 20, 0.6);
          border-radius: 5px;
          font-size: 12px;
        }
      }
    }
    .popup-button {
      text-align: center;
      margin-top: 20px;
      position: absolute;
      bottom: 18px;
      width: calc(100% - 40px);
      .button {
        width: 100px;
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
  