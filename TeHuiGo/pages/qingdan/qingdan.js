// pages/qingdan/qingdan.js
Page({
  data: {
    dhtxtClass01: "dh-txt01-false",//导航01
    dhtxtClass02: "dh-txt01-false",//导航02
    dhtxtClass03: "dh-txt01-true",//导航03
    dhtxtClass04: "dh-txt01-false",//导航04
    dhtop: true,//顶部导航
    qdData: [{ viewId: 0, imgutl01: "../images/img1.jpg",djyhTitle:"儿童吃饭坐骑坐骑",logoimgutl01:"../images/biao1.png",price:"223",purchase:"2222",quanPrice:"43",day:"3月23日"},

    ],
    wwSystemWidth:"",
    whSystemHeight:"",
    djyhBoxW: "",
    qdBoxW:"",
    djyhImgW:"",
    djyhImgH:"",
    lqImgH:"",//领券按钮
    lqImgW:"",

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    //获取设备宽高
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
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  init:function(){
    //页面初始化
   let that = this
   let _titleW=that.data.wwSystemWidth*0.9;
   let _qdBoxW=that.data.wwSystemWidth-2;
   let _djyhImgW = (that.data.wwSystemWidth) * 0.35;
  let _djyhImgH = _djyhImgW;
  let _lqImgH=_djyhImgW;
 let _lqImgW=87/(163/_lqImgH);
    that.setData({
          titleW: _titleW,
          qdBoxW:_qdBoxW,
          djyhImgW:_djyhImgW,
          djyhImgH:_djyhImgH,
          lqImgH:_lqImgH,
          lqImgW:_lqImgW,
        })

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

    console.log("F:我的清单")
  },
  //个人中心-点击事件
  dhtxt04Cllick: function () {

    wx.redirectTo({
      url: '../zhongxin/zhongxin'
    })
    console.log("F:个人中心")
  }
})