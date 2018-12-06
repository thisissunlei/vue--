//订单管理-合同管理api
export default {

    //获取合同配置列表
    'get-contract-config-list': {
        url: '/api/order/contract/config/list',
    },
    //获取模版类型枚举数据
    'get-contract-config-tpltype': {
        url: '/api/order/contract/config/get-tpltype',

    },
    //发布模版
    'get-contract-config-publish': {
        url: '/api/order/contract/config/publish',

    },
    //保存模版,保存成功后返回ID
    'post-contract-config-save': {
        url: '/api/order/contract/config/save',

    },
    //查看或者跳转编辑模版
    'get-contract-config-view-data': {
        url: '/api/order/contract/config/view-data',

    },
    //pdf预览模版
    'get-contract-config-view-pdf': {
        url: '/api/order/contract/config/view-pdf',
    },
}
