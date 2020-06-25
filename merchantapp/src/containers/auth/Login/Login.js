import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import './Login.css'


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading : false
        }
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
                            type="password"
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
            </div>            
        );
    }
}


export default Login



// const mapStateToProps = (state, ownProps) => {
//     return {
//         prop: state.prop
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {

//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Login)