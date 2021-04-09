import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import CourseItem from "./CourseItem";
import { fetchCourse } from "../../Redux/Actions/course";
import Business from "./Business/Business";

// import { courseService } from "../../Service";
// import { createAction } from "../../Redux/Actions";
// import { FETCH_COURSES } from "../../Redux/Actions/type";
import Design from "./Design/Design";
import Photography from "./Photography/Photography";

class CourseList extends Component {
  
  render() {
  
    return (
      <div>
        <section>
          <div className="container">
            <div className="content_info ">
              <h4>
                <b>The world's largest selection of courses</b>
              </h4>
              <p>
                Choose from 100,000 online video courses with new additions
                published every month
              </p>
            </div>
            <ul className="nav nav-tabs text-dark" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#business"
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#design">
                  Design
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#photography">
                  Photography
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#development">
                  Development
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#marketing">
                  Marketing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#it-software">
                  IT &amp; Software
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#personal">
                  Personal Development
                </a>
              </li>
            </ul>
            {/* Carousel-Courses Tab panes */}
            <div className="tab-content">
              <div className="tab-pane container active" id="business">
            <Business/>
              </div>
              <div className="tab-pane container fade" id="design">
                <Design/>
              </div>
              <div className="tab-pane container fade" id="photography">
                <Photography/>
              </div>
              <div className="tab-pane container fade" id="development">         
                <div className="row">
                  {this.props.CourseList.map((items, index) => (
                    <div className="col-sm-12 col-12 col-lg-3" key={index}>
                      <CourseItem items={items} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="tab-pane container fade" id="marketing">
              <Design/>
              </div>
              <div className="tab-pane container fade" id="it-software">
              <Photography/>
              </div>
              <div className="tab-pane container fade" id="personal">
              <div className="row">
                  {this.props.CourseList.map((items, index) => (
                    <div className="col-sm-12 col-12 col-lg-3" key={index}>
                      <CourseItem items={items} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  componentDidMount() {
      // courseService.fetchCourse()
      // //promise
      // .then((res) => {
      //   console.log(res);
      //   this.props.dispatch(createAction(FETCH_COURSES,res.data));
      // })
      
      // .catch((err) => {
      //   console.log(err);
      // });
     
      this.props.dispatch(fetchCourse())
      // this.props.dispatch(fetchCourse2())
  }
}

const mapStateToProps = (state) => ({
  CourseList: state.course.courses,
});
export default connect(mapStateToProps)(CourseList);
