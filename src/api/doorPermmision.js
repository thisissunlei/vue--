//门禁权限api
export default  {

    //获取子集列表
    'get-son-group-list': {
        url: '/api/iot-platform/auth-group/child-list',
        method: 'get'
    },
    //删除父子组之间的关系
    'delete-father-son-relation':{
        
        url : '/api/iot-platform/auth-group-relation/actions/delete',
        method: 'post'
    },

    'get-father-group-list':{
        url: '/api/iot-platform/auth-group/parent-list',
        method: 'get'
    },
     //门禁权限组列表
     'get-door-group-list':{
        url: '/api/iot-platform/auth/user-group/list',
        method: 'get'
    },
    //门禁权限组列表
    'get-door-group-list':{
        url: '/api/iot-platform/auth/user-group/list',
        method: 'get'
    },
    //添加子集组
    'add-son-group-to-father':{
        url: '/api/iot-platform/auth-group/actions/add-children',
        method: 'post'
    },
    //添加父级组
    'add-father-group-to-son':{
        url: '/api/iot-platform/auth-group/actions/add-parent',
        method: 'post'
    },
    //门禁权限组的权限拥有人
    'get-door-permmsion-owner-member':{
        url: '/api/iot-platform/auth/user-group/user/list',
        method: 'get'
    },
    //获取会员列表
    'get-member-list':{
        url: '/api/sso/user/list',
        method: 'get'
    },
    //将会员添加到门禁权限组
    'add-member-permmision-to-group':{
        url: '/api/iot-platform/auth/user-group-mapping/add',
        method: 'post'
    }, 
    //将会员从门禁权限组删除
    'delete-member-permmision-from-group':{
        url: '/api/iot-platform/auth/user-group-mapping/delete',
        method: 'post'
    }, 
    //获取智能硬件通用字典
    'get-smart-hard-dict':{
        url: '/api/iot-platform/dict/common',
        method: 'get'
    }, 

    //获取组授权的设备
    'get-device-in-group':{
        url: '/api/iot-platform/auth/device-grant/list',
        method: 'get'
    }, 
    //将设备授权给某个组
    'add-device-to-group':{
        url: '/api/iot-platform/auth/device-grant/add',
        method: 'post'
    }, 
    //从设备组中删除设备
    'delete-device-from-group':{
        url: '/api/iot-platform/auth/device-grant/delete',
        method: 'post'
    }, 
    

  }

