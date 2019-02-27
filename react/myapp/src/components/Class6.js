import React, { Component } from 'react'
import {
  BrowserRouter as Router,
 } from "react-router-dom";
import store from '../store'
import {connect} from 'react-redux'
const add =(num)=>{
  // console.log("add");
  return {
    type:"ADD",
    step:num
  }
}
const mapStateToProps = (state) => {
  return (
    {count:state.count}
  )
}
const mapDispatchToProps = (dispatch)=>{
  return{
    add:(num)=>dispatch(add(num))
  }
}
 class Class6 extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     count:10
  //   }
  // }
  addHandle(){
    // store.dispatch(add())
    this.props.add(100);
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <h1>{this.props.count}</h1>
            <div><button onClick={this.addHandle.bind(this)}>add</button></div>
          </div>
        </Router>
      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Class6);
