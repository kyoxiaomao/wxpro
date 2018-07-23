// pages/fenxiang/fenxiang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wwSystemWidth: "",//设备宽度
    whSystemHeight: "",//设备高度
    wImage01: "",//广告图01宽度
    hImage01: "",//广告图01高度
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
          wwSystemWidth: res.windowWidth,
          whSystemHeight: res.windowHeight,
    
          hImage01: res.windowHeight,
          wImage01: res.windowHeight *750/1334,
        })
      }
    })
  },

  //点击开始时的时间
  timestart: function (e) {
    　　var _this = this;
    　　_this.setData({ timestart: e.timeStamp });
  },

  //点击结束的时间
  timeend: function (e) {
    　　var _this = this;
    　　_this.setData({ timeend: e.timeStamp });
  },

  //保存图片
  imgOnclick1: function (e) {
    　　var _this = this;
    　　var times = _this.data.timeend - _this.data.timestart;
    　　if (times > 300) {
      　　　　console.log("长按");
      　　　　wx.getSetting({
        　　　　　　success: function (res) {
          　　　　　　　　wx.authorize({
            　　　　　　　　　　scope: 'scope.writePhotosAlbum',
            　　　　　　　　　　success: function (res) {
              　　　　　　　　　　　　console.log("授权成功");
                          wx.getImageInfo({
                            src: '../images/fxpage.jpg',
                            success: function (res) {
                              console.log(res.path)
                              wx.saveImageToPhotosAlbum({
                                filePath: res.path,
                                success(res) {
                                  wx.showToast({
                                    title: '保存图片成功,快去分享到朋友圈吧！',
                                  })
                                },
                                fail(res) {
                                  wx.showToast({
                                    title: '保存图片失败！',
                                  })
                                }
                              })
                            }
                          })

                    　　　　　　　　　　　　　　　 
            　　　　　　　　　　}
          　　　　　　　　})
        　　　　　　}
      　　　　})
    　　}
  },

  //保存图片
  imgOnclick: function (e) {
    var _this = this;
    
      wx.getSetting({
        success: function (res) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success: function (res) {
              console.log("授权成功");
              wx.getImageInfo({
                src: '../images/fxpage01.jpg',
                success: function (res) {
                  console.log(res.path)
                  wx.saveImageToPhotosAlbum({
                    filePath: res.path,
                    success(res) {
                      wx.showToast({
                        title: '保存图片成功！',
                      })
                    },
                    fail(res) {
                      wx.showToast({
                        title: '保存图片失败！',
                      })
                    }
                  })
                }
              })


            }
          })
        }
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
  
  }
})