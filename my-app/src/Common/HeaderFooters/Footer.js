import React, {Component} from 'react';
import './../../Styles/css/headersAndFooters.css';
import './../../Styles/css/icons.css';
import './../../Styles/vendor/bootstrap/css/bootstrap.min.css';
import './../../Styles/vendor/font-awesome/css/font-awesome.min.css';
import './../../Styles/vendor/simple-line-icons/css/simple-line-icons.css';
import './../../Styles/vendor/bootstrap/css/bootstrap-grid.css'

class Footer extends Component{
    render(){
        return(
            <div>
                <div className="spacer"> </div>
                <footer className="footer">
                    <div className="container row" >
                        <div className="col-md-6 copy-right-text">
                            تمامی حقوق مادی و معنوی این وبسایت متعلق به سحر و صدف می باشد.&copy;
                        </div>
                        <div className="col-md-6">
                            <ul className="social-icons">
                                <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                                <li><a href="" className="social-icon"> <i className="fa fa-telegram"></i></a></li>
                                <li><a href="" className="social-icon"> <i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}
export default Footer;