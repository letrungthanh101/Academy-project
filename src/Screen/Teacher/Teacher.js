import React from 'react'
import "./Teacher.css"
export default function Teacher() {
    return (
        <section className="teacher">
            <div className="container-fluid">
                <div className="row teacher__wrapper">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h3 className="title" style={{margin: "2%"}}>Top Rating Instructors</h3>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <div className="teacher__item">
                            <div className="teacher__img">
                                <img src={require("../../assets/img/teacher.jpg" )}alt="teacher" />
                            </div>
                            <div className="teacher__info">
                                <h5>George Richards</h5>
                                <h6>Professional skaters association</h6>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    5
                                </div>
                                <span>3 Reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <div className="teacher__item">
                            <div className="teacher__img">
                                <img src={require("../../assets/img/teacher2.jpg" )} alt="teacher" />
                            </div>
                            <div className="teacher__info">
                                <h5>Namrata Parmar</h5>
                                <h6>Marketing Consultants form India</h6>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    5
                                </div>
                                <span>3 Reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <div className="teacher__item">
                            <div className="teacher__img">
                                <img src={require("../../assets/img/teacher3.jpg" )} alt="teacher" />
                            </div>
                            <div className="teacher__info">
                                <h5>Robert Richards</h5>
                                <h6>Professional skaters association</h6>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                   5.0
                                </div>
                                <span>3 Reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <div className="teacher__item">
                            <div className="teacher__img">
                                <img src={require("../../assets/img/teacher4.jpg" )} alt="teacher" />
                            </div>
                            <div className="teacher__info">
                                <h5>Robert Downy</h5>
                                <h6>Professor of Business Administration</h6>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    5
                                </div>
                                <span>3 Reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <div className="teacher__item">
                            <div className="teacher__img">
                                <img src={require("../../assets/img/teacher6.jpg" )} alt="teacher" />
                            </div>
                            <div className="teacher__info">
                                <h5>George Clinton</h5>
                                <h6>Photograher, Travel Bloger, Trainer</h6>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    5
                                </div>
                                <span>3 Reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <div className="teacher__item">
                            <div className="teacher__img">
                                <img src={require("../../assets/img/teacher.jpg" )}alt="teacher" />
                            </div>
                            <div className="teacher__info">
                                <h5>Barbara Doley</h5>
                                <h6>Personal Life Coach Fitness Trainer</h6>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                   5
                                </div>
                                <span>3 Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
