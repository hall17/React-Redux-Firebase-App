import React,{useState} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../store/actions/authActions'

const SignUp = props => {
    const [state, setState] = useState({
        email: '',
        password:'',
        firstName:'',
        lastName:''
    })
    const handleChange = (e) => {
        setState({
            ...state,
        [e.target.id] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.signUp(state)
    }
    if(props.auth.uid) return <Redirect to='/' />

    return (
        <div className="container">
            <form onSubmit ={handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>            
            <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={handleChange}/>
            </div>
            <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={handleChange}/>
            </div>
            <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleChange}/>
            </div>
            <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Sign up</button>
            </div>
            <div className="red-text center">
                {props.authError ? <p>{props.authError}</p> : null }
            </div>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
