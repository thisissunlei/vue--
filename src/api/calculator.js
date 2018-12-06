//官网计算机配置
export default  {
    //列表
    'get-calculator-list': {
        url: '/api/krspace-finance-web/cmt-cbd-detail/list',
        method: 'get'
    },
    //获取城市
    'get-calculator-city': {
        url: '/api/krspace-finance-web/cmt-cbd-detail/getcity',
        method: 'get'
    },
    //获取城市社区
    'get-calculator-community': {
        url: '/api/krspace-finance-web/cmt-cbd-detail/getcmt',
        method: 'get'
    },
    //新建计算器
    'post-calculator-new': {
        url: '/api/krspace-finance-web/cmt-cbd-detail/saveoredit',
        method: 'post'
    },
    //删除计算器
    'get-calculator-delete': {
        url: '/api/krspace-finance-web/cmt-cbd-detail/delete',
        method: 'post'
    },

}
