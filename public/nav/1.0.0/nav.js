(function (global) {
  var isHanderListen = false;
  var productTypeList = [
    {
      name: 'admin',
      value: 'admin'
    },
    {
      name: 'vue',
      value: 'vue'
    },
    {
      name: 'member',
      value: 'member'
    },
    {
      name: 'project',
      value: 'project'
    },
    {
      name: 'product',
      value: 'product'
    },
    {
      name: 'admin-applet',
      value: 'admin-applet'
    },
    {
      name: 'admin-finance',
      value: 'admin-finance'
    },
    {
      name: 'admin-app-probe',
      value: 'admin-app-probe'
    },
    {
      name: 'admin-client-web',
      value: 'admin-client-web'
    }
  ];

  var navUtils = {
    activeData: [],
    isHome: false,
    closeRoutrs: [''],
    strDelNum: function (str) {
    },

    activeHander: '',
    user: {},
    navs: [],
    navNum: 8,
    bodyDom: '',
    contentDom: '',
    menuBtnBacks: []
  }

  //侧栏按钮
  var menuId = 'j_menu_btn' + Math.round(Math.random() * 10);
  //loading
  var navId = 'j_nav_loading' + Math.round(Math.random() * 10);
  //等多按钮
  var moreId = 'j_more' + Math.round(Math.random() * 10);
  //侧栏
  var sidebarId = 'j_sidebar' + Math.round(Math.random() * 10);
  var loddingId = 'j_lodding' + Math.round(Math.random() * 10);
  //用户更多信息
  var accountBtnId = 'j_account_btn' + Math.round(Math.random() * 10);
  //
  var accountBoxId = 'j_account_box' + Math.round(Math.random() * 10);
  var exitBtnId = 'j_exit_btn' + Math.round(Math.random() * 10);
  var maskId = 'j_detail_mask' + Math.round(Math.random() * 10);
  var headerId = 'j_hander' + Math.round(Math.random() * 10);
  var messageId = 'j_message' + Math.round(Math.random() * 10);
  var closeButton = 'j_close_button' + Math.round(Math.random() * 10);

  if (typeof (Storage) !== "undefined") {

    if (sessionStorage.user && sessionStorage.navs) {
      navUtils.navs = JSON.parse(sessionStorage.navs);
      navUtils.user = JSON.parse(sessionStorage.user);
      navUtils.navNum = sessionStorage.navNum;
    }
    sessionStorage.navNum = navUtils.navNum;
  }
  //loadding代码
  function setLoadding() {
    if (location.href.indexOf('/#/') != -1 || location.href.indexOf('/new/') != -1 || location.href.indexOf('login.html') != -1) {
      return;
    }
    var regId = /(id=")((?!").)+(")/g;
    var regId2 = /(id = ")((?!").)+(")/g;
    if (document.body) {
      var varcreateDiv = document.createElement("div");
      varcreateDiv.id = loddingId;
      varcreateDiv.className = 'j-nav-lodding';
      var value = routerRefresh()
      value = value.replace(regId, function (val) {

        return '';
      })
      value = value.replace(regId2, function (val) {

        return '';
      })

      varcreateDiv.innerHTML = '<div class="j-nav-lodding-bar"></div>' + value;


      document.body.appendChild(varcreateDiv);

      return;
    }
    setTimeout(function () {
      setLoadding()
    }, 30)
  }

  setBrightRouter();
  setLoadding();
  // return ;
  function getNginxType(type) {

    if (type == 'admin-product') {
      return 'product';
    }
    if (type == 'new') {
      return 'admin';
    }
    return type;
  }
  function setBrightRouter() {

    var reg = /\[[^\[\]]+\]/g;
    var nowType = '', nowPath = '';
    var nowHref = location.href.split('?')[0];
    nowPath = nowHref.split('krspace.cn')[1];
    nowPath = nowPath.replace(':' + location.port, '');
    if (nowPath.indexOf('#') == -1) {
      nowType = 'vue';

    } else {
      nowType = nowPath.split("#")[0].replace(/\//g, '');
      nowPath = nowPath.split('#')[1];
    }
    var value = JSON.stringify(navUtils.navs);
    var nowPathHave = false;

    value = value.replace(reg, function (val) {
      var activeData = JSON.parse(val);
      for (var i = 0; i < activeData.length; i++) {
        var element = activeData[i];
        if (element.url == nowPath && element.projectType == getNginxType(nowType)) {
          nowPathHave = true;
        }
      }
    })
    if (nowPathHave) {

      localStorage.setItem('brightRouter', JSON.stringify({
        type: nowType,
        url: nowType == 'vue' ? nowPath : '/' + nowType + '/#' + nowPath,
        path: nowPath,
        navType: getNginxType(nowType)
      }))
    }

  }
  //获取url
  function getRouter() {
    var router = location.href.split('?')[0];
    return router;
  }
  //设置跳转路径
  function setHref(type, router) {
    var href = '';
    var alias = '/new/#';
    var hostname = location.hostname;
    var port = location.port || '';
    if (router.indexOf("https://") != -1 || router.indexOf("http://") != -1) {
      return router;
    }
    if (port) {
      port = ":" + port;
    }
    if (type && type == 'admin') {
      alias = '/new/#'
    }
    if (type && type == "vue") {
      alias = '';
    }
    if (type && type == 'project') {
      alias = '/project/#'
    }
    if (type && type == 'product') {
      alias = '/admin-product/#'
    }
    if (type && type == 'admin-finance') {
      alias = '/admin-finance/#'
    }
    if (type && type == 'admin-applet') {
      alias = '/admin-applet/#'
    }
    if (type && type == 'admin-client-web') {
      alias = '/admin-client-web/#'
    }
    if (type && type == "member") {
      alias = '/';
      hostname = 'memberadmin.krspace.cn';
      href = location.protocol + "//" + hostname + port + alias + router;
      return href;
    }
    if (type && type == 'admin-app-probe') {
      alias = '/admin-app-probe/#'
    }
    setBrightRouter();
    return alias + router;
  }
  function setDefaultHeader(value) {
    setTimeout(function () {
      var j_li = document.getElementsByName(value)[0];
      if (j_li) {
        j_li.setAttribute("class", "active");
      } else {
        return
      }
    }, 1000)

  }
  //获取侧边栏里的数据
  function getClickNav(arr, str) {

    var brightRouter = JSON.parse(localStorage.getItem("brightRouter"));
    if (!brightRouter) {
      var nowType = '', nowPath = '';
      var nowHref = location.href.split('?')[0];
      nowPath = nowHref.split('krspace.cn')[1];
      nowPath = nowPath.replace(':' + location.port, '');
      if (nowPath.indexOf('#') == -1) {
        nowType = 'vue';
      } else {
        nowType = nowPath.split("#")[0].replace(/\//g, '');
        nowPath = nowPath.split('#')[1];
      }

      localStorage = {
        type: nowType,
        url: nowType == 'vue' ? nowPath : '/' + nowType + '/#' + nowPath,
        path: nowPath,
        navType: getNginxType(nowType)
      }
      localStorage.setItem('brightRouter', JSON.stringify({
        type: nowType,
        url: nowType == 'vue' ? nowPath : '/' + nowType + '/#' + nowPath,
        path: nowPath,
        navType: getNginxType(nowType)
      }))
    }
    for (var i = 0; i < arr.length; i++) {
      var every = arr[i];
      var href = "";
      var port = location.port || '';
      if (port) {
        port = ":" + port;
      }
      if (brightRouter && brightRouter.url && brightRouter.url.indexOf("#") != -1) {

        str = brightRouter.path;

        href = every.url;
      } else {
        str = location.protocol + "//" + location.hostname + port + brightRouter.path;
        href = location.protocol + "//" + location.hostname + port + every.url;
      }

      if (href === str) {
        return every;
      } else {
        if (every.childList && every.childList.length) {
          var data = getClickNav(every.childList, str)
          if (data) {
            return every;
          }
        }

      }
    }
  }
  function moreClick() {

  }

  function menuClick(event) {
    var sidebarDom = getNodeId(sidebarId);
    var dom = event.target;
    var flag = false;
    var router = getRouter();

    if (dom.className == 'menu-btn menu-btn-close') {
      for (var i = 0; i < navUtils.closeRoutrs.length; i++) {
        if (router == navUtils.closeRoutrs[i]) {
          sidebarDom.style.display = 'none';
          return;
        }
      }
      sidebarDom.style.display = 'block';
      dom.setAttribute('class', 'menu-btn menu-btn-open');
      navUtils.contentDom.style.paddingLeft = '180px';
      flag = true;
    } else {
      sidebarDom.style.display = 'none';
      dom.setAttribute('class', 'menu-btn menu-btn-close')
      navUtils.contentDom.style.paddingLeft = '0px';
      flag = false;
    }
    if (!navUtils.menuBtnBacks || !navUtils.menuBtnBacks.length) {
      return;
    }
    for (var i = 0; i < navUtils.menuBtnBacks.length; i++) {
      var everyCallback = navUtils.menuBtnBacks[i];
      if (everyCallback) {
        everyCallback(flag);
      }
    }
  }
  function listenSidebarOpen(callback) {
    if (!callback) {
      return;
    }

    navUtils.menuBtnBacks.push(callback);
  }
  function accountBtnClick() {
    var accountBoxDom = getNodeId(accountBoxId);
    if (accountBoxDom.style.display == 'none') {
      accountBoxDom.style.display = 'block';
    } else {
      accountBoxDom.style.display = 'none';
    }
  }
  function maskClick() {
    var accountBoxDom = getNodeId(accountBoxId);
    if (accountBoxDom.style.display == 'none') {
      accountBoxDom.style.display = 'block';
    } else {
      accountBoxDom.style.display = 'none';
    }
  }
  //头部和侧栏渲染
  function renderHanderAndSidebar() {
    var showSidebar = 'block';
    var menuName = 'menu-btn menu-btn-open';
    var messageDisplay = "none";
    if (!isChrome()) {
      messageDisplay = 'block'
    }
    var html = '<div class="app-header">' +

      '<div class="c-header"> ' +

      '<div class="brand"></div> ' +
      '<div class="' + menuName + '" id="' + menuId + '"></div>' +
      '<div class="u-header-logo" style="background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTMwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDEzMCA1MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTAuMiAoNTUwNDcpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPuaWsExPR088L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjAgMC4wMjEwNTg0MTQyIDk5Ljg4NDc3NjUgMC4wMjEwNTg0MTQyIDk5Ljg4NDc3NjUgMzUuNjU4OTAwNyAwIDM1LjY1ODkwMDciPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLmlrBMT0dPIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LjAwMDAwMCwgNy4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC0yIj48L2c+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS43NTA3OTYwOSwzNS42NTg5MDA3IEMyLjU3OTg0NjM3LDM1LjY1ODkwMDcgLTQuMTg5OTQ0MTNlLTA1LDMzLjA2NTYyNzIgLTQuMTg5OTQ0MTNlLTA1LDI5Ljg3ODA4NTIgTC00LjE4OTk0NDEzZS0wNSw1LjgwMTg1OTg1IEMtNC4xODk5NDQxM2UtMDUsMi42MTQzMTc4OSAyLjU3OTg0NjM3LDAuMDIwOTAzOTg1OCA1Ljc1MDc5NjA5LDAuMDIwOTAzOTg1OCBMOTQuMTM0MTc2LDAuMDIwOTAzOTg1OCBDOTcuMzA1MTI1NywwLjAyMDkwMzk4NTggOTkuODg0ODc0MywyLjYxNDMxNzg5IDk5Ljg4NDg3NDMsNS44MDE4NTk4NSBMOTkuODg0ODc0MywyOS44NzgwODUyIEM5OS44ODQ4NzQzLDMzLjA2NTYyNzIgOTcuMzA1MTI1NywzNS42NTg5MDA3IDk0LjEzNDE3NiwzNS42NTg5MDA3IEw1Ljc1MDc5NjA5LDM1LjY1ODkwMDcgWiIgaWQ9IkZpbGwtMSIgZmlsbD0iI0ZGRTYyQyIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTUuNzMxNjUzNTgsMy4yNTQyMTA2MSBDNC4zNzE1Mjc0MiwzLjI1NDIxMDYxIDMuMjY0OTc3MDUsNC4zNDgyMTU5MiAzLjI2NDk3NzA1LDUuNjkzMDI3OSBMMy4yNjQ5NzcwNSwyOS4xOTA4MzAyIEMzLjI2NDk3NzA1LDMwLjUzNTUwNSA0LjM3MTUyNzQyLDMxLjYyOTM3MzIgNS43MzE2NTM1OCwzMS42MjkzNzMyIEw5My40OTI1OTc3LDMxLjYyOTM3MzIgQzk0Ljg1MzAwMTMsMzEuNjI5MzczMiA5NS45NTk2OTA0LDMwLjUzNTUwNSA5NS45NTk2OTA0LDI5LjE5MDgzMDIgTDk1Ljk1OTY5MDQsNS42OTMwMjc5IEM5NS45NTk2OTA0LDQuMzQ4MjE1OTIgOTQuODUzMDAxMywzLjI1NDIxMDYxIDkzLjQ5MjU5NzcsMy4yNTQyMTA2MSBMNS43MzE2NTM1OCwzLjI1NDIxMDYxIFogTTUuNzMxNjUzNTgsMzIuNTU4MTM5NSBDMy44NTM0MTcxNSwzMi41NTgxMzk1IDIuMzI1NTgxNCwzMS4wNDc1NDAxIDIuMzI1NTgxNCwyOS4xOTA4MzAyIEwyLjMyNTU4MTQsNS42OTMwMjc5IEMyLjMyNTU4MTQsMy44MzYxODA4NCAzLjg1MzQxNzE1LDIuMzI1NTgxNCA1LjczMTY1MzU4LDIuMzI1NTgxNCBMOTMuNDkyNTk3NywyLjMyNTU4MTQgQzk1LjM3MDk3MjksMi4zMjU1ODE0IDk2Ljg5OTIyNDgsMy44MzYxODA4NCA5Ni44OTkyMjQ4LDUuNjkzMDI3OSBMOTYuODk5MjI0OCwyOS4xOTA4MzAyIEM5Ni44OTkyMjQ4LDMxLjA0NzU0MDEgOTUuMzcwOTcyOSwzMi41NTgxMzk1IDkzLjQ5MjU5NzcsMzIuNTU4MTM5NSBMNS43MzE2NTM1OCwzMi41NTgxMzk1IFoiIGlkPSJGaWxsLTQiIGZpbGw9IiMyMzFGMjAiPjwvcGF0aD4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtNiIgZmlsbD0iIzIzMUYyMCIgcG9pbnRzPSIyOC42ODIxNzA1IDI3LjEzMTc4MjkgMjkuNDU3MzY0MyAyNy4xMzE3ODI5IDI5LjQ1NzM2NDMgOS4zMDIzMjU1OCAyOC42ODIxNzA1IDkuMzAyMzI1NTgiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBhdGggZD0iTTM4LjU1MTU0MjQsMjIuNjkzODAxOCBMNDMuNTA5NDYzNCwyMi42OTM4MDE4IEw0My41MDk0NjM0LDIxLjYxMzI0MTMgTDM4LjU1MTU0MjQsMjEuNjEzMjQxMyBMMzguNTUxNTQyNCwyMi42OTM4MDE4IFogTTQ4LjEwNTE2NjMsMjUuODE5NjAzOSBDNDcuNjY2NjA0NCwyNC45MzIxNzU2IDQ3LjQ1Njc5NzMsMjMuMTU2ODk5MSA0Ny40NTY3OTczLDIwLjQ1NTQyOCBMNDcuNDU2Nzk3MywxNi45MjQxODg0IEwzNS44ODE5OTksMTYuOTI0MTg4NCBMMzUuODgxOTk5LDE1LjI2NDc5MTMgTDQ5LjMyNTU2MDYsMTUuMjY0NzkxMyBMNDkuMzI1NTYwNiwyMC40NTU0MjggQzQ5LjMyNTU2MDYsMjIuMzI2OTkwNiA0OS4zNjM3MzI1LDIzLjUyMzQzMDQgNDkuNDU5MDI0LDI0LjA2MzY0MDYgQzQ5LjUzNTM2NzgsMjQuNTg0Njc3NiA0OS42Njg4MzExLDI0Ljg1NDkyMjcgNDkuODU5NTUyMywyNC44NTQ5MjI3IEM0OS45NTQ4NDM4LDI0Ljg1NDkyMjcgNTAuMDY5MjIxMSwyNC41ODQ2Nzc2IDUwLjE4MzU5ODUsMjQuMDQ0NDY3NCBDNTAuMjQwODU2NCwyMy41ODEzNyA1MC4yOTc5NzU5LDIzLjA3OTY0NjMgNTAuMzc0MzE5NywyMi41MjAxMjI4IEw1MS45Mzc5ODQ1LDIzLjI5MTk1MTcgQzUxLjcwOTIyOTcsMjQuODM1NjA5NSA1MS40MjMwNzg4LDI1Ljg1ODIzMDMgNTEuMTE3OTgwMiwyNi4zNzkxMjczIEM1MC44MTI4ODE2LDI2Ljg4MDk5MSA1MC40NTA2NjM1LDI3LjEzMTc4MjkgNTAuMDY5MjIxMSwyNy4xMzE3ODI5IEM0OS4xNzMwMTE0LDI3LjExMjQ2OTcgNDguNTI0NjQyMywyNi42Njg4MjU2IDQ4LjEwNTE2NjMsMjUuODE5NjAzOSBaIE00MS45MDc3NjUxLDE3LjI5MDcxOTYgTDQxLjkwNzc2NTEsMTcuOTQ2OTQ5MSBMNDYuNTk4NjIxMSwxNy45NDY5NDkxIEw0Ni41OTg2MjExLDE5LjQxMzQ5NCBMNDEuOTA3NzY1MSwxOS40MTM0OTQgTDQxLjkwNzc2NTEsMjAuMjA0NjM2MSBMNDUuMTg3NTA1NiwyMC4yMDQ2MzYxIEw0NS4xODc1MDU2LDI0LjEwMjQwNyBMNDMuNDMzMjU4LDI0LjEwMjQwNyBMNDMuNDMzMjU4LDI1LjIyMTQ1NCBDNDMuNDMzMjU4LDI1LjQ1MjkzMjYgNDMuNTY2ODU5NiwyNS41ODgxMjUyIDQzLjgzMzY0OCwyNS41ODgxMjUyIEw0NS4yMDY1OTE2LDI1LjU4ODEyNTIgQzQ1LjM5NzMxMjgsMjUuNTg4MTI1MiA0NS41MzA3NzYxLDI1LjUxMTAxMjIgNDUuNjI2MjA1OCwyNS4zOTUxMzI5IEM0NS43NDA1ODMyLDI1LjI3OTM5MzYgNDUuODE2OTI3LDI0Ljg3NDA5NiA0NS44NTQ5NjA2LDI0LjE3OTUxOTkgTDQ3LjQ1Njc5NzMsMjQuNzAwNDE3IEM0Ny4zNDIyODE2LDI1Ljg1ODIzMDMgNDcuMTMyNjEyOCwyNi41NTI5NDYzIDQ2LjgyNzUxNDIsMjYuNzY1MTExNyBDNDYuNTQxNTAxNiwyNi45NTgxMDQgNDYuMTAyOTM5NywyNy4wNzM4NDMzIDQ1LjUxMTgyODQsMjcuMDczODQzMyBMNDMuMzU2OTE0MiwyNy4wNzM4NDMzIEM0Mi4yNzAxMjE1LDI3LjA3Mzg0MzMgNDEuNzM2MTI5OCwyNi41NzIyNTk1IDQxLjczNjEyOTgsMjUuNjA3NDM4NCBMNDEuNzM2MTI5OCwyNC4xMDI0MDcgTDQwLjM0NDEwMDMsMjQuMTAyNDA3IEM0MC4xNzI0NjUxLDI1LjA2NzA4ODIgMzkuODY3MzY2NSwyNS43MjMzMTc3IDM5LjQyODgwNDYsMjYuMDcwMzk1OCBDMzguODk0ODEyOSwyNi41OTE0MzI3IDM3LjU3OTEyNzIsMjYuOTM4NzkwNyAzNS40ODE2MDksMjcuMDkzMjk2NSBMMzQuNzk1MDY4MSwyNS41MzAxODU1IEMzNi4zOTY3NjY1LDI1LjQ3MjM4NTggMzcuNDY0NzQ5OCwyNS4yOTg4NDY4IDM3Ljk3OTUxNzIsMjQuOTkwMTE1MiBDMzguMjg0NjE1OCwyNC43Nzc4MDk4IDM4LjQ5NDQyMjksMjQuNDg4MjUxNSAzOC42Mjc4ODYyLDI0LjEwMjQwNyBMMzYuODczNTAwMywyNC4xMDI0MDcgTDM2Ljg3MzUwMDMsMjAuMjA0NjM2MSBMNDAuMDk2MTIxMywyMC4yMDQ2MzYxIEw0MC4wOTYxMjEzLDE5LjQxMzQ5NCBMMzUuNDI0MjEyOSwxOS40MTM0OTQgTDM1LjQyNDIxMjksMTcuOTQ2OTQ5MSBMNDAuMDk2MTIxMywxNy45NDY5NDkxIEw0MC4wOTYxMjEzLDE3LjI5MDcxOTYgTDQxLjkwNzc2NTEsMTcuMjkwNzE5NiBaIE0zNS4yOTA4ODc4LDE1LjU1NDIwOTYgTDM0LjEwODUyNzEsMTMuOTcxOTI1NCBDMzUuOTc3MjkwNSwxMi42OTgzNzI3IDM3LjIzNTg1NjcsMTEuMTU0NzE0OSAzNy44ODQyMjU3LDkuMzAyMzI1NTggTDM5LjgyOTMzMjksOS41NTMxMTc0OSBDMzkuNzE0ODE3Miw5Ljg2MTk4OSAzOS42MTkzODc1LDEwLjE1MTQwNzMgMzkuNTA1MDEwMSwxMC40NDA4MjU3IEw1MC43MTc1OTAyLDEwLjQ0MDgyNTcgTDUwLjcxNzU5MDIsMTIuMTM4NzA5MyBMMzguNjA4ODAwMywxMi4xMzg3MDkzIEMzOC40MTgwNzkxLDEyLjQwODk1NDQgMzguMjI3NDk2MiwxMi42NzkwNTk1IDM4LjAzNjc3NSwxMi45Mjk4NTE0IEw0OS44NDA0NjY0LDEyLjkyOTg1MTQgTDQ5Ljg0MDQ2NjQsMTQuNDczNzg5MSBMMzcuODQ2MDUzOCwxNC40NzM3ODkxIEwzNy44NDYwNTM4LDEzLjE2MTYxIEMzNy4xMjE0NzkzLDE0LjAyOTg2NSAzNi4yODIzODkxLDE0LjgyMTAwNzEgMzUuMjkwODg3OCwxNS41NTQyMDk2IFoiIGlkPSJGaWxsLTgiIGZpbGw9IiMyMzFGMjAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTcxLjEwOTM1MTEsMTcuMjc5MTMyOCBMNjkuOTQ4Nzc1LDE5LjAzNjQwMTkgQzY4LjE3ODU5MzIsMTcuNTc1MjgwOSA2Ni4zNDkyMDU2LDE2LjQxMDQ1MTEgNjQuNDgwNDQyNiwxNS41ODExNTA3IEw2NS41NDI3MjI5LDEzLjk2MjA3NDQgQzY3LjU4ODM4OTksMTQuODcwNDI0IDY5LjQzNzQ2NTIsMTUuOTc1OTY3IDcxLjEwOTM1MTEsMTcuMjc5MTMyOCBaIE02Mi4zOTU1NDI4LDE1LjU0MTYyNjEgQzYwLjgyMTk1MjgsMTYuOTIzODQxMSA1OC45MTM5NTcsMTguMDY4OTA4NiA1Ni42NzE1NTU1LDE4Ljk3NzExNSBMNTUuNzg2MzIyLDE3LjEwMTQxNTQgQzU3Ljk1MDExNTMsMTYuMzExNjM5NiA1OS43NDAxMjc0LDE1LjMwNDc2NDkgNjEuMTE2OTgzMSwxNC4wODA1MDUgTDYyLjM5NTU0MjgsMTUuNTQxNjI2MSBaIE03MC4zODE0NzY2LDE5LjMzMjY5MzEgTDcwLjM4MTQ3NjYsMjEuMjY3Njc5NyBMNjQuNTc5MDIzOCwyMS4yNjc2Nzk3IEw2NC41NzkwMjM4LDI1LjE1NzI3MTggTDcyLjAzMzgxNzUsMjUuMTU3MjcxOCBMNzIuMDMzODE3NSwyNy4xMzE3ODI5IEw1NS4wNzgyNzc4LDI3LjEzMTc4MjkgTDU1LjA3ODI3NzgsMjUuMTU3MjcxOCBMNjIuNDkzODM4NywyNS4xNTcyNzE4IEw2Mi40OTM4Mzg3LDIxLjI2NzY3OTcgTDU2LjczMDYxODYsMjEuMjY3Njc5NyBMNTYuNzMwNjE4NiwxOS4zMzI2OTMxIEw3MC4zODE0NzY2LDE5LjMzMjY5MzEgWiBNNjQuNjE4MjU2NiwxMS4yMTc1NDk4IEw3Mi4wOTMwMjMzLDExLjIxNzU0OTggTDcyLjA5MzAyMzMsMTUuNTAyMTAxNSBMNzAuMDI3NTI1OCwxNS41MDIxMDE1IEw3MC4wMjc1MjU4LDEzLjExMzAxMTggTDU3LjEwNDI1NzEsMTMuMTEzMDExOCBMNTcuMTA0MjU3MSwxNS40ODIzMzkyIEw1NS4wMzg3NTk3LDE1LjQ4MjMzOTIgTDU1LjAzODc1OTcsMTEuMjE3NTQ5OCBMNjIuNDU0NDYzMywxMS4yMTc1NDk4IEM2Mi4yMTg0OTYxLDEwLjY2NDc3ODQgNjEuOTYyODQxMiwxMC4xMzE2MjYgNjEuNjg3MzU1OSw5LjY1Nzc2MDUgTDYzLjkyOTc1NzQsOS4zMDIzMjU1OCBDNjQuMTY1ODY3Myw5Ljg3NTAwMjU1IDY0LjM4MjI4OTQsMTAuNTA2ODIzMiA2NC42MTgyNTY2LDExLjIxNzU0OTggWiIgaWQ9IkZpbGwtOSIgZmlsbD0iIzIzMUYyMCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNODYuODA0MDU0NCwyNi45NjA1MTMxIEw4Ni4yNTYxMzQ5LDI1LjA5NTcyNzYgTDg3Ljk1ODM2MDgsMjUuMTUyNzI1NiBDODguNDQ3NTI5LDI1LjE1MjcyNTYgODguNzAxOTc2LDI0LjgxMDQ2MTggODguNzAxOTc2LDI0LjE0NDQyNzYgTDg4LjcwMTk3NiwxMi4xMTg1NDkgTDgxLjQyMzM0NTksMTIuMTE4NTQ5IEw4MS40MjMzNDU5LDEwLjI5MTcxNjIgTDkwLjY5NzY3NDQsMTAuMjkxNzE2MiBMOTAuNjk3Njc0NCwyNC42OTYxODk5IEM5MC42OTc2NzQ0LDI2LjE5OTM5MDIgODkuOTE1MDMzNywyNi45NjA1MTMxIDg4LjM2OTE5NCwyNi45NjA1MTMxIEw4Ni44MDQwNTQ0LDI2Ljk2MDUxMzEgWiBNODAuNDQ0ODY3NiwyMi4wODkxODkgTDg0LjU3MzM1MDgsMjIuMDg5MTg5IEw4NC41NzMzNTA4LDIwLjAzNDA4ODQgTDgwLjQ0NDg2NzYsMjAuMDM0MDg4NCBMODAuNDQ0ODY3NiwyMi4wODkxODkgWiBNODAuNDQ0ODY3NiwxOC4zMjE4MDM1IEw4NC41NzMzNTA4LDE4LjMyMTgwMzUgTDg0LjU3MzM1MDgsMTYuMjY2NzAyOSBMODAuNDQ0ODY3NiwxNi4yNjY3MDI5IEw4MC40NDQ4Njc2LDE4LjMyMTgwMzUgWiBNNzguNTI3MzYyMiwyMy44Mzk5Nzg1IEw4Ni40NzE0MTQzLDIzLjgzOTk3ODUgTDg2LjQ3MTQxNDMsMTQuNTE2MDUxNCBMNzguNTI3MzYyMiwxNC41MTYwNTE0IEw3OC41MjczNjIyLDIzLjgzOTk3ODUgWiBNODAuMjQ5MzEzOCwxMi42ODkzNTY2IEw3OC40MTAxNDM1LDEzLjYyMTc0OTMgQzc3LjY4NjExMjEsMTIuMjg5NjgwOSA3Ni44ODM4ODc2LDExLjEyOTAyMDQgNzYuMDIyOTExOCwxMC4xMjA0NDY0IEw3Ny44ODE4MDc4LDkuMzAyMzI1NTggQzc4Ljc4MTgwOTIsMTAuMzI5ODA2OSA3OS41NjQ0NDk5LDExLjQ1MjUxNDggODAuMjQ5MzEzOCwxMi42ODkzNTY2IFogTTc0LjQxODYwNDcsMjcuMTMxNzgyOSBMNzYuNDE0MzAzMSwyNy4xMzE3ODI5IEw3Ni40MTQzMDMxLDEyLjY3MDE3MzMgTDc0LjQxODYwNDcsMTIuNjcwMTczMyBMNzQuNDE4NjA0NywyNy4xMzE3ODI5IFoiIGlkPSJGaWxsLTEwIiBmaWxsPSIjMjMxRjIwIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC4yMjQ0MTMzLDIwLjE1NTAzODggTDguOTA3MzY5NjMsMjAuMTU1MDM4OCBDOC42OTcyODcxNSwyMC4xNTUwMzg4IDguNTI3MTMxNzgsMjAuMzI3NDQ5MSA4LjUyNzEzMTc4LDIwLjU0MDMxNTYgTDguNTI3MTMxNzgsMjcuMTMxNzgyOSBMMTMuMDc1ODE4MywyNy4xMzE3ODI5IEwxMy4wNzU4MTgzLDIzLjA0MTIwNzQgQzEzLjA3NTgxODMsMjIuODI4NDg1OCAxMy4yNDU5NzM2LDIyLjY1NjA3NTUgMTMuNDU2MDU2MSwyMi42NTYwNzU1IEwxOC4yMjQ0MTMzLDIyLjY1NjA3NTUgQzE4LjQzNDQ5NTgsMjIuNjU2MDc1NSAxOC42MDQ2NTEyLDIyLjQ4MzY2NTIgMTguNjA0NjUxMiwyMi4yNzA3OTg3IEwxOC42MDQ2NTEyLDIwLjU0MDMxNTYgQzE4LjYwNDY1MTIsMjAuMzI3NDQ5MSAxOC40MzQzNTI3LDIwLjE1NTAzODggMTguMjI0NDEzMywyMC4xNTUwMzg4IiBpZD0iRmlsbC0xMSIgZmlsbD0iIzIzMUYyMCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjIuNTI2NjU1LDI3LjEyNjE3NTQgQzIzLjc4NTk4OTksMjcuMTI1MjE4MSAyNC44MDYyMDE2LDI2LjE0OTc4NTkgMjQuODA2MjAxNiwyNC45NDY5MDc5IEwyNC44MDYyMDE2LDE2LjU0NjA0NjMgQzI0LjgwNjIwMTYsMTQuODA0MTY0MSAyMi41OTEyMzI2LDE0LjExOTYzODMgMjEuNDkwNTQ5NSwxNS4zNjMxMzY1IEwxOS42MjE2NjUsMTcuNDc0MTU2NiBMMTYuNjIyNjAwNywxNy40NzQxNTY2IEMxNi4wMDQ3NDYyLDE3LjQ3NDE1NjYgMTUuNTAzODc2LDE3Ljk1MjU3MjQgMTUuNTAzODc2LDE4LjU0MjcyOCBMMTUuNTAzODc2LDE5LjYyNDE1NTcgTDE5LjYyMTA5MjIsMTkuNjI0MTU1NyBDMTkuOTcxMTg1OSwxOS42MjQxNTU3IDIwLjI1NTEyNjksMTkuODk1MzY3NCAyMC4yNTUxMjY5LDIwLjIyOTc2NjEgTDIwLjI1NTEyNjksMjMuMjMxODMyMyBDMjAuMjU1MTI2OSwyMy41NjYzNjc4IDE5Ljk3MTE4NTksMjMuODM3NDQyNyAxOS42MjEwOTIyLDIzLjgzNzQ0MjcgTDE3LjIzMzAwOTQsMjMuODM3NDQyNyBDMTYuMjc4MDkxMywyMy44Mzc0NDI3IDE1LjUwMzg3NiwyNC41NzY4MTI2IDE1LjUwMzg3NiwyNS40ODkwNTc4IEwxNS41MDM4NzYsMjcuMTMxNzgyOSBMMjIuNTI2NjU1LDI3LjEyNjE3NTQgWiIgaWQ9IkZpbGwtMTIiIGZpbGw9IiMyMzFGMjAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE5LjM3OTg0NSwxMS4yNDAzMTAxIEMxOS4zNzk4NDUsMTAuMTY5OTczMiAyMC4yNDc1MTkzLDkuMzAyMzI1NTggMjEuMzE3ODg5LDkuMzAyMzI1NTggQzIyLjM4ODEzOTYsOS4zMDIzMjU1OCAyMy4yNTU4MTQsMTAuMTY5OTczMiAyMy4yNTU4MTQsMTEuMjQwMzEwMSBDMjMuMjU1ODE0LDEyLjMxMDY0NjkgMjIuMzg4MTM5NiwxMy4xNzgyOTQ2IDIxLjMxNzg4OSwxMy4xNzgyOTQ2IEMyMC4yNDc1MTkzLDEzLjE3ODI5NDYgMTkuMzc5ODQ1LDEyLjMxMDY0NjkgMTkuMzc5ODQ1LDExLjI0MDMxMDEiIGlkPSJGaWxsLTEzIiBmaWxsPSIjMjMxRjIwIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi44MjYwMDQzLDE4LjgyODE2NDEgTDEwLjM4NTY0NzUsMTQuMjQ2MDc0MiBDMTAuMjM2ODQ2OSwxMy45NjYyNTE5IDkuOTA3Mjk5OTgsMTMuODcwNDQzMiA5LjY0OTYzMTI1LDE0LjAzMTk0OTMgTDkuNTcxNzI4MTQsMTQuMDgwNzY2MSBDOS4zMTQxOTk1MywxNC4yNDIxMjAxIDkuMjI1Nzg3OTEsMTQuNTk5ODA2IDkuMzc0NTg4NDUsMTQuODc5NDc2MiBMMTIuMDA0NjU5LDE5LjgxODMzOTYgQzEyLjExNTQ4ODcsMjAuMDI2NTMzNCAxMi4zMjAzMzQ3LDIwLjE1NTAzODggMTIuNTQxOTk0MiwyMC4xNTUwMzg4IEwxNy44Mjk0NTc0LDIwLjE1NTAzODggTDE3LjgyOTQ1NzQsMTguODI4MTY0MSBMMTIuODI2MDA0MywxOC44MjgxNjQxIFoiIGlkPSJGaWxsLTE0IiBmaWxsPSIjMjMxRjIwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);"></div>' +

      '<div class="header-nav" id="' + headerId + '">' + renderHander(navUtils.navs) + '</div>' +

      '<div class = "j_header_other">' +


      '<div id = "' + accountBtnId + '" class="j_account_btn"></div>' +
      '<div id="' + accountBoxId + '" class="j_account_box" style = "display:none">' +
      '<div id = "j_account_detail">' +

      '<a href = "/new/#/permission/personalCenter" class = "j_account_list username" id="j_username">' + navUtils.user.nickname + '</a>' +

      '<div id = "' + exitBtnId + '" class = "j_account_list">退出</div>' +

      '</div>' +
      '<div class = "j_account_detail_mask" id="' + maskId + '"></div>' +
      '</div>' +
      '</div>' +
      '</div> ' + renderSidebar(navUtils.activeData, showSidebar) +
      '</div>' +
      '<div id="' + messageId + '" style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:999;display:' + messageDisplay + ';">' +
      '<div style="text-align:center;transform: translateX(-50%) translateY(-50%);border-radius:6px;position:fixed;top:40%;left:50%;z-index:999;width:520px;height:200px;box-shadow:0 4px 12px rgba(0,0,0,.15);background:#fff;">' +
      '<div style="line-height:1.8;width: 400px;font-size: 16px;margin: auto;margin-top: 30px;"><div>推荐使用Chrome浏览器，</div>下载地址：<a target="_blank" href="https://www.google.cn/chrome/" download>https://www.google.cn/chrome/</a><div>如继续使用当前浏览器可能有兼容性问题。</div></div>' +
      '<div id="' + closeButton + '" style="display: inline-block;vertical-align: middle;line-height: 1.5;font-size: 14px;margin-top: 20px;cursor: pointer;border: 1px solid transparent;padding: 5px 15px 6px;border-radius: 4px;color: #515a6e;background-color: #fff;border-color: #dcdee2;">知道了</div>' +
      '</div>' +
      '</div>'

    '</div>';
    // document.body.innerHTML += html;
    if (document.body && navUtils.bodyDom) {
      handerDomEvent(html)
      return html;
    }
    return html;
  }

  function isChrome() {
    var nowTime = (new Date()).getTime();
    var oldTime = +localStorage.getItem('messageFailureTime');
    if (navigator.userAgent.indexOf('Chrome') != -1) {
      return true
    }
    if (localStorage.getItem('messageFailureTime') && nowTime - oldTime < 8 * 60 * 60 * 1000) {
      return true;
    }
    return false;
  }

  function handerDomEvent(html) {
    if (getNodeId(loddingId)) {
      getNodeId(loddingId).className = "j-nav-lodding j-nav-lodding-none";
    }
    setTimeout(function () {
      if (getNodeId(loddingId)) {
        getNodeId(loddingId).style.display = 'none';
        getNodeId(loddingId).innerHTML = '';
      }

    }, 500)
    navUtils.bodyDom.innerHTML = html;
    var moreDom = getNodeId(moreId);
    var sidebarDom = getNodeId(sidebarId);
    var handerDom = getNodeId(headerId);
    var menuDom = getNodeId(menuId);

    if (moreDom) {
      moreDom.onclick = moreClick
    }
    getNodeId(menuId).onclick = menuClick;
    getNodeId(accountBtnId).onclick = accountBtnClick;
    getNodeId(maskId).onclick = maskClick;
    getNodeId(accountBoxId).onclick = function () {

    }
    getNodeId(closeButton).onclick = function () {
      getNodeId(messageId).style.display = "none";
      localStorage.setItem('noShowMessage', true);
      localStorage.setItem('messageFailureTime', (new Date()).getTime());
    }
    if (typeof (Storage) !== "undefined") {
      sidebarDom.scrollTop = sessionStorage.scrollTop;

    }
    if (sidebarDom) {
      sidebarDom.removeEventListener('scroll', setCcrollTop);
      sidebarDom.addEventListener('scroll', setCcrollTop.bind(this, sidebarDom), false)
    }


    if (sidebarDom.style.display == 'none') {
      navUtils.contentDom.style.paddingLeft = '0px';
      menuDom.className = 'menu-btn menu-btn-close'

    } else {
      navUtils.contentDom.style.paddingLeft = '180px';
      menuDom.className = 'menu-btn menu-btn-open'

    }
    if (!isHanderListen && handerDom) {
      handerDom.onclick = function (e) {

        if (e.target.tagName.toUpperCase() == 'SPAN') {
          var href = e.target.attributes['data-href'].value;
          if (href) {
            if (typeof (Storage) !== "undefined") {
              sessionStorage.scrollTop = 0;
            }
            location.href = href;
          }
        }


      }
    }


    getNodeId(exitBtnId).onclick = function () {
      if (typeof (Storage) !== "undefined") {
        if (sessionStorage.user) {
          sessionStorage.navs = '';
          sessionStorage.user = '';
          sessionStorage.scrollTop = 0;
        }

      }

      var xhr = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据
      xhr.open('GET', "/api/krspace-sso-web/sso/sysOwn/logout", true);
      xhr.responseType = 'json';
      xhr.withCredentials = true;
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { // readyState == 4说明请求已完成
          var redirectUrl = encodeURIComponent(window.location.href);
          window.location.href = `/new/login.html?RU=${redirectUrl}`;
          if (j_account_box.style.display == 'block') {
            j_account_box.style.display = 'none';
          }
        }
      };
      xhr.send();
    }
  }
  function getNodeId(name) {
    if (document.getElementById(name)) {
      return document.getElementById(name);
    } else {

      return document.querySelector('#' + name);
    }
  }
  function setCcrollTop(dom) {
    if (typeof (Storage) !== "undefined") {
      sessionStorage.scrollTop = dom.scrollTop;
    }
  }
  //渲染头部
  function renderHander(navs) {

    var more = '<ul>';
    var html = '<ul class="more-nav-ul">';
    if (!navs.length) {
      return '';
    }
    activeStr = JSON.stringify(navUtils.activeData);
    var otherActive = 'normal';
    navs.map(function (item, index) {
      var href = "";
      var oldHref = '';
      var isActive = false;
      if (item.childList && item.childList.length) {
        oldHref = href = item.childList[0].childList[0].url;
        item.type = item.childList[0].childList[0].projectType || ''
      }
      oldHref = '"url":"' + oldHref + '"'
      href = setHref(item.type, href)
      if (activeStr.indexOf(oldHref) != -1) {
        isActive = true;
      }
      if (item.name == "首页") {
        isActive = false;
      }
      //默认第一个（毅豪说的）
      if (index > navUtils.navNum - 1) {
        if (index > navUtils.navNum - 1 && activeStr.indexOf(oldHref) != -1) {
          otherActive = "bold";
        }
        more += '<li  class=' + (isActive ? 'active' : 'default') + '><span name="' + item.name + '" data-href="' + href + '">' + item.name + '</span></li>';
        return;
      }
      html += '<li  class=' + (isActive ? 'active' : 'default') + '><span name="' + item.name + '" data-href="' + href + '">' + item.name + '</span></li>';
      // html += '<li class=' + (item.active ? 'active' : 'default') + '><span>' + item.primaryText + '</span></li>';
    });
    if (navs.length && navs.length > navUtils.navNum) {
      more += '</ul>';
      html +=
        '<li id="' + moreId + '" class="more-name-li">' +
        '<span style="font-weight:' + otherActive + ';">更多</span>' +
        '<div class="more-nav" id="more-next"><p></p>' + more + '</div>'
      '</li>' +
        '</ul>';
    } else {
      html += '</ul>';
    }
    return html; Ï
  }
  //渲染侧栏
  function renderSidebar(sidebarData, showSidebar) {
    var sidebarNavs = Object.assign(sidebarData);
    var sidebarStyle = "width:180px;position:fixed;left:0;top:60px;bottom:0px;background:#394457;z-index:900;overflow:auto;text-align:left;padding-bottom:20px;display:";
    var html = '';
    if (!sidebarNavs) {
      return '<div id="' + sidebarId + '" class="sidebar" style="' + sidebarStyle + showSidebar + ';"> ' + html + ' </div> ';
    }
    if (!(sidebarNavs && sidebarNavs.hasOwnProperty('childList') && sidebarNavs.childList.length)) {
      return '<div id="' + sidebarId + '" class="sidebar" style="' + sidebarStyle + showSidebar + ';"> ' + html + ' </div> ';
    }
    sidebarNavs.childList.map(function (item) {
      var iconName = item.iconUrl ? item.iconUrl : '';
      if (item.hasOwnProperty('childList') && item.childList.length) {
        html += '<div class="g-nav-item"><div class="g-nav-item-title"><span class = "icon-style ' + iconName + '"></span><span style="padding-left:40px">' + item.name + '</span></div>';

        html += '<ul>';
        item.childList.map(function (child) {
          var href = ""

          href = setHref(child.projectType, child.url);
          var brightRouter = JSON.parse(localStorage.getItem("brightRouter"));

          var activeRouter = brightRouter.url;
          if (href == activeRouter) {
            if (child.sideFoldFlag == "YES") {
              showSidebar = 'none';
            } else {
              showSidebar = 'block';
            }
          }
          var router = getRouter();
          var closeStrRoute = JSON.stringify(navUtils.closeRoutrs)
          if (closeStrRoute.indexOf(location.href.split('?')[0]) != -1) {
            showSidebar = 'none';
          } else {
            showSidebar = 'block';
          }
          html += '<li class=' + (activeRouter == href ? 'active' : 'default') + '><a name="sidebar' + child.name + '" href="' + href + '">' + child.name + '</a></li>';
        })
        html += '</ul>';
      }
      html += '</div>';

    });

    return '<div id="' + sidebarId + '" class="sidebar" style="' + sidebarStyle + showSidebar + ';"> ' + html + ' </div> ';
  }

  function routerRefresh() {
    setBrightRouter();
    var navs = [].concat(navUtils.navs);
    var router = getRouter();
    var activeData = getClickNav([].concat(navs), router);
    if (activeData) {
      navUtils.activeData = Object.assign({}, activeData);
    }


    return renderHanderAndSidebar();

  };

  function pushCloseRoutrs(flag) {

    if (flag == 'false') {
      navUtils.closeRoutrs.push(getRouter());
    }
    routerRefresh();
    // renderHanderAndSidebar();

  }
  //http封装
  function http(type, url, callback) {

    var xhr = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据
    xhr.open(type, url, true);
    xhr.responseType = 'json';
    xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { // readyState == 4说明请求已完成
        if (xhr.response.code < 0) {
          var redirectUrl = encodeURIComponent(window.location.href);
          if (typeof (Storage) !== "undefined") {
            if (sessionStorage.user) {
              sessionStorage.navs = '';
              sessionStorage.user = '';
              sessionStorage.scrollTop = 0;
            }

          }
          window.location.href = `/new/login.html?RU=${redirectUrl}`;
          return;
        }
        callback(xhr.response)
      }
    };
    xhr.send();
  }


  global.vueNavRender = function (dom, contentDom) {
    navUtils.bodyDom = dom;
    navUtils.contentDom = contentDom;

    if (typeof (Storage) !== "undefined") {
      if (sessionStorage.user && sessionStorage.navs) {
        navUtils.navs = JSON.parse(sessionStorage.navs);
        navUtils.user = JSON.parse(sessionStorage.user);
        routerRefresh();
        return;
      }

    }
    getNavData();
  }
  function setNavNum() {

    if (!document.body) {
      setTimeout(function () {
        setNavNum();
      }, 100)
      return;
    }

    var wWidth = document.body.clientWidth;
    var num = Math.floor((wWidth - 180 - 130 - 76) / 88);

    if (num != navUtils.navNum + 1) {
      navUtils.navNum = num - 1;
      if (typeof (Storage) !== "undefined") {

        sessionStorage.navNum = num - 1
      }

      routerRefresh();
    }
  }

  setTimeout(function () { setNavNum() }, 0);
  window.addEventListener('hashchange', routerRefresh);
  window.addEventListener('resize', setNavNum);
  // routerRefresh();
  // renderHanderAndSidebar();

  function getNavData() {
    http('GET', '/api/krspace-sso-web/sso/sysOwn/getUserMenu', function (response) {
      var navs = [{
        iconUrl: "icon-card",
        name: "首页",
        showFlag: "YES",
        sideFoldFlag: "YES",
        topFoldFlag: "YES",
        url: "/"
      }].concat(response.data);
      routerRefresh();
      http('GET', "/api/krspace-sso-web/sso/sysOwn/findUserData?forceUpdate=1", function (response) {
        var user = response.data.userInfo;
        window.resourcesCode = response.data.resourcesCode;
        navUtils.navs = [].concat(navs);
        navUtils.user = Object.assign({}, user);
        sessionStorage.navs = JSON.stringify([].concat(navs));
        sessionStorage.user = JSON.stringify(Object.assign({}, user));
        routerRefresh();
      })

    })
  }

  // 配置 项目类型数组  

  global.$nav_global = {
    types: productTypeList,
    setHref: setHref
  }
  global.PRODUCTTYPELIST = productTypeList;// 项目类型 
  global.GLOBALSIDESWITCH = pushCloseRoutrs;//设置页面的侧栏
  global.GLOBALHEADERSET = setDefaultHeader;//设置高亮的头部
  global.LISTENSIDEBAROPEN = listenSidebarOpen;//监听开关


})(window);
