import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CourseItem extends Component {
  render() {
    return (
      <div className="card" style={{ width: "15rem" }}>
        <img
          src={this.props.items.hinhAnh}
          style={{ width: "100%", height: 150 }}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.items.tenKhoaHoc}</h5>
          <p className="text-dark">{this.props.items.nguoiTao.hoTen}</p>
          <p className="lead">Rating: 5.0</p>
          <Link
            to={`/detail/${this.props.items.maKhoaHoc}`}
            className="btn btn-info"
          >
            Go to Detail
          </Link>
        </div>
      </div>
    );
  }
}
