// app.js
import {userLogin } from "./utils/login";
App({
  onLaunch() {
    // login start
    // userLogin().then((token)=>{
    //   console.log('登录流程结束')
    //   //如果需要获取用户信息等 可以选择在此处理 或 修改utils/login.js的逻辑
    //   // dosometion
    // }).catch((err)=>[

    // ])
    // login end


    /* 官方生成代码
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    */
  },
  globalData: {
    LOGIN_SWITCH: false,
    userInfo: null
  }
})
