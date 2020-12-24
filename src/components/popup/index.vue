<template>
  <div class="popup">
    <van-popup :close-on-click-overlay="false" v-model="show" round>
      <div class="popup-nr">
        <div style="margin-top: 30px;" v-if="no_show===false && ok_show===false "></div>
        <div class="nr">
          <div class="popup-img">
            <van-image class="img" :src="img" />
          </div>
          <div class="text">{{ val }}</div>
        </div>
        <div class="popup-button" >
          <van-row>
            <van-col span="12">
              <van-button
                @click="no"
                v-if="no_show"
                class="button"
                color="#384250"
                size="small"
                >否</van-button
              >
            </van-col>
            <van-col span="12">
              <van-button
                @click="ok"
                v-if="ok_show"
                class="button"
                color="#4097FF"
                size="small"
                >是</van-button
              >
            </van-col>
          </van-row>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {};
  },

  props: {
    val: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    ok_show: {
      type: Boolean,
      default: true,
    },
    no_show: {
      type: Boolean,
      default: true,
    },
    show: {
      //是否取消关注弹出框
      type: Boolean,
      default: false,
    },
  },
  wacth: {
    value: {
      handler: function (_val) {
        // this.Show = _val;
        console.log("123");
      },
    },
  },
  //加载前执行
  created() {
    // console.log(this.show);
    // this.Show = this.value;
  },

  methods: {
    ok() {
      this.$emit("ok");
      // this.Show = false;
      this.$emit("update:show", false);
    },
    no() {
      this.$emit("no");
      // this.Show = false;
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
    height: 130px;
    width: 250px;
    padding: 20px;
    // background-color: aqua;
    .nr {
      height: 30px;
      line-height: 30px;
      padding: 20px;
      // background-color: rgb(175, 175, 175);
      display: flex;
      .popup-img {
        float: left;

        .img {
          height: 30px;
          width: 30px;
          margin: 0 10px;
        }
      }
      .text {
        float: left;
        color: #000000cc;
        text-align: left;
      }
    }
    .popup-button {
      text-align: center;
      margin-top: 20px;
      .button {
        width: 100px;
      }
    }
  }
}
</style>
  