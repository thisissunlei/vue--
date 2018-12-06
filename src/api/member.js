//公共的api
export default {
    //企业管理员列表
    'customer-manager-list': {
        url: '/api/krspace-op-web/customer/manager/list',
        method: 'get'
    },
    //修改管理员
    'edit-customer-manager': {
        url: '/api/krspace-op-web/customer/manager/edit',
        method: 'post'
    },
    //获取管理员数量
    'get-manager-count': {
        url: '/api/krspace-op-web/customer/manager/manager-count',
        method: 'get'
    },
    //客户信息列表请求
    'get-client-list': {
        url: '/api/krspace-op-web/customer-center/list',
        method: 'get'
    },
    //客户来源
    'get-customer-source': {
        url: '/api/krspace-op-web/customer-center/source/list',
        method: 'get'
    },
    //客户基本信息详情
    'get-customer-info-detail': {
        url: '/zuul/user/customer/detail',
   //     url: '/api/krspace-op-web/customer-center/info-detail',  
        method: 'get'
    },
    //新增客户  客户管理删除 
    'add-customer': {
        url: '/api/order/csr/customer/actions/add',
        method: 'post'
    },
    //客户名称校验接口
    'check-company': {
        url: '/api/krspace-op-web/customer-center/check-company',
        method: 'get'
    },
    //顶部客户名称、状态 todo 
    // 'top-customer': {
    //     url: '/api/krspace-op-web/customer-center/customer',
    //     method: 'get'
    // },
    
    //客户列表－转移客户
    'customer-list-switch': {
        url: '/api/krspace-op-web/customer-center/transfer',
        method: 'post'
    },
    //客户列表－按钮权限接口
    'customer-permission-btn': {
        url: '/api/krspace-op-web/customer-center/authority',
        method: 'get'
    },
    //客户转移－领取人下拉列表
    'customer-switch-leader': {
        url: '/api/krspace-op-web/customer-center/transfer/receive-list',
        method: 'get'
    },
    //客户转移－获取社区下拉数据
    'customer-switch-community': {
        url: '/api/krspace-op-web/customer-center/transfer/community-list',
        method: 'get'
    },
    //客户转移－入驻信息接口
    'customer-join-info': {
        url: '/api/krspace-op-web/seat-lock-detail/info/list',
        method: 'get'
    },
    //客户转移－判断所选客户是否能转移
    'customer-is-switch': {
        url: '/api/krspace-op-web/customer-center/transfer/check',
        method: 'get'
    },
    //获取企业管理员详情--企业信息
    'customer-community-enter-info': {
        url: '/api/krspace-op-web/customer/manager/community/enter-info',
        method: 'get'
    },
     //获取企业管理员详情--管理社区列表
     'customer-chiefmanage-cmt-list': {
        url: '/api/krspace-op-web/customer/manager/chiefmanage-cmt-list',
        method: 'get'
    },
    //获取企业管理员详情--获取管理的社区列表
    'get-manage-cmt-list': {
        url: '/api/krspace-op-web/customer/manager/manage-cmt-list',
        method: 'get'
    },
    
    //获取企业管理员详情--在职员工列表
    'get-customer-manager-employees': {
        url: '/api/krspace-op-web/customer/manager/employees',
        method: 'get'
    },
    //获取企业管理员详情--管理员列表
    'get-customer-manager-admin': {
        url: '/api/krspace-op-web/customer/manager/admin/list',
        method: 'get'
    },
    //获取企业管理员详情--根据手机号查询会员信息
    'get-customer-manager-user-detail': {
        url: '/api/krspace-op-web/customer/manager/user/detail',
        method: 'get'
    },
    //获取企业管理员详情--根据手机号查询会员信息
    'get-customer-manager-csr-mbrtype-num': {
        url: '/api/krspace-op-web/customer/manager/csr-mbrtype-num',
        method: 'get'
    },
    //获取企业管理员详情--编辑会员信息
    'customer-manager-employees': {
        url: '/api/krspace-op-web/customer/manager/user/edit',
        method: 'post'
    },

    //客户会员--客户管理
    'get-customermanage-customer-type': {
        url: 'api/order/csr/source/type',
        method: 'get'
    },
    //客户会员--客户管理-编辑回显
    'get-customer-detail': {
        url: 'api/order/csr/customer/detail',
        method: 'get'
    },
    // 客户管理界面删除 
    'edit-customer':{
        url: 'api/order/csr/customer/actions/update',
        method: 'post' 
    },
    // 查看授权书
    'check-certificate': {
        url: 'api/krspace-op-web/customer/manager/certificate/list',
        method: 'get'
    },
    // 下载授权书模板
    'download-certificate': {
        url: 'api/krspace-op-web/sys/down-auth-file',
        method: 'post'
    },
    // 主管理员列表
    'get-customer-major-admin': {
      url: 'api/krspace-op-web/customer/manager/chief/list',
      method: 'get'
    },
    //招商账户权限列表
    'business-bill-list': {
        url: '/api/krspace-sso-web/sso/ssoUser/business/list',
        method: 'get'
    },
    //获取授予招商权限的列表
    'get-business-role': {
        url: '/api/krspace-sso-web/sso/ssoUser/investment/role/list',
        method: 'get'
    },
    //授予招商角色
    'add-business-role': {
        url: '/api/krspace-sso-web/sso/ssoUser/business/role/',
        method: 'post'
    },
    //苏岭开始
    //退款明细
    'account-refund-detail': {
        url: '/api/krspace-pay/account/refund',
        method: 'get'
    },
    //到款明细
    'account-payment-detail': {
        url: '/api/krspace-pay/account/payment',
        method: 'get'
    },
    //消费明细
    'account-cost-detail': {
        url: '/api/krspace-pay/account/cost',
        method: 'get'
    },
    //余额明细
    'account-balance-detail': {
        url: '/api/krspace-pay/account/balance',
        method: 'get'
    },
    //押金明细
    'account-deposit-detail': {
        url: '/api/krspace-pay/account/deposit',
        method: 'get'
    },
    'account-order-type': {
        url: '/api/krspace-op-web/order-seat/getOrderIdAndType',
        method: 'get'
    },
    //账户汇总
    'account-all-summary': {
        url: '/api/krspace-pay/account-sum/list',
        method: 'get'
    },
    //押金汇总
    'account-deposit-summary': {
        url: '/api/krspace-pay/deposit/list',
        method: 'get'
    },
    //消费汇总
    'account-consume-summary': {
        url: '/api/krspace-pay/consumption/list',
        method: 'get'
    },
    //苏岭结束
      //账户列表-人员获取id
    'get-bill-person-id':{
    url: '/api/krspace-erp-web/erp/ssoUser/resource-id',
    method: 'get'
   },
    //权限--数据--获取社区列表
    'findCommunities': {
        url: '/api/krspace-sso-web/sso/ssoUser/findCommunities',
        method: 'get'
      },
       //权限--数据--编辑保存社区权限
    'editUserCommunity': {
        url: '/api/krspace-sso-web/sso/ssoUser/editUserCommunity',
        method: 'post'
      },
} 