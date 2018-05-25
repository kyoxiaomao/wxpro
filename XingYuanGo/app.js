//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {

      typeof cb == "function" && cb(this.globalData.userInfo)

    } else {
   console.log("发起登录请求")
      //调用登录接口
      wx.login({
        
        success: function (res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: 'https://www.citytk.com/php/wxminisdk/code.php',
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              data: {
                code: res.code
              },
              method: "POST",
              success: function (res) {
                that.globalData.wxid = res.data;
                
                 wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              that.globalData.encryptedData = res.encryptedData

              typeof cb == "function" && cb(that.globalData.userInfo, that.globalData.encryptedData,that.globalData.wxid)
            }
          })
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
         
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    encryptedData: "",
    wxid: ""

  }
})