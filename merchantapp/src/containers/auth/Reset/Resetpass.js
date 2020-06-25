// import { connect } from 'react-redux'
import React, { Component } from 'react';
import './Resetpass.css';
// import Heads from '../../../components/heads/Heads';
import ReactLoading from 'react-loading';
import {
    Link,
} from "react-router-dom";
class Resetpass extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading : false
        }
    }



    reset(){
        this.setState({loading : true})
        setTimeout(() => {
            this.setState({loading : false})
        }, 5000);
    }

    render() {
        return (
            <div>
                 <div className="container">
                 <div className="brand_logo_resetpass">
                    <p>Paysyslabs</p>
                </div>
                <p className="acNameText_resetpass animate__animated animate__fadeInUp ">Reset Your Password </p>
                   {/* <Heads cmp="Paysyslabs" desc="Reset Your Password" /> */}
                <div className="container_box_resetpass animate__animated animate__fadeInUp  ">
                    {(this.state.loading == false && (
                        <div>
                                <div className="emailaddr_resetpass">
                        <p>Your Email Address</p>
                    <input
                    className="inp_resetpass"
  name="text-input-name"
  placeholder="john.doe@paysyslabs.com"
/>
                    </div>
                
                    <div className="loginOtherLinks_resetpass">
                        <div className="row">
                            <div className="col-sm-6">
                            <Link className="textTrouble_resetpass" to="/">
                            <p>Back to Login</p>
                        </Link>
                            </div>
                            <div className="col-sm-6">
                            <div className="btn_signup_resetpass" onClick={() => this.reset()}>
                            <p>RESET</p>
                        </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    ) )}
                    {(this.state.loading == true && (
                        <ReactLoading className="loadingC_sigup" type={'bubbles'} color={'#1E2A45'} height={85} width={85} />
                    ))}
                </div>
            </div>     
            </div>            
        );
    }
}


export default Resetpass





// const mapStateToProps = (state, ownProps) => {
//     return {
//         prop: state.prop
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {

//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Resetpass)