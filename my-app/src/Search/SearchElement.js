import React from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";

class SearchElement extends React.Component {
    render(){
        return(
            <div className="card col-xs-12 col-md-5 col-sm-12">
                <img className="card-img-top" src="./../assests/img/home2.JPG" alt="Card image cap"></img>
                    <span className="delTypeLable rentLable position-absolute">رهن و اجاره</span>
                    <div className="card-body">
                        <table className="searchResultTable">
                            <tr>
                                <td width="60%">۴۰۰۰ متر مربع</td>
                                <td width="40%"><i className="fa fa-map-marker rentLocation" className="checkIcon"></i> کارگر شمالی</td>
                            </tr>
                        </table>
                        <hr/>
                        <table className="searchResultTable">
                            <tr>
                                <td width="60%">رهن ۲۰۰۰۰۰۰۰۰ <span className="unit">تومان</span></td>
                                <td width="60%">اجاره ۲۰۰۰۰۰۰ <span className="unit">تومان</span></td>
                            </tr>
                        </table>
                    </div>
            </div>
        );
    }
}

export default SearchElement;