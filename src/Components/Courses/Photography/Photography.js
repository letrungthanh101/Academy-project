import React, { Component } from 'react'
import { fetchCourse4 } from '../../../Redux/Actions/course';
import {connect} from 'react-redux';

import CourseItem from "./CourseItem"
class Photography extends Component {
    render() {
        return (
            <div>
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
 
        this.props.dispatch(fetchCourse4())
      
    }
}
const mapStateToProps = (state) => ({
    BusinessCourse: state.course.courses4,
  });

export default connect(mapStateToProps)(Photography);

