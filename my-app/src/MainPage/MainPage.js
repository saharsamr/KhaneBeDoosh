import React from 'react';
import MainPageHeader from "./MainPageHeader";
import Footer from "../Common/HeaderFooters/Footer";
import MainPageInfo from "./MainPageInfo";


class MainPage extends React.Component{
    render(){
        return(
            <div>
                <MainPageHeader/>
                <MainPageInfo/>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;