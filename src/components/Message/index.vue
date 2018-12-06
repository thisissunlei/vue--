<style lang="scss">
.ui-message-content {
  height: 184px;

  img {
    width: 100px;
    height: 100px;
    display: block;
    margin: 20px auto;
  }
  .ui-reminder {
    text-align: center;
    font-size: 18px;
    line-height: 26px;
    color: #333333;
  }
}
.ui-message {
  position: relative;
  z-index: 1200;
  .ivu-modal-footer {
    border: none;
    padding: 0;
  }
  .u-txt-green {
    color: #77cd50;
  }
  .u-txt-red {
    color: #ff6868;
  }
}
</style>
<template>
  <Modal class="ui-message" v-model="flag" width="443">
    <div class="ui-message-content">
      <div v-if="type=='success'">
        <img src="./images/success.png" />
        <p class="ui-reminder" v-html="warn"></p>
      </div>
      <div v-else-if="type=='error'">
        <img src="./images/error.png" />
        <p class="ui-reminder" v-html="warn"></p>
      </div>
    </div>
    <div slot="footer"></div>
  </Modal>
</template>

<script>
import {Modal} from 'iview';
export default {
  components:{
    Modal,
  },

  name: "Message",
  props: ["type", "openMessage", "warn"],
  data() {
    return {
      flag: this.openMessage
    };
  },
  watch: {
    $props: {
      deep: true,
      handler(nextProps) {
        this.flag = nextProps.openMessage;
      }
    }
  },
  updated: function() {
    var _this = this;
    if (this.type == "success" && this.flag) {
      setTimeout(function() {
        _this.flag = false;
        _this.$emit("changeOpen", _this.flag);
      }, 1500);
      return;
    }
    this.$emit("changeOpen", this.flag);
  }
};
</script>

