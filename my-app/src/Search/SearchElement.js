import React from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/css/searchResult.css";
import './../Styles/vendor/font-awesome/css/font-awesome.min.css';
import './../Styles/vendor/simple-line-icons/css/simple-line-icons.css';
import './../Styles/vendor/bootstrap/css/bootstrap-grid.css';
import './../Styles/css/icons.css'

class SearchElement extends React.Component {
    render(){
        return(
            <div className="card col-xs-12 col-md-5 col-sm-12">
                <img className="card-img-top" src={this.props.data.imageURL} alt="Card image cap"/>
                    <span className={"dealTypeLable" + (this.props.data.dealType==="rent" ? "rentLabel" : 'sellLable')+ "position-absolute"}>رهن و اجاره</span>
                    <div className="card-body">
                        <table className="searchResultTable">
                            <tr>
                                <td width="60%">{this.props.data.area} متر مربع</td>
                                <td width="40%"><i className={"fa fa-map-marker checkIcon" + (this.props.data.dealType==="rent" ? "rentLocation" : 'sellLocation')}> </i>kargar shomali</td>
                            </tr>
                        </table>
                        <hr/>
                        <table className="searchResultTable">
                                {
                                    this.props.data.dealType === "rent" ?
                                        <tr>
                                            <td width="60%">رهن {this.props.data.price.basePrice} <span className="unit">تومان</span></td>
                                            <td width="60%">اجاره {this.props.data.price.rentPrice} <span className="unit">تومان</span></td>
                                        </tr>
                                    :
                                        <td width="60%">خرید {this.props.data.sellPrice} <span className="unit">تومان</span></td>
                                }
                        </table>
                    </div>
            </div>
        );
    }
}

export default SearchElement;