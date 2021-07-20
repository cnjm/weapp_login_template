import { request } from "./request";

//登录
export const login = (data: any = {},header: any = {}) => request('GET','url', data,header);