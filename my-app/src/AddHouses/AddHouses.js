import React from 'react';
import Header from "../Common/HeaderFooters/Header";
import PageTitle from "../Common/PageTitle";
import Footer from "../Common/HeaderFooters/Footer";
import AddHouseForm from "./AddHouseForm";
import "./../Styles/css/account.css"



class AddHouses extends React.Component {
    render(){
        return(
            <div>
                <PageTitle title="ثبت ملک جدید در خانه به دوش"/>
                <div className="spacer"> </div>
                <AddHouseForm/>
                <Footer/>
            </div>
        );
    }
}

export default AddHouses;