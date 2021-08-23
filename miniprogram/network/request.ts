import { DOMAIN,TIMEOUT, CONTENT_TYPE, HTTP_STATUS } from "./config";
console.log(HTTP_STATUS)
// method: keyof requestMethod,url:string, data:string|object|ArrayBuffer,userHeader:object
export const request = (params: { method: keyof requestMethod; url: string; data: string|object|ArrayBuffer; header: object; })=>{
  return new Promise<any>((resolve,reject)=>{
    //request更多配置参考文档 https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
    let {method,url,data,header} = params;
    let Authorization = wx.getStorageSync('token');
    if(!Authorization){
      console.log()
      setTimeout(() => {
        resolve(request(params));
      }, 200);
    }
    console.log(method,url,data,header)
    let defaultHeader = {
      'content-type': CONTENT_TYPE // 默认值
    }
    wx.request({
      method,
      url: /^http(s?):\/\//.test(url) ? url : DOMAIN + url,
      data,
      header:Object.assign(defaultHeader, header),
      timeout:TIMEOUT,
      success (res) {
        console.log(res)
        if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {//token 验证失效，锁死
          
        } else if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
          console.log("api", "请求资源不存在");
        } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
          console.log("api", "服务端错误");
        } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
          console.log("api", "没有权限访问");
        } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
          resolve(res.data);
        } else{
          wx.showToast({
            title: '网络出错啦！',
            icon: 'error',
            duration: 3000
          })
          reject('err');
        }
      },
      fail(err){
        reject(err);
      }
    })
  })
}