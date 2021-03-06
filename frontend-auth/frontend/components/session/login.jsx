import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
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
        this.props.login(this.state)
          .then(()=> this.props.history.push('/chirps')) //redirects after user creation
    }

    render(){
       return ( <div className="session-form">
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Username
                <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
                </label>

                <label>Password
                <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                </label>

                <button>Login</button>
            </form>
        </div>)
    }
}

export default Login;