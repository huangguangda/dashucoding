//about.js
//获取应用实例
var app = getApp();
Page({
  data: {
    year: '',
    showLog: false
  },
  onLoad: function () {
    console.log('about->', app)
    this.setData({
      year: new Date().getFullYear()
    });
  },
  toggleLog: function () {
    this.setData({
      showLog: !this.data.showLog
    });
  }
});