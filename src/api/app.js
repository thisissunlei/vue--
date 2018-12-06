//app配置
export default  {
    //投票结果
    'get-app-console-talkpoint-poll-detail': {
        url: '/api/krspace-op-web/app/console/talkpoint/poll/detail',
        method: 'get'
    },
    //话题分页
    'get-app-console-talkpoint-page': {
        url: '/api/krspace-op-web/app/console/talkpoint/page',
        method: 'get'
    },
    //删除话题
    'delete-app-console-talkpoint': {
        url: '/api/krspace-op-web/app/console/talkpoint/delete',
        method: 'post'
    },
    //话题置顶
    'app-console-talkpoint-stick': {
        url: '/api/krspace-op-web/app/console/talkpoint/stick',
        method: 'post'
    },
    //取消置顶
    'app-console-talkpoint-cancel-stick': {
        url: '/api/krspace-op-web/app/console/talkpoint/cancel-stick',
        method: 'post'
    },
    //通知、推送新的社区接口
    'get-app-cmt-community-limit-list': {
        url: '/api/krspace-finance-web/cmt/community/limit/list',
        method: 'get'
    },

}
