// pages/txtedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: 'A．群众组织' },
      { name: 'CHN', value: 'B．群团组织' },
      { name: 'BRA', value: 'C．政党组织' },
      { name: 'JPN', value: 'D．社群组织' },
    ],
  
    txt:"C．政党组织",//正确答案存储
    context:"",//提示信息
    t:true,
    yy:"下一题",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var  that=this;
    var str="";
    if (e.detail.value == that.data.txt){
      str="恭喜您，回答正确！";
    }else{
      str = "很遗憾，回答错误！正确答案是" + that.data.txt;
    }
    that.setData({
      t:false,
      context: str,
    })
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