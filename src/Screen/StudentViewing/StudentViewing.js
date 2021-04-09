import React, { Component } from "react";
import {Link} from "react-router-dom"
export default class StudentViewing extends Component {
  render() {
  
    return (
 
      <div className="container-fluid mb-4">
     
        <h2 className="my-5" style={{ marginLeft: 30 }}>
          Students are viewing
        </h2>
        <div className="row d-flex justify-content-around flex-nowrap">
          <div className="card" style={{ width: "15rem" }}>
            <img
              className="card-img-top"
              src={require("../../assets/img/item1.jpg")}
              alt="photo"
            />
            <div className="card-body">
              <h5 className="card-title">Node JS</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to ="/cart" className="btn btn-info">
                Learn now
              </Link>
              <p className="text-warning my-2">
              <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                <span className="text-dark mx-2">5.0 </span>
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              className="card-img-top"
              src={require("../../assets/img/item2.jpg")}
              alt="photo"
            />
            <div className="card-body">
              <h5 className="card-title">HTML,CSS,JS</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-info">
                Learn now
              </a>
              <p className="text-warning my-2">
           
                <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                
          
                <span className="text-dark mx-2">5.0 </span>
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              className="card-img-top"
              src={require("../../assets/img/item3.jpg")}
              alt="photo"
            />
            <div className="card-body">
              <h5 className="card-title">Python</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-info">
                Learn now
              </a>
              <p className="text-warning my-2">
               
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                
          

                <span className="text-dark mx-2">5.0 </span>
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              className="card-img-top"
              src={require("../../assets/img/item4.jpg")}
              alt="photo"
            />
            <div className="card-body">
              <h5 className="card-title">Javascript</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-info">
                Learn now
              </a>
              <p className="text-warning my-2">
                
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                 
            

                <span className="text-dark mx-2">5.0 </span>
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              className="card-img-top"
              src={require("../../assets/img/item5.jpg")}
              alt="photo"
            />
            <div className="card-body">
              <h5 className="card-title">Angular</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-info">
                Learn now
              </a>
              <p className="text-warning my-2">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
             

                <span className="text-dark mx-2">5.0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
