import {combineReducers} from 'redux';
import CourseReducer from './course';
import UserReducer from './user';
// strore ứng dụng
const RootReducer = combineReducers({
    //strore con
    course: CourseReducer,
    user: UserReducer,
  
    
});
export default RootReducer;