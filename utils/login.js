/**
 * 登录相关 **仅做参考** 如有必要请自行修改
 * 遵循官方给出的 wx.login 的最佳实践
 * 尽可能以 session_key 有效期作为自身登录态有效期
 * 这里默认后端缓存sesion_key,每次进入小程序前端会监测是否过期， 重新登录后端就可以刷新sesion_key
 */
import { Authorization } from "../network/config";
import { login } from "../network/index.js";

/**
 * 用户登录逻辑,首次进入小程序或任意时刻重新登录
 */
export const userLogin = () => {
  return new Promise((resolve, reject) => {
    // 检查登录状态 成功的话就用久的token
    checkLogin()
      .then((token) => {
        console.log("old_token ====", token);
        resolve(token);
      })
      .catch(async (err) => {
        // 失败就重新获取登录凭证 总之都会返回一个token
        try {
          const token = await refreshLogin();
          console.log("new_token：", token);
          resolve(token);
        } catch (err) {
          reject(err);
        }
      });
  });
};

/**
 * 用户进入小程序静默登录前监测登录态
 */
export const checkLogin = () => {
  return new Promise((resolve, reject) => {
    // wxapi直接判断是否过期
    wx.checkSession({
      success() {
        //session_key 未过期，并且在本生命周期内将一直有效
        // session 成功但 token 不存在时，这种情况基本不会出现
        const token = wx.getStorageSync(Authorization);
        if (token) {
          resolve(token);
        } else {
          reject("token_err");
        }
      },
      fail() {
        // session_key 已经失效，不管有没有token都需要重新执行登录流程
        reject("session_key_err");
      },
    });
  });
};

/**
 * 重新登录======token不存在或过期 session_key失效时
 */
export const refreshLogin = () => {
  const app = getApp();
  app.globalData.LOGIN_SWITCH = true;
  wx.removeStorageSync(Authorization);
  return new Promise(async (resolve, reject) => {
    try {
      // 获取到微信code
      const code = await getWxCode();
      // 请求login接口，把code给服务端进行微信登录
      login({ code })
        .then((data) => {
          console.log("重新登录", data);
          // 拿到token存到storage
          const { token } = data;
          wx.setStorageSync(Authorization, token);
          // 登录锁解掉
          app.globalData.LOGIN_SWITCH = false;
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * 获取 小程序的code
 */
export const getWxCode = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success(res) {
        if (res.code) {
          // 把微信code返回
          resolve(res.code);
        } else {
          wx.showToast({
            title: "登录失败，请重新进入小程序",
            icon: "none",
            duration: 3000,
          });
        }
      },
    });
  });
};
