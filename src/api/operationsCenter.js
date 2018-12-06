//公共的api
export default {
    'get-from-field-list': {
        url: '/api/krspace-op-web/csr-with-drawal/list',
        method: 'get'
    },
    'get-from-field-view': {
        url: '/api/krspace-op-web/csr-with-drawal/show',
        method: 'get'
    },
    'get-from-field-status': {
        url: '/api/krspace-op-web/csr-with-drawal/status',
        method: 'get'
    },
    //作废
    'post-from-field-invalid': {
        url: '/api/krspace-op-web/csr-with-drawal/updateStatus',
        method: 'get'
    },
    //获取客户
    'get-from-field-customer': {
        url: '/api/krspace-op-web/csr-with-drawal/getCsrNames',
        method: 'get'
    },
    //是否可以创建离场
    'post-create-from-field': {
        url: '/api/krspace-op-web/csr-with-drawal/judge',
        method: 'post'
    },
    //新建撤场
    'post-from-field-newpage': {
        url: '/api/krspace-op-web/csr-with-drawal/save',
        method: 'post'
    }
   
}
