import { DOMAIN,TIMEOUT, CONTENT_TYPE, HTTP_STATUS } from "./config";


export const request = (method: keyof requestMethod,url:string, data,header)=>{
  return new Promise<any>((resolve,reject)=>{
    //request更多配置参考文档
    // https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
    wx.request({
      method,
      url: /^http(s?):\/\//.test(url) ? url : DOMAIN + url,
      data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      timeout:TIMEOUT,
      success (res) {
        resolve(res.data);
      },
      fail(err){
        reject(err);
      }
    })
  })
}