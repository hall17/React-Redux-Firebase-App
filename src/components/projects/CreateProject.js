import React,{useState} from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'

const CreateProject = props => {
    const [state, setState] = useState({
        title: '',
        content:'',
    })
    const handleChange = (e) => {
        setState({
            ...state,
        [e.target.id] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.createProject(state)
        props.history.push('/')
    }
    if(!props.auth.uid) return <Redirect to='/signin' />
    return (
        <div className="container">
            <form onSubmit ={handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create new project</h5>            
            <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={handleChange}/>
            </div>
            <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" onChange={handleChange} className="materialize-textarea"></textarea>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Create</button>
            </div>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
