import { userService } from "../../Service";
import { FETCH_CREDENTIALS } from "./type";
import { createAction } from "./";
import swal from 'sweetalert';

const showAlertTrue  =() =>{
  swal("Login Success!", "Have you good day!", "success");
 
}
const showAlertFalse = () =>{
  swal("Error ","Something went wrong !","error")
}
//async action
export const login = (user) => {
  return dispatch => {
    userService
      .signIn(user)
      .then((res) => {
        dispatch(createAction(FETCH_CREDENTIALS, res.data));
        localStorage.setItem('credentials',JSON.stringify(res.data))
       
        console.log(res);
        showAlertTrue()
        
      })
      .catch((err) => {
        console.log(err);
        showAlertFalse();
        
      });
  };
};
export const signUp = (data) =>{
  return dispatch =>{
    userService
    .signUp(data)
    .then((res)=>{
      dispatch(createAction(FETCH_CREDENTIALS, res.data));
      console.log(res);
      showAlertTrue();

    }).catch((err)=>{
      console.log(err);
      showAlertFalse();
    })
  }

}
