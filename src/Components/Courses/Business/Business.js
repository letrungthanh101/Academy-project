import React, { Component } from 'react'
import { fetchCourse2 } from '../../../Redux/Actions/course';
import {connect} from 'react-redux';

import CourseItem from "./itemsBusiness"
class BusinessCourse extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                  {this.props.BusinessCourse.map((items, index) => (
                    <div className="col-sm-12 col-12 col-lg-3" key={index}>
                    <CourseItem items={items}/>
                    </div>
                  ))}
                 
                </div>
            </div>
        )
    }
    componentDidMount() {
 
        this.props.dispatch(fetchCourse2())
      
    }
}
const mapStateToProps = (state) => ({
    BusinessCourse: state.course.courses2,
  });

export default connect(mapStateToProps)(BusinessCourse);

