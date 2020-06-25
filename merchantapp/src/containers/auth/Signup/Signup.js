// import { connect } from 'react-redux'
import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import './Signup.css';
// import { Button } from 'evergreen-ui'
// import ReactLoading from 'react-loading';


class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    componentDidMount() {
        
    }





    render() {  
        return (
            <div className="container">
                    <div className="brand_logo">
                        <p>Paysyslabs</p>
                    </div>
                    <p className="acNameText">Account Login</p>
                <div className="container_box">
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
                            <div className="btn_signup">
                            <p>SIGN UP</p>
                        </div>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
            </div>            
        );
    }
}



export default Signup


// const mapStateToProps = (state, ownProps) => {
//     return {
//         prop: state.prop
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {

//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Signup)