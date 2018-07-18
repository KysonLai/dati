//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  onReady:function(){

    //获得dialog组件
    this.dialog=this.selectComponent("#dialog"),
      this.header = this.selectComponent("#header")
  },

  showDialog(){
    this.dialog.showDialog();
  },
  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },

  
  onLoad: function () {
    
  },



  //页面跳转
  toStudy:function(){

    wx.navigateTo({
      url: '../study/study',
    })
  },
  toChallenge: function () {

    wx.navigateTo({
      url: '../challenge/challenge',
    })
  },
  toFight: function () {

    wx.navigateTo({
      url: '../fight/fight',
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
