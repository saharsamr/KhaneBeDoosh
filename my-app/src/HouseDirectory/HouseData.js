import React from 'react';

class HouseData extends React.Component {

    constructor(props){
        super(props);
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
        }).then(response => response.json())
            .then(function (data) {
                if(data.paid.equals(false))
                    console.log("not paid");
            })
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
            <div className="container row">
            <div className="col-md-5 text-right">
                <span className={"dealTypeLable " + (this.props.data.dealType==="rent" ? "rentLable " : 'sellLable ')+ "folat-right"}>فروش</span>
                <div className="spacer"></div>
                <table className="text-right col-md-12 position-relative">
                    <tr className=" border-bottom">
                        <td width="60%" className="">شماره مالک/مشاور</td>
                        <td width="40%"> 09121212121</td>
                    </tr>
                    <tr className="spacer20"></tr>
                    <tr className=" border-bottom">
                        <td width="60%">{this.props.data.buildingType}</td>
                        <td width="40%"> کلنگی</td>
                    </tr>
                    <tr className="spacer20"></tr>
                    <tr className=" border-bottom">
                        <td width="60%">قیمت</td>
                        <td width="40%">2000 تومان</td>
                    </tr>
                    <tr className="spacer20"></tr>
                    <tr className=" border-bottom">
                        <td width="60%">آدرس</td>
                        <td width="40%"> {this.props.data.address}</td>
                    </tr>
                    <tr className="spacer20"></tr>
                    <tr className=" border-bottom">
                        <td width="60%">متراژ</td>
                        <td width="40%"> {this.props.data.area} مترمربع</td>
                    </tr>
                    <tr className="spacer20"></tr>
                    <tr className=" border-bottom">
                        <td width="60%">توضیحات</td>
                        <td width="40%">{this.props.data.description}</td>
                    </tr>
                </table>
            </div>

            <div className="col-md-7 row">
                <img className="float-right card-img-top card-img-bottom w-100 position-relative detailPhoto" src={this.props.data.imageURL} alt="House image"/>
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
            </div>
        );
    }
}

export default HouseData;