import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/vendor/bootstrap/css/bootstrap-grid.min.css";
import './../Styles/vendor/font-awesome/css/font-awesome.min.css';
import './../Styles/vendor/simple-line-icons/css/simple-line-icons.css';
import "./../Styles/css/homePage.css"
import WhyKBDImg from "./../assests/img/why-khanebedoosh.jpg"

class MainPageInfo extends Component{
    render(){
        return(
            <div className="whyHome container">
                <div className="col-md-11" align="right">
                    <h1>چرا خانه به دوش؟</h1>
                    <div className="row container col-md-12">
                        <img className="d-block col-md-4 col-xs-12 w-xs-100 w-md-25" src={WhyKBDImg} alt="why khane be doosh"/>
                        <ul className="list-unstyled col-md-8 ">
                            <li >اطلاعات کامل و صحیح از املاک قابل معامله &emsp;<i className="fa fa-check-circle" className="checkIcon"></i></li>
                            <li >بدون محدودیت، 24 ساعته و در تمام ایام هفته&emsp;<i className="fa fa-check-circle" className="checkIcon"></i></li>
                            <li >جستجوی هوشمند ملک، صرفه جویی در زمان&emsp;<i className="fa fa-check-circle" className="checkIcon"></i></li>
                            <li >تنوع در املاک، افزایش قدرت انتخاب مشتریان&emsp;<i className="fa fa-check-circle" className="checkIcon"></i></li>
                            <li >بانکی جامع از اطلاعات هزاران آگهی ب روز&emsp;<i className="fa fa-check-circle" className="checkIcon"></i></li>
                            <li >دستیابی به نتیجه مطلوب در کمترین زمان ممکن&emsp;<i className="fa fa-check-circle" className="checkIcon"></i></li>
                            <li >همکاری با مشاوران متخصص در حوزه املاک&emsp;<i className="fa fa-check-circle" className="checkIcon"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPageInfo;