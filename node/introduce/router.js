
function route(handle , pathname , res){
    console.log('request for ' + pathname);
    if(typeof handle[pathname] === 'function')
    {
        // handle[pathname]();
       // return handle[pathname]();
	      handle[pathname](res);
    }else{
        console.log('no request handler found for ' + pathname);
       // return  "404 Not found";
	    res.writeHead(404,  {"Content-Type":  "text/plain"});
        res.write("404 Not found");
        res.end();
    }
}

exports.route = route;
