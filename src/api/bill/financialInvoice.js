//公共的api
export default  {
    //资质审核--列表
    'get-financial-invoice-list': {
      url: '/api/order/csr-invoice-qualification/list',
      method: 'get'
    },
    //财务端-资质查看详情
    'get-financial-invoice-detail': {
      url: '/api/order/csr-invoice-qualification/view',
      method: 'get'
    },
    //财务端-资质编辑
    'get-financial-invoice-edit': {
      url: '/api/order/csr-invoice-qualification/edit',
      method: 'post'
    },
    //财务端-资质驳回
     'get-financial-invoice-rejected': {
      url: '/api/order/csr-invoice-qualification/handle',
      method: 'put'
    },
}
  