<template>
  <iframe id="contract-template-html-preview" frameborder="0" style="width: 100%;height: 100%;"></iframe>
</template>
<script>
export default {
  props: {
    template: {
      type: String,
      default: "<h1></h1>"
    },
    data: {
      type: Object,
      default: () => {}
    },
    extendJS: {
      type: String,
      default: ""
    },
    extendCSS: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      iframe: null,
      iwindow: null,
      idocument: null
    };
  },
  mounted() {
    this.initIframe();
    this.addContainer();
    this.addCSS(this.extendCSS);
    this.addTemplate(this.template);
    this.addData(this.data);
    setTimeout(() => {
      this.addRenderJS(this.extendJS);
    }, 1000);
  },
  methods: {
    initIframe() {
      let iframe = document.getElementById("contract-template-html-preview");
      this.iwindow = iframe.contentWindow;
      if (this.iwindow) {
        this.idocument = this.iwindow.document;
      }
    },

    addContainer() {
      var dataDom = this.idocument.createElement("div");
      dataDom.id = "print-box";
      var body = this.idocument.getElementsByTagName("body")[0];
      body.appendChild(dataDom);

      var data = this.idocument.createElement("div");
      data.id = "tempdom-data";
      data.style.display = "none";
      var body = this.idocument.getElementsByTagName("body")[0];
      body.appendChild(data);

      var tpl = this.idocument.createElement("div");
      tpl.id = "tempdom-template";
      tpl.style.display = "none";
      var body = this.idocument.getElementsByTagName("body")[0];
      body.appendChild(tpl);
    },

    addCSS(url) {
      // var url = 'http://dev02.krspace.cn/plugins/template/1.0.0/ZH/style.css'
      var link = this.idocument.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = url;
      var head = this.idocument.getElementsByTagName("head")[0];
      head.appendChild(link);
    },

    addData(data) {
      var dataDom = this.idocument.getElementById("tempdom-data");
      //data 可能为空
      let keys = !data || Object.keys(data).length == 0;
      if (keys) {
        let k = "" + new Date().getTime();
        data = {};
        data[k] = k;
      }
      dataDom.innerText = JSON.stringify(data);
      var body = this.idocument.getElementsByTagName("body")[0];
      body.appendChild(dataDom);
    },

    addTemplate(tpl) {
      var dataDom = this.idocument.getElementById("tempdom-template");
      dataDom.innerText = tpl;
      var body = this.idocument.getElementsByTagName("body")[0];
      body.appendChild(dataDom);
    },

    addRenderJS(url) {
      if (url.trim().length == 0) {
        var dataDom = this.idocument.getElementById("print-box");
        dataDom.innerHTML = this.template;
        return;
      }
      var dataDom = this.idocument.createElement("script");
      dataDom.type = "text/javascript";
      dataDom.src = url;
      // dataDom.src = './htmlPreviewDemo/render.js'
      var body = this.idocument.getElementsByTagName("body")[0];
      body.appendChild(dataDom);
    }
  }
};
</script>
