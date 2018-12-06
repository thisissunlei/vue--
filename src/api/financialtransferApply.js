//客户资金转移申请接口

export default {
    //获取资金申请处理状态枚举
    "get-apply-state-enum": {
        url: "/api/krspace-sso-web/sys/enmu",
        method: "get"
    },
    //获取操作类型
    "get-operate-type-enum": {
        url: "/api/krspace-sso-web/sys/enmu",
        method: "get"
    },
    //获取操作款项
    "get-money-type-enum": {
        url: "/api/krspace-sso-web/sys/enmu",
        method: "get"
    },

    //获取申请列表
    "get-apply-list": {
        // url: "/ben/transfer/list?",
        url: "/api/krspace-pay/transfer/list?",
        method: "get"
    },
    //获取操作款项
    "get-cmts-customerid": {
        // url: "/ben/transfer/getTransferCmts?",
        url: "/api/krspace-pay/transfer/getTransferCmts?",
        method: "get"
    },
    //获取最大转移金额
    "get-max-amount": {
        // url: "/api/krspace-pay/transfer/max-amount-fee",
        url: "/api/krspace-pay/transfer/max-amount-fee",
        method: "get"
    },
    //获取申请详情
    "get-apply-info-id": {
        // url: "/ben/transfer/view",
        url: "/api/krspace-pay/transfer/view",
        method: "get"
    },
    //提交申请
    "get-apply-submit": {
        // url: "/ben/transfer/submit",
        url: "/api/krspace-pay/transfer/submit",
        method: "post"
    },
    //同意申请
    "get-apply-approve": {
        // url: "/ben/transfer/agree-apply",
        url: "/api/krspace-pay/transfer/agree-apply",
        method: "post"
    },
    //退回申请
    "get-apply-reject": {
        // url: "/ben/transfer/refund-apply",
        url: "/api/krspace-pay/transfer/refund-apply",
        method: "post"
    },
    //删除申请
    "get-apply-delete": {
        // url: "/ben/transfer/delete",
        url: "/api/krspace-pay/transfer/delete",
        method: "delete"
    },
    //获取客户
    "get-customer-financialtransfer": {
        url: "api/krspace-op-web/customer/v/my-customers?",
        method: "get"
    },

    //获取客户社区列表
    "get-fee-communitys": {
        url: "/api/krspace-op-web/seat-installment/cmt-list",
        method: "get"
    },

    //获取客户费用汇总列表
    "get-fee-overivew-list": {
        url: "/api/krspace-op-web/seat-installment/fee-list",
        method: "get"
    },
    //获取工位费用列表
    "get-seat-fee-list": {
        url: "/api/krspace-op-web/seat-installment/seat-fee-list",
        method: "get"
    },
};
