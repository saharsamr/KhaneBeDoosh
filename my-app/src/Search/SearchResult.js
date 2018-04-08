import React, { Component } from 'react';

import Footer from './../Common/HeaderFooters/Footer';
import Header from './../Common/HeaderFooters/Header';
import PageTitle from "./../Common/PageTitle";
import SearchForm from "./../Search/SearchForm";

class SearchResult extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <PageTitle title="نتایج جستجو"/>
                <div>
                    <p className="lables">برای مشاهده اطلاعات بیشتر درباره‌ی هر ملک روی آن کلیک کنید.</p>
                </div>
                <SearchForm/>
                <Footer />
            </div>
        );
    }
}


export default SearchResult;
