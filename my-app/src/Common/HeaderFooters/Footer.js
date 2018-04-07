import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './headersAndFooters.css';

class Footer extends Component{
    render(){
        return(
            <footer className="footer position-absolute">
                <div className="container" >
                    <div className="col-md-6 ">
                        <ul className="social-icons">
                            <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                            <li><a href="" className="social-icon"> <i className="fa fa-telegram"></i></a></li>
                            <li><a href="" className="social-icon"> <i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-right padding-10">تمامی حقوق مادی و معنوی این وبسایت متعلق به سحر و صدف می باشد.&copy;</div>
                </div>
            </footer>
        );
    }
}
export default Footer;