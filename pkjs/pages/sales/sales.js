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
    txtstr:"表现不错！",//提示字
    dacuo:"",//答错题数
    dadui:"",//答对
    lianxisai:false,//是否哦是练习赛
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 var that = this
    console.log("计时器:" + options.timer + "|得分: " + options.fsJiShu)
    var timerC = options.timer;
    var fsJiShuC = options.fsJiShu;
    that.setData({
      dadui: fsJiShuC-2,
    })
    var modeC = options.modeC;
    console.log("练习模式开启:" + modeC + "当前答对" + that.data.dadui)
    var _dadui = that.data.dadui;
    if (modeC=="true"){
      that.setData({
        lianxisai: true,
      })
      if (fsJiShuC < 10) {
        that.setData({
          txtstr: "继续努力，还有提升空间哦！",
          dacuo: 20 - _dadui,
        })
      } else {
        if (fsJiShuC < 20) {
          that.setData({
            txtstr: "成绩不错哦，加油！",
            dacuo: 20 - _dadui,
          })
        } else {
          that.setData({
            txtstr: "满分，你太棒啦！",
            dacuo: 20 - _dadui,
          })

        }
      }
    }else{
    if (fsJiShuC<5){
      that.setData({
        txtstr: "继续努力，还有提升空间哦！",
        dacuo: 5 - _dadui,
      })
   }else{
      if (fsJiShuC < 7) {
        that.setData({
          txtstr: "成绩不错哦，加油！",
          dacuo: 5 - _dadui,
        })
        }else{
        that.setData({
          txtstr: "满分，你太棒啦！",
          dacuo: 5 - _dadui,
        })

      }
    }
   }
 
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