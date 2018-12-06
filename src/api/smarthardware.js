//公共的api
export default  {

    //图库管理--创建图库
    'create-tv-ad-storage': {
        url: '/api/iot-platform/tv-ad-storage/actions/create',
        method: 'post'
    },
    //图库管理--图库列表
    'get-tv-ad-storage-list': {
        url: '/api/iot-platform/tv-ad-storage/actions/list',
        method: 'get'
    },
    //图库管理--图库文件列表
    'get-tv-ad-storage-file-list': {
        url: '/api/iot-platform/tv-ad-storage-file/actions/list',
        method: 'get'
    },
    //图库管理--图片保存
    'save-pic': {
        url: '/api/iot-platform/tv-ad-storage-file/actions/create',
        method: 'post'
    },
    //图库管理--图片删除
    'delete-pic': {
        url: '/api/iot-platform/tv-ad-storage-file/actions/delete',
        method: 'delete'
    },
    //图库管理--社区下拉
    'get-select-items': {
        url: '/api/iot-platform/community/select-items',
        method: 'get'
    },
    //图库管理--获取上传文件令牌
    'get-upload-policy': {
        url: '/api/sso/common/upload-policy',
        method: 'get'
    },
    //图库管理--获取图库信息
    'get-tv-ad-storage-info': {
        url: '/api/iot-platform/tv-ad-storage/actions/find',
        method: 'get'
    },
    //空间管理--空间管理--删除空间
    'delete-basic-space': {
        url: '/api/sso/basic/space/actions/delete',
        method: 'delete'
    },
    //空间管理--空间管理--新增空间
    'create-actions-space': {
        url: '/api/sso/basic/space/actions/create',
        method: 'post'
    },
    //空间管理--空间管理--空间列表
    'get-space-actions-list': {
        url: '/api/sso/basic/space/actions/list',
        method: 'get'
    },
    //空间管理--空间管理--详情
    'get-space-edit-info': {
        url: '/api/sso/basic/space/edit-info',
        method: 'get'
    },
    //空间管理--空间管理--编辑空间
    'edit-actions-space': {
        url: '/api/sso/basic/space/actions/edit',
        method: 'post'
    },
     //空间管理--空间管理--添加子空间
     'add-children': {
        url: '/api/sso/basic/space/actions/add-children',
        method: 'post'
    },
     //空间管理--空间管理--移除子空间
     'remove-children': {
        url: '/api/sso/basic/space/actions/remove-children',
        method: 'post'
    },
    //空间管理--空间管理--社区下拉
    'get-space-community-list': {
        url: '/api/sso/basic/community/actions/list',
        method: 'get'
    },
    //空间管理--空间管理--获取楼层
    'get-space-floor': {
        url: '/api/krspace-finance-web/cmt/community/select/use/floor',
        method: 'get'
    },
    //开门记录
    'get-open-log-list': {
        url: '/api/iot-platform/door-open-log/list',
        method: 'get'
    },
    //通用字典
    'get-smart-hard-ware-dict': {
        url: '/api/iot-platform/dict/common',
        method: 'get'
    },
    //获取智能硬件权限所有人列表
    'get-smart-hardware-power-owner':{
        url: '/api/iot-platform/door-device/accessible-user',
        method: 'get'
    },

    //获取门禁设备详情二代
    'get-smart-hardware-door-device-detail':{
        url: '/api/iot-platform/door-device/detail',
        method: 'get'
    },
    //获取一代设备香型
    'get-smart-hardware-door-device-detail-v1':{
        url: '/api/iot-platform/door-device/v1/detail',
        method: 'get'
    },
    //刷新设备获取上报信息
    'get-smart-hardware-report-info':{
        url: '/api/iot-platform/door-device/admin/actions/refresh-reported-info',
        method: 'get'
    },


     //温湿度变化
     'temperaturehumiditymaplist':{
        url: '/api/iot-platform/device-status-log/list',
        method: 'get'
    },

    //获取公司列表数据
    'get-samrt-hard-company-list':{
        url: 'api/iot-platform/customer/select-items',
        method: 'get'
    },

    //生成一代门禁二维码
    'get-door-new-qr':{
        url: 'api/iot-platform/door-device/actions/generate-qr-code',
        method: 'get'
    },
    //升级记录
    'device-upgrade-log':{
        url: 'api/iot-platform/device-upgrade/log',
        method: 'get'
    },
    
    

  }

