// 金蝶数据同步
export default {
    //获取同步数据记录列表
    "king-getList": {
        url: "/api/sync/listKdSyncDataByPage",
        method: "get"
    },
    //订单中心-订单作废
    "cancel-order": {
        url: "/api/krspace-op-web/order/metting-room/cancel?",
        method: "post"
    },
    //获取同步类型列表
    "get-sync-data-type-list-enum": {
        url: "/api/api/krspace-sso-web/sys/enmu",
        method: "get"
    },
    //新建同步
    "post-creat-sync-data": {
        url: "/api/sync/addKdSyncData",
        method: "post"
    },
    //传输数据过滤
    "get-sync-income-data-list": {
        url: "/api/sync/listKdSyncIncomeDataByPage",
        method: "post"
    },
    //传输数据过滤
    "get-sync-payment-data-list": {
        url: "/api/sync/listKdSyncPaymentDataByPage",
        method: "post"
    },
    //金蝶数据同步详情页
    getKingDeeDetail: {
        url: "/api/sync/findSyncDataDetailById",
        method: "get"
    },
    //原始应收数据
    getOriginalAccountsData: {
        url: "/api/sync/listKdDataDetail1",
        method: "get"
    },
    //原始传输数据
    getOriginalReceivableData: {
        url: "/api/sync/listKdDataDetail2",
        method: "get"
    },
    //传输数据应收数据
    getTransmissionAccountsData: {
        url: "/api/sync/listKdSendData1",
        method: "get"
    },
    //传输数据回款数据
    getTransmissionReceivableData: {
        url: "/api/sync/listKdSendData2",
        method: "get"
    },
    //传输数据过滤
    "get-sync-income-data-list": {
        url: "/api/sync/listKdSyncIncomeDataByPage",
        method: "post"
    },
    //传输数据过滤
    "get-sync-payment-data-list": {
        url: "/api/sync/listKdSyncPaymentDataByPage",
        method: "post"
    },
    //同步所有
    "post-sync-income-data-ids": {
        url: "/api/sync/startSyncIncomeDataAll",
        method: "post"
    },
    //同步所有
    "post-sync-payment-data-ids": {
        url: "/api/sync/startSyncPaymentDataAll",
        method: "post"
    },
    //同步所有
    "post-sync-select-data-ids": {
        url: "/api/sync/startSyncData",
        method: "post"
    },
    //检测是否接受  
    "get-sync-findSyncStatus-loop":{
        url: "/api/sync/findSyncStatus",
        method: "get"
    },
    // 应收数据统计    
    "get-sync-prepaid-settlement":{
        url: "/api/sync/listIncomeStatisticByPage",
        method: "get"
    },
     // 回款数据统计    
     "get-sync-received-settlement":{
        url: "/api/sync/listPaymentStatisticByPage",
        method: "get"
    },
    // 枚举费用类型     
    "get-enum-sync-feetype":{
        url: "/api/sync/enumsMap/sync/FeeType",
        method: "get"
    },
    // 枚举付款方式    
    "get-enum-sync-PayWay":{
        url: "/api/sync/enumsMap/sync/PayWay",
        method: "get"
    },
    // 枚举主体性质 
    "get-enum-sync-NatureType":{
        url: "/api/sync/enumsMap/sync/TaxNatureType",
        method: "get"
    },
};
