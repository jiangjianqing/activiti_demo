/**
 * Created by ztxs on 15-9-1.
 */
/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        bootstrap:{
            deps: [
                'jquery'
            ],
            exports:'bootstrap'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ]
        }
    },
    paths: {
        bootstrap:'../lib/bootstrap/bootstrap',
        jquery: '../lib/jquery/jquery',
        underscore: '../lib/underscore/underscore',
        backbone: '../lib/backbone/backbone',
        text: '../lib/requirejs-text/text',
        domReady:'../lib/requirejs-domReady/domReady',
        handlebars:'../lib/handlebars/handlebars'
    }
});

require([
    'backbone',
    'views/group/groups',
    'routers/router',
    'bootstrap'
], function (backbone,GroupView,AppRouter) {
    // Initialize routing and start Backbone.history()
    //一个应用中只有一个router，所有的路由都有其管理，这里将其管理的el范围传递进去
    //var router = new AppRouter('#appView');//暂时屏蔽20150906,在Activiti

    //20150906,使用Html5的pushState特性，服务器端也必须设定Rewrite attributes，尚未测试
    backbone.history.start(/*{pushState : true,root: '/'}*/);
/**启用 HTML5 特性 pushState 的配置调用 start() 方法。
 * 对于那些支持 pushState 的浏览器，Backbone 将监视 popstate 事件以触发一个新状态。
 * 如果浏览器不能支持 HTML5 特性，那么 onhashchange 活动会被监视。
 * 如果浏览器不支持该事件，轮询技术将监视 URL 散列片段的任何更改*/
    // Initialize the application view
    new GroupView();//临时测试用，正式项目中应该交由AppRouter处理
});