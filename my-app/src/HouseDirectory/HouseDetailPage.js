import React from 'react';
import Header from "../Common/HeaderFooters/Header";
import PageTitle from "../Common/PageTitle";
import Footer from "../Common/HeaderFooters/Footer";
import HouseImageAndPhone from "./HouseImageAndPhone";

import HouseData from "./HouseData";

class HouseDetailPage extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <PageTitle title="مشخصات کامل ملک"/>
                <div className="spacer"></div>
                <div className="container row">
                    <HouseData/>
                    <HouseImageAndPhone/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default HouseDetailPage;