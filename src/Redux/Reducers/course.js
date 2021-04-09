let initialState = {
  courses: [],
  courses2: [],
  courses3: [],
  courses4: [],
  courseDetail: null,
};
const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COURSES": {
      state.courses = action.payload;
      return { ...state };
    }
    case "FETCH_COURSES2": {
      state.courses2 = action.payload;
      return { ...state };
    }
    case "FETCH_COURSES3": {
        state.courses3 = action.payload;
        return { ...state };
      }
      case "FETCH_COURSES4": {
        state.courses4 = action.payload;
        return { ...state };
      }
    case "FETCH_COURSES_DETAIL": {
      state.courseDetail = action.payload;
      return { ...state };
    }
    // case "ADD_TO_CART":{
    //   state.courseDetail = action.payload;
    //   return {...state};
    // }
    default:
      return state;
  }
};
export default CourseReducer;
