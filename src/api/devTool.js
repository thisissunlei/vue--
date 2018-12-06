//

//公共的api
export default {
    //参数配置列表
    "get-validate-list": {
        url: "/api/krspace-op-web/validate/list",
        // url: '/ben/validate/list',
        method: "get"
    },
    //获取所有客户
    "get-customer-manage": {
        url: "/api/krspace-op-web/member/csr-default-list",
        // url: "ben/member/csr-default-list",
        method: "get"
    },
     //运维工具数据获取
     "get-operations-list": {
        url: "/api/krspace-sso-web/sso/tool/quicknav/list",
        // url: "ben/member/csr-default-list",
        method: "get"
    },
    
};
