
// function start(){
//     console.log("request handle 'start' was called");
//     return "hello start";
// }

var exec = require('child_process').exec;

function start(res){
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

function find(response)  {
  console.log("Request handler 'find' was called.");

  exec("find /",    { timeout:  10000, maxBuffer:  20000*1024  },    function  (error, stdout, stderr)  {
      response.writeHead(200,  {"Content-Type":  "text/plain"});
      response.write(stdout);
      response.end();    });
}

function upload(res){
    console.log("request handler ' upload' was called");
   // return "hello upload";
  res.writeHead(200,  {"Content-Type":  "text/plain"});
  res.write("Hello Upload");
  res.end();
}

exports.start = start;
exports.find = find;
exports.upload = upload;
