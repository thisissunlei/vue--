//公共的api
export default  {
    //每日库存列表+查询
    'newCreateDoorRelationship': {
        url: '/api/iot-platform/door-set/actions/create',
        method: 'post'
    },
    'getDoorRelationshipData': {
        url: '/api/iot-platform/door-set/relation-map',
        method: 'get'
    },
    'editDoorRelationshipData': {
        url: '/api/iot-platform/door-set/actions/edit',
        method: 'post'
    },
    'newCreateDoorGroupConnect': {
        url: '/api/iot-platform/door-set/actions/create-relation',
        method: 'post'
    },
    'deleteLinkConnect': {
        url: '/api/iot-platform/door-set/actions/delete-relation',
        method: 'delete'
    },
    'deleteDoorGroupInRelation':{
        url : '/api/iot-platform/door-set/actions/delete',
        method: 'delete'
    },
    'getFloorOptions':{
        url :'/api/krspace-finance-web/cmt/community/select/use/floor',
        method: 'get'
    },
    'getDoorListByGroup':{
        url :'/api/iot-platform/door-set/door/list',
        method: 'get'
    },
    'getAllEquipmentList':{
        url :'/api/iot-platform/door-device/select-items',
        method: 'get'
    },
    'addEquipmentToGroup':{
        url :'/api/iot-platform/door-set/actions/add-door',
        method: 'post'
    },
    'deleteEquipmentFromGroup':{
        url :'/api/iot-platform/door-set/actions/remove-door',
        method: 'delete'
    },

    'getGroupByEquipmentDetailInfo':{
        url :'/api/iot-platform/door-set/actions/search',
        method: 'get'
    },

    'getBasicDataDoorType':{
        url :'/api/sso/sys/enmu',
        method: 'get'
    },
    // ?enmuKey=com.krspace.iot.platform.api.enums.door.DoorType
    
    
  }
  