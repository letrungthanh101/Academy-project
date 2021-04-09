import React, { Component } from "react";
// import "./signup.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import signUpUserSchema from "./SignUpUsers";
import Axios from "axios"
// import {userService} from "../../../Service"
// import { Link } from "react-router-dom";
import Header from "../../../Screen/Header/Header";
import Footer from "../../../Screen/Footer/Footer";
import swal from 'sweetalert';
// import { signUp } from "../../../Redux/Actions/user";

const showAlertTrue  =() =>{
  swal("Sign up Success!", "Have you good day!", "success");
 
}
const showAleartFalse = () =>{
  swal("Error ","Something went wrong !","error")
}

export default class SignUp extends Component {

  _handleSubmit = values =>{
    Axios({
      method:'POST',
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: values
    }).then((res)=>{
      console.log(res)
      showAlertTrue();
      this.props.history.push("/")
    }).catch((err)=>{
      showAleartFalse();
      console.log(err)
    })
  }
  // _handleSubmit = values => {
  //   console.log(values);
  
  //   userService.signUp(values)
  //   .then((res) => {
  //     console.log(res);
  //     this.props.dispatch(signUp(values))
  //     showAlertTrue();
  //     this.props.history.push("/");  
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     showAleartFalse();
  //   });
  // };
  
  // sử dụng formik
  render() {
   
    return (
      <>
      <Header/>
      <div className="w-50 mx-auto">
       
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            SoDT: "",
            email: "",
            maNhom: "GP01",
          }}
          validationSchema={signUpUserSchema}
          onSubmit={this._handleSubmit }
          render={(formikProps) => (
            
            <Form>
              <h2 className="display-4 text-center">Sign Up</h2>
              <div className="form-group">
                <label>Account: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="taiKhoan">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label> Password: </label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="matKhau">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label> Confirm password: </label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau1"
                  // onChange={formikProps.handleChange}
                />
                <ErrorMessage name="matKhau">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}/
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label> Full name: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="hoTen">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label> Email: </label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="email">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label> Phone number: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="SoDT"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="SoDT">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="text-center">
                
                <button type="submit"className="btn btn-success" >Sign up</button>
              </div>
            </Form>
          )}
        />
      </div>
      <Footer/>
      </>
    );
  }
}
