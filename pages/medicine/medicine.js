// pages/medicine/medicine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { value: '枸杞：益精明目，滋补肝肾', checked: false },
      { value: '金银花：益精明目，滋补肝肾', checked: true },
      { value: '麻黄：益精明目，滋补肝肾', checked: false },
    ],
    checkbox: {
      color: '#DDDDDD'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  // checkBox事件
  checkboxChange: function (e) {
    const that = this
    const items = that.data.items
    const checkArr = e.detail.value
    for (let i = 0; i < items.length; i++) {
      if (checkArr.indexOf(items[i].value) !== -1) {
        items[i].checked = true
      } else {
        items[i].checked = false
      }
      that.setData({
        items: items
      })
    }
  }
})