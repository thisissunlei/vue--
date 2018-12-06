//公共的api
export default {
    //参数配置列表
    getParamList: {
        url: "/api/krspace-sso-web/sys-param/list?",
        method: "get"
    },
    //保存参数配置信息
    saveParamData: {
        url: "/api/krspace-sso-web/sys-param/save-edit?",
        method: "post"
    },
    //获取参数配置编辑信息
    getParamData: {
        url: "/api/krspace-sso-web/sys-param/show?",
        method: "get"
    },
    // 获取枚举类接口(参数名：enmuKey)
    "get-enmu-list": {
        url: "/api/krspace-sso-web/sys/enmu?",
        method: "get"
    },
    // 优惠列表接口
    "get-sale-list": {
        url: "/api/krspace-op-web/cmt-sale-tactics/list",
        method: "get"
    },
    // 优惠列表接口
    "get-discont-list": {
        url: "/api/order/cmt/discount/list",
        // url: "/ben/cmt/discount/list",
        method: "get"
    },
    //添加折扣配置
    "post-add-discount": {
        url: "/api/order/cmt/discount/add",
        // url: "/ben/cmt/discount/add",
        method: "post"
    },
    //获取级别权限类型
    "get-discount-rights": {
        url: "/api/order/cmt/discount/rights",
        // url: "/ben/cmt/discount/rights",
        method: "get"
    },
    "put-stop-discount": {
        url: "/api/order/cmt/discount/stop",
        // url: "/ben/cmt/discount/stop",
        method: "put"
    }
};
