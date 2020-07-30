var app = getApp();
var isLoginSuccess = false;

Page({
    data:{
        userTitle: '点击登录',
        userHead: '../../res/images/user_normal.png'
    },

    previewHead: function() {},
    loginTap: function() {},
    initLoginMsg: function() {},
    allOrderTap: function() {},
    //我的订单
    myOrderTap: function() {},
    joinRecordTap: function() {},
    myPointsTap: function() {
        wx.navigateTo({
          url: '',
        })
    },
    
    //自带函数
    onLoad: function(options) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
})