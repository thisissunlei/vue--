//公共的api
export default {
    //获取平面图信息
    getplanmap: {
        url: "/api/krspace-op-web/cmt/floor-graph/vue/select-info?",
        method: "get"
    },
    //获取社区List组件
    "get-mainbill-community": {
        url: "/api/krspace-finance-web/finaVerify/data/get-mainbill-community?",
        method: "get"
    },
    //获取客户List组件
    "get-saler": {
        url: "/api/krspace-sso-web/sso/ssoUser/select?",
        method: "get"
    },

    //获取销售机会
    "get-salechance": {
        // url: "/api/order/csr/opportunity/list/type/order",
        url: "/api/krspace-op-web/csr/opportunity/list/type/order",
        method: "get"
    },

    //订单中心-订单作废
    "cancel-order": {
        url: "/api/krspace-op-web/order/metting-room/cancel",
        method: "post"
    },
    //订单中心-订单列表
    "order-list": {
        url: "/api/krspace-op-web/order/metting-room/list?",
        method: "get"
    },
    //订单中心-订单详情
    "order-detail": {
        url: "/api/krspace-op-web/order/metting-room/detail?",
        method: "get"
    },

    //获取反结算信息
    "get-release": {
        url: "krspace-pay/bill/release?",
        method: "get"
    },
    //获取客户 客户名称搜索
    "get-customer": {
        url: "/zuul/user/customer/find-customers-data-sf",
     //   url: "krspace-finance-web/customer/my-customers?",
        method: "get"
    },
    //批量结算
    "batch-pay": {
        url: "krspace-pay/bill/batch-pay?",
        method: "post"
    },
    //获取账单列表
    "get-bill-list": {
        url: "krspace-pay/bill/list?",
        method: "get"
    },
    //账单结算
    "bill-pay": {
        url: "krspace-pay/bill/pay?",
        method: "post"
    },
    //账单结算查询
    "get-balance": {
        url: "krspace-pay/wallet/get-balance?",
        method: "get"
    },
    //账单详情
    "get-bill-detail": {
        url: "krspace-pay/bill/detail?",
        method: "get"
    },
    //回款列表
    "get-payment-list": {
        url: "/krspace-pay/payment/list?",
        method: "get"
    },
    //回款详情
    "get-payment-detail": {
        url: "/krspace-pay/payment/detail?",
        method: "get"
    },
    //绑定客户
    "payment-bind": {
        url: "/krspace-pay/payment/bind?",
        method: "post"
    },
    //账单中心--获取客户
    getCompanyInfo: {
        url: "/krspace-finance-web/member/csr-list?",
        method: "get"
    },
    //账单中心--收入管理--收入列表
    "get-income-list": {
        url: "/krspace-pay/income/list?",
        method: "get"
    },
    //账单中心--收入管理--收入详情
    "get-income-detail": {
        url: "/krspace-pay/income/detail?",
        method: "get"
    },
    //账单中心--收入管理--挂收入
    "add-income": {
        url: "/krspace-pay/income/add",
        method: "post"
    },
    //账单结算--反结算
    "bill-release": {
        url: "krspace-pay/bill/release",
        method: "post"
    },
    //本地联调测试接口
    "get-order-detail": {
        url: "/api/krspace-op-web/order-seat-add/show?",
        method: "get"
    },
    //计算合同租赁期限
    "contract-date-range": {
        url: "/api/krspace-op-web/finacontractdetail/contract-date-range?",
        method: "get"
    },
    //优惠选项communityId
    "sale-tactics": {
        // url: "/api/krspace-op-web/sale-tactics?",
        url: "/api/order/cmt/discount/sale-tactics?",
        method: "get"
    },
    //计算优惠
    "count-sale": {
        // url: "/api/krspace-op-web/count-order-sale",
        url: "/api/order/cmt/discount/count-order-sale",
        method: "post"
    },
    //获取可选择的续租工位
    "get-renew-station": {
        url: "/api/krspace-op-web/order-seat-detail/continue?",
        method: "get"
    },
    //获取可选择的减租工位
    "get-reduce-station": {
        url: "/api/krspace-op-web/order-seat-detail/reduce?",
        method: "get"
    },
    //入驻新建提交
    "save-join": {
        // url: "/ben/api/krspace-op-web/order-seat-add",
        url: "/api/op/order-seat-add",
        method: "post"
    },
    //续驻新建提交
    "save-renew": {
        url: "/api/krspace-op-web/order-seat-continue",
        method: "post"
    },
    "save-reduce": {
        url: "/api/krspace-op-web/order-seat-reduce",
        method: "post"
    },
    //计算工位服务费小计
    "get-station-amount": {
        url: "/api/krspace-op-web/order-seat-detail/amount",
        method: "post"
    },
    // 获取社区-楼层接口
    "get-community-floor": {
        url: "/api/krspace-op-web/order-seat/community-floor?",
        // url: '/mockjs/66/order-seat/community-floor?',
        method: "get"
    },
    //获取售货员List组件
    // "get-customer": {
    //     url: "/api/krspace-finance-web/customer/my-customers?",
    //     method: "get"
    // },
    "get-cancel-msg": {
        url: "/api/krspace-op-web/order/metting-room/cancel/msg?",
        method: "get"
    },
    // 获取社区-楼层接口
    "get-reduce-station-amount": {
        url: "/api/krspace-op-web/seat-reduce-amount?",
        method: "get"
    },

    // 出租方列表--组件
    "get-orporation-list": {
        url: "/api/krspace-op-web/order-seat/corporation-list",
        method: "get"
    },
    // 无押金--判断接口
    "get-seat-deposit-free": {
        url: "/api/krspace-op-web/seat-deposit-detail/free",
        method: "get"
    },
    // 换租列表
    "get-replace-list": {
        url: "/api/krspace-op-web/order-seat-replace/list",
        method: "get"
    },
    // 根据客户id获取社区列表
    "get-community-from-cusList": {
        url: "/api/krspace-op-web/cmt/community/cusList",
        method: "get"
    },
    // 获取可换租工位列表
    "get-order-seat": {
        url: "/api/krspace-op-web/order-seat-replace-detail/list",
        method: "get"
    },
    // 获取社区优惠信息接口
    "get-free-sale": {
        // url: "/api/krspace-op-web/cmt-free-sale",
        url: "/api/order/cmt/discount/cmt-free-sale",
        method: "get"
    },
    // step3->服务费明细(免租下列表)
    "get-seat-combin": {
        url: "/api/krspace-op-web/order-seat-detail/seat-combin",
        method: "post"
    },
    // 输入免租天数以后获取免租开始时间
    "get-free-start-date": {
        // url: "/api/krspace-op-web/free-start-date",
        url: "/api/order/cmt/discount/free-start-date",
        method: "post"
    },
    // step4->换租详情
    "get-seat-replace-detail": {
        url: "/api/krspace-op-web/order-seat-replace-detail/serviceFee",
        method: "post"
    },
    // 换租提交
    "save-replace": {
        url: "/api/krspace-op-web/order-seat-replace/add",
        method: "post"
    },
    // 编辑换租提交
    "save-edit-replace": {
        url: "/api/krspace-op-web/order-seat-replace/edit",
        method: "post"
    },
    //换租详情获取接口
    "get-replace-detail": {
        url: "/api/krspace-op-web/order-seat-replace/view",
        method: "get"
    },
    // 获取服务费明细
    "get-seat-combin-detail": {
        url: "/api/krspace-op-web/order-seat-detail/charge-detail",
        method: "post"
    }
};
