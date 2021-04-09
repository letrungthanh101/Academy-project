import React from "react";

export default function Trusted() {
  return (
    <div>
      <div
        className="container-fluid bg-light mt-5"
        style={{ border: "1px solid rgba(0,0,0,.1)" }}
      >
        <div className=" container  content-trusted">
          <h5 className="text text-center col-12 py-3">
            Trusted by universities{" "}
          </h5>
          <div className="d-flex justify-content-around">
            <img
              src={require ("../../assets/img/img-university/1200px-Logo-hcmut.svg.png")}
              
              style={{ width: "10%", padding: "30px 0" }}
            />
            <img
              src={require ("../../assets/img/img-university/brasol-removebg-preview.png")}
              
              style={{ width: "10%", padding: "30px 0" }}
            />
            <img
              src={require("../../assets/img/img-university/2-test1-removebg.png")}
              
              style={{ width: "10%", padding: "30px 0" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
