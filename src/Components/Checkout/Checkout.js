import React, { Component } from 'react'
import "./Checkout.css"
import Header from '../../Screen/Header/Header'
import Trusted from '../../Screen/Trusted/Trusted'
import Footer from '../../Screen/Footer/Footer'
export default class Checkout extends Component {
    render() {

        // let { cart } = this.props;

        return (
            <>
            <Header/>
            <section className="breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <h1 className="text-white">Check out</h1>
                            {/* <h6>HOME {match.url.toUpperCase()}</h6> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="checkout">
                <div className="row mr-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 checkout__list">
                                <h4>Your items (1)</h4>
                                <div className="cart__items">
                                <img src={require("../../assets/img/item1.jpg")} style={{width:100,height:50}}/>
                                <span className="weight bold ml-3">NodeJS</span>
                                <p className="text-danger text-center">$ 20.00</p>
                                </div>
                            </div>
                            <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 checkout__payment">
                                <h1>Total: 20.00$</h1>
                                <div className="payment">
                                    <div className="card">
                                        <div className="card__header">
                                            <div className="card__radio">
                                                <input type="radio" id="cart" />
                                            </div>
                                            <div className="card__image">
                                                <span>New Payment Cart</span>
                                                <span><img src={require ("../../assets/img/payment-option.png" )}alt="cart" /></span>
                                            </div>
                                        </div>
                                        <div className="card__body">
                                            <form>
                                                <input type="text" className="card__name" placeholder="Name on Card" disabled />
                                                <input type="text" className="card__number" placeholder="Card Number" disabled />
                                                <div className="code">
                                                    <select className="card__month" name="month" disabled>
                                                        <option value="1">MM</option>
                                                    </select>
                                                    <select className="card__year" name="year" disabled>
                                                        <option value="1">YY</option>
                                                    </select>
                                                    <input className="card__Code" type="text" placeholder="Security Code" disabled />
                                                </div>
                                                <div className="zip">
                                                    <select className="country" disabled>
                                                        <option value="1">VietNam</option>
                                                    </select>
                                                    <input className="zipcode" type="text" placeholder="Zip/Postal Code" disabled />
                                                </div>
                                                <div className="card__footer">
                                                    <button>Complete Payment</button>
                                                    <p>By completing your purchase you agree to these <span>Terms of Service.</span></p>
                                                    <div className="lock">
                                                        <i class="fas fa-lock"></i>
                                                        <span>Secure Connection</span>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="paypal">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Trusted/>
            <Footer/>
            </>
        )
    }
}
