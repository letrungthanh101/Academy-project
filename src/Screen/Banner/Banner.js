import React from "react";
import DescriptionButton from "../../Features/Button/DescriptionButton";
import Search from "../../Components/Search/Search";
import SearchButton from "../../Features/Button/SearchButton";
import "./banner.css"
export default function Banner() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="screen_content">
            <div className="row">
              <div className="screen_content_description col-md-12 col-xl-3 ">
                <span style={{ fontSize: 70 }}>Hello.</span>
                <h1>Welcome to my website</h1>
                <p>
                  Learn everything you want anytime, anywhere with all the
                  hottest careers and skills today.
                </p>
               <DescriptionButton/>
              </div>
              <div className="screen_content_picture col-md-12 col-xl-9">
                <img
                  src={require("../../assets/img/Banner.svg")}
                  
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="screen_content_picture_item col-md-12">
                <img src={require("../../assets/img/Banner2.svg")}  />
              </div>
            </div>
          </div>
          <div className="row text-center form-group">
            <div className="col-9 ">
             <Search/>
            </div>
            <div className="col-3">
              <SearchButton/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
