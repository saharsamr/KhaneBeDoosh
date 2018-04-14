import React from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import './../Styles/vendor/font-awesome/css/font-awesome.min.css';
import './../Styles/vendor/simple-line-icons/css/simple-line-icons.css';
import './../Styles/vendor/bootstrap/css/bootstrap-grid.css';
import './../Styles/css/icons.css';
import "./../Styles/css/searchResult.css";
import "./../Styles/css/homePage.css";
import {Redirect} from 'react-router';

class SearchElement extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            redirect: false
        };
        this.setRedirect = this.setRedirect.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    render(){
        return(
            <div className="card col-xs-12 col-md-5 col-sm-12" onClick={this.setRedirect}>
                {this.renderRedirect()}
                <img className="card-img-top" src={this.props.data.imageURL} alt="Card image cap"/>
                    <span className={"dealTypeLable " + (this.props.data.dealType==="rent" ? "rentLable " : 'sellLable ')+ "position-absolute"}>رهن و اجاره</span>
                    <div className="card-body">
                        <table className="searchResultTable">
                            <tr>
                                <td width="60%">{this.props.data.area} متر مربع</td>
                                <td width="40%"><i className={"fa fa-map-marker " + (this.props.data.dealType==="rent" ? "rentLocation" : 'sellLocation')}> </i> کارگر شمالی</td>
                            </tr>
                        </table>
                        <hr></hr>
                        <table className="searchResultTable">
                                {
                                    this.props.data.dealType === "rent" ?
                                        <tr>
                                            <td width="60%">رهن {this.props.data.price.basePrice} <span className="unit">تومان</span></td>
                                            <td width="40%">اجاره {this.props.data.price.rentPrice} <span className="unit">تومان</span></td>
                                        </tr>
                                    :
                                        <td width="60%">خرید {this.props.data.price.sellPrice} <span className="unit">تومان</span></td>
                                }
                        </table>
                    </div>
            </div>
        );
    }

    setRedirect(){
        this.setState({redirect: true});
        console.log("here");
    }

    renderRedirect(){
        if(this.state.redirect){
            return(
                <Redirect to={{
                    pathname: "/housedetail",
                    state: {id: this.props.data.id}
                }}/>
            );
        }
    }
}

export default SearchElement;