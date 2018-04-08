import React from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/css/headersAndFooters.css"

class AddHouseForm extends React.Component {
    render(){
        return(
            <div className="row justify-content-center">
                <div className="container">
                    <div className="col-md-1"> </div>
                    <div className="col-md-10 text-center ">
                        <form >
                            <div className="row col-md-12 ">
                                <div className="alignR row col-md-12 ">
                                    <div className="form-check ">
                                        <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                            <label className="form-check-label" for="exampleRadios1">
                                                رهن و اجاره
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                            <label className="form-check-label " for="exampleRadios2">
                                                خرید
                                            </label>
                                    </div>
                                </div>

                            </div>
                            <div className="form-row align-items-center text-left col-md-12">
                                <div className=" col-md-6 ">
                                    <label >&nbsp;</label>
                                    <select className="form-control h-100">
                                        <option selected="selected" disabled="disabled">نوع ساختمان</option>
                                        <option>آپارتمان</option>
                                        <option>ویلایی</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="">مترمربع</label>
                                    <input type="text" className="form-control" placeholder="متراژ"/>
                                </div>
                            </div>
                            <div className="form-row align-items-center col-md-12 text-left">

                                <div className="col-md-6 ">
                                    <label className="">&nbsp;</label>
                                    <input type="text" className="form-control" placeholder="آدرس"/>
                                </div>
                                <div className="col-md-6 ">
                                    <label className="">تومان</label>
                                    <input type="text" className="form-control" placeholder="قیمت رهن"/>
                                </div>
                            </div>
                            <div className="form-row col-md-12 text-left">
                                <div className="col-md-6">
                                    <label className="">&nbsp;</label>
                                    <input type="text" className="form-control" placeholder="شماره تماس"/>
                                </div>
                                <div className="col-md-6">
                                    <label className="">تومان</label>
                                    <input type="text" className="form-control" placeholder="قیمت اجاره"/>
                                </div>
                            </div>
                            <div className=" col-md-12 text-left">
                                <label>تومان</label>
                                <input type="text" className="form-control" placeholder="توضیحات"/>
                            </div>

                            <div className="col-md-4 float-left">
                                <label>&nbsp;</label>
                                <button type="submit" className="btn btn-block btn-sm btn-info">ثبت ملک</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-1"> </div>
                </div>
            </div>
    );
    }
}

export default AddHouseForm;