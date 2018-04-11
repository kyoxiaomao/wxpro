//index.js    
//获取应用实例    
var app = getApp()
Page({
  data: {
    imgarr: [
     
    ],
    wwSystemWidth: "",//设备宽度
    whSystemHeight: "",//设备高度 
    whSwiper: "",//轮播高度
    prosp:{},
    Ospid:"",//商品ID
  },
  onLoad: function (option) {
    console.log(option.id)
    var that = this
    //获取设备宽高
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          wwSystemWidth: res.windowWidth,
          whSystemHeight: res.windowHeight,
          whSwiper: res.windowWidth / 4 * 3
        })
      }
    })
    that.loadData(option.id);//获取商品信息
  }, 
  //根据商品ID获得商品信息
  loadData: function (uid) {
    var that = this
    wx.request({
      url: 'https://www.citytk.com/djyhphp/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "getdjyhdataforspid",
        spid:uid,
      },
      method: "POST",
      success: function (res) {
        console.log("获取独家优惠数据：" + res.data.length)
        
        if (res.data != "") {
          if (res.data[0].imgurl01!="null"){
            let obj = {};
            obj.url = res.data[0].imgurl01;
            that.data.imgarr.push(obj);
          }
          if (res.data[0].imgurl02 != "null") {
            let obj = {};
            obj.url = res.data[0].imgurl02;
            that.data.imgarr.push(obj);
          }
          if (res.data[0].imgurl03 != "null") {
            let obj = {};
            obj.url = res.data[0].imgurl03;
            that.data.imgarr.push(obj);
          }
          if (res.data[0].imgurl04 != "null") {
            let obj = {};
            obj.url = res.data[0].imgurl04;
            that.data.imgarr.push(obj);
          }
          if (res.data[0].imgurl05 != "null") {
            let obj = {};
            obj.url = res.data[0].imgurl05;
            that.data.imgarr.push(obj);
          }

          that.setData({
            imgarr: that.data.imgarr,
          })
          let spobj={};
          spobj.viewId = res.data[0].spid;
          spobj.sptitle = res.data[0].sptitle.substring(0, 20);
          spobj.price = res.data[0].price;
            var stryy = res.data[0].purchase;
            if (stryy.length > 4) {
              spobj.purchase = stryy.substr(0, stryy.length - 4) + "." + stryy.substr(stryy.length - 4, 1) + "万";
            } else {
              spobj.purchase = stryy;
            }
            spobj.xianprice = res.data[0].xianprice;
            spobj.quanprice = res.data[0].quanPrice;
            spobj.outtime = res.data[0].outtime;
            spobj.kouling = res.data[0].kouling;
            that.setData({
              prosp: spobj,
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
  //复制淘口令功能
  fzclick: function (e) {
 
    wx.setClipboardData({
      data: e.currentTarget.dataset.kouling ,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
            wx.showModal({
              title: '成功',
              showCancel: false,
              content: '您已经成功复制了淘口令' +e.currentTarget.dataset.kouling+'，现在直接打开官方淘宝客户端即可领取独家优惠券！',
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }
        })
      }
    })
  },
  fxclick: function (e) {
    var that=this;
   var _Ospid= e.currentTarget.dataset.kouling;
   that.setData({
     Ospid: _Ospid,
   })
    console.log('用户分享')
   
  },
  
  onShareAppMessage: function () {
    var that=this;
    if (that.data.Ospid==""){
      return {
        title: '独家购物优惠券，帮您省钱的小程序！',
        path: 'pages/idnex/index',
        success: function (res) {
          // 分享成功

        },
        fail: function (res) {
          // 分享失败
        }
      }
    }else{
      return {
        title: '独家购物优惠券，帮您省钱的小程序！',
        path: 'pages/detail/detail?id=' + that.data.Ospid,
        success: function (res) {
          // 分享成功

        },
        fail: function (res) {
          // 分享失败
        }
      }
    };
    
  }
})    