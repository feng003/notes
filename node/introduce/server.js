
var http = require('http');
var url  = require('url');

function start(route,handle){
    function onRequest(req,res){
    //    var str = JSON.stringify(req);
    //    console.log('1'+str);
        var pathname = url.parse(req.url).pathname;
        console.log("Request for "  + pathname +  " received.");
        //console.log("Request received.");

        //var content = route(handle,pathname);
        var content = route(handle,pathname,res);

    }
    http.createServer(onRequest).listen(8800);
    console.log('Server has started.');
}

exports.start = start;
