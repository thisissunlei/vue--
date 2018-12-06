<template>
  <div class="v-button" v-if="data.indexOf(checkAction)>-1" style="display:inline-block;">
    <Button :type="type" @click="buttonClick" :style="styles">{{label}}</Button>
  </div>
</template>

<script>
export default {
  props: ["label", "type", "checkAction", "styles"],
  data() {
    return {
      data: []
    };
  },
  methods: {
    buttonClick(event) {
      this.$emit("click", event);
    }
  },
  mounted: function() {
    if (!window.resourcesCode || !window.resourcesCode.length) {
      this.$http
        .get("getUserData", { forceUpdate: 1 })
        .then(response => {
          this.data = [].concat(response.data.resourcesCode);
          window.resourcesCode = response.data.resourcesCode;
        })
        .catch(error => {
          this.$Notice.error({
            title: error.message
          });
        });
    } else {
      this.data = [].concat(window.resourcesCode);
    }
    // setTimeout(function() {
    //     _this.data=window.resourcesCode||[];
    // }, 200);
  }
};
</script>