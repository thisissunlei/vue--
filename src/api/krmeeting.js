



export default {
    //会议状况
    'getkrmeetingstatus': {
        url: '/api/op/krmting/roomOrder/listStatus',
        method: 'get'
    },
    'get-kr-meeting-list': {
        url: '/api/op/krmting/roomOrder/list',
        method: 'get'
    },
    'get-kr-meeting-detail': {
        url: '/api/op/krmting/roomOrder/detail',
        method: 'get'
    },
    // 散座商品详情页
    'get-kr-meeting-seat-detail': {
        url: '/api/op/krseat/inventory/view',
        method: 'get'
    },
    // 散座商品详情页编辑提交
    'post-krseat-data': {
        url: '/api/op/krseat/inventory/edit',
        method: 'post'
    },
    // 散座商品设置30天价格
    'post-krseat-price-config': {
        url: '/api/op/krseat/inventory/initPriceCalander',
        method: 'post'
    },
    // 散座商品设置获取所有设备
    'get-all-devices': {
        url: '/api/op/krseat/inventory/getAllDevices',
        method: 'get'
    },
} 