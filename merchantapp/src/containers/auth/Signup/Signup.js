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
            <div className="container">
                <div className="brand_logo">
                    <p>Paysyslabs</p>
                </div>
                <p className="acNameText">Account Login</p>
                {/* <Heads cmp="Paysyslabs" desc="Account Login"/> */}
                <div className="container_box">

                    {(loading == false && (
                        <div>

<div className="emailpassaddr">
                        <p className="lblEP">Email Address</p>
                        <input
                            className="inp"
                            name="text-input-name"
                            placeholder="john.doe@paysyslabs.com"
                        />
                    </div>
                    <div className="emailpassaddr">
                        <p className="lblEP">Password</p>
                        <input
                            className="inp"
                            name="text-input-name"
                            placeholder="********"
                        />
                    </div>
                    <div className="loginOtherLinks">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="textTrouble">
                                    <p>Trouble Logging in ?</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="btn_signup" onClick={() => this.login()}>
                                    <p>LOG IN</p>
                                </div>
                            </div>
                        </div>


                    </div>                            
                        </div>
                    ))}
                    {(loading == true && (
                        <ReactLoading className="loadingC" type={'bubbles'} color={'#1E2A45'} height={85} width={85} />
                    ))}
                </div>

            </div>
        );
    }
}



export default Signup
