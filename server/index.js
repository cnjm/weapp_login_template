const express = require('express')

const app = express()
let num = 0;
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/test', function (req, res) {
  res.json({ code: 20000, message: "ok", result: 'get响应数据' })
})
app.get('/test2', function (req, res) {
  res.json({ code: 20000, message: "ok", result: 'get响应数据2' })
})
app.get('/tokenInvalid', function (req, res) {
  if (req.headers.token === '2222222222') {
    res.json({ code: 40001, message: "token失效，请重新登录", result: '' })
  } else {
    res.json({ code: 20000, message: "ok", result: '成功拿到' })
  }

})

app.post('/login', function (req, res) {
  res.json({ code: 20000, message: "ok", result: '1111111111' })
  // res.json({ code: 20000, message: "ok", result: '2222222222' })

})

// 监听端口
app.listen(8888)