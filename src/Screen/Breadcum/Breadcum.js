import React, { Component } from 'react'
import  "./breadcum.css"
export default class Breadcrumb extends Component {
    render() {

        // let {name, match} = this.props;

        return (
            <section className="breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <h1 className="text-white">Course</h1>
                            {/* <h6>HOME {match.url.toUpperCase()}</h6> */}
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
