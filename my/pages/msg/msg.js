Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    image: "../../images/404.png",
  },

  // 监听页面加载
  onLoad: function (options) {

  },
  // 监听页面初次渲染完成
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
  // 监听页面显示
  onShow: function () {

  },
  // 监听页面隐藏
  onHide: function () {

  },
  // 监听页面卸载
  onUnload: function () {

  },
})