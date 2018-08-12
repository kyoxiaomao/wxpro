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
    datifun:"",//答题事件
    modeC:false,//是否是练习模式
    bgcss:"bg",//背景
 
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
    var duiwustr = options.duiwu;
    if (duiwustr=="lianxi"){
      that.setData({
        modeC: true,
        bgcss: "lxbg"
      })
    
    }else{
      that.insetfenshuforduiwu(options.duiwu, "2");
    
    }
    console.log("开启练习模式:" + that.data.modeC)
       this.loaddata();//加载题目
        this.countdown();//开启计时器

  },
  //提示器
  messhow:function(str){
    wx.showToast({
      title: str,
      icon: 'none',
      duration: 2000
    })
  },
  //计时器
 countdown:function(){
   var that=this;
   
   ontimer = setTimeout(function () {
      console.log("时间："+that.data.timer);
      that.setData({
        timer: that.data.timer+1,
      })
      that.countdown();
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
        console.log("给队伍加分返回结果"+res.data.length)
        if (res.data==1){
          console.log("给队伍加分成功！")
        
        }else{
          console.log("给队伍加分失败！")
        }
      },
      fail: function (e) {
        messhow("数据连接失败。。联系管理员");
        console.log("数据连接失败:" + e.errMsg)
      }
    })

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
        console.log("获取题目数据：" + res.data.length)
        if (res.data != "") {
          that.setData({
            timu: res.data[0].timu,
            ansa: res.data[0].ansa,
            ansb: res.data[0].ansb,
            ansc: res.data[0].ansc,
            ansd: res.data[0].ansd,
            anstrue: res.data[0].anstrue,
            datifun:"btanda",
          })
          console.log("加载题目成功：" + that.data.datifun)
        } else {
          that.messhow("加载题目失败。。。联系管理员");
          console.log("加载题目失败")
        }
      },
      fail: function (e) {
        that.messhow("数据连接失败。。。联系管理员");
        console.log("数据联系失败e:" + e.errMsg)
      }
    })
    
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
      if (that.data.modeC==false){
      that.insetfenshuforduiwu(that.data.duiwu, "1");
        }

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
    var i=5;
    if (that.data.modeC==true){
          i=20;
    }
    if (that.data.flag == false) {

    if (that.data.jishu < i) {
      that.setData({
        jishu: that.data.jishu + 1,
        datifun: "",//解除按钮限制
        tishi: "",
        flag: true,
      })
      console.log("答题事件解除：" + that.data.datifun)
      that.loaddata();
    } else {
      //大于5题
      clearTimeout(ontimer);
    var timerC=that.data.timer;
      var fsJiShuC = that.data.fsJiShu;
      var modeC = that.data.modeC;
      that.setData({
        jishu: 1,
        fsJiShu:2,
        timer:0,
      })
      console.log("当前时间：" + timerC + "当前分数：" + fsJiShuC)
      wx.reLaunch({
        url: '../sales/sales?timer=' + timerC + '&fsJiShu=' + fsJiShuC + '&modeC=' + modeC ,
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
    clearTimeout(ontimer);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearTimeout(ontimer);
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
 
  bindFormSubmit: function (e) {
    wx.redirectTo({
      url: '../index/index'
    })
    console.log("F:商家首页")
  }
})