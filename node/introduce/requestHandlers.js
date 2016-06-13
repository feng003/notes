
// function start(){
//     console.log("request handle 'start' was called");
//     return "hello start";
// }
var querystring = require("querystring");
var exec = require('child_process').exec;

function index(response , postData){
    console.log("Request handler 'index' was called.");

    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<input name="title" type="text" />'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function start(res,postData){
    console.log("request handle 'start' was called");
    var content = "empty";
    //exec('ls -lah',
    // exec('find / ',
    //   function(error,stdout,stderr){
    //        content = stdout;
    //    }
    // );
    // return content;
	exec("ls -lah",  function  (error, stdout, stderr)  {
                 res.writeHead(200,  {"Content-Type":  "text/plain"});
                 res.write(stdout);
                 res.end();  });
}

function find(response,postData)  {
  console.log("Request handler 'find' was called.");

  exec("find /",    { timeout:  10000, maxBuffer:  20000*1024  },    function  (error, stdout, stderr)  {
      response.writeHead(200,  {"Content-Type":  "text/plain"});
      response.write(stdout);
      response.end();    });
}

function upload(res,postData){
    console.log("request handler ' upload' was called");
   // return "hello upload";
  res.writeHead(200,  {"Content-Type":  "text/plain"});
  res.write("You've sent: " + querystring.parse(postData).text);
  //res.write("Hello Upload");
  res.end();
}

exports.index = index;
exports.start = start;
exports.find = find;
exports.upload = upload;
