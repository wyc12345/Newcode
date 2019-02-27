import React, { Component } from 'react'
import axios from 'axios'
export default class Class7 extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataList:[]
    }
  }
  componentDidMount(){
    let url = 'https://api.myjson.com/bins/9inum';
    let url1 = 'https://www.testaxios.com/getData1';
    let url2 = 'https://www.testaxios.com/getData2';
    let url3 = 'https://www.testaxios.com/getData3'
    axios.get(url3).then((res)=>(
       console.log(res)
    ))
  }
  render() {
    return (
      <div>
        aaa
      </div>
    )
  }
}
