import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import './Login.css'
import {
    Link,
} from "react-router-dom";

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading : false
        }
    }

    

    render() {
        return (
            <div>
                heello dashboard
            </div>
        )
    }
}


export default Dashboard


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