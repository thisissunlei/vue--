//公共的api
export default  {
    //账单中心--获取反结算信息
    'get-invoice-list': {
      url: '/api/order/csr-invoice-list',
      method: 'get'
    },
    //开票接口
    'post-make-invoice': {
      url: '/api/order/csr-finance-openTicket',
      method: 'post'
    },
    //开票接口
    'post-new-invoice': {
      url: '/api/order/csr-invoice-openTicket',
      method: 'post'
    },
      //重开开接口
    'post-reOpen-invoice': {
        url: '/api/order/csr-invoice-reOpen',
        method: 'post'
    },
    
    //发票列表统一接口
    'invoice-list-unified': {
      url: '/api/order/csr-invoice-list',
      method: 'get'
    },
    //根据客户id获取可开票数据
    'get-make-invoice-detail': {
      url: '/api/order/csr-invoice-qualification/info',
      method: 'get'
    },
     //根据客户id获取开票信息
    'get-make-invoice-detail-table': {
      url: '/api/order/csr-invoice-amountDetail',
      method: 'get'
    },
     //修改
    'change-modify-amount': {
      url: '/api/order/csr-invoice/op/modifyAmount',
      method: 'put'
    },
     //回收
    'change-modify-takeBack': {
      url: '/api/order/csr-invoice/op/takeBack',
      method: 'put'
    },
     //邮寄
    'change-modify-post': {
      url: '/api/order/csr-invoice/op/post',
      method: 'put'
    },
    //签收
    'change-modify-sign': {
      url: '/api/order/csr-invoice/op/sign',
      method: 'put'
    },
    //认领人
    'changeUserByName': {
      url: '/api/order/csr-invoice/getUserByName',
      method: 'get'
    },
    "csr-invoice-refund":{
      url: '/api/order/csr-invoice-refund',
      method: 'post'
    },
    "csr-invoice-ticket-open":{
      url: '/api/order/csr-invoice-ticket/open',
      method: 'post'
    },
    "csr-invoice-invoiceDetail":{
      url:"/api/order/csr-invoice-invoiceDetail",
      method:'get'
    },
    "corporation-list":{
      url:"/api/krspace-sso-web/dict/corporation/id-name",
      method:'get'
    },
    //发放
    'ticket-provide': {
      url: '/api/order/csr-invoice/op/grant',
      method: 'put'
    }

}
  