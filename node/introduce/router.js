
function route(handle , pathname){
    console.log('request for ' + pathname);
    if(typeof handle[pathname] === 'function'){
        // handle[pathname]();
        return handle[pathname]();
    }else{
        console.log('no request handler found for ' + pathname);
        return  "404 Not found";  
    }
}

exports.route = route;
