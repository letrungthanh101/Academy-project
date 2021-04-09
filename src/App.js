import React, { Component } from "react";
// import Header from "./Screen/Header/Header";
import "./App.css";
// import CourseList from "./Components/Courses/CourseList";
import SignUp from "./Components/User form/SignUpForm/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailsProduct from "./Screen/Details/DetailsProduct";
import BlogCourse from "./Screen/Blog/BlogCourse";
import EventCourse from "./Screen/Event/EventCourse";
import About from "./Screen/About/About"
import Login from "./Components/User form/LoginForm/Login";
import {connect} from "react-redux"

import Home from "./Screen/Home/Home";
// import Development from "./Components/Courses/Development"
import Cart from "./Features/CartModel/Cart";
import NotFound from "./Screen/NotFound/NotFound";
import Course from "./Components/Courses/Course";
import Checkout from "./Components/Checkout/Checkout";
// import { FETCH_CREDENTIALS } from "./Redux/Actions/type";
// import { createAction } from "./Redux/Actions";


class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
      
        {/* <Header/> */}
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/" exact="true" component={Home}/>
            <Route path="/blog"exact="false"  component={BlogCourse} />
            <Route path= "/event" exact="false" component={EventCourse}/>
            <Route path="/about" exact="false" component={About}/>
            <Route path="/detail/:courseId" exact="true" component={DetailsProduct} />
            {/* <Route path="/course-list" component={CourseList}/> */}
            <Route path="/sign-up" exact="false" component={SignUp} />
            <Route path="/sign-in" exact="false"component ={Login}/>
            <Route path="/courses"exact="false" component={Course}/>
            <Route path="/cart" exact="false" component={Cart}/>
            <Route path="/checkout"exact="false" component={Checkout}/>
            <Route path="" component={NotFound}/>
            {/* <Route path="/development" component={Development}/> */}
            {/* <Route path="" component={NotFound} /> */}
          </Switch>
        {/* <Trusted/>
        <Footer/> */}
        </BrowserRouter>
        {/* <Cart/>
        */}
   
      </div>
    );
  }

  // HÀM Login KHI F5 
  // _getCredentialFromLocal = () =>{
  //   const credentialsStr = localStorage.getItem('credentials');
  //   if(credentialsStr){
  //       this.props.dispatch(createAction(FETCH_CREDENTIALS,JSON.parse(credentialsStr)))
  //   }
  // }
  // componentDidMount(){
  //   this._getCredentialFromLocal()
  // }
  
}

export default connect() (App);
