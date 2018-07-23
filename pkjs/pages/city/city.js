//index.js
//获取应用实例
//调试：T:代表配置，F：代表点击事件，
var app = getApp()
Page({
  data: {
    items: [
      { name: 'dy', value: '地域', checked: 'true' }, 
      { name: 'hy', value: '行业' }, 
    ],
    tjhdIMGWW: "",//推荐活动图片宽度
    tjhdIMGHH: "",//推荐活动图片高度
    hdImgHH: "",//活动图片高度
    wwSystemWidth: "",//设备宽度
    whSystemHeight: "",//设备高度
    dhtxtClass01: "dh-txt01-false",//导航01
    dhtxtClass02: "dh-txt01-false",//导航02
    dhtxtClass03: "dh-txt01-true",//导航03
    dhtxtClass04: "dh-txt01-false",//导航04
    dhbottom: false,//底部导航
    dhtop: true,//顶部导航
 
  },
  onLoad: function () {
    var that = this
    //获取设备宽高
    wx.getSystemInfo({
      success: function (res) {
        var _tjhdIMGWW = res.windowWidth * 0.3;
        that.setData({
          wwSystemWidth: res.windowWidth,
          whSystemHeight: res.windowHeight,

          tjhdIMGWW: _tjhdIMGWW,
          tjhdIMGHH: 358 / (247 / _tjhdIMGWW),
          hdImgHH: 300 / (650 / res.windowWidth),
        })
      }
    })
    console.log("T00:设备宽度" + that.data.wwSystemWidth + "|设备高度" + that.data.whSystemHeight)
    
   
    this.dhInit();//初始化导航
    this.loadData(10);//加载内容


  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
  ,
  loadData: function (count) {
   /* var that = this
    wx.request({
      url: 'https://www.citytk.com/djyhphp/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "getdjyhdata",
      },
      method: "POST",
      success: function (res) {
        console.log("获取独家优惠数据：" + res.data.length)
        if (res.data.length<count){
          count = res.data.length;
        } 
        if (res.data != "") {
          for (let i = 0; i < count; i++) {
            let obj = {};
            obj.viewId = res.data[i].spid;
            obj.imgutl01 = res.data[i].imgurl01;
            obj.djyhtitle = res.data[i].sptitle.substring(0, 24);
            if (res.data[i].dplx = "天猫") {
              obj.logoimgutl01 = "../images/dptb.jpg";
            } else {
              obj.logoimgutl01 = "../images/dptb.jpg";
            }
            obj.price = res.data[i].price;
            var stryy= res.data[i].purchase;
            if (stryy.length>4){
              obj.purchase = stryy.substr(0, stryy.length - 4) + "." + stryy.substr(stryy.length-4, 1)+"万";
            }else{
              obj.purchase = stryy;
            }
           
            obj.quanPrice = res.data[i].quanPrice;
            obj.day = res.data[i].outtime;
           
            that.data.djyhData.push(obj);
          }
          that.setData({
            djyhData: that.data.djyhData,
          })

        } else {
          console.log("获取独家优惠数据为空")
        }
      },
      fail: function (e) {
        console.log("获取独家优惠数据失败e:" + e.errMsg)
      }
    })
    console.log("加载内容完毕")*/
  },
  //下拉事件
  onPullDownRefresh: function () {
    console.log("下拉")
  },
  //上拉事件
  onReachBottom: function () {
    //上拉  

    console.log("上拉");
    var that = this;
    //let _dhbottom = true;
    //let _dhtop = true;
  //  that.setData({
  //    dhbottom: _dhbottom,
     // dhtop: _dhtop,
  //  })
    console.log(that.data.dhbottom)
    that.loadData(5);
    wx.stopPullDownRefresh();

  },
  //导航初始化
  dhInit: function () {
    console.log("T10：导航初始化完毕！")
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
    console.log("F:商家首页")

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
      url: '../city/city'
    })
    console.log("F:全城活动")
  },
  //个人中心-点击事件
  dhtxt04Cllick: function () {
    
    wx.redirectTo({
      url: '../zhongxin/zhongxin'
    })
    console.log("F:个人中心")
  },
  //搜索页面-点击事件
  ssClick:function(){
    wx.navigateTo({
      url: '../sousuo/sousuo'
    })
    console.log("F:搜索页面")
  }
})
