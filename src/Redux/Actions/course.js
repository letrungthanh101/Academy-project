//async action
import {courseService} from "../../Service"
import { createAction } from ".";
import { FETCH_COURSES, FETCH_COURSES_DETAIL,FETCH_COURSES2, FETCH_COURSES3, FETCH_COURSES4  } from "./type";

export const  fetchCourse = () =>{
    return (dispatch) =>{
        courseService.fetchCourse()
        //promise
        .then((res) => {
          console.log(res);
         dispatch(createAction(FETCH_COURSES,res.data));
        })
        
        .catch((err) => {
          console.log(err);
        });
    }
}
//

export const fetchDetailCourse = (id) =>{
  return dispatch =>{
    courseService
   .fetchCourseDetail(id)
      .then((res) => {
      dispatch(createAction(FETCH_COURSES_DETAIL, res.data));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const  fetchCourse2 = () =>{
  return (dispatch) =>{
      courseService.fetchCourse2()
      //promise
      .then((res) => {
        console.log(res);
       dispatch(createAction(FETCH_COURSES2,res.data));
      })
      
      .catch((err) => {
        console.log(err);
      });
  }
}
export const  fetchCourse3 = () =>{
  return (dispatch) =>{
      courseService.fetchCourse3()
      //promise
      .then((res) => {
        console.log(res);
       dispatch(createAction(FETCH_COURSES3,res.data));
      })
      
      .catch((err) => {
        console.log(err);
      });
  }
}
export const  fetchCourse4 = () =>{
  return (dispatch) =>{
      courseService.fetchCourse4()
      //promise
      .then((res) => {
        console.log(res);
       dispatch(createAction(FETCH_COURSES4,res.data));
      })
      
      .catch((err) => {
        console.log(err);
      });
  }
}
