// pages/city/city.js
var innerAudioContext = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    syWidth:"",//系统宽度
    syHeight:"",//系统高度
    kgUrlMusic:"on-laba-kg",//音乐开关按钮变换
    lbUrlMusic: "on-laba",//喇叭开关按钮变换
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
        })
      }
    })
    this.onMusic();//开启音乐
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  //播放音乐
  onMusic:function(){
   
    innerAudioContext.autoplay = true
    innerAudioContext.loop =true
    innerAudioContext.src = 'https://www.citytk.com/citytk/pkjs/audio/tuange.mp3'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
   
  },
//跳转到PK页面
pkonClick:function(){
  wx.navigateTo({
    url: '../index/index'
  })
},
  //跳转到lx页面
  lxonClick: function () {

  },
//背景音乐开关按钮
kgMusicOnClick:function(){
 
    var that=this;
    if (that.data.kgUrlMusic =="on-laba-kg"){
      var _kgUrlMusic ="off-laba-kg";
      var _lbUrlMusic = "off-laba";
      that.setData({
        kgUrlMusic: _kgUrlMusic,
        lbUrlMusic: _lbUrlMusic,
      })
      console.log("关闭音乐")
      innerAudioContext.stop();
      }else{
      var _kgUrlMusic = "on-laba-kg";
      var _lbUrlMusic = "on-laba";
      that.setData({
        kgUrlMusic: _kgUrlMusic,
        lbUrlMusic: _lbUrlMusic,
      })
      console.log("开启音乐")
      innerAudioContext.play();
      }
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
  
  }
})