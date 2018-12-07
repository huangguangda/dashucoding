// pages/jl/jl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    cate: '',
    account: '',
    modalHidden: true
  },
  //   标题文本框
  bindTitleInput: function(e) {
    this.setData({
      title: e.detail.value
    })
    console.log(e.detail.value)
  },
  //   金额radio
  radioChange: function(e) {
    this.setData({
      cate: e.detail.value
    })
    console.log(e.detail.value)
  },
  //   金额文本框  
  bindAccountInput: function(e) {
    this.setData({
      account: e.detail.value
    })
    console.log(e.detail.value)
  },
  save: function() {
    var that = this
    // 本条数据打包成json
    var record = {
      title: this.data.title,
      cate: this.data.cate,
      account: this.data.account,
    }
    var data = []

    wx.getStorage({
      key: 'db',
      success: function(res) {
        console.log('db:' + res.data)
        data = res.data
        // 取出本地数据
        data.push(record)
        // 存回本地
        wx.setStorage({
          key: 'db',
          data: data
        })

        // 提示框
        that.setData({
          modalHidden: false
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.getStorage({
      key: 'db',
      // 初始加载无数据，故插入一条空数组的新key
      fail: function() {
        // 存回本地
        wx.setStorage({
          key: 'db',
          data: []
        })
      }
    })
  },
  // 关闭对话框
  hideAlertView: function() {
    this.setData({
      'modalHidden': true
    })
    // 返回上一页
    wx.navigateBack()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})