Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    latitude: 24.4795100000,
    longitude: 118.0894800000,
    click: false, //是否显示弹窗内容
    option: false, //显示弹窗或关闭弹窗的操作动画
    markers: [{
        id: 0,
        latitude: 24.4455700000,
        longitude: 118.0824000000,
        iconPath: '',
        callout: {
          content: "星河盛世租26售8",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center',
          borderRadius: 100,
          color: '#fff',
          bgColor: '#ff611b'
          // borderColor:'#ff0000',
          // borderWidth: 2,
        },
      },
      {
        id: 1,
        latitude: 24.5131500000,
        longitude: 118.0468600000,
        iconPath: '',
        callout: {
          content: "星河盛世租26售8",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center',
          borderRadius: 100,
          color: '#ff611b',
          bgColor: '#fff',
        }

      },
      {
        id: 2,
        latitude: 24.7235700000,
        longitude: 118.1517300000,
        callout: {
          content: " 厦门市同安区政府 \n 100",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'center'
        }
      },

    ],
  },

  onLoad: function () {
    
  },
  onReady: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  // 滑动切换tab
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  // 点击tab切换
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  
  regionchange(e) {
    console.log("regiοnchange===" + e.type)
  },

  //点击merkers
  markertap(e) {
    let _that = this;
    if (!_that.data.click) {
      _that.setData({
        click: true,
      })
    }
    if (_that.data.option) {
      _that.setData({
        option: false,
      })
      setTimeout(() => {
        _that.setData({
          click: false,
        })
      }, 500)
    } else {
      _that.setData({
        option: true
      })
    }
  },

  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      // if (this.data.scale === 13) {
      that.setData({
        scale: --this.data.scale
      })
      // }
    } else {
      //  if (this.data.scale !== 13) {
      that.setData({
        scale: ++this.data.scale
      })
      // }
    }
  },
})