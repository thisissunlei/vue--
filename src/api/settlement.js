//结算单的api
export default  {
  //列表
  'get-settlements-list': {
      url: '/api/krspace-finance-web/csr/checklist/list/type/search?',
      method: 'get'
  },
  // 表单详情
  'get-settlement-detail':{
      url: '/api/krspace-finance-web/csr/checklist/info/type/view?',
      method: 'get'
  },
  // 编辑获取数据
  'get-edit-settlement-detail':{
      url: '/api/krspace-finance-web/csr/checklist/info/type/edit?',
      method: 'get'
  },
  
  // 提交编辑数据
  'post-edit-settlement-detail':{
      url: '/api/krspace-finance-web/csr/checklist/edit?',
      method: 'post'
  },
  //获取附件列表接口
  'get-checklist-list':{
      url: '/api/krspace-finance-web/csr/checklist/list/type/attachment?',
      method: 'get'
  },
  //上传附件
  'post-checklist-list':{
      url: '/api/krspace-finance-web/csr/checklist/upload/type/attachment?',
      method: 'post'
  },
  // 生效
  'post-effective':{
      url: '/api/krspace-finance-web/csr/checklist/effective?',
      method: 'post'
  },
  //获取编辑页结算单费用项目列表
  'get-amount-name-data':{
      url: '/api/krspace-finance-web/csr/checklist/list/type/fee?',
      method: 'get'
  },
  //获取结算单PDF的id
  'get-settlement-pdf-id':{
      url: '/api/krspace-finance-web/csr/checklist/file/type/pdf?',
      method: 'get'
  },
}
