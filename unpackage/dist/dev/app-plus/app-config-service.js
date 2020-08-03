
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/live-detail/live-detail","pages/study/study","pages/my/my","pages/course-detail/course-detail","pages/total-course/total-course","pages/my-info/my-info","pages/system-set/system-set","pages/my/study-money","pages/recharge/recharge","pages/cash-out/cash-out","pages/cart/cart","pages/choose-grade/choose-grade","pages/my/service","pages/bind-mobile/bind-mobile","pages/login/login","pages/wechat-login/wechat-login","pages/order/order","pages/my/my-collect","pages/my/invitation-qrcode","pages/order-detail/order-detail","pages/activity/activity","pages/search/search","pages/teacher-detail/teacher-detail","pages/my-info/edit-nickname/edit-nickname","pages/operate-guide/operate-guide","pages/video-detail/video-detail","pages/register/register"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"borderStyle":"black","color":"#9b9b9b","selectedColor":"#3c3c3c","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/icon/tab-bar/1.png","selectedIconPath":"static/icon/tab-bar/2.png","text":"选课"},{"pagePath":"pages/study/study","iconPath":"static/icon/tab-bar/3.png","selectedIconPath":"static/icon/tab-bar/4.png","text":"学习"},{"pagePath":"pages/my/my","iconPath":"static/icon/tab-bar/5.png","selectedIconPath":"static/icon/tab-bar/6.png","text":"我的"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"常春藤辅导","compilerVersion":"2.6.16","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"","titleNView":{"buttons":[{"type":"none","text":"初一","width":"auto","fontSize":"17px","select":true,"float":"left"},{"type":"none","width":"auto","fontSrc":"/static/font/cart.ttf","text":"  ","fontSize":"20px","color":"#8987df"}],"searchInput":{"backgroundColor":"#F7F7F7","borderRadius":"15px","disabled":true,"placeholderColor":"#9B9B9B","placeholder":"请输入关键词"}}}},{"path":"/pages/live-detail/live-detail","meta":{},"window":{"navigationBarTextStyle":"white","transparentTitle":"always","softinputNavBar":"none","softinputMode":"adjustResize"}},{"path":"/pages/study/study","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"学习"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/course-detail/course-detail","meta":{},"window":{"transparentTitle":"auto","navigationBarTitleText":"课程详情"}},{"path":"/pages/total-course/total-course","meta":{},"window":{"navigationBarTitleText":"全部课程"}},{"path":"/pages/my-info/my-info","meta":{},"window":{"navigationBarTitleText":"个人资料"}},{"path":"/pages/system-set/system-set","meta":{},"window":{"navigationBarTitleText":"系统设置"}},{"path":"/pages/my/study-money","meta":{},"window":{"navigationBarTitleText":"我的学币"}},{"path":"/pages/recharge/recharge","meta":{},"window":{"navigationBarTitleText":"充值"}},{"path":"/pages/cash-out/cash-out","meta":{},"window":{"navigationBarTitleText":"提现"}},{"path":"/pages/cart/cart","meta":{},"window":{"navigationBarTitleText":"购物车"}},{"path":"/pages/choose-grade/choose-grade","meta":{},"window":{"navigationBarTitleText":"设置年级"}},{"path":"/pages/my/service","meta":{},"window":{"navigationBarTitleText":"我的客服"}},{"path":"/pages/bind-mobile/bind-mobile","meta":{},"window":{"navigationBarTitleText":"绑定手机"}},{"path":"/pages/login/login","meta":{},"window":{"titleNView":false}},{"path":"/pages/wechat-login/wechat-login","meta":{},"window":{"titleNView":false}},{"path":"/pages/order/order","meta":{"isNVue":true},"window":{"navigationBarTitleText":"订单列表"}},{"path":"/pages/my/my-collect","meta":{"isNVue":true},"window":{"navigationBarTitleText":"我的收藏"}},{"path":"/pages/my/invitation-qrcode","meta":{},"window":{"navigationBarTitleText":"我的二维码"}},{"path":"/pages/order-detail/order-detail","meta":{},"window":{"navigationBarTitleText":"订单详情"}},{"path":"/pages/activity/activity","meta":{},"window":{"navigationBarTitleText":"活动"}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"搜索"}},{"path":"/pages/teacher-detail/teacher-detail","meta":{},"window":{"transparentTitle":"always"}},{"path":"/pages/my-info/edit-nickname/edit-nickname","meta":{},"window":{"navigationBarTitleText":"修改昵称"}},{"path":"/pages/operate-guide/operate-guide","meta":{},"window":{"navigationBarTitleText":"操作指南"}},{"path":"/pages/video-detail/video-detail","meta":{},"window":{"transparentTitle":"always","titleNView":{"titleColor":"#FFFFFF"}}},{"path":"/pages/register/register","meta":{},"window":{"titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});