import React from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/css/headersAndFooters.css"
import "./../Styles/css/account.css"

class IncreaseCreditForm extends React.Component {

    constructor() {
        super();
        this.state= {
            balance: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
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
            },
            body: JSON.stringify(data),
        });
    }

    handleValueChange(event){
        this.setState({balance: event.target.value});
    }

    render(){
        return(
            <div className="row margin-md-50">
                <div className="col-md-4 text-xs-right">
                    <p id="balanceValMargin"><span className="lables">اعتبار کنونی</span>۲۰۰۰<span className="lables">تومان</span></p>
                </div>
                <div className="col-md-7">
                    <form className="col-md-6" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label >تومان</label>
                            <input type="text" name="balance" value={this.state.balance} onChange={this.handleValueChange} className="form-control" placeholder="مبلغ مورد نظر"/>
                        </div>
                        <button type="submit" className="btn btn-addMoney col-md-12">افزایش اعتبار</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default IncreaseCreditForm;