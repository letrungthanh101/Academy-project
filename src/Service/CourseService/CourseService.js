import React, { Component } from 'react'
import Axios from "axios";
export default class CourseService extends Component {
   fetchCourse (){
    return Axios({
        method: "GET",
        url:
          "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
      }); 
   };
   fetchCourse2 (){
    return Axios({
        method: "GET",
        url:
          "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP07"
      }); 
   };
   fetchCourse3 (){
    return Axios({
        method: "GET",
        url:
          "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08"
      }); 
   };
   fetchCourse4 (){
    return Axios({
        method: "GET",
        url:
          "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09"
      }); 
   };
   fetchCourseDetail(id){
    return  Axios({
      method: "GET",
      url:
        `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`
    });
}
}
