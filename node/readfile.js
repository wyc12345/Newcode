var fs = require('fs');
fs.readFile('./file/test.txt','utf-8',function(err,data){//异步
    if(err){
        console.log('文件读取失败');
        
    }else{
        console.log(data);
    }
})
let data = fs.readFileSync('./file/test.txt','utf-8');//同步
console.log(data);

console.log('读取文件：');
