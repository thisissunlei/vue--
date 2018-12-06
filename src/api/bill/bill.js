//公共的api
export default  {
    //账单中心--获取反结算信息
    'get-release': {
      url: '/api/krspace-pay/bill/release?',
      method: 'get'
    },
    //账单中心--批量结算
    'batch-pay': {
      url: '/api/krspace-pay/bill/batch-pay?',
      method: 'post'
    },
    //账单中心--账单结算
    'bill-pay': {
      url: '/api/krspace-pay/bill/pay?',
      method: 'post'
    },
    //账单中心--账单结算查询
    'get-balance': {
      url: '/api/krspace-pay/wallet/get-balance?',
      method: 'get'
    },
    //账单中心--账单详情
    'get-bill-detail': {
      url: '/api/krspace-pay/bill/detail?',
      method: 'get'
    },
    //账单中心--回款列表--已绑定
    'get-payment-list': {
      url: '/api/krspace-pay/payment/list?',
      method: 'get'
    },
    //账单中心--回款详情
    'get-payment-detail': {
      url: '/api/krspace-pay/payment/detail?',
      method: 'get'
    },
    //账单中心--绑定客户
    'payment-bind': {
      url: '/api/krspace-pay/payment/bind?',
      method: 'post'
    },
    //账单中心--获取客户 
    'getCompanyInfo':{
      url:'/api/krspace-finance-web/member/csr-list?',
      method:'get'
    },
    //账单中心--收入管理--收入列表
    'get-income-list':{
      url:'/api/krspace-pay/income/list?',
      method:'get'
    },
    //账单中心--收入管理--收入详情
    'get-income-detail':{
      url:'/api/krspace-pay/income/detail?',
      method:'get'
    },
    //账单中心--收入管理--挂收入
    'add-income':{
      url:'/api/krspace-pay/income/add',
      method:'post'
    },
    //账单结算--反结算
    'bill-release': {
      url: '/api/krspace-pay/bill/release',
      method: 'post'
    },
    //账单中心--交易流水
    'get-payrecord-list': {
        url: '/api/krspace-pay/pay-record/list?',
        method: 'get'
    },
    //账单中心--导入回款明细
    'import-bank-flow': {
      url: '/api/krspace-pay/pay-record/importBankFlow',
      method: 'post'
    },
    //账单中心--账单类型
    'get-bill-type': {
      url: '/api/krspace-pay/bill/bill-type',
      method: 'get'
    },
    //账单中心--账单id与类型
    'get-orderId-type':{
      url: '/api/krspace-op-web/order-seat/getOrderIdAndType',
      method: 'get'
    },
    //账单中心--收入类型
    'get-fee-type': {
      url: '/api/krspace-pay/income/fee-type',
      method: 'get'
    },
    //账单中心--回款--退款
    'payment-refund': {
      url: '/api/krspace-pay/payment/refund',
      method: 'post'
    },
    //账单中心--回款--回款
    'payment-add': {
      url: '/api/krspace-pay/payment/add',
      method: 'post'
    },
     //账单中心--回款--开票
     'payment-invoice': {
      url: '/api/krspace-pay/payment/invoice',
      method: 'post'
    },

     //账单中心--账单--下载pdf
     'bill-down-pdf': {
      url: '/api/krspace-pay/bill/down/pdf',
      method: 'get'
    },
    
    // 账户中心
    'account-list': {
      url: '/api/krspace-pay/wallet/account-list?',
      method: 'get'
    },
    // 账户详情页--客户基本信息
    'customer-info': {
      url: '/api/krspace-pay/account/customer?',
      method: 'get'
    },
    // 账户详情页--公式
    'account-detail': {
      url: '/api/krspace-pay/account/detail?',
      method: 'get'
    },
    // 客户打款-总表
    'payment-list': {
      url: '/api/krspace-pay/account/payment/list?',
      method: 'get'
    },
    // 客户打款-明细表
    'payment-detail': {
      url: '/api/krspace-pay/account/payment-detail/list?',
      method: 'get'
    },
    // 客户消费-汇总表
    'consumption-list': {
      url: '/api/krspace-pay/consumption/list?',
      method: 'get'
    },
    // 客户消费-明细
    'consumption-detail': {
      url: '/api/krspace-pay/consumption-detail/list?',
      method: 'get'
    },
    // 客户退款-汇总
    'refund-list': {
      url: '/api/krspace-pay/refund/list?',
      method: 'get'
    },
    // 客户退款-明细
    'refund-detail': {
      url: '/api/krspace-pay/refund-detail/list?',
      method: 'get'
    },
    // 账户余额-汇总
    'balance-list': {
      url: '/api/krspace-pay/balance/list?',
      method: 'get'
    },
    // 账户余额-明细
    'balance-detail': {
      url: '/api/krspace-pay/balance-detail/list?',
      method: 'get'
    },
    //余额转社区
    'transfer-community': {
      url: '/api/krspace-pay/balance/transfer-community',
      method: 'post'
    },
    // 余额转营业外
    'nonoperating': {
      url: '/api/krspace-pay/balance/nonoperating',
      method: 'post'
    },
    //门禁卡押金转余额
    'guardcard-deposit': {
      url: '/api/krspace-pay/balance/guardcard-deposit',
      method: 'post'
    },
    // 冻结服务保证金转余额
    'lock-deposit': {
      url: '/api/krspace-pay/balance/lock-deposit',
      method: 'post'
    },
    // 其他服务保证金转余额
    'other-deposit': {
      url: '/api/krspace-pay/balance/other-deposit',
      method: 'post'
    },
    //可用押金转余额
    'free-to-balance': {
      url: '/api/krspace-pay/deposit/free-toBalance',
      method: 'get'
    },
    // 冻结服务保证金转营业外
    'lock-to-income': {
      url: '/api/krspace-pay/deposit/lock-toIncome',
      method: 'post'
    },
    //余额转社区--社区列表
    'balance-community-list': {
      url: '/api/krspace-pay/account/community/list?',
      method: 'get'
    },
    
    //账单中心--回款列表--未绑定列表
    'get-payment-unbind-list': {
      url: '/api/krspace-pay/payment/unbind/list',
      method: 'get'
    },
    
    //账单中心--获取账单列表--已付清
    'get-bill-paid-list': {
      url: '/api/krspace-pay/bill/paid/list',
      method: 'get'
    },
    //账单中心--获取账单列表--未付清
    'get-bill-wait-list': {
      url: '/api/krspace-pay/bill/wait/list',
      method: 'get'
    },
    //账单中心--客户接口--优化后
    'get-payment-customer-like': {
      url: '/api/krspace-pay/payment/customer/like',
      method: 'get'
    },

    // 同步数据--预收数据
    'get-advanced-collection-list': {
      url: '/api/sync/listKdPaymentSummaryByPage',
      method: 'get'
    },
    // 同步数据--应收数据
    'get-receivable-collection-list': {
      url: '/api/sync/listKdIncomeSummaryByPage',
      method: 'get'
    }

  }
  