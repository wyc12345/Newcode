<template>
   <div class="talk">
    <div class="talk-bar">
      <ul>
        <li v-for="(item,index) in talkList" :key="index">
          <div class="right">
            <span>{{item.question}}</span>
          </div>
          <div class="left">
            <span>{{item.answer}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="talk-form">
      <input type="text" v-model="msg">
      <button v-on:click="send">发送</button>
    </div>
  </div>
</template>
<script>
import md5 from 'js-md5';
import axios from 'axios';
export default {
  data() {
    return {
      msg:'',
      talkList:[
        
      ]
    }
  },
  created(){
    let obj = {
      title:"聊天",
      className:"talk"
    }
    this.$emit("changeNav",obj);
  },
  methods: {
    getTimeStamp(){
      let dateStr = Date.parse(new Date())
      dateStr = dateStr.toString().substr(0,10);
      return dateStr;
    },
    getNonceStr(){
      let str = Math.random().toString(36).substr(2);
      return str;
    },
    getReqSign(params,appkey){
      let arr = [];
      let obj = {};
      let str = ""
      // 1、对象排序
      arr = Object.keys(params).sort();
      arr.forEach((item,index,arr)=>{
        obj[item]= params[item]
      })
      
      // 2、参数对按URL键值对的格式拼接成字符串
      for(let item in obj){
        if(obj[item]!=""){
          str+=item+"="+encodeURI(obj[item])+"&"
        }
      }
      //3将应用密钥以app_key为键名，组成URL键值拼接到字符串末尾
      str += 'app_key='+appkey;

      // 4对字符串S进行MD5运算，将得到的MD5值所有字符转换成大写
      str = md5(str).toUpperCase();

      return str
    },
    send(){
      let API_PROXY = 'https://bird.ioliu.cn/v2?url=';
      let url = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat';
      let params = {
        app_id:"2111992619",
        time_stamp:this.getTimeStamp(),
        nonce_str:this.getNonceStr(),
        session:"10000",
        question:this.msg,
        sign:""
      }
      let appkey = '8hujksrYGKCQRg77';
      params.sign = this.getReqSign(params,appkey);
      axios({
        url:API_PROXY+url,
        method: 'post',
        data: {...params},
      }).then((res)=>{
        let obj = {
          question:this.msg,
          answer:res.data.data.answer
        }
        this.talkList.push(obj)
      })
    }
  }
}
</script>
<style scoped>
.talk{
    position: fixed;
    top: 1rem;
    left: 0;
    right: 0;
}
.talk-form{
    width: 100%;
    padding-top:.3rem;
    height: 0.5rem;
    background-color: #ddd;
    text-align: center;
    position: fixed;
    bottom: 1rem;
    
}
.talk-form li{
    margin:20px 0
}
.talk-bar span{
    padding:5px 10px;
    background-color: rgb(195, 240, 195);
}
.talk-bar .left{
    text-align: left
}
.talk-bar .right{
    text-align: right
}
.talk-form button{
    position: absolute;
    top:.16rem;
    left: 5.7rem;
    height: .5rem;
}
.talk-form input{
    position: absolute;
    top:.14rem;
    left: 0;
    width: 87.5%;
    height: .48rem;
}
</style>