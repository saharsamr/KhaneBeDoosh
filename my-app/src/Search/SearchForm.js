import React, {Component} from 'react';
import {injector} from 'react-services-injector';
import Search from './../Services/Search';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/css/homePage.css";
import "./../Styles/css/searchResult.css";
import './../Styles/vendor/bootstrap/css/bootstrap-grid.css';
import {Redirect} from 'react-router';
import {Service} from 'react-services-injector';


class SearchForm extends Component{

    constructor(props) {
        super(props);
        this.state= {
            buildingType: '',
            area: '',
            price: '',
            dealType: 0,
            searchParams: {},
            redirect: false,
            result: {}
        };
        this.handleBuildingTypeSelect = this.handleBuildingTypeSelect.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleDealTypeChange = this.handleDealTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let params = {
            price: this.state.price,
            area: this.state.area,
            buildingType: this.state.buildingType,
            dealType: this.state.dealType
        };

        this.setState({"searchParams": params});
        this.setState({"redirect": true});
    }



    handleBuildingTypeSelect(event){
        this.setState({"buildingType": event.target.value});
    }

    handleAreaChange(event){
        this.setState({"area": event.target.value});
    }

    handlePriceChange(event){
        this.setState({"price": event.target.value});
    }

    handleDealTypeChange(event){
        this.setState({"dealType": event.target.value});
    }

    renderRedirect() {
        if(this.state.redirect){
            return (<Redirect to={{
                pathname: '/searchresult',
                state: {searchParams: this.state.searchParams}
            }} />);
        }
    }

    render(){
        return(<div className="row justify-content-center position-relative" >
            <div className="main-text">
                <div className="col-md-12 text-center ">
                    <div className="container">
                            <div className="searchHomeForm">
                                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto ">
                                    <form onSubmit={this.handleSubmit} className="form_ ">
                                        <div className="form-row align-items-center"><div className="form-group col-md-4 margin10 ">
                                            <label >&nbsp;</label>
                                            <select className="form-control h-100" value={this.state.buildingType} onChange={this.handleBuildingTypeSelect}>
                                                <option selected="selected" disabled="disabled">نوع ساختمان</option>
                                                <option value="آپارتمان">آپارتمان</option>
                                                <option value="ویلایی">ویلایی</option>
                                            </select>
                                        </div>
                                            <div className="form-group margin10 txtAlignL w-25 ">
                                                <label className="text-white">متر مربع</label>
                                                <input value={this.state.area} onChange={this.handleAreaChange} type="text" className="form-control " placeholder="حداکثر متراژ"/>
                                            </div>
                                            <div className="form-group margin10 txtAlignL ">
                                                <label className="text-white">تومان</label>
                                                <input value={this.state.price} onChange={this.handlePriceChange} type="text" className="form-control" placeholder="حداکثر قیمت"/>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="alignR row col-md-6">
                                                <div className="form-check ">
                                                    <input type="radio" value={1} name="exampleRadios" id="exampleRadios1"
                                                           onChange={this.handleDealTypeChange}/>
                                                        <label className="form-check-label text-white" for="exampleRadios1">
                                                            رهن و اجاره
                                                        </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="exampleRadios" id="exampleRadios2" value={0}
                                                           onChange={this.handleDealTypeChange}/>
                                                        <label className="form-check-label text-white" for="exampleRadios2">
                                                            خرید
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                {this.renderRedirect()}
                                                <button type="submit" className="btn btn-block btn-sm btn-info">جستجو</button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="searchHomeForm ">
                                <div className="text-white">
                                    صاحب خانه هستید؟ خانه خود را ثبت کنید
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;