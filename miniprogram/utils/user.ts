
import {Authorization} from '../network/config';

export const userLogin = () => {
  wx.checkSession({
    success() {
      //session_key 未过期，并且在本生命周期一直有效
    },
    fail() {
      // session_key 已经失效，需要重新执行登录流程
      
    }
  })
}

export const refreshLogin = () =>{
  wx.removeStorageSync(Authorization);
  wx.login({
    success(res) {
      if (res.code) {
        
      } else {
        wx.showToast({
          title: '登录失败，请重新进入小程序',
          icon: 'none',
          duration: 3000
        })
      }
    }
  })
}