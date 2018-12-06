<template>
  <div class="contract-template-setting">
    <SectionTitle title="合同模版配置"></SectionTitle>
    <div class="cmd-panel">
      <Button type="primary" class="btn-create-template" @click="onCreateTemplate">新建模板</Button>
      <div class="search-panel">
        <div class="type-select business-type">
          <span>业务类型</span>
          <Select
            class="select"
            v-model="searchParmas.businessType"
            @on-change="onSearchBtnClick"
            filterable
            clearable
          >
            <Option
              v-for="option in businessTypeList"
              :value="option.value"
              :key="option.code"
            >{{option.desc}}</Option>
          </Select>
        </div>
        <div class="type-select publish-type">
          <span>发布状态</span>
          <Select
            class="select"
            v-model="searchParmas.publishState"
            @on-change="onSearchBtnClick"
            filterable
            clearable
          >
            <Option
              v-for="option in publishStateList"
              :value="option.value"
              :key="option.value"
            >{{option.label}}</Option>
          </Select>
        </div>
        <span>模板编码</span>
        <Input
          v-model="searchParmas.templateNo"
          class="template-number"
          placeholder="模版编码支持模糊搜索"
          @on-enter="onSearchBtnClick"
        />
        <Button class="btn-search" type="text" @click="onSearchBtnClick">搜索</Button>
      </div>
    </div>
    <div class="table-list-panel">
      <Table
        border
        :columns="columns"
        :data="tableData"
        stripe
        class="table-list"
        :loading="loading"
      ></Table>
      <div style="margin: 10px 0 ;overflow: hidden">
        <div style="float: right;">
          <Page
            :current="page"
            :total="totalCount"
            :page-size="params.pageSize"
            @on-change="onPagechange"
            show-total
            show-elevator
          ></Page>
        </div>
      </div>
    </div>
    <Modal v-model="openPublish" title="提示信息" width="500">
      <div style="font-size:14px">确定要发布该合同模版吗，发布后将不允许编辑操作？</div>
      <div slot="footer">
        <Button type="primary" @click="handleTmpPublish(curremtTmpId)">确定</Button>
        <Button style="margin-left:8px" @click="closePublishModal">取消</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import Buttons from "components/Buttons";
import SectionTitle from "components/SectionTitle";
import dateUtils from "vue-dateutils";
import utils from "plugins/utils";

import { Button, Select, Option, Input, Table, Page, Modal } from "iview";
export default {
  components: {
    Select,
    Option,
    Input,
    Table,
    Page,
    Modal,
    SectionTitle,
    Buttons,
    Button
  },
  data() {
    return {
      loading: false,
      curremtTmpId: "",
      openPublish: false,
      totalCount: 1,
      page: 1,
      params: {
        page: 1,
        pageSize: 15
      },
      searchParmas: {
        businessType: " ",
        publishState: " ",
        templateNo: ""
      },
      businessTypeList: [],
      publishStateList: [
        {
          label: "全部",
          value: " "
        },
        {
          label: "已发布",
          value: "1"
        },
        {
          label: "未发布",
          value: "0"
        }
      ],
      tableData: [],
      columns: [
        {
          title: "模版ID",
          key: "id",
          align: "center"
        },
        {
          title: "业务类型",
          key: "serviceTypeName",
          align: "center"
        },
        {
          title: "模版类型",
          key: "tplTypeName",
          align: "center"
        },
        {
          title: "语言类型",
          key: "langTypeName",
          align: "center"
        },
        {
          title: "模版名称",
          key: "tplName",
          align: "center"
        },
        {
          title: "模版编码",
          key: "tplCode",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                {
                  props: {
                    type: "text",
                    size: "small"
                  },
                  style: {
                    color: "rgb(43, 133, 228)",
                    cursor: "pointer"
                  },
                  on: {
                    click: () => {
                      this.jump2TemplateView(params.row.id);
                    }
                  }
                },
                params.row.tplCode
              )
            ]);
          }
        },
        {
          title: "操作人",
          key: "operatorName",
          align: "center"
        },
        {
          title: "操作时间",
          key: "utime",
          align: "center",
          render(h, params) {
            if (params.row.utime) {
              let time = dateUtils.dateToStr(
                "YYYY-MM-DD HH:mm:SS",
                new Date(params.row.utime)
              );
              let arr = time.split(" ");
              return h("div", [h("p", arr[0]), h("p", arr[1])]);
            }
          }
        },
        {
          title: "发布状态",
          key: "publishFlag",
          align: "center",
          render(h, params) {
            let state = params.row.publishFlag;
            let styleObj = {
              color: state ? "#495060" : "#FF605F"
            };
            return h("div", { style: styleObj }, state ? "已发布" : "未发布");
          }
        },
        {
          title: "操作",
          key: "action",
          align: "center",
          width: 80,
          className: "col-operate",
          render: (h, params) => {
            var btnRender = [];
            btnRender.push(
              h(
                "p",
                {
                  props: {
                    type: "text",
                    size: "small"
                  },
                  style: {
                    color: "rgb(43, 133, 228)",
                    cursor: "pointer",
                    margin: "2px 5px"
                  },
                  on: {
                    click: () => {
                      this.jumpTemplatePdf(params.row.id);
                    }
                  }
                },
                "pdf预览"
              )
            );
            if (!params.row.publishFlag) {
              btnRender.push(
                h(
                  "p",
                  {
                    props: {
                      type: "text",
                      size: "small"
                    },
                    style: {
                      color: "rgb(43, 133, 228)",
                      cursor: "pointer",
                      margin: "2px 5px"
                    },
                    on: {
                      click: () => {
                        this.jumpTemplateEdit(params.row.id);
                      }
                    }
                  },
                  "编辑"
                ),
                h(
                  "p",
                  {
                    props: {
                      type: "text",
                      size: "small"
                    },
                    style: {
                      color: "rgb(43, 133, 228)",
                      cursor: "pointer",
                      margin: "2px 5px"
                    },
                    on: {
                      click: () => {
                        this.openPublishModal(params.row.id);
                      }
                    }
                  },
                  "发布"
                )
              );
            }
            return h("div", btnRender);
          }
        }
      ]
    };
  },
  mounted() {
    document.title = "合同模版配置";
    this.getServiceTypeEunm();
    this.handleSearch(this.params);
  },
  methods: {
    //新建模版
    onCreateTemplate() {
      let routeData = this.$router.resolve({ path: "/contract-template/create" });
      window.open(routeData.href, "_blank");
    },
    //发布模版
    handleTmpPublish(id) {
      this.$http
        .get("get-contract-config-publish", { tplId: id })
        .then(res => {
          this.closePublishModal();
          this.$Notice.info({
            title: "发布成功"
          });
          this.handleSearch(this.params);
        })
        .catch(err => {
          this.$Notice.error({
            title: err.message
          });
          this.closePublishModal();
        });
    },
    closePublishModal() {
      this.openPublish = false;
      this.curremtTmpId = "";
    },
    //打开模版发布窗体
    openPublishModal(id) {
      this.curremtTmpId = id;
      this.openPublish = true;
    },
    //模版编辑
    jumpTemplateEdit(id) {
      this.curremtTmpId = id;
      let routeData = this.$router.resolve({ name: "CreateTemplate" });
      routeData.href = routeData.href + "/?id=" + id;
      window.open(routeData.href, "_blank");
    },
    //模版pdf查看
    jumpTemplatePdf(id) {
      this.curremtTmpId = id;
      // window.open(`../publicPage/${params.row.id}/pdf-view?contractType=&requestId=${params.row.requestId}`, '_blank')
      // window.open(`../publicPage/7859/pdf-view?contractType=&requestId=8222`, '_blank')
    },
    //跳转至模版查看
    jump2TemplateView(id) {
      this.curremtTmpId = id;
      let routeData = this.$router.resolve({ name: "ViewTemplate" });
      routeData.href = routeData.href + "/?id=" + id;
      window.open(routeData.href, "_blank");
    },
    //搜索模版
    handleSearch(params) {
      this.loading = true;
      this.$http
        .get("get-contract-config-list", params)
        .then(res => {
          this.tableData = res.data.items;
          this.totalCount = res.data.totalCount;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          this.$Notice.error({
            title: err.message
          });
        });
    },
    onPagechange(page) {
      this.page = page;
      let params = Object.assign(
        {},
        this.params,
        { page: page },
        { serviceType: this.searchParmas.businessType },
        { tplCode: this.searchParmas.templateNo }
      );
      if (this.searchParmas.publishState === "0") {
        params.publishFlag = false;
      } else if (this.searchParmas.publishState === "1") {
        params.publishFlag = true;
      }
      this.handleSearch(params);
    },
    onSearchBtnClick() {
      let params = Object.assign(
        {},
        this.params,
        { serviceType: this.searchParmas.businessType },
        { tplCode: this.searchParmas.templateNo }
      );
      if (this.searchParmas.publishState === "0") {
        params.publishFlag = false;
      } else if (this.searchParmas.publishState === "1") {
        params.publishFlag = true;
      }
      this.handleSearch(params);
      this.page = 1;
    },
    getServiceTypeEunm() {
      let arr = [
        {
          desc: "全部",
          value: " ",
          code: -1
        }
      ];
      this.$http
        .get("get-enum-all-data", {
          enmuKey: "com.krspace.order.api.enums.contract.ServiceType"
        })
        .then(res => {
          arr = arr.concat(res.data);
          this.businessTypeList = arr;
        })
        .catch(err => {
          this.$Notice.error({
            title: err.message
          });
        });
    }
  }
};
</script>
<style lang="scss">
.contract-template-setting {
  .cmd-panel {
    padding: 10px 20px;

    .search-panel {
      float: right;
      right: 20px;
      .type-select {
        display: inline-block;
        width: 220px;
        .select {
          display: inline-block;
          width: 150px;
        }
      }
      .template-number {
        display: inline-block;
        width: 150px;
      }
      .btn-search {
        color: #2b85e4;
        display: inline-block;
        cursor: pointer;
      }
    }
  }
  .table-list-panel {
    padding: 10px 20px;
    .table-list {
      .col-operate {
        .ivu-table-cell {
          padding-left: 0;
          padding-right: 0;
        }
      }
    }
  }
}
</style>
