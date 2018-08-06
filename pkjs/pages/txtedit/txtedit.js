// pages/txtedit.js
var ontimer;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    syWidth: "",//系统宽度
    syHeight: "",//系统高度
     
    anbtWW:"",//答案按钮宽度
    anbtHH: "",//答案按钮高度
    tibtWW: "",//下一题按钮宽度
    tibtHH: "",//下一题按钮高度
    timu:"",
    ansa:"",
    ansb: "",
    ansc: "",
    ansd: "",
    anstrue: "",
    tishi:"",
    flag:true,//已答完
    duiwu:"",//当前支持队伍
    jishu:1,//题目计数
    fsJiShu:2,//分数计数
    timer:0,//计时器
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //获取设备宽高
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          syWidth: res.windowWidth,
          syHeight: res.windowHeight,
          anbtWW: res.windowWidth*0.95,
          anbtHH: (res.windowWidth * 0.95*66)/703,
          tibtWW: res.windowWidth * 0.95,
          tibtHH: (res.windowWidth * 0.95 * 92) / 703,
          duiwu: options.duiwu
        })
      }
    })
    console.log("当前支持队伍:" + options.duiwu)
    this.insetfenshuforduiwu(options.duiwu,"2");
        this.loaddata();//加载题目

  },
  //计时器
 Countdown:function(){
   var that=this;
   ontimer = setTimeout(function () {
      console.log("----Countdown----");
      that.setData({
        timer: timer+1,
      })
      Countdown();
    }, 1000);
  },
  //给对应队伍加分
  insetfenshuforduiwu:function(duiwumc,fenshumc){
    var that = this
    wx.request({
      url: 'https://www.citytk.com/citytk/pkjs/modeht/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "insetfenshuforduiwu",
        duiwu: duiwumc,
        fenshu: fenshumc
      },
      method: "POST",
      success: function (res) {
        if (res.data==1){
          console.log("插入数据成功！")
        }else{
          console.log("插入数据失败！")
        }
      },
      fail: function (e) {
        console.log("获取独家优惠数据失败e:" + e.errMsg)
      }
    })
    console.log("加载战队完毕")
  },
  //加载题目
  loaddata:function(){
    
    var that = this
    wx.request({
      url: 'https://www.citytk.com/citytk/pkjs/modeht/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "gettimu",
      },
      method: "POST",
      success: function (res) {
        console.log("获取数据：" + res.data[0].timu)

        if (res.data != "") {
          that.setData({
            timu: res.data[0].timu,
            ansa: res.data[0].ansa,
            ansb: res.data[0].ansb,
            ansc: res.data[0].ansc,
            ansd: res.data[0].ansd,
            anstrue: res.data[0].anstrue,
          })
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
  //答题点击
  btanda:function(event){
    
    var that=this;

    if (that.data.flag == true){
     
    var daan = event.currentTarget.dataset['daan'];
    if (daan == that.data.anstrue){
        that.setData({
          tishi: "恭喜您回答正确，获得1分！正确答案:" + that.data.anstrue,
          flag:false,
        })
        that.setData({
          fsJiShu: that.data.fsJiShu+1,
        })
      that.insetfenshuforduiwu(that.data.duiwu, "1");

    }else{
      that.setData({
        tishi: "很遗憾回答错误，不能得分！正确答案:" + that.data.anstrue,
        flag: false,
      })
      }
     
    } 

  },
  //下一题目
  xiayitionclick:function(){
 
    var that = this;
    if (that.data.flag == false) {

    if (that.data.jishu < 5) {
      that.setData({
        jishu: that.data.jishu + 1,
      })

      that.setData({
        tishi: "",
        flag: true,
      })
      that.loaddata();
    } else {
      //大于5题
      clearTimeout(ontimer);
    var timerC=that.data.timer;
      var fsJiShuC = that.data.fsJiShuC;
      that.setData({
        jishu: 1,
        fsJiShu:2,
        timer:0,
      })
      console.log("当前时间：" + timerC + "当前分数：" + fsJiShuC)
      wx.reLaunch({
        url: '../sales/sales?timer=' + timerC + '&fsJiShu=' + fsJiShuC,
      })
    
    }}else{
      wx.showToast({
        title: '未进行答题,请作答！',
        icon: 'none',
        duration: 2000
      })

    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  bindFormSubmit: function (e) {
    wx.redirectTo({
      url: '../index/index'
    })
    console.log("F:商家首页")
  }
})