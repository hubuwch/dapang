//shopCar.js
Page({
  data: {
    title : '选择金额',
    amount : '',
    flag : true,
    style :'',
    msg:''
  },
  onLoad: function () {
    this.setData({
      amount : 1
    })
  },
  onClick : function(e){
    console.log(e.currentTarget.dataset.text);
    this.setData({
      flag: true,
      amount: e.currentTarget.dataset.text
    });
  },
  onClick1: function (e) {
    console.log(e.currentTarget.dataset.text);
    this.setData({
      flag : false,
       amount: e.currentTarget.dataset.text
    });
  },
  
  clickMe: function () {
    this.setData({ msg: "Hello World" })
  }
})