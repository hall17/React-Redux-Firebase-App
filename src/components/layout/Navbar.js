import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'


const Navbar = props => {
    console.log(props.auth)
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
            <Link to='/' className="brand-logo">Mario Plan</Link>           
            {props.auth.uid ? <SignedInLinks profile={props.profile} /> : <SignedOutLinks />}
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth:state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)