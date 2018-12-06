//公共的api
export default  {
    //app管理--管家设置--删除管家
    'delete-steward': {
        url: '/api/krspace-finance-web/cmt/steward/delete',
        method: 'post'
    },
    //app管理--管家设置--搜索会员列表
      'search-mbr-list': {
          url: '/api/krspace-finance-web/cmt/steward/search-mbr-list',
          method: 'get'
    },
    //app管理--管家设置--新增管家
    'create-steward': {
        url: '/api/krspace-finance-web/cmt/steward/create',
        method: 'post'
    },
    //app管理--管家设置--获取管家列表
    'get-steward-list': {
        url: '/api/krspace-finance-web/cmt/steward/list',
        method: 'get'
    },
    //app管理--管家设置--获取管家详情
   'get-steward-detail': {
        url: '/api/krspace-finance-web/cmt/steward/detail',
        method: 'get'
    },
    //app管理--管家设置--编辑管家
   'edit-steward': {
        url: '/api/krspace-finance-web/cmt/steward/edit',
        method: 'post'
    },
    //app管理--管家设置--根据会员ID查询会员信息
   'search-mbr': {
        url: '/api/krspace-finance-web/cmt/steward/search-mbr',
        method: 'get'
    },
    //app管理--Icon管理--列表
   'get-icon-list': {
        url: '/api/krspace-finance-web/app/icon/list',
        method: 'get'
    },
    //app管理--Icon管理--删除
   'delete-icon': {
        url: '/api/krspace-finance-web/app/icon/delete',
        method: 'post'
    },
    //app管理--Icon管理--新增
   'create-icon': {
        url: '/api/krspace-finance-web/app/icon/create',
        method: 'post'
    },
    //app管理--Icon管理--编辑
   'edit-icon': {
        url: '/api/krspace-finance-web/app/icon/edit',
        method: 'post'
    },
    //app管理--Icon管理--详情
   'get-icon-detail': {
        url: '/api/krspace-finance-web/app/icon/detail',
        method: 'get'
    },
    //app管理--Icon管理--icon位置
   'get-icon-location': {
        url: '/api/krspace-finance-web/app/icon/location/list',
        method: 'get'
    },
    //app管理--推送管理--推送列表
   'get-app-push-page': {
        url: '/api/krspace-finance-web/app/push/page',
        method: 'get'
    },
    //app管理--推送管理--推送详情
    'get-app-push-detail': {
        url: '/api/krspace-finance-web/app/push/detail',
        method: 'get'
    },
    //app管理--推送管理--新建推送
    'create-app-push': {
        url: '/api/krspace-finance-web/app/push/create',
        method: 'post'
    },
    //app管理--推送管理--根据活动标题查询活动
    'get-title-list': {
        url: '/api/krspace-finance-web/activity/management/title/list',
        method: 'get'
    },
    //app管理--推送管理--社区列表
    'get-community-new-list': {
        url: '/api/krspace-finance-web/cmt/community/new/list',
        method: 'get'
    },
     //app管理--通知管理--通知列表
     'get-notification-page': {
        url: '/api/krspace-finance-web/app/notification/page',
        method: 'get'
    },
     //app管理--通知管理--详情
     'get-notification-detail': {
        url: '/api/krspace-finance-web/app/notification/detail',
        method: 'get'
    },
     //app管理--通知管理--新建通知
     'create-notification': {
        url: '/api/krspace-finance-web/app/notification/create',
        method: 'post'
    },
     //app管理--通知管理--编辑通知
     'edit-notification': {
        url: '/api/krspace-finance-web/app/notification/edit',
        method: 'post'
    },
    //app管理--通知管理--删除通知
    'delete-notification': {
        url: '/api/krspace-finance-web/app/notification/delete',
        method: 'post'
    },
     //app管理--通知管理--上传图片
     'upload-app-push': {
        url: '/api/krspace-finance-web/app/push/upload',
        method: 'post'
    },
    //app管理--通知管理--获取通知目标数
    'get-target-count': {
        url: '/api/krspace-finance-web/app/notification/target-count',
        method: 'get'
    },
    //app管理--会员福利--福利分页
    'get-coupon-page': {
        url: '/api/krspace-finance-web/coupon/page',
        method: 'get'
    },
    //app管理--会员福利--福利详情
    'get-coupon-detail': {
        url: '/api/krspace-finance-web/coupon/detail',
        method: 'get'
    },
    //app管理--会员福利--新建福利
    'create-coupon': {
        url: '/api/krspace-finance-web/coupon/create',
        method: 'post'
    },
    //app管理--会员福利--新建标签
    'create-tag': {
        url: '/api/krspace-finance-web/coupon/tag/create',
        method: 'post'
    },
    //app管理--会员福利--入驻城市列表
    'coupon-city-list': {
        url: '/api/krspace-finance-web/coupon/city-list',
        method: 'get'
    },
    //app管理--会员福利--下线福利
    'coupon-offline': {
        url: '/api/krspace-finance-web/coupon/offline',
        method: 'post'
    },
    //app管理--会员福利--编辑福利
    'edit-coupon': {
        url: '/api/krspace-finance-web/coupon/edit',
        method: 'post'
    },
    //app管理--会员福利--获取福利类型和范围
    'get-city-and-type': {
        url: '/api/krspace-finance-web/coupon/city-and-type',
        method: 'get'
    },
     //app管理--产品运营主页--app用户活跃情况分页
     'get-app-operation-online-data': {
        url: '/api/krspace-op-web/app/operation/online-data',
        method: 'get'
    },
    //app管理--产品运营主页--会员7天线上化率
    'get-app-operation-use-rate': {
        url: '/api/krspace-op-web/app/operation/use-rate',
        method: 'get'
    },
    //app管理--产品运营主页--活动情况
    'get-app-operation-activity-data': {
        url: '/api/krspace-op-web/app/operation/activity-data',
        method: 'get'
    },
    'get-community-list': {
        url: '/api/krspace-finance-web/operation/city-cmt-list',
        method: 'get'
    },
    // 获取一级来源
    'get-channleType-list': {
        url: '/api/order/csr-clue/channleType',
        method: 'get'
    },
    // 获取二级来源
    'get-csrsource-list': {
        url: '/api/order/csr-clue/csrsource',
        method: 'get'
    },
    //拜访美剧
    'get-visitstatus-list': {
        url: '/api/order/csr-clue/visitstatus',
        method: 'get'
    },
    //预约参观列表
    'get-csr-clue-list': {
        url: '/api/order/csr-clue/list',
        method: 'get'
    },
    // 新建预约
    'save-csr-clue': {
        url: '/api/order/csr-clue/save',
        method: 'post'
    },
    // 删除预约
    'delete-csr-clue': {
        url: '/api/order/csr-clue/delete',
        method: 'post'
    },
    'impot-csr-clue': {
        url: '/api/order/csr-clue/impot',
        method: 'post'
    },
    //会员七天线上化--会员线上化率
    'get-operation-community-use-rate': {
        url: '/api/krspace-op-web/app/operation/community/use-rate',
        method: 'get'
    },
    //优惠券--优惠券列表
    'get-coupon-base-by-page': {
        url: '/api/op/kmcoupon/coupon-base-by-page',
        method: 'get'
    },
     //优惠券--新增或修改
     'save-or-edit': {
        url: '/api/op/kmcoupon/save-or-edit',
        method: 'post'
    },
    //优惠券--生成优惠券
   'create-coupon-kmcoupon': {
        url: '/api/op/kmcoupon/create-coupon',
        method: 'post'
    },
     //优惠券--获取优惠券详情
    'get-kmcoupon-detail': {
        url: '/api/op/kmcoupon/detail',
        method: 'get'
    },
     //福利--查询所有标签
     'get-coupon/tag-list': {
        url: '/api/krspace-finance-web/coupon/tag-list',
        method: 'get'
    },
    //优惠券发放--发放分页
    'get-kmcoupon-provide-page': {
        url: '/api/op/kmcoupon/provide/page-list',
        method: 'get'
    },
     //优惠券发放--新建发放
     'kmcoupon-provide-add': {
        url: '/api/op/kmcoupon/provide/add',
        method: 'post'
    },
     //优惠券发放--编辑发放
     'kmcoupon-provide-edit': {
        url: '/api/op/kmcoupon/provide/edit',
        method: 'post'
    },
     //优惠券发放--发放详情
     'get-kmcoupon-provide-detail': {
        url: '/api/op/kmcoupon/provide/detail',
        method: 'get'
    },
     //优惠券发放--删除发放记录
     'delete-op-kmcoupon-provide': {
        url: '/api/op/kmcoupon/provide/delete',
        method: 'post'
    },
    //优惠券发放--根据批次获取优惠券
    'get-kmcoupon-detail-by-batchNo': {
        url: '/api/op/kmcoupon/detail-by-batchNo',
        method: 'get'
    },
    
   
}
  