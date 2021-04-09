import React, { Component } from 'react'
import Breadcrumb from '../../../Screen/Breadcum/Breadcum'
import Stat from '../Stat/Stat'
import Header from '../../../Screen/Header/Header'
import Trusted from '../../../Screen/Trusted/Trusted'
import Footer from '../../../Screen/Footer/Footer'
import Design from '../Design/Design'

export default class Course extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Stat/>
                
                <Design/>
               

                <Trusted/>
                <Footer/>
            </div>
        )
    }
}
