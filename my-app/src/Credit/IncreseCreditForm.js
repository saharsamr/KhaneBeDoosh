import React from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/css/headersAndFooters.css";
import "./../Styles/css/account.css";
import {Redirect} from 'react-router';

class IncreaseCreditForm extends React.Component {

    constructor() {
        super();
        this.state= {
            balance: '',
            current: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.getBalance = this.getBalance.bind(this);
        this.renderLoginPage = this.renderLoginPage.bind(this);
    }

    renderLoginPage() {
        if(!localStorage.key("jwt")){
            return (<Redirect to={{
                pathname: '/loginUser'
            }} />);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {balance: this.state.balance};
        console.log(data);
        fetch('http://localhost:3000/increaseCredit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'jwt': localStorage.getItem("jwt")
            },
            body: JSON.stringify(data),
        }).then(function (response) {
            if(response.ok)
                alert("موجودی با موفقیت افزایش یافت.");
            else
                alert("عملیات ناموفق بود. دوباره تلاش کنید.");

        });
    }

    handleValueChange(event){
        this.setState({balance: event.target.value});
    }

    render(){
        this.renderLoginPage();
        this.getBalance();
        return(
            <div>
                <div className="row margin-md-50">
                    <div className="col-md-4 text-xs-right">
                        <p id="balanceValMargin"><span className="lables">اعتبار کنونی</span>{this.state.current.balance}<span className="lables">تومان</span></p>
                    </div>
                    <div className="col-md-2"> </div>
                    <div className="col-md-6">
                        <form className="col-md-8" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label >تومان</label>
                                <input type="text" name="balance" value={this.state.balance} onChange={this.handleValueChange} className="form-control" placeholder="مبلغ مورد نظر"/>
                            </div>
                            <button type="submit" className="btn btn-addMoney col-md-12">افزایش اعتبار</button>
                        </form>
                    </div>
                </div>
                <div className="spacer"> </div>
                <div className="spacer"> </div>
                <div className="spacer"> </div>
            </div>
        );
    }

    getBalance() {
        if(localStorage.key("jwt")) {
            let url = 'http://localhost:3000/increaseCredit';
            fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=utf-8',
                    'jwt': localStorage.getItem("jwt")
                }
            }).then(response => {
                return response.json();
            }).then(data => {
                this.setState({current: data});
            });
        }
    }
}

export default IncreaseCreditForm;