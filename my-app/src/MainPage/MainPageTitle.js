import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/vendor/bootstrap/css/bootstrap-grid.min.css";
import './../Styles/vendor/font-awesome/css/font-awesome.min.css';
import './../Styles/vendor/simple-line-icons/css/simple-line-icons.css';
import "./../Styles/css/homePage.css"
import logoImg from "./../assests/img/logo.png"

class MainPageTitle extends Component{
    render(){
        return(
            <div class="row justify-content-center" >
                <div class="main-text">
                    <div class="col-md-12 text-center ">
                        <div class="container">
                            <div class="row col-sm-3 mx-auto">
                                <div class="col-md-10">
                                    <a href="homePage.html">
                                        <img class="img-fluid rounded-circle mx-auto logoImg" src={logoImg} alt="Logo image"/>
                                    </a>
                                    <h6 class="text-white">خانه به دوش</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPageTitle;