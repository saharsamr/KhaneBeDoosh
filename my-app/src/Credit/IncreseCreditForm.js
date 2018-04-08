import React from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/css/headersAndFooters.css"
import "./../Styles/css/account.css"

class IncreaseCreditForm extends React.Component {
    render(){
        return(
            <div className="row margin-md-50">
                <div className="col-md-4 text-xs-right">
                    <p id="balanceValMargin"><span className="lables">اعتبار کنونی</span> ۲۰۰۰ <span className="lables">تومان</span></p>
                </div>
                <div className="col-md-7">
                    <form className="col-md-6">
                        <div className="form-group">
                            <label >تومان</label>
                            <input type="text" className="form-control" placeholder="مبلغ مورد نظر"/>
                        </div>
                        <button className="btn btn-addMoney col-md-12" onClick={(e) => {e.preventDefault();}}>افزایش اعتبار</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default IncreaseCreditForm;