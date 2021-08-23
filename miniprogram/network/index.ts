import { request } from "./request";
/**
 * 
 * @param method 以GET,POST为例，需要其他请求方法的再调整
 * @param data 一个json对象参数
 * @param header 自定的header，与默认重复的key将覆盖默认的header设置
 */
//登录
export const login = (data: any = {},header: any = {}) => request({method:'POST',url:'/test/login', data,header});

//GET
export const testRequest = (data: any = {},header: any = {}) => request({method:'GET',url:'/test/login', data,header});