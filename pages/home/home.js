//home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[{
      name:"首页"
      },{
      name:"附近"
      },{
      name:"电影"
      },{
      name:"新闻"
      }],
    imgUrls: [
      'http://localhost/images/1.jpg',
      'http://localhost/images/2.jpg',
      'http://localhost/images/3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    location: ''
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocation();           
  },

 getLocation : function(){
   var that = this;
   wx.request({
     url: 'http://apis.map.qq.com/ws/location/v1/ip?key=6R5BZ-K4BCK-4IIJJ-ARWAI-I5CVV-SIB42',
     header: {//请求头
       "Content-Type": "applciation/json"
     },
     success: res => {
       console.log(res);
       that.setData({

         location: res.data.result.ad_info,
       });
      
     }
   })

   },

   toSwitchCity:function(){
     wx.navigateTo({
       url: '../switchCity/switchCity?location='+ this.data.location.city,
     })
   }




  
})