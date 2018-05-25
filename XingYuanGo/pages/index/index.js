//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    images: [
      { id: 1, num: 1, xxtop: 0, xxleft: 0, xxwidth: 0, xxheight: 0 },
      { id: 2, num: 1, xxtop: 0, xxleft: 0, xxwidth: 0, xxheight: 0 },
      { id: 3, num: 1, xxtop: 0, xxleft: 0, xxwidth: 0, xxheight: 0 },
      { id: 4, num: 1, xxtop: 0, xxleft: 0, xxwidth: 0, xxheight: 0 },
      { id: 5, num: 1, xxtop: 0, xxleft: 0, xxwidth: 0, xxheight: 0 },
    ],
    ggcssnum: 2,//公告颜色
    v02hid: true,//星愿展示板
    vconhid: true,//输入框整体隐藏标识器
    hid: true,//视频隐藏标识器
    urlsrc: "",//视频链接
    motto: 'Hello World',
    userInfo: {},//用户相关数据
    userobj: {},//用户后台数据暂存
    userlv: 1,//用户等级
    xgflag: 0,//星星数
    xjflag: 0,//信件数
    encryptedData: "",//用户敏感数据
    wxid: "",//用户ID
    animationData: {},//动画对象
    ww: 0,//设备宽度
    wh: 0,//设备高度
    cttww: 0,//内容区高度
    kp01ww: 294,//输入面板
    kp01wh: 281,
    kp01top:90,
    xy01ww: 307.7,//展示面板
    xy01wh: 414.8,
    xy01left: 33.65,
    xy01top: 80,
    ta01top: 170,//提交面板距高
    ta01left: 90,//提交面板距左
    ta01width: 220,//提交面板宽度
    ta01height: 140,//提交面板高度
    tacontext: "",//ta输入框暂存数据,
    tacountflag: 0,//ta输入框计数器
    ttflag: "0/140",//ta输入框计数器
    tttop: 0,//计数器距高
    ttleft: 0,//计数器距左
    tb01top: 0,//提交面板距高
    tb01left: 0,//提交面板距左
    tb01width: 40,//提交面板宽度
    tb01height: 40,//提交面板高度
    vtb01top: 0,//视频提交按钮距高
    vtb01left: 0,//视频提交按钮距左
    vtb01width: 40,//视频提交按钮宽度
    vtb01height: 40,//视频提交按钮高度
    xxiconww: 0,//xx按钮
    xxiconwh: 0,
    xxiconleft: 0,
    xxicontop: 0,
    xgtitletop: 0,//星愿标题
    xgtitleleft: 0,
    xgtitle: "星愿的标题",
    xgcontenttop: 0,//星愿内容
    xgcontentleft: 0,
    xgcontentww: 0,
    xgcontentwh: 0,
    xgcontent: "这就是10个字的内容啊这就是10个字的内容啊这就是10个字的内容啊这就是10个字的内容啊这就是10个字的内容啊这就是10个字的内容啊这就是10个字的内容啊这就是10个字的内容啊这就是10个字的内容啊这就是10个字的内容啊这就是10个字的内容啊这就是10个字的内容啊这就是10个字的内容啊这就是10个字的内容啊这就是10个字的内容啊",
    videotop: 0,//video 图片定位
    videoleft: 0,
    videoww: 0,
    videowh: 0,
    zficonww: 0,//祝福宽度
    zficonwh: 0,
    zficonleft: 0,
    zficontop: 0,
    zfflag: 0,//祝福数
    zfflagtop: 0,
    zfflagleft: 0,
    zfdataid: "",//当前打开心愿的ID
    zfdatawxid: "",//祝福发布者ID
    wf01ww: 0,//玩法面板
    wf01wh: 0,
    wf01left: 0,
    wf01top: 0,
    wf01hid: false,//玩法隐藏
    wfxxww: 0,//玩法XX按钮
    wfxxwh: 0,
    wfxxleft: 0,
    wfxxtop: 0,
    xyxxww: 0,//星愿XX按钮
    xyxxwh: 0,
    xyxxleft: 0,
    xyxxtop: 0,

  },
  //事件处理函数
  onLoad: function () {
    console.log('onLoad事件处理中')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo, encryptedData, wxid) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        encryptedData: encryptedData,
        wxid: wxid
      })
      console.log("导入用户数据中")
      that.checkforid();//验证用户事件
    });

  },
  //初始化
  onShow: function () {
    console.log('onShow事件处理中' + this.data.images[0].top)

    //this.funggdata(); //公告变色
    this.init();//获取设备高度
    this.xxshow();  //星星闪烁动画事件
    this.cctwInit();//内容区域初始化
    this.funta01();//输入框初始化
    this.funtb01();//提交按钮初始化
    this.funtt();//计数器初始化
    this.funvtb01();//视频提交按钮初始化
    this.funxxicon();//xx按钮初始化
    this.funxgtitle();//星愿标题初始化
    this.funxgcontent();//星愿内容初始化
    this.funvideo();//视频图片初始化
    this.funzficon();//祝福数图片初始化
    this.funzfflag();//祝福数文本初始化
    for (var i = 0; i < 5; i++) {
      this.xxRandomShow(i);//星星随机事件
    }


  },
  //玩法面板开启
  funwf: function () {
    console.log("开启玩法面板")
    var that = this
    if (that.data.wf01hid == true) {
      that.data.wf01hid = false;
    } else {
      that.data.wf01hid = true;
    }

    var flagdata = that.data.ww / 375;
    var _wfww = Math.floor(325.8 * flagdata);
    var _wfwh = Math.floor(439.2 * flagdata);
    var _wfleft = (that.data.ww - _wfww) / 2;
    var _wftop = Math.floor(80 * flagdata);

    var _wfxxww = Math.floor(36 * flagdata);
    var _wfxxwh = Math.floor(30 * flagdata);
    var _wfxxleft = Math.floor(310 * flagdata);
    var _wfxxtop = Math.floor(80 * flagdata);
    that.setData({
      wf01hid: that.data.wf01hid,
      wf01ww: _wfww,
      wf01wh: _wfwh,
      wf01left: _wfleft,
      wf01top: _wftop,
      wfxxww: _wfxxww,
      wfxxwh: _wfxxwh,
      wfxxleft: _wfxxleft,
      wfxxtop: _wfxxtop,
    })

  },
  //玩法面板关闭
  funwfclose: function () {
    console.log("玩法面板关闭")
    var that = this
    that.data.wf01hid = true;
    that.setData({
      wf01hid: that.data.wf01hid,
    })
  },
  //公告显示
  funggdata: function () {
    var that = this
    setInterval(function () {
      switch (that.data.ggcssnum) {
        case 1:
          that.data.ggcssnum = 2;
          break;
        case 2:
          that.data.ggcssnum = 3;
          break;
        case 3:
          that.data.ggcssnum = 1;
          break;
      }
      this.setData({
        ggcssnum: that.data.ggcssnum,
      });

    }.bind(this), 100)
  },
  //内容高度以及卡牌宽高设置
  cctwInit: function () {
    var ctw = this.data.wh - 69;
    var ggflag = this.data.ww / this.data.kp01ww;
    var _kp01wh = Math.floor(this.data.kp01wh * ggflag);
    var _kp01ww = this.data.ww;
  // var  _kp01top =90*ggflag;
    console.log("卡牌的高度:" + _kp01wh + "px|卡牌的宽度：" + _kp01ww + "px")

    var flagdata = this.data.ww / 375;
    var _xy01ww = Math.floor(307.7 * flagdata);
    var _xy01wh = Math.floor(414.8 * flagdata);
    var _xy01left = Math.floor(33.6 * flagdata);
    var _xy01top = Math.floor(80 * flagdata);
    var that = this
    that.setData({
      cttww: ctw,//内容区域高度
      kp01ww: _kp01ww,//卡牌背景宽度
      kp01wh: _kp01wh,//卡牌背景高度
     // kp01top:_kp01top,
      xy01ww: _xy01ww,
      xy01wh: _xy01wh,
      xy01left: _xy01left,
      xy01top: _xy01top
    })
  },
  //星星闪烁方法
  xxshow: function () {
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
    })
    this.animation = animation;
    setInterval(function () {
      animation.opacity(0.5).step();
      animation.opacity(1).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 800)
  },
  //闪烁星星点击事件
  onClickEvent: function (e) {
    console.log("目前点击的星星号码是:" + e.target.id)
    this.xxRandomShow(e.target.id - 1)
    this.xyShow();
  },
  //打开星愿展示面板
  xyShow: function () {
    var that = this
    wx.request({
      url: 'https://www.citytk.com/php/wxminisdk/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "getxydata",
      },
      method: "POST",
      success: function (res) {
        console.log("获取星愿数据：" + res.data.xy)
        if (res.data != "") {

          that.setData({
            v02hid: false,
            xgtitle: res.data.name,//刷新星愿标题
            xgcontent: res.data.xy,//星愿内容
            zfflag: res.data.zf,//祝福数
            zfdataid: res.data.id,//心愿id
            zfdatawxid: res.data.wxid//心愿发布者id

          })
        } else {
          console.log("获取星愿数据为空")
        }
      },
      fail: function (e) {
        console.log("获取星愿数据失败e:" + e)
      }
    })
    console.log("星愿展示面板开启")

  },
  //关闭星愿展示面板
  xxOnClick: function () {
    var that = this
    that.setData({
      v02hid: true,
    })
    console.log("星愿展示面板关闭")
  },
  //星星随机事件
  xxRandomShow: function (i) {

    var l = Math.floor(Math.random() * (this.data.ww - 100));//距左
    var t = Math.floor(Math.random() * (this.data.wh - 330)) + 60;//距高
    var xflag = (Math.floor(Math.random() * 100) + 10) / 100;//星星大小的系数
    var xw = Math.floor(80 * xflag) + 40;//星星宽度
    var xh = Math.floor(116 * xflag) + 58;//星星高度
    this.data.images[i].num = 0;
    this.data.images[i].xxtop = t;
    this.data.images[i].xxleft = l;
    this.data.images[i].xxwidth = xw;
    this.data.images[i].xxheight = xh;
    this.setData({
      images: this.data.images,
    })
    this.data.images[i].num = 1;
    setTimeout(function () {
      this.setData({
        images: this.data.images,
      })
    }.bind(this), 1000)
  },

  //初始化init，获取系统设备宽高
  init: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          ww: res.windowWidth,
          wh: res.windowHeight,
        })
      }
    })
  },
  //提交面板定位初始化
  funta01: function () {
    var fta01width = this.data.kp01ww * 0.51 + 5;
    var fta01height = this.data.kp01wh * 0.34;
    var fta01top = this.data.kp01wh * 0.22 + 90;
    var fta01left = this.data.kp01ww * 0.24 - 1;
    console.log("输入框距上：" + fta01top)
    var flagdata = this.data.ww / 375;
    var _xyxxww = Math.floor(30 * flagdata);
    var _xyxxwh = _xyxxww;
    var _xyxxleft = Math.floor(280 * flagdata);
    var _xyxxtop = Math.floor(83 * flagdata);;

    var that = this
    that.setData({
      ta01top: fta01top,
      ta01left: fta01left,
      ta01width: fta01width,
      ta01height: fta01height,
      xyxxww: _xyxxww,
      xyxxwh: _xyxxwh,
      xyxxleft: _xyxxleft,
      xyxxtop: _xyxxtop,
    })
  },
  //提交按钮定位初始化
  funtb01: function () {
    var ftb01width = this.data.kp01ww * 0.44;
    var ftb01height = this.data.kp01wh * 0.14;
    var ftb01top = this.data.kp01wh * 0.80 + 90;
    var ftb01left = this.data.kp01ww * 0.30 - 1;
    var that = this
    that.setData({
      tb01top: ftb01top,
      tb01left: ftb01left,
      tb01width: ftb01width,
      tb01height: ftb01height
    })
  },
  //视频提交按钮定位初始化
  funvtb01: function () {
    var fvtb01width = this.data.kp01ww * 0.13;
    var fvtb01height = fvtb01width;
    var fvtb01top = this.data.kp01wh * 0.62 + 90;
    var fvtb01left = this.data.kp01ww * 0.25 - 1;
    var that = this
    that.setData({
      vtb01top: fvtb01top,
      vtb01left: fvtb01left,
      vtb01width: fvtb01width,
      vtb01height: fvtb01height
    })
  },
  //计数器定位初始化
  funtt: function () {
    var ftttop = this.data.kp01wh * 0.57 + 90;
    var fttleft = this.data.kp01ww * 0.65 - 1;
    var that = this
    that.setData({
      tttop: ftttop,
      ttleft: fttleft,
    })
    console.log("计数器完成定位。距高:" + this.data.tttop + "|距左:" + this.data.ttleft)
  },
  //xx按钮初始化定位
  funxxicon: function () {
    var flagdata = this.data.ww / 375;
    var _xxiconww = Math.floor(30.6 * flagdata);
    var _xxiconwh = Math.floor(25.5 * flagdata);
    var _xxiconleft = Math.floor(278 * flagdata);
    var _xxicontop = Math.floor(88 * flagdata);
    var that = this
    that.setData({
      xxiconww: _xxiconww,
      xxiconwh: _xxiconwh,
      xxiconleft: _xxiconleft,
      xxicontop: _xxicontop
    })
  }
  ,
  //星愿标题初始化
  funxgtitle: function () {
    var flagdata = this.data.ww / 375;

    var _xgtitletop = Math.floor(93 * flagdata);
    var _xgtitleleft = Math.floor(58 * flagdata);
    var that = this
    that.setData({
      xgtitletop: _xgtitletop,
      xgtitleleft: _xgtitleleft
    })
  },
  //星愿内容初始化
  funxgcontent: function () {
    var flagdata = this.data.ww / 375;

    var _xgcontenttop = Math.floor(125 * flagdata);
    var _xgcontentleft = Math.floor(56 * flagdata);
    var _xgcontentww = Math.floor(265 * flagdata);
    var _xgcontentwh = Math.floor(125 * flagdata);
    var that = this
    that.setData({
      xgcontentwh: _xgcontentwh,
      xgcontentww: _xgcontentww,
      xgcontenttop: _xgcontenttop,
      xgcontentleft: _xgcontentleft
    })
  },
  //video视频图片初始化
  funvideo: function () {
    var flagdata = this.data.ww / 375;

    var _videotop = Math.floor(260 * flagdata);
    var _videoleft = Math.floor(60 * flagdata);
    var _videoww = Math.floor(252 * flagdata);
    var _videowh = Math.floor(189 * flagdata);
    var that = this
    that.setData({
      videowh: _videowh,
      videoww: _videoww,
      videotop: _videotop,
      videoleft: _videoleft
    })
  },
  //祝福数图片初始化
  funzficon: function () {
    var flagdata = this.data.ww / 375;

    var _zficontop = Math.floor(465 * flagdata);
    var _zficonleft = Math.floor(55 * flagdata);
    var _zficonww = Math.floor(56 * flagdata);
    var _zficonwh = Math.floor(18 * flagdata);
    var that = this
    that.setData({
      zficonwh: _zficonwh,
      zficonww: _zficonww,
      zficontop: _zficontop,
      zficonleft: _zficonleft
    })
  },
  //祝福数文本初始化
  funzfflag: function () {
    var flagdata = this.data.ww / 375;
    var that = this
    var _zfflagtop = that.data.zficontop - 5;
    var _zfflagleft = that.data.zficonleft + that.data.zficonww + 5;


    that.setData({

      zfflagtop: _zfflagtop,
      zfflagleft: _zfflagleft
    })
  },

  //ta输入框失去焦点时事件
  taContextEvent: function (e) {
    this.data.tacontext = e.detail.value;
    console.log("输入框的当前内容:" + this.data.tacontext)
  },
  //ta输入字符时触发事件
  taInputinputEvent: function (e) {
    this.data.tacontext = e.detail.value;
    var count = this.data.tacontext.length;
    var str = count + "/140";
    var that = this
    that.setData({
      ttflag: str,
    })
    console.log("输入字数:" + count)
  },
  //选择视频事件
  choosevideo: function () {
    console.log("事件")
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 12,
      camera: 'back',
      success: function (res) {
        that.setData({
          urlsrc: res.tempFilePath,
          hid: false,

        })
      }
    })
  },
  //许愿事件
  xuyuanClick: function () {
    console.log("触发许愿事件")
    var that = this
    if (that.data.vconhid == true) {
      that.setData({
        vconhid: false,//输入面板开启
      })
    } else {
      that.setData({
        vconhid: true,//输入面板关闭
      })
    }


  },
  //关闭许愿面板
  funxxclose: function () {
    var that = this
    that.setData({
      vconhid: true,//输入面板关闭
    })
  },
  //验证是否为新用户方法
  checkforid: function () {
    console.log("验证是否为新用户")
    var that = this
    if (that.data.wxid != "") {
      wx.request({
        url: 'https://www.citytk.com/php/wxminisdk/mode.php',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          mode: "checkuserForid",
          wxid: that.data.wxid,
        },
        method: "POST",
        success: function (res) {
          if (res.data < 1) {
            that.setuser();//插入一个新用户
          } else {
            console.log("老用户数据获取")
            that.getuser(that.data.wxid);
          }
        },
        fail: function (e) {
          console.log(e)
        }
      })
    } else {
      console.log("未获得wxid")
    }
  },
  //新用户添加事件
  setuser: function () {
    console.log("新用户添加中")
    var that = this
    wx.request({
      url: 'https://www.citytk.com/php/wxminisdk/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "setuser",
        wxid: that.data.wxid,
        name: that.data.userInfo.nickName,
        gender: that.data.userInfo.gender,
        city: that.data.userInfo.city,
      },
      method: "POST",
      success: function (res) {
        if (res.data) {
          that.setData({
            userlv: 1,//用户等级
            xgflag: 3,//星星数
            xjflag: 0,//信件数
          })
          console.log("新用户添加成功")
        } else {
          console.log("添加用户异常:" + res.data)
        }

      },
      fail: function (e) {
        console.log(e)
      }
    })
  },
  //获取老用户信息
  getuser: function (wxidstr) {
    console.log("获取老用户信息中")
    var that = this
    wx.request({
      url: 'https://www.citytk.com/php/wxminisdk/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "getuserforwxid",
        wxid: wxidstr,
      },
      method: "POST",
      success: function (res) {
        if (res.data) {
          that.setData({
            userobj: res.data[0],
            userlv: res.data[0].lv,//用户等级
            xgflag: res.data[0].xg,//星星数
            xjflag: res.data[0].xj,//信件数
          })
          console.log("老用户数据获取成功")
        } else {
          console.log("老用户信息获取异常:" + res.data)
        }

      },
      fail: function (e) {
        console.log(e)
      }
    })
  },
  //星愿提交事件
  bindFormSubmit: function () {
    console.log("提交事件处理中：" + this.data.urlsrc)
    var that = this;
    if (that.data.urlsrc != "") {
      wx.uploadFile({
        url: 'https://www.citytk.com/upload', //仅为示例，非真实的接口地址
        header: {
          "Content-Type": "multipart/form-data"
        },
        method: "POST",
        filePath: that.data.urlsrc,
        name: 'file',
        success: function (res) {
          /* */
          console.log(res.data)
          //do something
        },
        fail: function (e) {
          console.log(e)
        }
      })
    } else {
      if (that.data.xgflag > 0) {
        if (that.data.tacontext != "") {
          var count = this.data.tacontext.length;
          if (count >= 10) {
            wx.request({
              url: 'https://www.citytk.com/php/wxminisdk/mode.php',
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              data: {
                mode: "setxydata",
                wxid: that.data.wxid,
                name: that.data.userInfo.nickName,
                xydata: that.data.tacontext,
              },
              method: "POST",
              success: function (res) {
                if (res.data == 1) {
                  that.updataxg();//更新星星数量
                  console.log("提交星愿成功！" + res.data)
                }
              },
              fail: function (e) {
                that.showTT("提交星愿失败！");
                console.log(e)
              }
            })
          } else {
            that.showTT("您的星愿必须大于10个字符！");
          }
        } else {
          that.showTT("请填写星愿内容！");
        }

      } else {
        that.showTT("您已经没有星愿数，请明天再来吧！");
        that.setData({
          vconhid: true,//输入面板关闭
        })
      }
    }

  },
  //点赞祝福
  zfOnClick: function () {
    var that = this
    console.log("获取当前祝福ID：" + that.data.zfdataid)
    //检测是否已经点赞祝福过
    wx.request({
      url: 'https://www.citytk.com/php/wxminisdk/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "getzfdata",
        zfid: that.data.zfdataid,  //对应星愿的的ID
        fromwxid: that.data.wxid, //用户自己的wxid
        towxid: that.data.zfdatawxid //星愿发布者的wxid
      },
      method: "POST",
      success: function (res) {

        if (res.data > 0) {
          console.log("已点赞过:" + res.data)
          that.showTT("您已为他(她)祝福过！");

        } else {
          console.log("未点赞过:" + res.data)

          that.setzfdata();
        }

      },
      fail: function (e) {

        console.log("点赞祝福失败！" + e)
      }
    })

  },
  //执行点赞祝福
  funzf: function () {
    var that = this
    wx.request({
      url: 'https://www.citytk.com/php/wxminisdk/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "updataxgzf",
        zfid: that.data.zfdataid,
      },
      method: "POST",
      success: function (res) {

        if (res.data == 1) {
          console.log("点赞祝福成功" + res.data)
          that.data.zfflag = parseInt(that.data.zfflag) + 1;
          that.setData({
            zfflag: that.data.zfflag,//点赞祝福数+1
          })

        } else {
          console.log("点赞祝福后台数据异常:" + res.data)
        }

      },
      fail: function (e) {

        console.log("点赞祝福失败！" + e)
      }
    })
  },
  //插入 点赞祝福信息
  setzfdata: function () {
    var that = this
    wx.request({
      url: 'https://www.citytk.com/php/wxminisdk/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "setzfdata",
        zfid: that.data.zfdataid,  //对应星愿的的ID
        fromwxid: that.data.wxid, //用户自己的wxid
        towxid: that.data.zfdatawxid //星愿发布者的wxid
      },
      method: "POST",
      success: function (res) {

        if (res.data > 0) {
          console.log("插入点赞信息成功:" + res.data)
          that.funzf();
        } else {
          console.log("插入点赞信息失败:" + res.data)

        }

      },
      fail: function (e) {

        console.log("点赞祝福失败！" + e)
      }
    })
  },
  //更新星愿数量
  updataxg: function () {
    var that = this
    wx.request({
      url: 'https://www.citytk.com/php/wxminisdk/mode.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        mode: "updataxg",
        wxid: that.data.wxid,
        sl: "-1",
      },
      method: "POST",
      success: function (res) {

        if (res.data == 1) {
          console.log("更新星愿成功" + res.data)
          that.showTT("提交星愿成功！");
          that.data.xgflag = that.data.xgflag - 1;
          that.setData({
            xgflag: that.data.xgflag,
            tacontext: "",
            tacountflag: 0,//ta输入框计数器
            ttflag: "0/140",//ta输入框计数器
            vconhid: true,//输入面板关闭
          })
        }

      },
      fail: function (e) {
        that.showTT("提交星愿失败！");
        console.log(e)
      }
    })
  },
  showTT: function (str) {
    wx.showToast({
      title: str,
    })
    setTimeout(function () {
      wx.hideToast()
    }, 1500)

    console.log("延时" + tt)
  }


})