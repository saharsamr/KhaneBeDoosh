import React from 'react';
import MainPageHeader from "./MainPageHeader";
import Footer from "../Common/HeaderFooters/Footer";
import MainPageInfo from "./MainPageInfo";
import MainPageCarasoul from "./MainPageCarasoul";
import MainPageTitle from "./MainPageTitle";
import KhaneBeDooshFeature from "./KhaneBeDooshFeature"
import SearchForm from "../Search/SearchForm";


class MainPage extends React.Component{
    render(){
        return(
            <div>
                <MainPageHeader/>
                <MainPageCarasoul/>
                <div className="row justify-content-center" >
                    <div className="main-text">
                        <div className="col-md-12 text-center ">
                            <div className="container">
                                <MainPageTitle/>
                                <SearchForm/>
                            </div>
                        </div>
                    </div>
                </div>
                <KhaneBeDooshFeature/>
                <MainPageInfo/>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;