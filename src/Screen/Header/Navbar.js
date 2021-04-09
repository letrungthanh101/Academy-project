import LoginButton from "../../Features/Button/LoginButton";
import SignUpButton from "../../Features/Button/SignUpButton";
import React, { Component } from "react";
import {connect} from "react-redux"
import { Link, NavLink } from "react-router-dom";
// import swal from 'sweetalert';
// const showAlertTrue  =() =>{
//   swal("Sign up Success!", "Have you good day!", "success");
 
// }
class Navbar extends Component {
//   handleLogOut = () => {
//     this.props.setCurrentUser({});
//     localStorage.removeItem("user");
//     showAlertTrue();
// };
  render() {
    // const userLinks = (
    //   <li className="nav-item">Logout </li>
    // )
    
    return (
      
      <div>
        <div className="header_navbar">
          <nav className=" navbar_heading navbar navbar-expand-md navbar-light bg-white">
            <NavLink className="navbar-brand" to="/home" target="blank">
              <img
                src={require("./img/logo.svg")}
                alt="logo"
                style={{ width: 100 }}
              />
            </NavLink>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <NavLink activeStyle={{color: 'red'}}  to="/home" className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item active"></li>
                <li className="nav-item dropdown dropdown-navbar nav-item active">
                  <NavLink
                    className="nav-link dropdown-toggle dropdown-course text-dark nav-item active"
                    data-toggle="dropdown"
                    to ="/course"
                    activeStyle={{color: 'red'}}
                  >
                    Course
                  </NavLink>
                  <div className="dropdown-menu dropdown-content bg-light " >
                    <Link className="dropdown-item" to="/courses">
                      Development
                    </Link>
                    <Link className="dropdown-item" to="/courses">
                      Business
                    </Link>
                    <Link className="dropdown-item" to="/courses">
                      Finance &amp; Accounting
                    </Link>
                    <Link className="dropdown-item" to="/courses">
                      IT &amp; Software
                    </Link>
                    <Link className="dropdown-item" to="/courses">
                      Office Productivity
                    </Link>
                    <Link className="dropdown-item" to="/courses">
                      Personal Development
                    </Link>
                    <Link className="dropdown-item" to="/courses">
                      Design
                    </Link>
                    <Link className="dropdown-item" to="/courses">
                      Marketing
                    </Link>
                    <Link className="dropdown-item" to="/courses">
                      Lifestyle
                    </Link>
                    <Link className="dropdown-item" to="/courses">
                      Photography
                    </Link>
                    <Link className="dropdown-item" to="/courses">
                      Health &amp; Fitness
                    </Link>
                    <Link className="dropdown-item" to="/courses">
                      Music
                    </Link>
                    <Link className="dropdown-item" to="/courses">
                      Teaching &amp; Academics
                    </Link>
                  </div>
                </li>

                <div></div>

                <li className="nav-item active">
                  <NavLink activeStyle={{color:'red'}}  exact className="nav-link" to="/blog">
                    Blog<span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink activeStyle={{color:'red'}} exact className="nav-link" to="/event">
                    Event<span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink activeStyle={{color:'red'}} exact className="nav-link" to="/about">
                    About <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
              </ul>
              {/* gio hang */}
              <ul className="navbar-nav ml-md-auto pr-3">
                <li className="nav-item active">
                  <Link className="nav-link text-dark" to="/cart">
                    <i className="fa fa-shopping-cart" />
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                {this.props.credentials ? <li className="nav-item">
                  
                  <span className="nav-link text-dark">Hi,{this.props.credentials.hoTen}   <Link to="/dashboard" className="text-dark" ><i class="fa fa-tools"></i> </Link> |  
                   <a href="#" className="text-danger"onClick={this.handleLogOut}> Logout </a> </span>
                  
                </li>  :  <div className="d-flex justify-content-start">
                
                <SignUpButton />
                <LoginButton />
              </div>}
                
              </ul>
              {/* ------------------------------------------ */}
             
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return{
    credentials :state.user.credentials
  }
}
export default  connect(mapStateToProps)(Navbar);