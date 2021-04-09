import React, { Component } from "react";
import {Link} from "react-router-dom"
//Kết nối redux (connect reactComponent tới store)
import { connect } from "react-redux";
import StudentViewing from "../../Screen/StudentViewing/StudentViewing";
import Header from "../../Screen/Header/Header";
import Footer from "../../Screen/Footer/Footer";
import Trusted from "../../Screen/Trusted/Trusted";
import "./Cart.css"
class Cart extends Component {
  //this.props.Cart là thuộc tính nhận từ redux
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <section className="breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <h1 className="text-white">Cart</h1>
                            {/* <h6>HOME {match.url.toUpperCase()}</h6> */}
                        </div>
                    </div>
                </div>
            </section>
          <div
            className="container"
            style={{ marginTop: 100, marginBottom: 100 }}
          >
            <div className="row">
              <div className="col-md-8 ">
              <div className="">         
                <table className="table border">
                <thead>
                  <tr>
                    <td>Course</td>
                    <td>Price</td>
                    <td>Action</td>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={require("../../assets/img/item1.jpg")} style={{width: 100}}/>
                       <span className="ml-3">Node JS</span>
                      </td>
                      <td className="text-danger">
                        20.00$
                      </td>
                      <td className="text-danger">Delete</td>
                    </tr>
                    <tr>
                        <td ><input className="form-control" placeholder="COUPON CODE"/></td>
                        <td colspan="2"><button className="btn btn-info" style={{marginLeft:"20%"}}>APPLY COUPON</button></td>
                      </tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div className="col-md-4 border">
                <table className="table">
                  <thead>
                    <tr>Cart totals</tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td className="text-danger weight-bold"> 20.00$</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td className="text-danger weight-bold"> 20.00$</td>
                    </tr>
                    <div className="row">
                      <div className="col-md-12 mx-4 my-2">
                        <Link className="btn btn-info w-100 " to ="./checkout">
                          PROCEED TO CHECKOUT
                        </Link>
                      </div>
                      <div className="col-md-12 mx-4">
                        <button className="btn btn-outline-dark w-100">
                          CONTINUE SHOPPING
                        </button>
                      </div>
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <StudentViewing />
        <Trusted />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //state là store tổng, => truy xuất tới CartReducer => state trên CartReducer
  return {
    gioHang: state.course.courseDetail || {
      maKhoaHoc: "",
      tenKhoaHoc: "",
      hinhAnh: "",
      nguoiTao: {
        hoTen: "",
        ngayTao: "",
      },
    },
  };
};
export default connect(mapStateToProps, null)(Cart);
