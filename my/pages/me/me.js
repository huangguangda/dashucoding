//index.js
var wxCharts = require('../../utils/wxcharts-min.js');
const app = getApp();
var ringChart = null;
Page({
  data: {
    selected: true,
    selected1: false
  },
  torecord() {
    wx.navigateBack({
      delta: 1,
    })
  },
  onLoad: function (e) {
    //  高度自适应
    var windowWidth = '', windowHeight = '';    //定义宽高
    try {
      var res = wx.getSystemInfoSync();    //试图获取屏幕宽高数据
      windowWidth = res.windowWidth / 750 * 690;   //以设计图750为主进行比例算换
      windowHeight = res.windowWidth / 750 * 550    //以设计图750为主进行比例算换
    } catch (e) {
      console.error('getSystemInfoSync failed!');   //如果获取失败
    }
    ringChart = new wxCharts({
      canvasId: "ringCanvas",
      type: "ring",
      series: [
        { data: 20, },
        { data: 30, },
        { data: 60, }
      ],
      width: windowWidth,
      height: windowHeight,
      dataLabel: false,
      legend: false,
    });
  },

  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },

  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  }
})
