// pages/sales/sales.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    syWidth: "",//系统宽度
    syHeight: "",//系统高度
    timer:0,//用时
    fsJiShu:0,//得分
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("计时器:" + options.timer + "|得分: " + options.fsJiShu)
    var timerC = options.timer;
    var fsJiShuC = options.fsJiShu;
    var that = this
    //获取设备宽高
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          syWidth: res.windowWidth,
          syHeight: res.windowHeight,
          timer: timerC,
          fsJiShu: fsJiShuC
         
        })
      }
    })

  },
  //继续答题
  jxdtonClick: function () {
    wx.reLaunch({
      url: '../index/index'
    })

  },
  //返回首页
fhsyonClick:function(){
  wx.reLaunch({
    url: '../city/city'
  })

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
    console.log("来自按钮的分享！")
    return {
      title: '海盐青年大学习',
      path: 'pages/city/city'
    }
  }
})