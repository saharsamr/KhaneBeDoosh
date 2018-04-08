import React from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/css/searchResult.css"
import HouseImg from './../assests/img/home3.jpg'
class HouseImageAndPhone extends React.Component {
    render(){
        return(
            <div className="col-md-7 row">
                <img className="float-right card-img-top card-img-bottom w-100 position-relative detailPhoto" src={HouseImg} alt="House image"/>
                    <div className="spacer20">&nbsp;</div>
                    <div className="btn btn-block btn-sm btn-info position-relative">
                        مشاهده شماره مالک/مشاور
                    </div>
            </div>
        );
    }
}

export default HouseImageAndPhone;