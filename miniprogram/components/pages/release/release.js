// miniprogram/components/pages/release/release.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '1',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    faculty: [
      '课外书',
      '人文与法学院',
      '国际教育学院',
      '外国语学院',
      '应用技术和继续教育学院',
      '理学院',
      '管理学院',
      '纺织学部',
      '经济学院',
      '艺术与服装学院',
      '计算机科学与技术学院',
      '电气工程与自动化学院',
      '机械工程学院',
      '材料科学与工程学院',
      '环境化学与工程学院',
      '电子与信息工程学院'
    ],
    grade: ['大一', '大二', '大三', '大四', '硕士', '博士', '考研', '出国', '其他'],
    formValue: {
      aaa: '',
      bbb: '',
      ccc: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '发布'
    });
    console.log(options)
    if (options.name) {
      this.setData({
        name: options.name
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
  facultyPickerChange(e) {
    console.log(e);
    this.setData({
      facultyindex: e.detail.value
    })
  },
  gradePickerChange(e) {
    console.log(e);
    this.setData({
      gradeindex: e.detail.value
    })
  },
  releaseTap(e) {
    console.log(e.detail.value)
    this.setData({
      formValue: e.detail.value
    })
    let value = JSON.stringify(e.detail.value)
    wx.navigateTo({
      url: `/components/pages/detail/detail?a=${value}`,
      success: (result) => {

      },
      fail: (e) => {
        console.log(e)
      },
      complete: () => {}
    });
  },
  change(e) {
    console.log('eeeeee', e)
    if (e.currentTarget.id === 'wenti') {
      this.setData({
        formValue: {
          aaa: 1,
          bbb: 0,
          ccc: 0
        }
      })
    } else if (e.currentTarget.id === 'fushi') {
      this.setData({
        formValue: {
          aaa: 0,
          bbb: 1,
          ccc: 0
        }
      })
    } else if (e.currentTarget.id === 'baihuo') {
      this.setData({
        formValue: {
          aaa: 0,
          bbb: 0,
          ccc: 1
        }
      })
    }
  }
})