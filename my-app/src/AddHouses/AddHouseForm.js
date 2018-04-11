import React from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/css/headersAndFooters.css"

class AddHouseForm extends React.Component {

    constructor(){
        super();
        this.state = {
            dealType: 1,
            buildingType: '',
            price: {},
            area: '',
            address: '',
            phoneNumber: '',
            description: ''
        }

        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleAriaChange = this.handleAriaChange.bind(this);
        this.handleBuildingTypeChange = this.handleBuildingTypeChange.bind(this);
        this.handleDealTypeChange = this.handleDealTypeChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }

    handleAriaChange(event){
        this.setState({area: event.target.value});
    }

    handleDealTypeChange(event){
        this.setState({dealType: event.target.value});
    }

    handleBuildingTypeChange(event){
        this.setState({buildingType: event.target.value});
    }

    handleAddressChange(event){
        this.setState({address: event.target.value});
    }

    handlePhoneChange(event){
        this.setState({phoneNumber: event.target.value});
    }

    handleDescriptionChange(event){
        this.setState({description: event.target.value});
    }

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
                                        <input onChange={this.handleDealTypeChange} type="radio" name="exampleRadios" id="exampleRadios1" value={1}/>
                                            <label className="form-check-label" for="exampleRadios1">
                                                رهن و اجاره
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input onChange={this.handleDealTypeChange} type="radio" name="exampleRadios" id="exampleRadios2" value={0}/>
                                            <label className="form-check-label " for="exampleRadios2">
                                                خرید
                                            </label>
                                    </div>
                                </div>

                            </div>
                            <div className="form-row align-items-center text-left col-md-12">
                                <div className=" col-md-6 ">
                                    <label >&nbsp;</label>
                                    <select onChange={this.handleBuildingTypeChange} className="form-control h-100">
                                        <option selected="selected" disabled="disabled">نوع ساختمان</option>
                                        <option>آپارتمان</option>
                                        <option>ویلایی</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="">مترمربع</label>
                                    <input onChange={this.handleAriaChange} type="text" className="form-control" placeholder="متراژ"/>
                                </div>
                            </div>
                            <div className="form-row align-items-center col-md-12 text-left">

                                <div className="col-md-6 ">
                                    <label className="">&nbsp;</label>
                                    <input onChange={this.handleAddressChange} type="text" className="form-control" placeholder="آدرس"/>
                                </div>
                                <div className="col-md-6 ">
                                    <label className="">تومان</label>
                                    <input type="text" className="form-control" placeholder="قیمت رهن"/>
                                </div>
                            </div>
                            <div className="form-row col-md-12 text-left">
                                <div className="col-md-6">
                                    <label className="">&nbsp;</label>
                                    <input onChange={this.handlePhoneChange} type="text" className="form-control" placeholder="شماره تماس"/>
                                </div>
                                <div className="col-md-6">
                                    <label className="">تومان</label>
                                    <input type="text" className="form-control" placeholder="قیمت اجاره"/>
                                </div>
                            </div>
                            <div className=" col-md-12 text-left">
                                <label>تومان</label>
                                <input onChange={this.handleDescriptionChange} type="text" className="form-control" placeholder="توضیحات"/>
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