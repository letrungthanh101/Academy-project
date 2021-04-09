import React, { Component } from "react";
import "./top-categories.css"
import {Link} from "react-router-dom"
export default class CategoriesCourse extends Component {
  render() {
    return (
      <div>
        <section className="top-categories my-5" >
          <div className="container  ">
            <h5 className="top-categories--header ">
              <b>Top categories</b>
            </h5>
            <div className="top-categories-group row " >
              <div className="top-categories--items--col col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div className="top-categories--items">
                  <Link to="/courses">
                    <img src={require("../../assets/img/img-top-categories/interface.svg")} />
                    <span>Development</span>
                  </Link>
                </div>
              </div>
              <div className="top-categories--items--col col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div className="top-categories--items">
                  <Link to="/courses">
                    <img src={require("../../assets/img/img-top-categories/bars-chart.svg")} />
                    <span>Business</span>
                  </Link>
                </div>
              </div>
              <div className="top-categories--items--col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div className="top-categories--items">
                  <Link to="/courses">
                    <img src={require("../../assets/img/img-top-categories/computing.svg")} />
                    <span>IT and Software</span>
                  </Link>
                </div>
              </div>
              <div className="top-categories--items--col col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div className="top-categories--items">
                  <Link to="/courses">
                    <img src={require("../../assets/img/img-top-categories/house-sketch.svg")} />
                    <span>Design</span>
                  </Link>
                </div>
              </div>
              <div className="top-categories--items--col col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div className="top-categories--items">
                  <Link to="/courses">
                    <img src={require("../../assets/img/img-top-categories/ads.svg" )} />
                    <span>Marketing</span>
                  </Link>
                </div>
              </div>
              <div className="top-categories--items--col col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div className="top-categories--items">
                  <Link to="/courses">
                    <img src={require("../../assets/img/img-top-categories/personal.svg")}  />
                    <span>Personal </span>
                  </Link>
                </div>
              </div>
              <div className="top-categories--items--col col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div className="top-categories--items">
                  <Link to="/courses">
                    <img
                      src={require("../../assets/img/img-top-categories/tools-and-utensils.svg")}
                    
                    />
                    <span>
                      Photography<span></span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="top-categories--items--col col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div className="top-categories--items">
                  <Link to="/courses">
                    <img src={require("../../assets/img/img-top-categories/interface (1).svg")}  />
                    <span>Music</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
