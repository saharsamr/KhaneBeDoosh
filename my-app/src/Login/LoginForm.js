import React from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/css/login.css";

class LoginForm extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-5 col-md-3">
                        <div className="form-login">
                            <h4>برای ورود یا ثبت‌نام نام کاربری خود را وارد کنید</h4>
                            <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="نام کاربری"></input>
                        <br/>
                            <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="کلمه عبور" /></div>
                    <br/>
                    <div className="wrapper">
                    <span className="group-btn">
                        <a href="#" className="btn btn-primary btn-md">login <i className="fa fa-sign-in"></i></a>
                    </span>
                    </div>
                </div>

            </div>
        </div>
        );
    }
}

export default LoginForm;