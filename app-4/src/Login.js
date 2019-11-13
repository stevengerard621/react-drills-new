import React, { Component } from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username : "",
            password: "",
        }

        this.handleButtonClick = this.handleButtonClick.bind(this)
    };

    handleUsernameChange(name){
        this.setState({ username: name });
    }

    handlePasswordChange(pass){
        this.setState({ password: pass });
    }

    handleButtonClick(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input 
                onChange={ e => this.handleUsernameChange(e.target.value)}
                type="text"/>
                <input 
                onChange={e => this.handlePasswordChange(e.target.value)}
                type="text"/>
                <button onClick={this.handleButtonClick}>LOGIN</button>
            </div>
        )
    }
}

export default Login