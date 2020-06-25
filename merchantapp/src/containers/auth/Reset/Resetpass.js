// import { connect } from 'react-redux'
import React, { Component } from 'react';
import './Resetpass.css';
import Heads from '../../../components/heads/Heads';


class Resetpass extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div>
                 <div className="container">
                   <Heads cmp="Paysyslabs" desc="Reset Your Password" />
                <div className="container_box">
                    <div className="emailaddr">
                        <p>Your Email Address</p>
                    <input
                    className="inp"
  name="text-input-name"
  placeholder="john.doe@paysyslabs.com"
/>
                    </div>
                
                    <div className="loginOtherLinks">
                        <div className="row">
                            <div className="col-sm-6">
                            <div className="textTrouble">
                            <p>Back to Login</p>
                        </div>
                            </div>
                            <div className="col-sm-6">
                            <div className="btn_signup">
                            <p>RESET</p>
                        </div>
                            </div>
                        </div>
                        
                       
                    </div>
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