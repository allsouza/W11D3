import React from "react";
import { Link, Redirect } from "react-router-dom";

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field){
        return (e) => this.setState({[field]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state)
    }
    
    render(){
        const link = (this.props.formType === "Sign Up") ? ['/login', "Login"] : ['/signup', "Sign Up"]; 
        return (<div>
            <h2>{this.props.formType}</h2>
            <Link to={link[0]}>{link[1]}</Link>
            <form onSubmit={this.handleSubmit}>
                <ul>{this.props.errors.session}</ul>
                <label>Username:
                <input type="text" value={this.state.username} onChange={this.handleChange('username')}/>
                </label>

                <label>Password:
                <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                </label>

                <button>{this.props.formType}</button>
            </form>
            </div>)
    }
}

export default SessionForm;