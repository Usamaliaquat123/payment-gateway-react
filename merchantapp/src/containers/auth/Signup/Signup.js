// import { connect } from 'react-redux'
import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import './Signup.css';
// import { Button } from 'evergreen-ui'
import ReactLoading from 'react-loading';
// import Heads from '../../../components/heads/Heads';
// import { ReactLoading } from 'react-loading';


class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }


    componentDidMount() {

    }

    login() {
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
                <p className="acNameText_sigup">Account Login</p>
                {/* <Heads cmp="Paysyslabs" desc="Account Login"/> */}
                <div className="container_box_sigup">

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
                    <div className="loginOtherLinks_sigup">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="textTrouble_sigup">
                                    <p>Trouble Logging in ?</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="btn_signup_sigup" onClick={() => this.login()}>
                                    <p>LOG IN</p>
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
