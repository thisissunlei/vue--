//项目管理api
module.exports = {
  //项目管理－新建任务
  'project-add-task': {
   url: '/api/pm/task/actions/add',
   method: 'post'
 },
 //任务名称唯一性校验
 'project-name-check': {
   url: '/api/pm/task/unique',
   method: 'get'
 },
 //项目管理－编辑任务
 'project-edit-task': {
   url: '/api/pm/task/actions/edit',
   method: 'post'
 },
 //项目管理－删除任务
 'project-delete-task': {
   url: '/api/pm/task/actions/delete',
   method: 'delete'
 },
 //项目管理－查询任务
 'project-get-task': {
   url: '/api/pm/task/detail',
   method: 'get'
 },
 //项目管理－查询任务列表
 'project-list-task': {
   url: '/api/pm/task/list',
   method: 'get'
 },
 //项目管理－项目进度列表
 'project-progress-list': {
   url: '/api/pm/project/list/type/schedule',
   method: 'get'
 },
  //项目管理－根据项目状态类型查询甘特图显示任务项
  'project-status-search': {
   url: '/api/pm/task-template/list',
   method: 'get'
 },
 //项目档案管理列表
 'project-archives-list': {
   url: '/api/pm/project/list/type/dashboard',
   method: 'get'
 },
 //项目档案管理列表-新增项目
 'project-archives-add': {
   url: '/api/pm/project/actions/save',
   method: 'post'
 },
 //确定签署合同（项目进入待开业期）
 'sure-sign-project': {
   url: '/api/pm/project/actions/signed',
   method: 'post'
 },
 //项目详情星星
 'project-detail-star': {
   url: '/api/pm/task/actions/focus',
   method: 'post'
 },
 //根据项目id查询甘特图显示任务项
 'project-id-search': {
   url: '/api/pm/task/tree',
   method: 'get'
 },
 //项目管理-档案管理-档案树部
 'project－archives-tree': {
   url:'/api/pm/form-group/list/type/tree',
   method: 'get'
 },
 //项目管理-档案管理-字段部分详情
 'project－archives-file-detail': {
   url:'/api/pm/form-field/list/type/code',
   method: 'get'
 },
 //项目管理-档案管理-字段部分详情
 'project－archives-file-detail-write': {
   url:'/api/pm/form-field/list/type/code/write',
   method: 'get'
 },
 //项目管理-档案管理-获取字段编辑记录
 'project－field-record': {
   url:'/api/pm/operate-log/list/type/field',
   method: 'get'
 },
  //项目管理-档案管理-获取字段编辑记录
  'project－field-edit': {
   url:'/api/pm/project/actions/edit',
   method: 'post'
 },
 //项目管理-项目档案-查看首页列表
 'get-project-home': {
   url:'/api/pm/project/home',
   method: 'get'
 },
  //项目管理-项目档案-项目任务
  'get-task-template-list': {
   url:'/api/pm/task-template/list',
   method: 'get'
 },
 //根据父级ID查询子级任务列表
 'parent-search-kid': {
   url: '/api/krspace-pm-web/pm/task/sub-list',
   method: 'get'
 },
 //查看编辑记录
 'watch-edit-record': {
   url: '/api/pm/operate-log/list/type/project',
   method: 'get'
 },
  //获取城市
 'get-task-city-data': {
   url: '/api/pm/project/activeCities',
   method: 'get'
 },
 'delete-project-setting':{
   url:'/api/pm/project/actions/delete',
   method:'delete'
 },
 'get-delete-permission':{
   url:'/api/pm/project/permission-check',
   method:'get'
 }


}
