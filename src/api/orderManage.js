//订单管理-订单接口
export default {
    //入驻订单列表
    "join-bill-list": {
        url: "/api/krspace-op-web/order-seat-add/list",
        method: "get"
    },
    //入驻减租订单列表-获取社区
    "join-bill-community": {
        url: "/api/krspace-finance-web/cmt/community/select/use/type/list",
        method: "get"
    },
    //减租订单列表
    "reduce-bill-list": {
        url: "/api/krspace-op-web/order-seat-reduce/list",
        method: "get"
    },
    //入驻订单列表－详情
    "join-bill-detail": {
        // url: "/api/krspace-op-web/order-seat-add/show",
        url: "/api/op/order-seat-add/show",
        method: "get"
    },
    //减租订单列表－详情
    "reduce-bill-detail": {
        url: "/api/krspace-op-web/order-seat-reduce/show",
        method: "get"
    },
    //入驻减租订单列表－作废
    "join-nullify": {
        // url: "/api/krspace-op-web/order-seat/orderStatus",
        url: "/api/op/order-seat/orderStatus",
        method: "post"
    },
    //入驻减租高级查询－下拉
    "order-pay-list": {
        url: "/api/krspace-op-web/order-seat/data",
        method: "get"
    },
    //申请合同
    "apply-contract": {
        url: "/api/krspace-op-web/order-seat/contractApply",
        method: "get"
    },
    //通用订单列表
    "general-order-list": {
        url: "/api/krspace-finance-web/order/common/search",
        method: "get"
    },
    //新建通用订单
    "general-order-add": {
        url: "/api/krspace-finance-web/order/common/add",
        method: "post"
    },
    //编辑通用订单
    "general-order-edit": {
        url: "/api/krspace-finance-web/order/common/update",
        method: "post"
    },
    //查看通用订单
    "general-order-watch": {
        url: "/api/krspace-finance-web/order/common/getDetails",
        method: "get"
    },
    //作废通用订单
    "general-order-nullify": {
        url: "/api/krspace-finance-web/order/common/cancel",
        method: "post"
    },
    //通用订单类型枚举列表
    "general-common-list": {
        url: "/api/krspace-finance-web/order/common/getOrderTypeListAllBy",
        method: "get"
    },
    //通用订单费用明细枚举列表
    "general-cost-list": {
        url: "/api/krspace-finance-web/order/common/getFeeTypeListBy",
        method: "get"
    },
    //订单合同是否首付款
    "order-first-payed": {
        url: "/api/krspace-finance-web/order-seat/check-order-payed",
        method: "get"
    },

    // //订单合同是否首付款
    // "order-first-payed": {
    //     url: "/api/krspace-op-web/order-seat/orderStatus",
    //     method: "get"
    // }
    //苏岭添加开始
    //下单页面查询主管理员
    "order-search-manager": {
        url: "/api/krspace-op-web/customer/manager/order/user",
        method: "get"
    },
    //保存：保存变更的主管理员数据
    "store-change-manager": {
        url: "/api/krspace-op-web/customer/manager/order/user",
        method: "post"
    },
    //搜索：手机号查询会员
    "search-phone-member": {
        url: "/api/krspace-op-web/customer/manager/user/phone",
        method: "get"
    },
    //根据订单id获取合同编号
    "get-order-seat-serial-number": {
        url: "/api/krspace-op-web/order-seat/contract-no",
        method: "get"
    }
    
};
