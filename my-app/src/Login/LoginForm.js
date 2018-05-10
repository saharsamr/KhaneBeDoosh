import React from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/css/login.css";

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            result: [],
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleSubmit() {
        let params = {
            username: this.state.username,
            password: this.state.password
        };
        let url = 'http://localhost:3000/login?';
        Object.keys(params).forEach(key => {
            url = url + key + "=" + params[key] + "&" ;
        });
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(data=> {
            localStorage.setItem("jwt", data.jwt.toString());
        });
    }

    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-5 col-md-3">
                        <div className="form-login">
                            <h4>برای ورود یا ثبت‌نام نام کاربری خود را وارد کنید</h4>
                            <input onChange={this.handleUsernameChange} type="text" id="userName" className="form-control input-sm chat-input" placeholder="نام کاربری"></input>
                        <br/>
                            <input onChange={this.handlePasswordChange} type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="کلمه عبور" /></div>
                    <br/>
                    <div className="wrapper">
                    <span className="group-btn">
                        <a href="#" onClick={this.handleSubmit} className="btn btn-primary btn-md">login <i className="fa fa-sign-in"></i></a>
                    </span>
                    </div>
                </div>

            </div>
        </div>
        );
    }
}

export default LoginForm;