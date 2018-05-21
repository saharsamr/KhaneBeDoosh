import React from 'react';

class HouseData extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            enoughCredit: true,
            paid: false,
            phoneNum: {}
        };
        this.getPhonePaymentStatus = this.getPhonePaymentStatus.bind(this);
        this.handlePhoneNumRequest = this.handlePhoneNumRequest.bind(this);

    }

    getPhonePaymentStatus(){
        let url = 'http://localhost:3000/estatephonenumber?id=' + this.props.data.id;
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(data=> {
            this.setState({phoneNum: data});
        });
    }

    handlePhoneNumRequest() {
        let data = {
            id: this.props.data.id
        };
        let url = 'http://localhost:3000/estatephonenumber?id=' + this.props.data.id;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok)
                this.setState({paid: true});
            else
                this.setState({enoughCredit: false});
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
                                this.state.phoneNum.paid ?
                                    <td width="40%"> {this.state.phoneNum.phone}</td>
                                    :
                                    <td width="40%">{this.state.paid ? this.state.phoneNum.phone : "*********"}</td>
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
                            this.state.phoneNum.paid ?
                                <div className="btn btn-block btn-sm btn-warning position-relative">
                                    {this.state.phoneNum.phone}
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