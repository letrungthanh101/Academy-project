import React from "react";
import "./footer.css"
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      <footer className="page-footer font-small blue-grey lighten-5  ">
        {/* Footer Links */}
        <div className="container text-center text-md-left mt-5">
          {/* Grid row */}
          <div className="row mt-3 dark-grey-text">
            {/* Grid column */}
            <div className="col-md-6 col-lg-4 col-xl-3 col-6 mb-4 mt-4 ">
              {/* Content */}
              <h6 className="text-uppercase font-weight-bold">
                DoubleT company
              </h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 160 }}
              />
              <p>
                <a className="dark-grey-text font-weight-bold" href="#!">
                  DoubleT for Business
                </a>
              </p>
              <p>
                <a className="dark-grey-text font-weight-bold" href="#!">
                  Teach on DoubleT
                </a>
              </p>
              <p>
                <a className="dark-grey-text " href="#!">
                  DoubleT app
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  About us
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-6 col-lg-2 col-xl-2 col-6 mx-auto mb-4  mt-4 ">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Products</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 90 }}
              />
              <p>
                <a className="dark-grey-text" href="#">
                  MDBootstrap
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  MDWordPress
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#">
                  BrandFlow
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#">
                  Bootstrap Angular
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-6 col-lg-2 col-xl-2 col-6 mx-auto mb-4  mt-4 text-dark ">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold ">Useful links</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 120 }}
              />
              <p>
                <a className="dark-grey-text" href="#">
                  Your Account
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#">
                  Shipping Rates
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#">
                  Help
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-6 col-lg-3 col-xl-3 col-6 mx-auto mb-md-0 mb-4  mt-4 text-dark ">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 75 }}
              />
              <p>
                <i className="fa fa-home mr-3" />
                HCM 700000, VN
              </p>
              <p>
                <i className="fa fa-envelope mr-3" />
                doublet@gmail.com{" "}
              </p>
              <p>
                <i className="fa fa-phone mr-3" />+ 09 04 20 70 62
              </p>
              <p>
                <i className="fa fa-fax mr-3" />+ 028 35 15 70 88
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
        {/* Copyright */}
        <hr />
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="footer-copyright text-left text-black-50 py-3 ">
              © 2020 Copyright:
              <a className="dark-grey-text pl-2" href="#">
                {/* {" "} */}
                Double'T, Inc
              </a>
            </div>
            <div className="footer-media">
              <p className="font-weight-bold text-center">Follow us on </p>
              <div className="media-social">
                <a className="p-2" href="https://www.facebook.com/ImDoubleT">
                  <i className="fa fa-facebook" style={{ color: "#4267B2" }} />
                </a>
                <a className="p-2" href="#">
                  <i className="fa fa-twitter" style={{ color: "#00A6E9" }} />
                </a>
                <a className="p-2" href="#">
                  <i className="fa fa-instagram" style={{ color: "#F56040" }} />
                </a>
                <a className="p-2" href="#">
                  <i className="fa fa-youtube" style={{ color: "#F70000" }} />
                </a>
              </div>
            </div>
          </div>
          {/* Copyright */}
        </div>
      </footer>
    </div>
  );
}
