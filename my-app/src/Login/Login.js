import React from 'react';
import Header from "../Common/HeaderFooters/Header";
import PageTitle from "../Common/PageTitle";
import LoginForm from "./LoginForm";
import Footer from "../Common/HeaderFooters/Footer";
import "./../Styles/css/account.css"

class Login extends React.Component {
    render(){
        return(
            <div>
                <PageTitle title="ورود"/>
                <LoginForm/>
                <Footer/>
            </div>
        );
    }
}

export default Login;