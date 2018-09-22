// pages/index/index.js
var listData = require("../../js/listData.js");
Page({
  data: {
    listData: listData
  },
  readDetail:function(event) {
    var index = event.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../read-detail/read-detail?index=' + index,
    })
  }
})