<template>
  <Form
    :model="formItem"
    :label-width="100"
    style="padding:0 20px"
    :rules="ruleCustom"
    ref="formContent"
  >
    <FormItem label="名称" prop="paramName">
      <Input v-model="formItem.paramName" placeholder="名称"></Input>
    </FormItem>
    <FormItem label="编码" prop="paramCode">
      <Input v-model="formItem.paramCode" placeholder="编码" v-if="editStatus=='create'"/>
      <span v-if="editStatus=='edit'">{{formItem.paramCode}}</span>
    </FormItem>

    <FormItem label="启用" prop="flag">
      <RadioGroup v-model="formItem.flag">
        <Radio label="true">是</Radio>
        <Radio label="false">否</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="值的格式">
      <RadioGroup v-model="paramType">
        <Radio label="JSON">JSON</Radio>
        <Radio label="TEXT">STRING</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="值" v-if="formItem.paramType == 'TEXT'">
      <Input v-model="formItem.paramVal" placeholder="请填写..."></Input>
    </FormItem>
    <FormItem label="值" v-if="formItem.paramType == 'JSON'">
      <div>
        <Row
          v-for="(item, index) in formItem.items"
          :key="index"
          style="margin:0;border:1px solid e9eaec;border-top:none;border-bottom:none;margin-bottom:10px"
        >
          <Input v-model="item.name" placeholder="属性名" style="width:120px"></Input>
          <span style="width:15px;display:inline-block;text-align:center">:</span>
          <Input v-model="item.value" placeholder="属性值" style="width:120px"></Input>
          <span style="width:10px;display:inline-block"></span>
          <Button type="primary" @click="addValue" size="small">添加</Button>
          <span style="width:10px;display:inline-block"></span>
          <Button type="primary" @click="deleteValue(index)" size="small" v-if="index!=0">删除</Button>
        </Row>
      </div>
    </FormItem>
    <FormItem label="描述" prop="paramDesc">
      <Input
        v-model="formItem.paramDesc"
        type="textarea"
        :autosize="{minRows: 2,maxRows: 5}"
        placeholder="描述"
      ></Input>
    </FormItem>
  </Form>
</template>
<script>
import {Form,FormItem,Input,RadioGroup,Radio,Row,Button} from 'iview';
export default {
  components:{
    Form,
    FormItem,
    Input,
    RadioGroup,
    Radio,
    Row,
    Button,
  },

  props: {
    editData: Object,
    editStatus: String
  },
  data() {
    let data = {
      items: [{ name: "" }],
      flag: "false",
      paramVal: "",
      paramDesc: "",
      paramName: "",
      paramType: "TEXT"
    };
    let paramVal = this.editData.paramVal || "";
    let valueType = "TEXT";
    if (typeof this.editData.enableFlag == "boolean") {
      this.editData.flag = JSON.stringify(this.editData.enableFlag);
    }
    this.editData.flag = this.editData.flag || "false";
    if (this.editData && this.editData.paramType == "JSON") {
      valueType = "JSON";
      let arr = [];
      paramVal = JSON.parse(paramVal);
      for (let key in paramVal) {
        arr.push({ value: paramVal[key], name: key });
      }
      data.items = arr;
    }
    data = Object.assign({}, data, this.editData);

    console.log("editStatus", this.editStatus);

    return {
      paramType: valueType,
      formItem: data,
      ruleCustom: {
        paramName: [
          { required: true, message: "请填写名称", trigger: "change" }
        ],
        paramCode: [
          { required: true, message: "请填写编码", trigger: "change" }
        ],
        enableFlag: [
          { required: true, message: "请选择是否启用", trigger: "change" }
        ],
        paramDesc: [
          { required: true, message: "请填写描述", trigger: "change" }
        ],
        paramVal: [
          { required: true, message: "请填写参数值", trigger: "change" }
        ]
        // name: [
        //     {  trigger: 'change' ,validator: validateFirst},
        // ],
      }
    };
  },
  watch: {
    paramType(value) {
      this.formItem.paramType = value;
      if (value == "json") {
        this.formItem.paramVal = "";
      } else {
        this.formItem.paramVal = "";
        this.formItem.items = [{ name: "", value: "" }];
      }
    }
  },
  methods: {
    deleteValue(index) {
      let arr = this.formItem.items.splice(index, 1);
    },
    addValue() {
      this.formItem.items.push({ name: "" });
    }
  },
  updated: function() {
    let data = {};
    let jsonTable = false;
    if (this.formItem.paramType == "TEXT" && !this.formItem.paramVal.length) {
      this.formItem.paramVal = "";
      this.formItem.items = [{ name: "", value: "" }];
    }

    if (this.formItem.paramType == "JSON") {
      let obj = {};
      this.formItem.items.map((item, index) => {
        obj[item.name] = item.value;
      });

      this.formItem.paramVal = obj;
    }
    data = Object.assign({}, this.formItem);
    this.$emit("newPageData", data);
  }
};
</script>
