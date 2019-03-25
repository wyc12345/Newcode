var http = require('http');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
var util = require('util');
var patj = require('path');

http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    switch (pathname) {
        case '/':
            goindex(res);
            break;
        case '/upload':
            goupload(req,res);
            break;
    
        default:
            res.writeHead(404,{'Content-type':'text/html'})
            break;
    }
}).listen(3000)
console.log('serve start in 3000');

function goindex(res){
    var pathname = __dirname+"/"+url.parse('upload.html').pathname;
    
}
function  goupload(){
    var form = new formidable.IncomingForm()
    form.encoding = 'utf-8';
    form.uploadDir = "/my/dir";
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
     
        form.parse(req, function(err, fields, files) {
          res.writeHead(200, {'content-type': 'text/plain'});
          res.write('received upload:\n\n');
          res.end(util.inspect({fields: fields, files: files}));
        });
     
        return;
      }
}