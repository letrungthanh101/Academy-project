import * as yup from "yup";
const signUpUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Bạn chưa nhập tài khoản !"),
  matKhau: yup.string().required("Bạn chưa nhập mật khẩu !"),
  hoTen: yup.string().required("Bạn chưa nhập họ tên !"),
  email: yup
  .string()
  .required("Bạn chưa nhập email !")
  .email("Bạn email bạn chưa đúng định dạng !"),
  SoDT: yup.string().matches(/^[0-9]+$/).required("Bạn chưa nhập sđt"),
});
export default signUpUserSchema;