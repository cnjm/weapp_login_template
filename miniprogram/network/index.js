"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRequest = exports.login = void 0;
var request_1 = require("./request");
exports.login = function (data, header) {
    if (data === void 0) { data = {}; }
    if (header === void 0) { header = {}; }
    return request_1.request({ method: 'POST', url: '/test/login', data: data, header: header });
};
exports.testRequest = function (data, header) {
    if (data === void 0) { data = {}; }
    if (header === void 0) { header = {}; }
    return request_1.request({ method: 'GET', url: '/test/login', data: data, header: header });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBb0M7QUFRdkIsUUFBQSxLQUFLLEdBQUcsVUFBQyxJQUFjLEVBQUMsTUFBZ0I7SUFBL0IscUJBQUEsRUFBQSxTQUFjO0lBQUMsdUJBQUEsRUFBQSxXQUFnQjtJQUFLLE9BQUEsaUJBQU8sQ0FBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLGFBQWEsRUFBRSxJQUFJLE1BQUEsRUFBQyxNQUFNLFFBQUEsRUFBQyxDQUFDO0FBQXZELENBQXVELENBQUM7QUFHckcsUUFBQSxXQUFXLEdBQUcsVUFBQyxJQUFjLEVBQUMsTUFBZ0I7SUFBL0IscUJBQUEsRUFBQSxTQUFjO0lBQUMsdUJBQUEsRUFBQSxXQUFnQjtJQUFLLE9BQUEsaUJBQU8sQ0FBQyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLGFBQWEsRUFBRSxJQUFJLE1BQUEsRUFBQyxNQUFNLFFBQUEsRUFBQyxDQUFDO0FBQXRELENBQXNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSBtZXRob2Qg5LulR0VULFBPU1TkuLrkvovvvIzpnIDopoHlhbbku5bor7fmsYLmlrnms5XnmoTlho3osIPmlbRcclxuICogQHBhcmFtIGRhdGEg5LiA5LiqanNvbuWvueixoeWPguaVsFxyXG4gKiBAcGFyYW0gaGVhZGVyIOiHquWumueahGhlYWRlcu+8jOS4jum7mOiupOmHjeWkjeeahGtleeWwhuimhueblum7mOiupOeahGhlYWRlcuiuvue9rlxyXG4gKi9cclxuLy/nmbvlvZVcclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGRhdGE6IGFueSA9IHt9LGhlYWRlcjogYW55ID0ge30pID0+IHJlcXVlc3Qoe21ldGhvZDonUE9TVCcsdXJsOicvdGVzdC9sb2dpbicsIGRhdGEsaGVhZGVyfSk7XHJcblxyXG4vL0dFVFxyXG5leHBvcnQgY29uc3QgdGVzdFJlcXVlc3QgPSAoZGF0YTogYW55ID0ge30saGVhZGVyOiBhbnkgPSB7fSkgPT4gcmVxdWVzdCh7bWV0aG9kOidHRVQnLHVybDonL3Rlc3QvbG9naW4nLCBkYXRhLGhlYWRlcn0pOyJdfQ==