//index.js
//获取应用实例
//调试：T:代表配置，F：代表点击事件，
var app = getApp()
Page({
  data: {
    imgarr: [
      'https://www.citytk.com/citytk/zjjxhy000001/1.jpg', 
      'https://www.citytk.com/citytk/zjjxhy000001/2.jpg', 
      'https://www.citytk.com/citytk/zjjxhy000001/3.jpg',
      'https://www.citytk.com/citytk/zjjxhy000001/4.jpg'
    ],
    whSwiper: "",//轮播高度
    hdImgHH:"",//活动图片高度
    wwSystemWidth: "",//设备宽度
    whSystemHeight: "",//设备高度
    dhtxtClass01: "dh-txt01-true",//导航01
    dhtxtClass02: "dh-txt01-false",//导航02
    dhtxtClass03: "dh-txt01-false",//导航03
    dhtxtClass04: "dh-txt01-false",//导航04
    dhbottom: true,//底部导航
    dhtop: true,//顶部导航
    touchstart:"",
    touchend:"",
    txthideflag:true,
    wImage01:"",//广告图01宽度
    hImage01: "",//广告图01高度
  
  },
  onLoad: function () {
    var that = this
    //获取设备宽高
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          wwSystemWidth: res.windowWidth,
          whSystemHeight: res.windowHeight,
          whSwiper: res.windowWidth *280/520,
          hdImgHH: 300 / (650 / res.windowWidth),

          wImage01: res.windowWidth *0.333-5,
          hImage01: 160/(130/(res.windowWidth * 0.333 - 5)),

        })
      }
    })
    console.log("T00:设备宽度" + that.data.wwSystemWidth + "|设备高度" + that.data.whSystemHeight + "|广告图片" + that.data.wImage01)
    
   
    this.dhInit();//初始化导航
    this.loadData(10);//加载内容


  },
  //拨打电话
  ondianhua:function(){
    wx.makePhoneCall({
      phoneNumber: '13656616234' //仅为示例，并非真实的电话号码
    })
  },
  sjonClick:function(){
    console.log("点击跳转中")
    wx.navigateTo({
      url: '../sales/sales'
    })
  }
  ,
 endtap:function(e){
 
    var that = this
    that.setData({
      touchend: e.timeStamp,
    })
  }
  ,
 starttap: function (e) {
 
    var that = this
    that.setData({
      touchstart: e.timeStamp,
    
    })
  }
  ,
 touchtap:function(e){
   var that = this
   if (this.data.touchend - this.data.touchstart>100){
    console.log(1)

     that.setData({
       txthideflag: false,
     })
   }
 },
 bianjionClick:function(e){
   wx.navigateTo({
     url: '../txtedit/txtedit'
   })
 }
 ,
 ontu01:function(){
  console.log("点击广告")
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

    //console.log("上拉");
    //var that = this;
    //let _dhbottom = true;
    //let _dhtop = true;
  //  that.setData({
  //    dhbottom: _dhbottom,
     // dhtop: _dhtop,
  //  })
   // console.log(that.data.dhbottom)
    //that.loadData(5);
   // wx.stopPullDownRefresh();

  },
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {

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
