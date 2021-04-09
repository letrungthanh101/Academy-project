import React from "react";
import "./our-team.css"
export default function Founder() {
  return (
    <div>
      <section className="our-team container  my-3 py-5 text-center">
        <div className="row mb-5">
          <div className="col-12">
            <h1>Our Team </h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              qui sed necessitatibus veniam molestias et quaerat, nostrum saepe
              ad numquam voluptates perspiciatis aliquam temporibus ipsa
              repellendus dicta explicabo labore mollitia.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="card card-our-team">
              <div className="card-body">
                <img
                  src={require("../../assets/img/img-students/johny_sins_60827672_449763422517335_1474107158020696456_n-1024x1024.jpg")}
                  
                  className="img-fluid rounded-circle w-50 mb-3"
                  style={{ marginTop: "-50px" }}
                />
                <h3>Johnny Sins</h3>
                <h5>Lead Writer</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum sint maxime cupiditate numquam repudiandae inventore.
                </p>
                <div className="d-flex flex-row justify-content-center">
                  <div className="p-4">
                    <a href ="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 ">
            <div className="card card-our-team">
              <div className="card-body">
                <img
                  src={require("../../assets/img/founder1.jpg")}
                
                  className="img-fluid rounded-circle w-50 mb-3"
                  style={{ marginTop: "-50px" }}
                />
                <h3>Le Trung Thành</h3>
                <h5>Founder </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum sint maxime cupiditate numquam repudiandae inventore.
                </p>
                <div className="d-flex flex-row justify-content-center">
                  <div className="p-4">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="card card-our-team">
              <div className="card-body">
                <img
                  src={require("../../assets/img/img-students/johny_sins_60827672_449763422517335_1474107158020696456_n-1024x1024.jpg")}
                  
                  className="img-fluid rounded-circle w-50 mb-3"
                  style={{ marginTop: "-50px" }}
                />
                <h3>Johnny</h3>
                <h5>Lead Writer</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum sint maxime cupiditate numquam repudiandae inventore.
                </p>
                <div className="d-flex flex-row justify-content-center">
                  <div className="p-4">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
