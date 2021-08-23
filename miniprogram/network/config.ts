

const {envVersion} = wx.getAccountInfoSync().miniProgram;

const domainOptions = {
  develop:"https://learning.tcogid.top",//开发版
  trial:"",//体验版
  release:"",//正式版
}
export const Authorization:string = "token";//token命名，header以及Storage中的名字
export const DOMAIN:string = domainOptions[envVersion];//不同环境的域名
export const CONTENT_TYPE:string = "application/json"; //application/x-www-form-urlencoded
export const TIMEOUT:number = 12000;//超时
export const HTTP_STATUS = {
  SUCCESS: 200,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,//默认401为token验证失效
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};
