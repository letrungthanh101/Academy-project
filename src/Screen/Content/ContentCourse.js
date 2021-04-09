import React from "react";
import "./content.css"
export default function ContentCourse() {
  return (
    <div>
      <section>
        <div className="content-courses container-fluid bg-light">
          <div className="container">
            <div className="row">
              <div className="content-items col-md-4">
                <div className="background-content">
                  <div>
                    <div className="img-content">
                      <img
                        src= {require("../../assets/img/undraw_fast_loading_0lbh.svg")}
                        alt="photo"
                      />
                    </div>
                    <br />
                    <div>
                      <h6>
                        <b>Go at your pace</b>
                      </h6>
                      <p>
                        Enjoy lifetime access to courses on DoubleT Academy
                        website and app
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-items col-md-4">
                <div className="background-content">
                  <div>
                    <div className="img-content">
                      <img src={require("../../assets/img/undraw_site_stats_l57q.svg")} alt="photo" />
                    </div>
                    <div>
                      <br />
                      <h6>
                        <b>Learn from industry experts</b>
                      </h6>
                      <p>
                        Select from top instructors around the world and to
                        learn from they
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-items col-md-4">
                <div className="background-content">
                  <div>
                    <div className="img-content">
                      <img src={require("../../assets/img/undraw_web_search_eetr.svg")} alt="photo" />
                    </div>
                    <div>
                      <br />
                      <h6>
                        <b>Find video courses on almost any topic</b>
                      </h6>
                      <p>
                        Build your library for your career and personal growth
                      </p>
                    </div>
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
