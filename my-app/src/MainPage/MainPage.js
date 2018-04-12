import React from 'react';
import MainPageHeader from "./MainPageHeader";
import Footer from "../Common/HeaderFooters/Footer";
import MainPageInfo from "./MainPageInfo";
import SearchForm from "../Search/SearchForm";


class MainPage extends React.Component{
    render(){
        return(
            <div>
                <MainPageHeader/>
                <SearchForm/>
                <div>

                </div>
                {/*<MainPageInfo/>*/}
                <Footer/>
            </div>
        );
    }
}

export default MainPage;