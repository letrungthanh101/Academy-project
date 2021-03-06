import React, { Component } from "react";
import {Link} from "react-router-dom"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default class CourseItem extends Component {
  render() {
    return (

    
      <div className="card mx-2 my-3">
        <img src={this.props.items.hinhAnh} style={{width:"100%", height:"150px"}}/>
        <p className="lead font-weight-bold">{this.props.items.tenKhoaHoc}</p>
        <p className="lead">{this.props.items.nguoiTao.hoTen}</p>
        <p className="lead">Rating: 5.0</p>
        <Link to={`/detail/${this.props.items.maKhoaHoc}`} className="btn btn-info">Go to Detail</Link>
      </div>
    );
  }
}
