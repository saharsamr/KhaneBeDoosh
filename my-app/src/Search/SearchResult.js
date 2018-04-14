import React, { Component } from 'react';

import Footer from './../Common/HeaderFooters/Footer';
import Header from './../Common/HeaderFooters/Header';
import PageTitle from "./../Common/PageTitle";
import SearchForm from "./../Search/SearchForm";
import "./../Styles/css/searchResult.css";
import "./../Services/Search";
// import Search from "../Services/Search";
import {injector} from 'react-services-injector';
import services from "./../Services";
import SearchResultBox from "./SearchResultBox";


injector.register(services);

class SearchResult extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            result: [],
            test: ''
        };
    }

    componentWillMount(){
        let params = this.props.location.state.searchParams;
        this.doSearch(params);
    }

    render() {
        return (
            <div>
                <Header />
                <PageTitle title="نتایج جستجو"/>
                <div>
                    <p className="lables">برای مشاهده اطلاعات بیشتر درباره‌ی هر ملک روی آن کلیک کنید.</p>
                </div>
                <div>
                </div>
                <SearchResultBox list={this.state.result}/>
                <SearchForm/>
                <Footer />
            </div>
        );
    }

    doSearch(params) {
        let url = 'http://localhost:3000/search?';
        Object.keys(params).forEach(key => {
            url = url + key + "=" + params[key] + "&";
        });
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8',
            }
        }).then(response => {
            return response.json();
        }).then(data=> {
             this.setState({result: data});
        });
    }
}


export default SearchResult;
