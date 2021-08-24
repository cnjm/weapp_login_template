
 ## 网络请求相关在此目录 用前必看

 token认证请配合utils.login.js & app.js=>onLaunch中关于登录相关代码使用 ，当然也可以根据业务自行修改  ，其他均为项目自动生成文件

目前仅有wx.request

wx.downloadFile  wx.uploadFile 等未在涉及范围内

 1. 适用token认证方式，静默登录

 2. **默认request接口传参 identity 区分该请求是否需要token认证**

 3. 默认后端返回格式为 **{ code: xxx, message: xxx, result: xxx }**, code,message,result字段名可根据业务在config内修改，如有很大差异，这可能需要你在逻辑代码中调整

 4. 为达到不同环境切换不同域名的目的，采用 wx.getAccountInfoSync().miniProgram 以此区分开发版，体验版（用作测试版本），正式版