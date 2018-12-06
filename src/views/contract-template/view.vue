<template>
  <div class="create-contract-template" style="width:100%">
    <SectionTitle title="合同模版查看"></SectionTitle>
    <div class="setting-container">
      <div class="ueditor-panel">
        <Ueditor v-model="formItem.template" @on-content-change="onUeditorContentChange"></Ueditor>
      </div>
      <div class="view-operation-panel">
        <div class="top">
          <div class="cmd-panel">
            <Button type="primary" class="btn" @click="openHtmlPre=true">html预览</Button>
            <Button type="primary" class="btn" @click="closeRemaind=true">关闭</Button>
          </div>
          <Form ref="formItem" :model="formItem" :rules="ruleCustom" class="form-creat-template">
            <FormItem label="模版名称" prop="tplName">
              <span>{{formItem.tplName}}</span>
            </FormItem>
            <FormItem label="模版编码" prop="tplCode">
              <span>{{formItem.tplCode}}</span>
            </FormItem>
            <FormItem label="业务类型" prop="serviceType">
              <span>{{formItem.serviceTypeName}}</span>
            </FormItem>
            <FormItem label="模版类型" prop="tplType">
              <span>{{formItem.tplTypeName}}</span>
            </FormItem>

            <FormItem label="语言类型" prop="langType">
              <span>{{formItem.langTypeName}}</span>
            </FormItem>
          </Form>
          <div style="padding-left:20px">样例数据:</div>
        </div>
        <div class="example-data">
          <jsonEditor v-model="formItem.sampleData"></jsonEditor>
        </div>
      </div>
    </div>
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
import jsonEditor from "./jsonEditor.vue";
import HtmlView from "./htmlview.vue";
import { Button, Form, FormItem, Modal } from "iview";
export default {
  components: {
    Button,
    Form,
    FormItem,
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
      serviceType: "",
      tplType: "",
      langType: "",
      id: "",
      isEdit: false,
      openHtmlPre: false,
      jsonEditorModel: "tree", // tree
      closeRemaind: false,
      businessTypeList: [],
      tlpTypes: {},
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
        ]
      }
    };
  },
  mounted() {
    document.title = "查看合同模版";
    GLOBALSIDESWITCH("false");
    this.init();
  },
  methods: {
    init() {
      this.getTpltypes();
      this.getLangTypeEumn();
      this.getBusinessTypeEumn();
      this.id = this.$route.query.id;
      this.getViewData(this.id);
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
    .view-operation-panel {
      flex: 1;
      .top {
        float: left;
        width: 100%;
        .cmd-panel {
          margin: 5px;
        }
        .form-creat-template {
          padding-top: 10px;
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
      .example-data {
        height: 100%;
        padding-top: 350px;
        > div {
          margin: 2px;
          line-height: 32px;
          font-size: 12px;
          padding-left: 16px;
          height: 100%;
        }
      }
    }
  }
}
</style>
