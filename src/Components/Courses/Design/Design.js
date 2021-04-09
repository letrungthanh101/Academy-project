import React, { Component } from 'react'
import CourseItem from './itemsDesign'
import {fetchCourse3} from '../../../Redux/Actions/course'
import {connect} from 'react-redux'
class Design extends Component {
    render() {
        return (
            <div className="container">
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
 
        this.props.dispatch(fetchCourse3())
       
       }
}
const mapStateToProps = (state) => ({
    BusinessCourse: state.course.courses3,
  });

export default connect(mapStateToProps)(Design);

