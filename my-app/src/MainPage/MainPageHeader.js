import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import './../Styles/css/headersAndFooters.css';

class MainPageHeader extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light fixed-top red">
                <div class="container" >
                    <button type="button" class="btn btn-default transparent text-white border-white" href="#" >
                        &emsp; ناحیه کاربری
                        <i class="fa fa-smile-o"></i>
                    </button>
                </div>
            </nav>
        );
    }
}

export default MainPageHeader;