//index.js
//获取应用实例
//调试：T:代表配置，F：代表点击事件，
var app = getApp()
Page({
  data: {
    imgarr: [
      'https://www.citytk.com/citytk/pkjs/images/1.jpg', 
      'https://www.citytk.com/citytk/pkjs/images/2.jpg', 
      'https://www.citytk.com/citytk/pkjs/images/3.jpg',
    ],
    whSwiper: "",//轮播高度
    hhSwiper: "",//轮播高度
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
    fxonoff:true,//分享页面
    btclickimgHH:"",//问答按钮高度
    hdmc: "数据读取中",//红队名称
    hdfs: "0",//红队分数
    hdbl:"50%",//红队占比
    ldmc: "数据读取中",//蓝队名称
    ldfs: "0",//蓝队分数
    ldbl: "50%",//蓝队占比
    userInfo:"",//用户数据
    hdonclickflag:"hdonclick",//红队按钮
    ldonclickflag: "ldonclick",//蓝队按钮
  },
  onLoad: function () {
    var that = this
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log("用户信息：" + res.userInfo.nickName)
              if (res.userInfo.nickName!=""){
              that.checkuser(res.userInfo.nickName);//验证用户
              }else{
                console.log("未获取到用户")
              }
             
            }
          })
        }
      }
    })

    //获取设备宽高
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          wwSystemWidth: res.windowWidth,
          whSystemHeight: res.windowHeight,
          whSwiper: res.windowWidth *417/750,
          hhSwiper: res.windowWidth * 625 / 750,
          btclickimgHH:(res.windowWidth/2*73)/298,
        })
      }
    })
    console.log("T00:设备宽度" + that.data.wwSystemWidth + "|设备高度" + that.data.whSystemHeight)
   
    this.loadData();//加载内容
  
  },

  datiClick:function(){
    wx.navigateTo({
      url: '../txtedit/txtedit'
    })
  },
  //验证用户
  checkuser: function (name) {
    var that = this
    wx.request({
      url: 'https://www.citytk.com/citytk/pkjs/modeht/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "checkusername",
        nickname: name,
      },
      method: "POST",
      success: function (res) {
        console.log("获取数据：" + res.data)
        if (res.data != "") {
          console.log("用户已存在")
          that.setData({
            hdonclickflag: "tishionclick",//红队按钮
            ldonclickflag: "tishionclick",//蓝队按钮
          })
        } else {
          console.log("新用户")
         that.adduser(name);//插入新用户
        }
      },
     
      fail: function (e) {
        console.log("数据连接失败:" + e.errMsg)
      }
    })
    console.log("用户校验完毕")
  },
  //提示信息
  tishionclick: function () {
    wx.showToast({
      title: "今日已答过题，请明日再来！",
      icon: 'none',
      duration: 3000
    })
  },
  //插入用户
  adduser: function (name) {
    var that = this
    wx.request({
      url: 'https://www.citytk.com/citytk/pkjs/modeht/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "addusername",
        nickname: name,
      },
      method: "POST",
      success: function (res) {
        console.log("插入用户获取结果：" + res.data)

        if (res.data != "") {
          console.log("插入用户成功")
        } else {
          console.log("插入用户失败")
        }
      },
      fail: function (e) {
        console.log("数据连接失败:" + e.errMsg)
      }
    })
    console.log("用户插入完毕")
  },
//点击红队
  hdonclick:function(){
    var that=this;
    wx.navigateTo({
      url: '../txtedit/txtedit?duiwu=' + that.data.hdmc,
    })
  },

  //点击蓝队
  ldonclick: function () {
    var that = this;
    wx.navigateTo({
      url: '../txtedit/txtedit?duiwu=' + that.data.ldmc,
    })
  },
  //拨打电话
  ondianhua:function(){
    wx.makePhoneCall({
      phoneNumber: '13656616234' //仅为示例，并非真实的电话号码
    })
  },
  sjonClick:function(e){
    var conId = e.target.dataset.conid;
    var _url = '../sales/sales?conId=' + conId;
    console.log("点击跳转中,conId=" + conId)
    wx.navigateTo({
      url: _url,
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
 //加载战队
  loadData: function () {
   var that = this
    wx.request({
      url: 'https://www.citytk.com/citytk/pkjs/modeht/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "getzhandui",
      },
      method: "POST",
      success: function (res) {
        console.log("获取数据：" + res.data.length)
       
        if (res.data != "") {
          var _hdmc = res.data[0].duiwu;
          var _ldmc = res.data[1].duiwu;
          that.setData({
            hdmc: _hdmc,
            ldmc: _ldmc,
          })
         
          that.loadDataFenShuforhd(_hdmc, _ldmc);
        

      
        } else {
          console.log("获取数据为空")
        } 
      },
      fail: function (e) {
        console.log("获取独家优惠数据失败e:" + e.errMsg)
      }
    })
    console.log("加载战队完毕")
  },
  //通过战队获取红队分数
  loadDataFenShuforhd: function (hdduiwumc, ldduiwumc){
    var that = this
    wx.request({
      url: 'https://www.citytk.com/citytk/pkjs/modeht/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "getfenshuforzhandui",
        duiwu: hdduiwumc,
      },
      method: "POST",
      success: function (res) {
       

        if (res.data != "") {


          console.log("获取数据为:" + res.data[0].sumfenshu)
          that.setData({
            hdfs: res.data[0].sumfenshu,
          })
          that.loadDataFenShuforld(ldduiwumc);
        } else {
          console.log("获取数据为空")
        }
      },
      fail: function (e) {
        console.log("获取数据失败e:" + e.errMsg)
      }
    })
    console.log("加载战队完毕")
  },
  //通过战队获取蓝队分数
  loadDataFenShuforld: function (duiwumc) {
    var that = this
    wx.request({
      url: 'https://www.citytk.com/citytk/pkjs/modeht/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "getfenshuforzhandui",
        duiwu: duiwumc,
      },
      method: "POST",
      success: function (res) {


        if (res.data != "") {


          console.log("获取数据为:" + res.data[0].sumfenshu)
          that.setData({
            ldfs: res.data[0].sumfenshu,
          })
          that.dhInit();//初始化分值
        } else {
          console.log("获取数据为空")
        }
      },
      fail: function (e) {
        console.log("获取数据失败e:" + e.errMsg)
      }
    })
    console.log("加载战队完毕")
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
  fenxiangOn:function(){
    var that=this;
    that.setData({
      fxonoff:false,
    })

  },
  fenxiangOff: function () {
    var that = this;
    that.setData({
      fxonoff: true,
    })

  },
  onShareAppMessage: function () {

  },
  fxpageOnclick:function(){
    //
    wx.navigateTo({
      url: '../fenxiang/fenxiang'
    })
  },
  //比例初始化
  dhInit: function () {
    var that=this;

    var _hdfs = parseInt(that.data.hdfs);
    var _ldfs = parseInt(that.data.ldfs);
    if (_hdfs == 0 && _ldfs==0){
      that.setData({
        hdbl: "50%",
        ldbl: "50%",
      })
    }else{
      if (_ldfs == 0) {
        that.setData({
          hdbl: "99%",
          ldbl: "1%",
        })
      }else{
        if (_hdfs == 0) {
          that.setData({
            hdbl: "1%",
            ldbl: "99%",
          })
          }else{
          var fs = parseInt(_hdfs / (_hdfs + _ldfs) * 1000 * 0.1);
          var _hdbl = fs + "%";
          var _ldbl = (100 - fs) + "%";
          that.setData({
            hdbl: _hdbl,
            ldbl: _ldbl,
          })
          }
      }
    }
    
    console.log("总分数：" + _ldbl )
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
