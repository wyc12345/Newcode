var http = require('http')
var url = require('url')
http.createServer(function(req,res){
    console.log(req.url);
    console.log(url.parse(req.url).pathname);
    let path = url.parse(req.url).pathname;
    if(path=='/'){
        res.end('home');
    }else if(path == '/about'){
        res.end('about');
    }else{
        res.end('404');
    }
    // res.write('<h1>node1.js</h1>');
    // res.write('<h1>node2.js</h1>');
    //res.end('<h1>hello world</h1>');
}).listen('3000')
console.log('服务运行在3000端口')



//字符串转对象
//var data = '{"id":1,}'
//单引号扩双引号