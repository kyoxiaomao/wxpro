// pages/zhongxin/zhongxin.js
var app = getApp()
Page({
  data:{
      dhtxtClass01: "dh-txt01-false",//导航01
    dhtxtClass02: "dh-txt01-false",//导航02
    dhtxtClass03: "dh-txt01-false",//导航03
    dhtxtClass04: "dh-txt01-true",//导航04
    dhtop: true,//顶部导航
    userInfo:{},
    topW:"",
    wwSystemWidth:"",
    whSystemHeight:"",

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  //调用应用实例的方法获取用户数据
  var that=this
    app.getUserInfo(function (userInfo) {
      //更新用户数据
      that.setData({
        userInfo: userInfo
      })
    })
      wx.getSystemInfo({
      success: function (res) {
        that.setData({
          wwSystemWidth: res.windowWidth,
          whSystemHeight: res.windowHeight,
        })
      }
    })
     that.init();
  },
  init:function(){
     var that=this
     let _topW=that.data.wwSystemWidth*0.9;
     that.setData({
         topW:_topW
        })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  //导航事件
  //导航事件
  //导航事件
  //导航事件
  //导航事件
  //首页-点击事件
  dhtxt01Cllick: function (e) {
   wx.redirectTo({
      url: '../index/index'
    })
    console.log("F:点击首页")

  },
  //招聘群管-点击事件
  dhtxt02Cllick: function () {
        wx.redirectTo({
      url: '../zhaopin/zhaopin'
    })
    console.log("F:招聘群管")
  },
  //我的清单-点击事件
  dhtxt03Cllick: function () {
      wx.redirectTo({
      url: '../qingdan/qingdan'
    })
    console.log("F:我的清单")
  },
  //个人中心-点击事件
  dhtxt04Cllick: function () {
     
    
    console.log("F:个人中心")
  }
})