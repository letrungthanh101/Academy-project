import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
// import CourseService from "../../Service/CourseService/CourseService";
// import { createAction } from "../../Redux/Actions";
// import { courseService } from "../../Service";
// import { FETCH_COURSES_DETAIL } from "../../Redux/Actions/type";
import { fetchDetailCourse } from "../../Redux/Actions/course";
import { RootReducer } from "../../Redux/Reducers/root";
import StudentViewing from "../StudentViewing/StudentViewing";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Trusted from "../Trusted/Trusted";
import Footer from "../Footer/Footer";

class DetailProduct extends Component {
 
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-12 col-12 col-lg-6 " >
              <img
                src={this.props.coursesDetail.hinhAnh}
                alt="course-detail"
                className="w-100"
                style={{ width: 100,height: 300 }}
              />
            </div>
            <div className="col-md-12 col-12 col-lg-6">
              <h3 className="font-weight-bold">Course information</h3>
              <hr />

              <h4 className="lead font-weight-bold">
                {this.props.coursesDetail.tenKhoaHoc}
              </h4>
              {/* <h5 className="text-dark my-3">Mô tả khóa học</h5> */}
              <div className="my-2">
                <span className="text-dark mr-2 font-weight-bold">Code courses: </span>
                <span className="weight-bold text-dark">
                  {this.props.coursesDetail.maKhoaHoc}
                </span>
              </div>
              <div className="my-2">
                <span className="text-dark mr-2 font-weight-bold">Instructor:</span>
                <span className="text-info">
                  {this.props.coursesDetail.nguoiTao.hoTen}
                </span>
              </div>
              <div className="my-2">
                <span className="text-dark mr-2 font-weight-bold">View:</span>
                <span className=""> {this.props.coursesDetail.luotXem}</span>
              </div>
              <div className="my-2">
                <h5 className="text-dark mr-3 font-weight-bold">Course description :</h5>
                {/* <p className="">{this.props.coursesDetail.moTa}</p> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta consequatur, maiores asperiores quis nulla vel! Molestiae sunt adipisci, obcaecati repudiandae est eum neque ab in impedit doloremque eaque aperiam?</p>
                <span className="text-dark mr-2 font-weight-bold">Tuition fees:</span>
                <span className="font-weight-bold text-danger">19,99$</span>

                <h6 className="ratting my-3">Ratting</h6>
                <p className="ratting text-warning ">
                  <i className="fa fa-star ml-2"></i>
                  <i className="fa fa-star ml-2"></i>
                  <i className="fa fa-star ml-2"></i>
                  <i className="fa fa-star ml-2"></i>
                  <i className="fa fa-star ml-2"></i>
                </p>
              </div>
              {/* <p className="lead">{this.props.coursesDetail.nguoiTao.taiKhoan}</p> */}
              <Link className="btn btn-danger text-white" to="/cart" >Add to cart</Link>
             
            </div>
          </div>
        </div>
        <StudentViewing/>
        <Trusted/>
        <Footer/>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchDetailCourse(this.props.match.params.courseId));
  }
}
// xây dựng hàm tạo ra props là hàm xử lý sự kiện => đưa dữ liệu lên store




const mapStateToProps = (state) => ({
  //trong trường hợp rỗng (lần đầu tiên) nếu null thì =>
  coursesDetail: state.course.courseDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
      luotXem: "",
      moTa: "",
      ngayTao: "",
    },
  },
});
export default connect(mapStateToProps)(DetailProduct);
