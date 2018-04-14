import React from 'react';
import SearchElement from "./SearchElement";
import "./../Styles/css/searchResult.css";
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";

class SearchResultBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resultList: []
        };
    }

    render(){
        let list=this.props.list;
        console.log(list);
        const items = [];
        for(let i = 0; i < list.length; i++)
            items.push(<SearchElement data={list[i]}/>);
        return(
            <div className="searchResult container">
                {items}
            </div>
        );
    }

}

export default SearchResultBox;