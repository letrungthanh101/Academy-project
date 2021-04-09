
import Axios from "axios";
class UserService {
    signUp(data){
        return Axios({
            method: "POST",
            url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data
          });
    };
    signIn(user){
        return Axios({
          method: "POST",
          url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
          data : user 
        })
          // .then((res) => {
          //   console.log(res);
          // })
          // .catch((err) => {
          //   console.log(err);
          // });
      }

    }
 export default  UserService;
