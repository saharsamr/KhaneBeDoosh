import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../../Styles/css/headersAndFooters.css';
import './../../Styles/vendor/bootstrap/css/bootstrap.min.css';
import LogoImg from './../../assests/img/logo.png'

class Header extends Component{

    constructor(){
        super();
        this.state = {
            userData: {}
        };
        this.getBalance = this.getBalance.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    render(){
        if(localStorage.key("jwt") != null)
            this.getBalance();
        return(
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top shadow-box navBar">
                <div className="container col-md-12">
                    <div className="col-md-8">
                            <div className="float-right row">
                                <a className="logoImg" href="/">
                                    <img className="" src={LogoImg} alt="Logo" />
                                </a>
                                <p className="logoName">خانه به دوش</p>
                            </div>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn btn-default userInfo-btn effect-box" href="#">
                            <i className="fa fa-smile-o"></i>
                            &emsp; ناحیه کاربری
                            <div className="container userInfoBox-hover">
                                {
                                    localStorage.key("jwt") != null ?
                                    <div className="dropdownBox">
                                        <div className="userName">
                                            {this.state.userData.name}
                                        </div>
                                        <div>
                                            <table>
                                                <tr>
                                                    <td className="balancelable">اعتبار</td>
                                                    <td className="balanceValue">&emsp; {this.state.userData.balance} تومان</td>
                                                </tr>
                                            </table>

                                        </div>
                                        <div className="row justify-content-center">
                                            <a className="a-addMoney" href="/credit" target="_blank">افزایش اعتبار</a>
                                            <button type="button" onClick={this.logOut}
                                                    className="btn btn-default userInfo-btn effect-box">
                                                <a className="a-addMoney" href="/loginUser" target="_blank">خروج</a>
                                            </button>
                                        </div>
                                    </div>
                                        :
                                    <div className="dropdownBox">
                                        <div className="row justify-content-center">
                                            <a className="a-addMoney" href="/loginUser" target="_blank">ورود</a>
                                        </div>
                                    </div>
                                }
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        );
    }

    getBalance() {
        let url = 'http://localhost:3000/increaseCredit';
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8',
                'jwt': localStorage.getItem("jwt")
            }
        }).then(response => {
            return response.json();
        }).then(data=> {
            this.setState({userData: data});
        });
    }

    logOut() {
        localStorage.removeItem("jwt");
    }
}

export default Header;