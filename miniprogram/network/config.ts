

const {envVersion} = wx.getAccountInfoSync().miniProgram;
// const version = wx.getSystemInfoSync().SDKVersion
const domainOptions = {
  develop:"",//开发版
  trial:"",//体验版
  release:"",//正式版
}
export const DOMAIN:string = domainOptions[envVersion];
export const CONTENT_TYPE:string = "application/json"; //application/x-www-form-urlencoded
export const TIMEOUT:number = 12000; //application/x-www-form-urlencoded
export const HTTP_STATUS = {
  SUCCESS: 200,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};
