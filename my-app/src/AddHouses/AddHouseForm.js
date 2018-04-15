import React from 'react';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/css/headersAndFooters.css"

class AddHouseForm extends React.Component {

    constructor(){
        super();
        this.state = {
            dealType: 1,
            buildingType: '',
            area: '',
            address: '',
            phoneNumber: '',
            description: '',
            sellPrice: 0,
            rentPrice: 0,
            basePrice: 0
        }
        this.state = { rent: null };

        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleAriaChange = this.handleAriaChange.bind(this);
        this.handleBuildingTypeChange = this.handleBuildingTypeChange.bind(this);
        this.handleDealTypeChange = this.handleDealTypeChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSellPriceChange = this.handleSellPriceChange.bind(this);
        this.handleRentPriceChange = this.handleRentPriceChange.bind(this);
        this.handleBasePriceChange = this.handleBasePriceChange.bind(this);
        //this.setPrice = this.setPrice.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.changeToRent = this.changeToRent.bind(this);
        this.changeToSell = this.changeToSell.bind(this);
    }

    handleAriaChange(event){
        this.setState({area: event.target.value});
    }

    handleDealTypeChange(event){
        this.setState({dealType: event.target.value});
        console.log("deal type changed.");
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

    handleSellPriceChange(event){
        this.setState({sellPrice: event.target.value});
    }

    handleRentPriceChange(event){
        this.setState({rentPrice: event.target.value});
    }

    handleBasePriceChange(event){
        this.setState({price: event.target.value});
    }

    changeToRent(){
        this.setState({
            rent: true,
            dealType:1
        });
    }

    changeToSell(){
        this.setState({
            rent: false,
            dealType: 0
        });
    }

    handleSubmit(event){
        event.preventDefault();
        //this.setPrice();
        let info = {
            sellPrice: this.state.sellPrice,
            basePrice: this.state.basePrice,
            rentPrice: this.state.rentPrice,
            area: this.state.area,
            buildingType: this.state.buildingType,
            dealType: this.state.dealType,
            description: this.state.description,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber
        };
        fetch('http://localhost:3000/addestate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info)
        }).then(function (response) {
            if(response.status === 200)
                alert("ملک با موفقیت ثبت شد.");
        });
    }

    render(){
        return(
            <div className="row justify-content-center">
                <div className="container">
                    <div className="col-md-1"> </div>
                    <div className="col-md-10 text-center ">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row col-md-12 ">
                                <div className="alignR row col-md-12 ">
                                    <div className="form-check ">
                                        <input onClick={ this.changeToRent} type="radio" name="exampleRadios" id="exampleRadios1" value={1}/>
                                        <label className="form-check-label" for="exampleRadios1">
                                            رهن و اجاره
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input onClick={this.changeToSell} type="radio" name="exampleRadios" id="exampleRadios2" value={0}/>
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

                                {
                                    this.state.rent ?
                                        <div className="col-md-6 ">
                                            <label className="">تومان</label>
                                            <input onChange={this.handleBasePriceChange} type="text" className="form-control" placeholder="قیمت رهن"/>
                                        </div>
                                        :
                                        <div className="col-md-6 ">
                                            <label className="">تومان</label>
                                            <input onChange={this.handleSellPriceChange} type="text" className="form-control" placeholder="قیمت خرید"/>
                                        </div>
                                }

                            </div>
                            <div className="form-row col-md-12 text-left">
                                <div className="col-md-6">
                                    <label className="">&nbsp;</label>
                                    <input onChange={this.handlePhoneChange} type="text" className="form-control" placeholder="شماره تماس"/>
                                </div>

                                {
                                    this.state.rent ?
                                        <div className="col-md-6">
                                            <label className="">تومان</label>
                                            <input onChange={this.handleRentPriceChange} type="text" className="form-control" placeholder="قیمت اجاره"/>
                                        </div>
                                        : null
                                }
                            </div>
                            <div className=" col-md-12 text-left">
                                <label>&nbsp;</label>
                                <input onChange={this.handleDescriptionChange} type="text" className="form-control" placeholder="توضیحات"/>
                            </div>

                            <div className="col-md-4 float-left">
                                <label>&nbsp;</label>
                                <button type="submit" className="btn btn-block btn-sm btn-info" onClick={this.sendData}>ثبت ملک</button>
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
