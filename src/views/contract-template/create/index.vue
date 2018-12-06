<template>
  <div class="create-contract-template" style="width:100%">
    <SectionTitle title="新建合同模版"></SectionTitle>
    <div class="setting-container">
      <div class="ueditor-panel">
        <Ueditor v-model="formItem.template" @on-content-change="onUeditorContentChange"></Ueditor>
        <!-- <Ueditor :content='ueditorConten' @on-content-change='onUeditorContentChange'></Ueditor> -->
      </div>
      <div class="create-operation-panel">
        <div class="fix-zone">
          <div class="cmd-panel">
            <!-- <Button type="ghost" class="btn" v-if='!isEdit' @click='keygen'>随机生成名称和编码</Button> -->
            <Button type="primary" class="btn" @click="openHtmlPre=true">html预览</Button>
            <Button type="primary" class="btn" @click="onSavePdfPre" disabled>保存并预览pdf</Button>
            <Button type="primary" class="btn" @click="onSaveCraete">保存</Button>
            <Button type="primary" class="btn" @click="closeRemaind=true">关闭</Button>
          </div>
          <Form ref="formItem" :model="formItem" :rules="ruleCustom" class="form-creat-template">
            <FormItem label="模版名称" prop="tplName">
              <Input
                class="form-item-field-input"
                v-model="formItem.tplName"
                :disabled="isEdit"
                :maxlength="20"
                placeholder="请输入模版名称"
              />
            </FormItem>
            <FormItem label="模版编码" prop="tplCode">
              <Input
                class="form-item-field-input"
                v-model="formItem.tplCode"
                :disabled="isEdit"
                :maxlength="20"
                placeholder="请输入模版编码"
              />
            </FormItem>
            <FormItem label="业务类型" prop="serviceType">
              <Select
                class="form-item-field-input"
                v-model="formItem.serviceType"
                :disabled="isEdit"
                @on-change="onBusinessTypeChange"
                filterable
              >
                <Option
                  v-for="(option) in businessTypeList"
                  :value="option.value"
                  :key="option.value"
                >{{option.desc}}</Option>
              </Select>
            </FormItem>
            <FormItem label="模版类型" prop="tplType">
              <Select
                class="form-item-field-input"
                v-model="formItem.tplType"
                :disabled="isEdit"
                filterable
              >
                <Option
                  v-for="option in templateTypeList"
                  :value="option.key"
                  :key="option.key"
                >{{option.value}}</Option>
              </Select>
            </FormItem>
            <FormItem label="语言类型" prop="langType">
              <Select
                class="form-item-field-input"
                v-model="formItem.langType"
                :disabled="isEdit"
                filterable
              >
                <Option
                  v-for="(option) in languageTypeList"
                  :value="option.value"
                  :key="option.value"
                >{{option.desc}}</Option>
              </Select>
            </FormItem>
            <FormItem label="外部js" v-if="!isEdit" prop="extJs">
              <Input class="form-item-field-input" v-model="formItem.extJs"/>
            </FormItem>
            <FormItem label="外部css" v-if="!isEdit" prop="extCss">
              <Input
                class="form-item-field-input"
                v-model="formItem.extCss"
                @on-blur="onExtCSSChange"
              />
            </FormItem>
          </Form>
          <div style="padding-left:20px">样例数据:</div>
        </div>
        <div class="example-data">
          <jsonEditor v-model="formItem.sampleData"></jsonEditor>
        </div>
      </div>
    </div>
    <Modal v-model="closeRemaind" title="提示" @on-ok="onCloseCreate" @on-cancel="closeRemaind=false">
      <p style="color:red">您的当前操作可能还没有进行保存，是否要保存后再关闭?</p>
    </Modal>
    <Modal
      v-model="openHtmlPre"
      title="合同预览"
      @on-cancel="openHtmlPre=false"
      :styles="{top: '0px'}"
      width="1000"
    >
      <HtmlView
        v-if="openHtmlPre"
        :extendCSS="formItem.extCss"
        :extendJS="formItem.extJs"
        :template="formItem.template"
        :data="formItem.sampleData"
        style="height:700px"
      />
      <div slot="footer"></div>
    </Modal>
  </div>
</template>
<script>
import Ueditor from "components/Ueditor";
import SectionTitle from "components/SectionTitle";
import vueJsonEditor from "vue-json-editor";
import jsonEditor from "../jsonEditor.vue";
import HtmlView from "../htmlview.vue";

import demoData from "./demoData.js";
import demoTemplate from "./demoTemplate.js";
import uuid from "uuid";
import { Button, Form, FormItem, Input, Select, Option, Modal } from "iview";
export default {
  components: {
    Button,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Modal,
    SectionTitle,
    Ueditor,
    jsonEditor,
    HtmlView
  },
  data() {
    const validateTemplateNo = (rule, value, callback) => {
      if (value == null || value.trim().length === 0) {
        callback("请输入模版编号");
      } else if (/[\u4e00-\u9fa5]+/.test(value)) {
        callback("必须为字母或者数字组合不能包含中文");
      } else if (value.trim().length > 20) {
        callback("最大长度20字符");
      } else {
        callback();
      }
    };
    return {
      id: "",
      isEdit: false,
      openHtmlPre: false,
      jsonEditorModel: "tree", // tree
      closeRemaind: false,
      businessTypeList: [],
      tlpTypes: {},
      templateTypeList: [],
      languageTypeList: [],
      formItem: {
        serviceType: "",
        tplType: "",
        langType: "",
        extJs: "",
        extCss: ""
      },
      ruleCustom: {
        tplName: [
          { required: true, trigger: "change", message: "请输入模版名称" }
        ],
        tplCode: [
          { required: true, trigger: "change", validator: validateTemplateNo }
        ],
        serviceType: [
          { required: true, trigger: "change", message: "请选择业务类型" }
        ],
        tplType: [
          { required: true, trigger: "change", message: "请选择模版类型" }
        ],
        langType: [
          { required: true, trigger: "change", message: "请选择语言类型" }
        ],
        extJs: [{ required: true, trigger: "blur", message: "请输入外部js" }],
        extCss: [{ required: true, trigger: "blur", message: "请输入外部css" }]
      }
    };
  },
  mounted() {
    document.title = "新建合同模版";
    GLOBALSIDESWITCH("false");
    this.init();
  },
  methods: {
    init() {
      this.getTpltypes();
      this.getLangTypeEumn();
      this.getBusinessTypeEumn();
      this.id = this.$route.query.id;
      if (this.id) {
        document.title = "编辑合同模版";
        this.getViewData(this.id);
      }

      {
        // this.formItem = Object.assign({}, this.formItem, { sampleData: demoData }, { template: demoTemplate })
        this.formItem.extJs =
          "http://dev02.krspace.cn/plugins/template/1.0.0/ZH/render.js";
        this.formItem.extCss =
          "http://dev02.krspace.cn/plugins/template/1.0.0/ZH/style.css";
      }
    },
    //#region 获取 业务类型 语言类型 模版类型枚举值
    getBusinessTypeEumn() {
      this.$http
        .get("get-enum-all-data", {
          enmuKey: "com.krspace.order.api.enums.contract.ServiceType"
        })
        .then(res => {
          this.businessTypeList = res.data;
        })
        .catch(err => {
          this.$Notice.error({
            title: err.message
          });
        });
    },
    getLangTypeEumn() {
      this.$http
        .get("get-enum-all-data", {
          enmuKey: "com.krspace.order.api.enums.contract.LangType"
        })
        .then(res => {
          this.languageTypeList = res.data;
        })
        .catch(err => {
          this.$Notice.error({
            title: err.message
          });
        });
    },
    getTpltypes() {
      this.$http
        .get("get-contract-config-tpltype", "")
        .then(res => {
          this.tlpTypes = res.data;
        })
        .catch(err => {
          this.$Notice.error({
            title: err.message
          });
        });
    },
    //#endregion 获取 业务类型 语言类型 模版类型枚举值

    onBusinessTypeChange(val) {
      this.templateTypeList = this.tlpTypes[val];
    },
    onHtmlPre() {},
    onSavePdfPre() {
      this.getViewPDF(this.formItem.id);
    },
    onSaveCraete() {
      this.$refs["formItem"].validate(valid => {
        if (valid) {
          let params = Object.assign({}, this.formItem);
          params.sampleData = JSON.stringify(params.sampleData);
          this.$http
            .post("post-contract-config-save", params)
            .then(res => {
              this.formItem.id = res.data;
              this.$Notice.info({
                title: "模板保存成功"
              });
            })
            .catch(err => {
              this.$Notice.error({
                title: err.message
              });
            });
        } else {
          this.$Notice.error({
            title: "请填写完整表单"
          });
        }
      });
    },
    getViewPDF(id) {
      return;
      let _this = this;
      this.$http
        .get("get-contract-config-view-pdf", { tplId: id })
        .then(res => {
          let obj = res.data;
        })
        .catch(err => {
          _this.$Notice.error({
            title: err.message
          });
        });
    },
    getViewData(id) {
      let _this = this;
      this.$http
        .get("get-contract-config-view-data", { tplId: id })
        .then(res => {
          let obj = res.data;
          if (obj.sampleData) {
            obj.sampleData = JSON.parse(obj.sampleData);
          }
          _this.formItem = Object.assign({}, obj);
        })
        .catch(err => {
          _this.$Notice.error({
            title: err.message
          });
        });
    },
    onCloseCreate() {
      window.close();
      window.opener.location.reload();
    },
    onUeditorContentChange(content) {
      this.formItem = Object.assign({}, this.formItem, { template: content });
    },
    saveTmpl(parms) {},
    onJsonChange(value) {
      console.log("jsonvalue:", value);
    },
    handleChangeEditorModel() {
      this.jsonEditorModel = this.jsonEditorModel === "text" ? "tree" : "text";
      console.log(this.jsonEditorModel);
      this.$forceUpdate();
    },
    keygen() {
      this.formItem = Object.assign(
        {},
        this.formItem,
        { tplName: uuid.v1() },
        { tplCode: uuid.v1().substring(0, 18) }
      );
    },
    onExtCSSChange() {
      let ueditorConten = this.formItem.template;
      ueditorConten = ueditorConten.replace(
        /<link\srel="stylesheet"\sextcss.+css"\/>/,
        ""
      );

      let url = this.formItem.extCss;
      if (url.trim().length != 0) {
        let link = `<link rel="stylesheet" extcss href="${url}">`;
        ueditorConten = link + ueditorConten;
      }

      this.formItem.template = ueditorConten;
    }
  }
};
</script>
<style lang="scss">
.create-contract-template {
  .setting-container {
    width: 100%;
    // height: 300mm;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 5px 20px;
    .ueditor-panel {
      // flex: 2;
      width: 210mm;
      margin-right: 20px;
    }
    .create-operation-panel {
      flex: 1;
      .fix-zone {
        float: left;
        width: 100%;
        .cmd-panel {
          margin: 5px;
  
        }
        .form-creat-template {
          padding-top: 10px;
          .ivu-form-item {
            width: 350px;
            margin-bottom: 18px;
            .ivu-form-item-label {
              width: 80px;
              text-align: right;
            }
            .form-item-field-input {
              display: inline-block;
              width: 250px;
            }
            .ivu-form-item-error-tip {
              left: 80px;
            }
          }
        }
      }
      .example-data {
        padding-top: 425px;
        height: 100%;
        > div {
          margin: 2px;
          line-height: 32px;
          font-size: 12px;
          padding-left: 16px;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
