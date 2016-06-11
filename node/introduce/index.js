var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handler = {};
handler['/'] = requestHandlers.start;
handler['/start'] = requestHandlers.start;
handler['/upload'] = requestHandlers.upload;
handler['./find']  = requestHandlers.find;

server.start(router.route,handler);   //函数式编程
