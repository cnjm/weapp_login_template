
 ## 微信小程序js版本

目前封装接口请求以及静默登录功能

其中设计目录、文件

server   模拟的后端接口  可直接删了

network  请求相关

utils/login.js  登录相关逻辑

app.js  onlanch 进入小程序 开始login请求  globalData新增LOGIN_SWITCH属性

pages/index/index.js  仅有两个需要token认证的请求，模拟真实业务可能要进入页面就进行需要身份认证的请求