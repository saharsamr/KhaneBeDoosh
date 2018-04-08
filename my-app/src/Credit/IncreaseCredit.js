import React from 'react';
import Header from "../Common/HeaderFooters/Header";
import PageTitle from "../Common/PageTitle";
import Footer from "../Common/HeaderFooters/Footer";
import IncreaseCreditForm from "./IncreseCreditForm";
import "./../Styles/css/account.css"

class IncreaseCredit extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <PageTitle title="افزایش موجودی"/>
                <IncreaseCreditForm/>
                <Footer/>
            </div>
        );
    }
}

export default IncreaseCredit;