import React from 'react';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createNewUser(this.state)
          .then(()=> this.props.history.push('/chirps')) //redirects after user creation
    }

    render(){
       return ( <div className="session-form">
            <h2>Sign Up</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Username
                <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
                </label>

                <label>Email
                <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                </label>

                <label>Password
                <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                </label>

                <button>Sign Up</button>
            </form>
        </div>)
    }
}

export default SignUp;