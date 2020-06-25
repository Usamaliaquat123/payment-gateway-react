import { connect } from 'react-redux'
import React, { Component } from 'react';''



class Login extends Component {
    constructor(props){
        super(props)
        state = {

        }
    }


    render() {
        return (
            <div>

            </div>            
        );
    }
}






const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)