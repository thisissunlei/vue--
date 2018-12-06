<template>
  <div class="g-order">
    <SectionTitle title="参数配置"></SectionTitle>
    <div class="u-search">
      <Button type="primary" @click="onCreate">新建</Button>
    </div>
    <div class="u-table">
      <Table border :columns="columns" :data="tableData" stripe></Table>
      <div style="margin: 10px 0 ;overflow: hidden">
        <!-- <Button type="primary" @click="onExport">导出</Button> -->
        <div style="float: right;">
          <Page
            :current="page"
            :total="totalCount"
            :page-size="pageSize"
            @on-change="changePage"
            show-total
            show-elevator
          ></Page>
        </div>
      </div>
    </div>

    <!-- 新建 -->
    <Modal
      v-model="openCreate"
      title="新建参数"
      ok-text="确定"
      cancel-text="取消"
      width="660"
      :styles="{top: '20px'}"
    >
      <new-form
        ref="fromFieldNewPage"
        v-if="openCreate"
        @newPageData="newPageDataChange"
        :editData.sync="editData"
        editStatus="create"
      />
      <div slot="footer">
        <Button type="primary" @click="onSubmit('formContent')">确定</Button>
        <Button style="margin-left: 8px" @click="cancelCreate">取消</Button>
      </div>
    </Modal>

    <!-- 编辑 -->
    <Modal
      v-model="openEdit"
      title="编辑参数"
      ok-text="确定"
      cancel-text="取消"
      width="660"
      :styles="{top: '20px'}"
    >
      <new-form
        ref="fromFieldNewPage"
        v-if="openEdit"
        @newPageData="newPageDataChange"
        :editData.sync="editData"
        editStatus="edit"
      />
      <div slot="footer">
        <Button type="primary" @click="editSubmit('formContent')">确定</Button>
        <Button  style="margin-left: 8px" @click="cancelEdit">取消</Button>
      </div>
    </Modal>
    <Message :type="MessageType" :openMessage="openMessage" :warn="warn" @changeOpen="onChangeOpen"></Message>
  </div>
</template>


<script>
import newForm from "./form";
import SectionTitle from "components/SectionTitle";
import dateUtils from "vue-dateutils";
import Message from "components/Message";

import {Button,Table,Page,Modal} from 'iview';
export default {
  head() {
    return {
      title: "参数配置-氪空间后台管理系统"
    };
  },
  name: "Meeting",
  components: {
    Button,
    Table,
    Page,
    Modal,
    newForm,
    SectionTitle,
    Message
  },
  data() {
    return {
      editData: {},
      parameterData: {},
      openCreate: false,
      openEdit: false,
      totalCount: 1,
      tableData: [],
      pageSize: 15,
      page: 1,
      params: {
        page: 1,
        pageSize: 15
      },
      openMessage: false,
      warn: "",
      MessageType: "",
      msg: "",
      //假数据
      dataItem: [],
      columns: [
        {
          title: "名称",
          key: "paramName",
          align: "center"
        },
        {
          title: "编码",
          key: "paramCode",
          align: "center"
        },
        {
          title: "值",
          key: "paramVal",
          align: "center"
        },
        {
          title: "描述",
          key: "paramDesc",
          align: "center"
        },
        {
          title: "是否启用",
          key: "enableFlag",
          align: "center",
          width: 100,
          render(h, obj) {
            if (obj.row.enableFlag) {
              return h(
                "span",
                {
                  style: {
                    color: "#666666"
                  }
                },
                "启用"
              );
            } else {
              return h(
                "span",
                {
                  style: {
                    color: "#F5A623"
                  }
                },
                "不启用"
              );
            }
          }
        },
        {
          title: "操作",
          key: "operation",
          align: "center",
          width: 110,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small"
                  },
                  style: {
                    color: "#2b85e4"
                  },
                  on: {
                    click: () => {
                      this.showEdit(params.row);
                    }
                  }
                },
                "编辑"
              )
            ]);
          }
        }
      ]
    };
  },
  watch: {
    openEdit() {
      if (!this.openEdit) {
        this.editData = {};
      }
    }
  },
  created() {
    this.getTableData(this.params);
  },
  methods: {
    getTableData(params) {
      this.$http
        .get("getParamList", params)
        .then(res => {
          this.tableData = res.data.items;
          this.totalCount = res.data.totalCount;
        })
        .catch(err => {
          this.$Notice.error({
            title: err.message
          });
        });
    },
    onCreate() {
      this.openCreate = true;
    },
    cancelCreate() {
      this.openCreate = false;
    },
    onSubmit(name) {
      //校验表单
      var newPageRefs = this.$refs.fromFieldNewPage.$refs;
      var isSubmit = true;
      newPageRefs[name].validate((valid, data) => {
        if (!valid) {
          isSubmit = false;
        } else {
          this.parameterData.items = "";
          this.parameterData.paramVal =
            this.parameterData.paramType == "JSON"
              ? JSON.stringify(this.parameterData.paramVal)
              : this.parameterData.paramVal;
          // 校验json表单
          if (this.parameterData.paramType == "JSON") {
            for (let key in this.parameterData.paramVal) {
              if (!key || !this.parameterData.paramVal[key]) {
                isSubmit = false;
              }
            }
          }
          this.parameterData.enableFlag = this.parameterData.flag;
          if (!isSubmit) {
            this.$Notice.error({
              title: "请填写完 参数"
            });
            return;
          }
          // 提交数据
          this.$http
            .post("saveParamData", this.parameterData)
            .then(res => {
              this.getTableData();
              this.openCreate = false;
            })
            .catch(err => {
              this.$Notice.error({
                title: err.message
              });
            });
        }
      });
    },
    editSubmit(name) {
      var newPageRefs = this.$refs.fromFieldNewPage.$refs;
      var isSubmit = true;
      newPageRefs[name].validate((valid, data) => {
        if (!valid) {
          isSubmit = false;
        } else {
          this.parameterData.enableFlag = this.parameterData.flag;

          // 校验json表单
          if (this.parameterData.paramType == "JSON") {
            for (let key in this.parameterData.paramVal) {
              if (!key || !this.parameterData.paramVal[key]) {
                isSubmit = false;
              }
            }
          }
          if (!isSubmit) {
            this.$Notice.error({
              title: "请填写完 参数"
            });
            return;
          }

          this.parameterData.items = "";
          this.parameterData.paramVal =
            this.parameterData.paramType == "JSON" &&
            typeof this.parameterData.paramVal != "string"
              ? JSON.stringify(this.parameterData.paramVal)
              : this.parameterData.paramVal;

          this.$http
            .post("saveParamData", this.parameterData)
            .then(res => {
              this.openEdit = false;
              this.getTableData(this.params);
            })
            .catch(err => {
              this.$Notice.error({
                title: err.message
              });
            });
        }
      });
    },
    cancelEdit() {
      this.openEdit = false;
      this.editData = {};
    },
    onChangeOpen() {
      console.log("changeOpen");
    },
    changePage(page) {
      this.params.page = page;
      this.page = page;
      this.getTableData(this.params);
    },
    showEdit(item) {
      this.editData = item;
      this.parameterData = item;
      this.openEdit = true;
    },
    newPageDataChange(data) {
      if (data) {
        this.parameterData = data;
      }
    }
  }
};
</script>

<style lang="scss">
.g-order {
  .u-search {
    height: 32px;
    margin: 16px 20px;
  }
  .ivu-table-cell {
    padding: 0;
  }
  .u-table {
    padding: 0 20px;
  }
  .m-search {
    color: #2b85e4;
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    cursor: pointer;
  }
}
.u-cancel-title {
  width: 334px;
  text-align: center;
  margin: 40px auto 35px;
  font-size: 14px;
}
</style>