import React, { Component } from 'react';
import { connect } from "react-redux";
import "../actions/cryptoAction";
import  getCrypto  from '../actions/cryptoAction';

class CryptoContainer extends Component {
    state = {  }

    componentWillMount(){
        this.props.dispatch(getCrypto());
    }

    render() { 
        console.log(this.props)
        return ( 
            // <h1>{this.props.crypto}</h1>
            <h1>hello</h1>
         );
    }
}

function mapStateToProps(store){
    return{
        crypto:store.crypto
    }
}

export default connect(mapStateToProps)(CryptoContainer);