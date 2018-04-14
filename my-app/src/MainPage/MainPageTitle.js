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

                            <div className="row col-sm-3 mx-auto">
                                <div className="col-md-10">
                                    <a href="homePage.html">
                                        <img className="img-fluid rounded-circle mx-auto logoImg" src={logoImg} alt="Logo image"/>
                                    </a>
                                    <h6 className="text-white">خانه به دوش</h6>
                                </div>
                            </div>

        );
    }
}

export default MainPageTitle;