import React, {Component} from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/css/homePage.css"
import "./../Styles/css/searchResult.css"
import './../Styles/vendor/bootstrap/css/bootstrap-grid.css'


class SearchForm extends Component{
    render(){
        return(
            <div className="row justify-content-center position-relative" >
                <div className="main-text">
                    <div className="col-md-12 text-center ">
                        <div className="container">
                            <div className="row searchHomeForm">
                                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto ">
                                    <form className="form_ ">
                                        <div className="form-row align-items-center"><div className="form-group col-md-4 margin10 ">
                                            <label >&nbsp;</label>
                                            <select className="form-control h-100">
                                                <option selected="selected" disabled="disabled">نوع ساختمان</option>
                                                <option>آپارتمان</option>
                                                <option>ویلایی</option>
                                            </select>
                                        </div>
                                            <div className="form-group margin10 txtAlignL w-25 ">
                                                <label className="text-white">متر مربع</label>
                                                <input type="text" className="form-control " placeholder="حداکثر متراژ"/>
                                            </div>
                                            <div className="form-group margin10 txtAlignL ">
                                                <label className="text-white">تومان</label>
                                                <input type="text" className="form-control" placeholder="حداکثر قیمت"/>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="alignR row col-md-6 \">
                                                <div className="form-check ">
                                                    <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                                        <label className="form-check-label text-white" for="exampleRadios1">
                                                            رهن و اجاره
                                                        </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                                        <label className="form-check-label text-white" for="exampleRadios2">
                                                            خرید
                                                        </label>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
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