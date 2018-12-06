// 金蝶数据同步
export default {
    //获取同步数据记录列表
    "king-getList": {
        url: "/ben/sync/listKdSyncDataByPage",
        method: "get"
    },
    //订单中心-订单作废
    "cancel-order": {
        url: "/ben/krspace-op-web/order/metting-room/cancel?",
        method: "post"
    },
    //获取同步类型列表
    "get-sync-data-type-list-enum": {
        url: "/ben/api/krspace-sso-web/sys/enmu",
        method: "get"
    },
    //新建同步
    'post-creat-sync-data':{
        url: "/ben/sync/addKdSyncData",
        method: "post"
    },
    //传输数据过滤
    'get-sync-income-data-list':{
        url: "/ben/sync/listKdSyncIncomeDataByPage",
        method: "post"
    },
    //传输数据过滤
    'get-sync-payment-data-list':{
        url: "/ben/sync/listKdSyncPaymentDataByPage",
        method: "post"
    },
    //同步所有
    'post-sync-income-data-ids':{
        url: "/ben/sync/startSyncIncomeDataAl",
        method: "post"
    },
    //同步所有
    'post-sync-payment-data-ids':{
        url: "/ben/sync/startSyncPaymentDataAll",
        method: "post"
    },
    //同步所有
    'post-sync-select-data-ids':{
        url: "/ben/sync/startSyncData",
        method: "post"
    },
    
};
