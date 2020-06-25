// import { connect } from 'react-redux'
import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import './Signup.css';
// import { Button } from 'evergreen-ui'
import ReactLoading from 'react-loading';
// import Heads from '../../../components/heads/Heads';

import {
    Link,
} from "react-router-dom";
class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }


    signup() {
        this.setState({ loading: true})
        setTimeout(() => {
            
            this.setState({ loading: false})
        }, 5000);
    }



    render() {
        const {loading} = this.state
        return (
            <div>
 <div className="container">
                <div className="brand_logo_sigup">
                    <p>Paysyslabs</p>
                </div>
                <p className="acNameText_sigup animate__animated animate__fadeInUp ">Create An Account</p>
                <p className="acNameText_desc animate__animated animate__fadeInUp ">We're currently only available in Pakistan</p>
                {/* <Heads cmp="Paysyslabs" desc="Account Login"/> */}
                <div className="container_box_sigup animate__animated animate__fadeInUp ">

                    {(loading == false && (
                        <div>

<div className="emailpassaddr_sigup">
                        <p className="lblEP_sigup">Email Address</p>
                        <input
                            className="inp_sigup"
                            name="text-input-name"
                            placeholder="john.doe@paysyslabs.com"
                        />
                    </div>
                    <div className="emailpassaddr_sigup">
                        <p className="lblEP_sigup">Password</p>
                        <input
                            className="inp"
                            type="password"
                            name="text-input-name"
                            placeholder="********"
                        />
                    </div>
                    <div className="emailpassaddr_sigup">
                        <p className="lblEP_sigup">Phone Number</p>
                        <input
                            className="inp"
                            type="phone"
                            name="text-input-name"
                            placeholder="03009876547"
                        />
                    </div>
                    <div className="emailpassaddr_sigup">
                        <p className="lblEP_sigup">Name</p>
                        <input
                            className="inp"
                            type="text"
                            name="text-input-name"
                            placeholder="Your store name"
                        />
                    </div>
                    <div className="emailpassaddr_sigup">
                        <p className="lblEP_sigup">Website</p>
                        <input
                            className="inp"
                            type="text"
                            name="text-input-name"
                            placeholder="https://mystore.com"
                        />
                    </div>
                    <div className="loginOtherLinks_sigup">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="textTrouble_sigup">
                                    <p className="textDesc">By continuing you agree to Safepay's</p>
                                    <Link to="/">
                                    <p className="textDescLink">Terms and Conditions</p>
                                        </Link> 
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="btn_signup_sigup" onClick={() => this.signup()}>
                                    <p>SIGN UP</p>
                                </div>
                            </div>
                        </div>


                    </div>                            
                        </div>
                    ))}
                    {(loading == true && (
                        <ReactLoading className="loadingC_sigup" type={'bubbles'} color={'#1E2A45'} height={85} width={85} />
                    ))}
                </div>

            </div>
            </div>            
        );
    }
}



export default Signup
