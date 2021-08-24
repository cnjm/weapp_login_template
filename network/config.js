const {envVersion} = wx.getAccountInfoSync().miniProgram;

// **请根据业务修改**
const domainOptions = {
  develop:"http://127.0.0.1:8888",//开发版
  trial:"https://trial.tcogid.top",//体验版
  release:"https://release.tcogid.top",//正式版
}

export const DOMAIN = domainOptions[envVersion];//不同环境的域名

// **请根据业务修改**
// 后端响应字段
export const resCode = "code";//对应业务逻辑自定的状态码  如果是request http请求响应的状态码处理逻辑，请修改为 statusCode
// export const resMes = "message";//对应业务逻辑自定的提示
export const resResult = "result";//对应业务逻辑自定的数据结果
export const DELAYED = 200;//每次等待登录的延时时间，毫秒
export const Authorization = "token";//token命名，请求header以及Storage中的名字
export const CONTENT_TYPE = "application/json"; //application/x-www-form-urlencoded
export const TIMEOUT = 12000;//超时
export const HTTP_STATUS = {
  SUCCESS: 20000,//成功，也可以是一个数组  **请根据业务修改** 必填
  CLIENT_ERROR: 40000,//客户端错误
  AUTHENTICATE: 40001,//默认401为token验证失效 **请根据业务修改**  必填
  FORBIDDEN: 40003,//禁止，无权限
  NOT_FOUND: 40004,//无请求地址
  SERVER_ERROR: 50000,//服务器错误
  BAD_GATEWAY: 50002,//网关问题
  SERVICE_UNAVAILABLE: 50003,//服务不可用
  GATEWAY_TIMEOUT: 50004,//超时
};