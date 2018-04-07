import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './headersAndFooters.css';
import './../../../vendor/bootstrap/css/bootstrap.min.css';


class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top shadow-box navBar">
                <div className="container col-md-12">
                    <div className="col-md-8">
                        <div className="float-right row">
                            <a href="homePage.html">
                                <img className="logoImg" src="./../../assests/img/logo.png" alt="logo"  />
                            </a>
                            <p className="logoName">خانه به دوش</p>

                        </div>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn btn-default userInfo-btn effect-box" href="#">
                            <i className="fa fa-smile-o"></i>
                            &emsp; ناحیه کاربری
                            <div className="container userInfoBox-hover">
                                <div className="dropdownBox">
                                    <div className="userName">
                                        بهنام همایون
                                    </div>
                                    <div>
                                        <table>
                                            <tr>
                                                <td className="balancelable">اعتبار</td>
                                                <td className="balanceValue">&emsp; 2000 تومان</td>
                                            </tr>
                                        </table>

                                    </div>
                                    <a className="a-addMoney" href="account.html" target="_blank">افزایش اعتبار</a>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;