import React from 'react';

class HouseData extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            enoughCredit: true,
            paid: false
        };
        this.getPhonePaymentStatus = this.getPhonePaymentStatus.bind(this);
        this.handlePhoneNumRequest = this.handlePhoneNumRequest.bind(this);
        this.getPhoneNumber = this.getPhoneNumber.bind(this);

    }

    getPhonePaymentStatus(){
        let url = 'http://localhost:3000/estatephonenumber?id=' + this.props.data.id;
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'jwt': localStorage.getItem("jwt")
            }
        }).then(response => response.json());
    }

    handlePhoneNumRequest() {
        let data = {
            id: this.props.data.id
        };
        fetch('http://localhost:3000/estatephonenumber', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'jwt': localStorage.getItem("jwt")
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            if(response.ok) {
                //this.setState({paid:true});
                console.log(200);
            }
            else {
                console.log(500);
                //this.setState({enoughCredit: false});
            }
        });
    }

    getPhoneNumber() {
        let url = 'http://localhost:3000/estatephonenumber';
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8',
                'jwt': localStorage.getItem("jwt")
            }
        }).then(response => {
            return response.json();
        }).then(data=> {
            this.setState({current: data});
        });
    }

    render(){
        this.getPhonePaymentStatus();
        return(
            <div className="container row">
            <div className="col-md-5 text-right">
                {
                    this.props.data.dealType ?
                        <span className={"dealTypeLable rentLable folat-right"}>رهن اجاره</span>
                        :
                        <span className={"dealTypeLable sellLable folat-right"}>فروش</span>
                }

                <div className="spacer"></div>
                <table className="text-right col-md-12 position-relative">
                    <tr className=" border-bottom">
                        <td width="60%" className="">شماره مالک/مشاور</td>
                        {
                            this.state.paid ?
                                <td width="40%"> {this.props.data.phone}</td>
                                :
                                <td width="40%">{this.state.paid?this.getPhoneNumber():"*********"}</td>
                        }
                    </tr>
                    <tr className="spacer20"></tr>
                    <tr className=" border-bottom">
                        <td width="60%">{this.props.data.buildingType}</td>
                        <td width="40%"> کلنگی</td>
                    </tr>
                    <tr className="spacer20"> </tr>


                    <tr className=" border-bottom">
                        <td width="60%">{ this.props.data.dealType ? "قیمت رهن" : "قیمت خرید" }</td>
                        <td width="40%">{this.props.data.dealType ? this.props.data.price.basePrice : this.props.data.dealType} تومان</td>
                    </tr>

                    <tr className="spacer20"> </tr>
                    {
                        this.props.data.dealType ?
                            <tr className=" border-bottom">
                                <td width="60%">قیمت اجاره</td>
                                <td width="40%">{this.props.data.price.rentPrice} تومان</td>
                            </tr>
                            :
                            null
                    }


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
                    this.state.enoughCredit && !this.state.paid ?
                        <div className="btn btn-block btn-sm btn-info position-relative" onClick={this.handlePhoneNumRequest}>
                            مشاهده شماره مالک/مشاور
                        </div>
                        :
                        this.state.paid ?
                            <div className="btn btn-block btn-sm btn-warning position-relative">
                                شماره خریداری شده است.
                            </div>
                            :
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