var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handler = {};
handler['/']      = requestHandlers.index;
handler['/index'] = requestHandlers.index;
handler['/start'] = requestHandlers.start;
handler['/upload'] = requestHandlers.upload;
handler['/find']   = requestHandlers.find;
handler['/mongo']  = requestHandlers.mongo;
handler['/mongoinsert'] = requestHandlers.mongoinsert;
handler['/mongofind']   = requestHandlers.mongofind;
handler['/mongodel']    = requestHandlers.mongodel;

server.start(router.route,handler);   //函数式编程
