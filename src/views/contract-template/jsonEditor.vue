<template>
  <div class="vue-json-editor-container" :class="{ editorfullscreen: isFullScreen }">
    <div class="btns">
      <Switch size="large" v-model="isTreeModel">
        <span slot="open">文本</span>
        <span slot="close">JSON</span>
      </Switch>
      <Switch size="large" v-model="isFullScreen">
        <span type="md-checkmark" slot="open">还原</span>
        <span type="md-close" slot="close">全屏</span>
      </Switch>
      <span style="float:right;margin-right:10px">{{ JSON.stringify(data).length }}/20000</span>
    </div>
    <vue-json-editor
      class="vue-json-editor"
      v-show="jsonEditorModel === 'text'"
      v-model="data"
      mode="text"
      :showBtns="false"
      @json-change="onJsonChange"
    ></vue-json-editor>
    <vue-json-editor
      class="vue-json-editor"
      v-show="jsonEditorModel === 'tree'"
      v-model="data"
      mode="tree"
      :showBtns="false"
      @json-change="onJsonChange"
    ></vue-json-editor>
  </div>
</template>
<script>
import vueJsonEditor from "vue-json-editor";

import { Switch, Button } from "iview";
export default {
  components: {
    Switch,
    Button,
    vueJsonEditor
  },
  props: {
    editorModel: {
      style: String,
      default: "tree"
    },
    value: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isTreeModel: true,
      isFullScreen: false,
      jsonEditorModel: "tree", // text
      data: {}
    };
  },
  watch: {
    value(val) {
      this.data = val;
    },
    editorModel(val) {
      this.jsonEditorModel = val;
    },
    isTreeModel(val) {
      this.jsonEditorModel = val ? "tree" : "text";
    }
  },
  methods: {
    onJsonChange(val) {
      console.log(val);
      this.$emit("input", val);
    },
    handleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    }
  }
};
</script>
<style lang="scss">
.vue-json-editor-container {
  background-color: white;
  opacity: 1;
  overflow: auto;
  .btns {
    height: 36px;
    width: 100%;
    float: left;
    .ivu-switch-large {
      width: 64px;
    }
    .ivu-switch-checked {
      &:after {
        left: 42px;
      }
    }
  }
  .vue-json-editor {
    padding-top: 36px;
    height: 100%;
    .jsoneditor-vue {
      height: 100%;
      padding-bottom: 25px;
    }
  }
}
.editorfullscreen {
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
  background-color: white;
  opacity: 1;
  overflow: auto;
  .vue-json-editor {
    height: 100%;
    .jsoneditor-vue {
      height: 100%;
    }
  }
}
</style>
