import { request } from "./request";
/**
 * 
 * @param method 以GET,POST为例，需要其他请求方法的自行修改
 * @param data 一个json对象参数
 * @param header 自定的header，与默认重复的key将覆盖默认的header设置
 */

//登录接口，根据业务替换为真实的请求路径  默认参数传递 为 {code:wxCode}  如有必要可在utils/login.js => refreshLogin 方法中更改
export const login = (data,header) => request({method:'POST',url:'/login', identity:false, data,header});

//GET
export const testGet = (data,header) => request({method:'GET',url:'/test', identity:true, data,header});

//testGet2
export const testGet2 = (data,header) => request({method:'GET',url:'/test2', identity:true, data,header});

//tokenInvalid
export const tokenInvalid = (data,header) => request({method:'GET',url:'/tokenInvalid', identity:true, data,header});