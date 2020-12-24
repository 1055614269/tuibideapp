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

            <div class="n" v-if="!_d.copy">{{ _d.val }}</div>
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

    show: {
      //是否取消关注弹出框
      type: Boolean,
      default: true,
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
  }
}
</style>
  