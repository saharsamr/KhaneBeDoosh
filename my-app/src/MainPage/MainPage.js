import React from 'react';
import MainPageHeader from "./MainPageHeader";
import Footer from "../Common/HeaderFooters/Footer";
import MainPageInfo from "./MainPageInfo";
import MainPageCarasoul from "./MainPageCarasoul";
import MainPageTitle from "./MainPageTitle";
import SearchForm from "../Search/SearchForm";


class MainPage extends React.Component{
    render(){
        return(
            <div>
                <MainPageHeader/>
                <MainPageCarasoul/>
                <MainPageTitle/>
                <SearchForm/>
                <MainPageInfo/>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;