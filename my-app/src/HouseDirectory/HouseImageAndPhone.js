import React from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/css/searchResult.css"
import HouseImg from './../assests/img/home3.jpg'
class HouseImageAndPhone extends React.Component {

    constructor(){
        super();
        this.state = {
            id: this.props ,
            enoughCredit : false,
            showPhoneNum : true
        };
        this.getPhonePaymentStatus = this.getPhonePaymentStatus.bind(this);
        this.handlePhoneNumRequest = this.handlePhoneNumRequest.bind(this);
    }

    getPhonePaymentStatus(){
        let url = 'http://localhost3000/estatephonenumber?id=' + this.id;
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json());
    }

    handlePhoneNumRequest(){
        let data = {
            id: this.id
        };
        fetch('http://localhost3000/estatephonenumber', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json());
    }

    showPhoneNumber(){
        this.setState({
            showPhoneNum: false
        });
    }

    render(){
        return(
            <div className="col-md-7 row">
                <img className="float-right card-img-top card-img-bottom w-100 position-relative detailPhoto" src={HouseImg} alt="House image"/>
                <div className="spacer20">&nbsp;</div>
                {
                    this.state.showPhoneNum ?
                        <div className="btn btn-block btn-sm btn-info position-relative" onClick={this.showPhoneNumber.bind(this)}>
                            مشاهده شماره مالک/مشاور
                        </div>
                        :
                        this.state.enoughCredit ?
                            null :
                            <div className="btn btn-block btn-sm btn-warning position-relative">
                                اعتبار شما برای مشاهده شماره مالک/مشاور کافی نیست.
                            </div>
                }

            </div>
        );
    }
}

export default HouseImageAndPhone;