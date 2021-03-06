import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import './../Styles/css/headersAndFooters.css';

class MainPageHeader extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container" >
                    <button type="button" className="btn btn-default transparent text-white border-white " >
                        &emsp; ناحیه کاربری
                        <i className="fa fa-smile-o"> </i>
                    </button>
                    <button type="button" className="btn btn-default transparent text-white border-white " href="#">خروج</button>
                </div>
            </nav>
        );
    }
}

export default MainPageHeader;