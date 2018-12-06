export default {
  // 散座列表
  'get-kr-i-list': {
    url: '/api/op/krseat/inventory/list',
    method: 'get'
  },
  // 散座订单列表
  'get-kr-o-list': {
    url: '/api/op/krseat/order/list',
    method: 'get'
  },
  // 散座订单详情
  'get-kr-o-view': {
    url: '/api/op/krseat/order/view',
    method: 'get'
  },
  // 运营散座接待列表
  'get-kr-t-list': {
    url: '/api/op/krseat/ticket/list',
    method: 'get'
  },
  // 运营散座楼层
  'get-krmting-seat-community-floor': {
    url: '/api/op/krmting/mobile/community/cmt/floor',
    method: 'get'
  }
}