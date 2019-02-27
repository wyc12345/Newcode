import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,  
  Link,
  Switch,
 } from "react-router-dom";

 const Child = ({match}) =>(
   <div>
     <h4>ID:{match.params.id}</h4>
   </div>
 )
 
export default class Class4 extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to='/c'>c</Link></li>
              <li><Link to='/c++'>c++</Link></li>
              <li><Link to='/java'>java</Link></li>
            </ul>
              <Route path='/:id' component={Child}/>
          </div>
          
        </Router>
      </div>
    )
  }
}
