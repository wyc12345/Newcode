import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,  
  Link,
  Switch,
 } from "react-router-dom";

 const Home = () => <div>This is Home</div>
 const About = () => <div>This is About</div>
 const Father = () => <div>My father</div>
 const Mother = () => <div>My mother</div>
 const Family = () => {
   return (
     <Router>
       <div>
         <ul>
           <li><Link to='/Family/Father' >Father</Link></li>
           <li><Link to='/Family/Mother' >Mother</Link></li>
         </ul>
         <Route path={'/Family/Father'} component={Father}/>
         <Route path={'/Family/Mother'} component={Mother}/>
       </div>
     </Router>
   )
 }
//  const MenuLink = ({to,lable}) =>{
//    return (
//   <Route
//       path={to}
//       children={({match}) =>{
//         return (
//           <div>
//             <Link to={to}>{lable}</Link>
//           </div>
//         )
//       }
//       }
//     />
//    )
   
//  }
export default class Class3 extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/Family'>Family</Link></li>
              {/* <li><MenuLink to='/about' lable='自定义链接'></MenuLink></li> */}
            </ul>
            <Switch>
              <Route path={'/Family'} component={Family}/>
              <Route path={'/about'} component={About}/>
              <Route path={'/'} component={Home}/>
            </Switch>
           
          </div>
          
        </Router>
      </div>
    )
  }
}
