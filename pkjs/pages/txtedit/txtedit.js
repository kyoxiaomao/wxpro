// pages/txtedit.js
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
    jishu:0,
 
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
      if(that.data.jishu<5){
        that.setData({
          jishu: that.data.jishu+1,
        })
    var daan = event.currentTarget.dataset['daan'];
    if (daan == that.data.anstrue){
        that.setData({
          tishi: "恭喜您回答正确，获得1分！正确答案:" + that.data.anstrue,
          flag:false,
        })
      this.insetfenshuforduiwu(that.data.duiwu, "1");

    }else{
      that.setData({
        tishi: "很遗憾回答错误，不能得分！正确答案:" + that.data.anstrue,
        flag: false,
      })
      }
      }else{
        //大于5题
        that.setData({
          jishu: 0,
        })
        wx.redirectTo({
          url: '../index/index'
        })
      }
    } 

  },
  //下一题目
  xiayitionclick:function(){
    var that=this;
    that.setData({
      tishi:"",
      flag: true,
    })
   that.loaddata();
  },
  huanti:function(){
    var that = this;
    var pages = getCurrentPages();
    if(that.data.yy=="完成"){
      console.log(that.data.yy)
      var currPage = pages[pages.length - 1];   //当前页面
      var prevPage = pages[pages.length - 2];  //上一个页面

      //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
      prevPage.setData({
        mydata: "582"
      })

      wx.navigateBack({
         delta: 1
       })
    }else{
 
    var _items = that.data.items;
    
    _items[0].name="a";
    _items[0].value = "A.中国共产党领导 行动指南 ";
 
    _items[1].name = "b";
    _items[1].value = "B. 共同富裕 根本遵循  ";
 
    _items[2].name = "c";
    _items[2].value = "C．中国共产党领导 根本遵循  ";
 
    _items[3].name = "d";
    _items[3].value = "D．共同富裕 行动指南";
  
    that.setData({
      items: _items,
      txt: "D．共同富裕 行动指南",
      yy:"完成",
      t:true,
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