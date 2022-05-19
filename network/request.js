import {
  DOMAIN,
  TIMEOUT,
  CONTENT_TYPE,
  HTTP_STATUS,
  DELAYED,
  Authorization,
  resCode,
  resResult,
} from "./config";
import { refreshLogin } from "../utils/login.js";

export const request = (params) => {
  return new Promise((resolve, reject) => {
    //request更多配置参考文档 https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
    let { method, url, identity, data = {}, header = {} } = params;
    let token = wx.getStorageSync(Authorization);

    //LOGIN_SWITCH不在此判断 是因为请求异步 除非维护一个请求队列 否则 无法避免 所以 折中选择token失效后再重新请求
    const app = getApp();
    const FIRST_RUN = app.globalData.FIRST_RUN; // 小程序首次启动，等待checklogin
    if (identity && (!token || FIRST_RUN)) {
      //首次进入需要认证并且当前无登录状态时延时请求,默认200毫秒等待  小程序初始化的登录
      setTimeout(() => {
        resolve(request(params));
      }, DELAYED);
      return;
    }
    let defaultHeader = {
      [Authorization]: token,
      "content-type": CONTENT_TYPE, // 默认值
    };
    wx.request({
      method, //请求方式
      url: /^http(s?):\/\//.test(url) ? url : DOMAIN + url, //当传入url带协议时，将不加配置项的域名
      data, //请求参数
      header: Object.assign(defaultHeader, header), //相同header设置将覆盖默认
      timeout: TIMEOUT, //设置超时
      success(res) {
        // 默认对请求响应的res.data中后端自行定义的code处理，如你需要 request http请求响应的状态码处理逻辑，需要自行修改
        const code = res.data[resCode];
        // 如果响应状态码在正确范围内，直接响应数据
        if (
          (Array.isArray(HTTP_STATUS.SUCCESS) &&
            HTTP_STATUS.SUCCESS.indexOf(code) != -1) ||
          code === HTTP_STATUS.SUCCESS
        ) {
          resolve(res.data[resResult]);
          return;
        } else if (code === HTTP_STATUS.AUTHENTICATE) {
          //当提示token失效时
          const app = getApp();
          const LOGIN_SWITCH = app.globalData.LOGIN_SWITCH; // login锁，确保没有登录冲突
          if (LOGIN_SWITCH) {
            //如果已锁说明有 在重新登录 只需要等待一下 继续请求
            console.log(1231);
            setTimeout(() => {
              resolve(request(params));
            }, DELAYED);
          } else {
            //重新登录并继续请求
            refreshLogin().then(() => {
              resolve(request(params));
            });
          }
          return;
        }
        //更多状态码处理在这处理  建议success都返回res.data 以便未来需要在业务逻辑处理不同状态，当然，你也可以 非20000 就直接reject
        reject(res.data);
      },
      fail(err) {
        wx.showToast({
          title: "网络出错啦！",
          icon: "error",
          duration: 3000,
        });
        reject(err);
      },
    });
  });
};
