import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,  
  Link,
 } from "react-router-dom";
 const Home = () => <h1>home</h1>
 const About = () => <h1>about</h1>
 const MenuLink = ({to,lable}) =>{
   return (
    <Route
        path = {to}
        children={({match})=>{
          return (
            <div>
              <ul>
                <li><Link to={to}>{lable}</Link></li>
              </ul>
            </div>
          )
        }        
      }      
    />
   )
 }
export default class Class5 extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><MenuLink to='/home' lable="Home"></MenuLink></li>
              <li><MenuLink to='/about' lable="About"></MenuLink></li>
            </ul>
              <Route path='/about' component={About}/>
              <Route path='/home' component={Home}/>
             
          </div>
          
        </Router>
      </div>
    )
  }
}
