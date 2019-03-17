var http = require('http')
var url = require('url')
http.createServer(function(req,res){
    
    res.write('<h1>node1.js</h1>');
    res.write('<h1>node2.js</h1>');
    res.end('<h1>hello world</h1>');
}).listen('3000')
console.log('服务运行在3000端口')