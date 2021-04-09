import React from "react";
import "./testimonials.css"
export default function Testimonials() {
  return (
    <div>
      <section className="testimonials bg-light">
        <div className="container">
          <h1>Testimonials</h1>
          {/* <p class="text-center">What our students have to say</p> */}
          <h3 className="text-center">What our students have to say</h3>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="profile">
                <img src={require("../../assets/img/img-students/dinh_dat.jpg")}  className="user" />
                <blockquote>
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum ab est nihil maiores provident. Culpa delectus mollitia
                  enim minus hic fugit officiis ullam, possimus repellat sit
                  repudiandae architecto harum "
                </blockquote>
                <h3>Đinh Đạt</h3> <span>Sinh viên năm 3 Hutech</span>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="profile">
                <img
                  src={require("../../assets/img/img-students/minh_quan.jpg")}
                  
                  className="user"
                />
                <blockquote>
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum ab est nihil maiores provident. Culpa delectus mollitia
                  enim minus hic fugit officiis ullam, possimus repellat sit
                  repudiandae architecto harum "
                </blockquote>
                <h3>Minh Quân</h3> <span>Sinh viên năm 3 Hutech</span>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="profile">
                <img
                  src={require("../../assets/img/img-students/ngoc_anh.jpg")}
                  
                  className="user  "
                />
                <blockquote>
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum ab est nihil maiores provident. Culpa delectus mollitia
                  enim minus hic fugit officiis ullam, possimus repellat sit
                  repudiandae architecto harum "
                </blockquote>
                <h3>Ngọc Anh</h3> <span>Sinh viên năm 3 Hutech</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
