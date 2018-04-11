//index.js
//获取应用实例
//调试：T:代表配置，F：代表点击事件，
var app = getApp()
Page({
  data: {
    ggtjData: [
      { viewId: 1, ggtjTitle: "儿童吃饭坐骑", imgUrl01: "../images/img1.jpg", logoimgUrl01: "../images/biao1.png", logoimgUrl02: "", logoimgUrl03: "", price: "150", quanPrice: "50", purchase: "258" },
      { viewId: 2, ggtjTitle: "大人吃饭坐骑", imgUrl01: "../images/img1.jpg", logoimgUrl01: "../images/biao1.png", logoimgUrl02: "", logoimgUrl03: "", price: "250", quanPrice: "100", purchase: "38688" },
    ],
    djyhData: [

    ],
    imgarr: [
      'https://www.citytk.com/tehuigo/images/11.jpg', 
      'https://www.citytk.com/tehuigo/images/22.jpg', 
      'https://www.citytk.com/tehuigo/images/33.jpg'
    ],
    whSwiper: "",//轮播高度
    wwSystemWidth: "",//设备宽度
    whSystemHeight: "",//设备高度
    gftjImgW: "",//官方推荐图片宽度
    gftjImgH: "",//官方推荐图片高度
    djyhImgW: "",//独家优惠图片宽度
    djyhImgH: "",//独家优惠图片高度
    djyhImgbtW:"",//按钮图片大小
    djyhImgbtH: "",//按钮图片大小
    djyhtitleWW:"",//标题宽度
    djyhtitleSE00: "", //标题字体大
    djyhtitleSE01:"",//标题字体中
    djyhtitleSE02: "",//标题字体小
    djyhBoxW: "",//右侧内容区宽度
    dhtxtClass01: "dh-txt01-true",//导航01
    dhtxtClass02: "dh-txt01-false",//导航02
    dhtxtClass03: "dh-txt01-false",//导航03
    dhtxtClass04: "dh-txt01-false",//导航04
    dhbottom: false,//底部导航
    dhtop: true,//顶部导航
 
  },
  onLoad: function () {
    var that = this
    //获取设备宽高
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          wwSystemWidth: res.windowWidth,
          whSystemHeight: res.windowHeight,

          whSwiper: res.windowWidth *200/520
        })
      }
    })
    console.log("T00:设备宽度" + that.data.wwSystemWidth + "|设备高度" + that.data.whSystemHeight)
    
   
    this.dhInit();//初始化导航
    this.gftjInit();//初始化官方推荐内容
    this.djyhInit();//初始化独家优惠内容
    this.loadData(10);//加载内容


  },
  loadData: function (count) {
    var that = this
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
    console.log("加载内容完毕")
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
  //官方推荐内容初始化
  gftjInit: function () {

    var that = this
    var _gftjImgW = (that.data.wwSystemWidth - 30 - 4) / 2;
    var _gftjImgH = _gftjImgW;

    that.setData({
      gftjImgW: _gftjImgW,
      gftjImgH: _gftjImgH,
    })

    console.log("T11：官方推荐初始化完毕！" + "推荐图片宽度：" + that.data.gftjImgW)
  },
  //独家优惠内容初始化
  djyhInit: function () {
    var that = this
    var _djyhImgW = (that.data.wwSystemWidth) * 0.35;
    var _djyhImgH = _djyhImgW;
    var _djyhBoxW = (that.data.wwSystemWidth) - 7;
    var _djyhImgbtW = (that.data.wwSystemWidth) * 0.24;
    var _djyhtitleSE00 = _djyhBoxW * 0.05;
    var _djyhtitleSE01 = _djyhBoxW *0.040;
    var _djyhtitleSE02 = _djyhBoxW * 0.032;
    that.setData({
      djyhImgW: _djyhImgW,
      djyhImgH: _djyhImgH,
      djyhBoxW: _djyhBoxW,
      djyhtitleWW: _djyhBoxW - _djyhImgW-10,
      djyhImgbtW: _djyhImgbtW,
      djyhImgbtH: 64 / (200 / _djyhImgbtW),
      djyhtitleSE00: _djyhtitleSE00,
      djyhtitleSE01: _djyhtitleSE01,
      djyhtitleSE02: _djyhtitleSE02,
    })
    console.log("T21：独家优惠初始化完毕！" + "推荐图片宽度：" + that.data.djyhImgW + "|内容区宽度" + that.data.djyhBoxW)
  },
  //领券事件
  lqClick: function (e) {
    var spid = e.currentTarget.dataset.spid;
    wx.navigateTo({
      url: '../detail/detail?id=' + spid,
    })
  },
  //导航事件
  //导航事件
  //导航事件
  //导航事件
  //导航事件
  //首页-点击事件
  dhtxt01Cllick: function (e) {
   
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
