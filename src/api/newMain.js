//新官网的api
module.exports = {
    //设施标签列表
    'get-facility-list': {
        url: '/api/krspace-op-web/cmt-brightpoints-lable/list',
        method: 'get'
    }, 
    //设施标签新建
    'post-facility-save': {
        url: '/api/krspace-op-web/cmt-brightpoints-lable/saveoredit',
        method: 'post'
    },
    //设施标签删除
    'post-facility-del': {
        url: '/api/krspace-op-web/cmt-brightpoints-lable/delete',
        method: 'post'
    },
    //设施标签类目下拉
    'get-facility-type': {
        url: '/api/krspace-op-web/cmt-brightpoints-lable/typestatus',
        method: 'get'
    },
    //设施标签详情
    'get-facility-detail': {
        url: '/api/krspace-op-web/cmt-brightpoints-lable/show',
        method: 'get'
    },
}
