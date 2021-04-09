import React, { Component } from 'react'
import {Form, Formik ,Field} from "formik"
import {connect} from "react-redux"
import { login } from '../../../Redux/Actions/user';
import Trusted from "../../../Screen/Trusted/Trusted";
import Footer from "../../../Screen/Footer/Footer";

import {Link} from "react-router-dom"
import Header from '../../../Screen/Header/Header';
import swal from 'sweetalert';
const showAlertTrue  =() =>{
  swal("Log out Success!", "Have you good day!", "success");
 
}
class Login extends Component {
 
 
  render() {
    const showAlert  =() =>{
      swal("Login Success!", "Have you good day!", "success");
     
  }
  
    return (
      <>
      <Header/>
      <Formik
      
        initialValues={{
          taiKhoan:'',
          matKhau:''
        }}
        onSubmit ={values=>{
          console.log(values);
            this.props.dispatch(login(values));
            showAlert()
            this.props.history.push("/");   
            
        }}
        
        render={({handleChange})=>(
          <div>
            
          <Form className="w-50 mx-auto" >
            <h1>Sign In</h1>
            <div className="form-group">
              <label>Account</label>
              <Field type="text" className="form-control"  name="taiKhoan" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <Field type="password" className="form-control  " name="matKhau" onChange={handleChange}/>
            </div>
            {/* <Link to ="/home">
              
            </Link> */}
            <button type="submit"className="btn btn-success" >Login</button>
           <div>
            <span>Do you have an account ?</span>
           <Link to="/sign-up" className="text-info mx-2">Sign-up</Link>
           </div>
          </Form>
      </div>
        )}
      />
      </>
    );
    
  }
  
}
export default connect() (Login);
