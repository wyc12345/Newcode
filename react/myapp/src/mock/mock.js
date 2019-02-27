import Mock from 'mockjs'
import data from './data.json'

Mock.mock("https://api.myjson.com/bins/9inum",{dataList:data})
Mock.mock("https://www.testaxios.com/getData1",{
    "name|3":"wyc",
    "age|15-20":1
})
Mock.mock("https://www.testaxios.com/getData2",{
    "list|10":[
        {
            "id|+1":1,
            "name":"@first @last",
            "cname":"@cname",
            "text":"@cword(10,15)",
            "time":"@time(hh:mm:ss)"
        }
    ]
})
let Random = Mock.Random;
let DataList = () => {
    let list = [];
    for(let i=0;i<10;i++){
        let obj = {
            name:Random.cname(),
            id:Random.integer(1000,9999),
            adr:Random.province(),
            img:Random.dataImage('100x100','msg:'+Random.word(10,15))
        }
        list.push(obj)
    }
    return list;
}
Mock.mock("https://www.testaxios.com/getData3",{data:DataList})