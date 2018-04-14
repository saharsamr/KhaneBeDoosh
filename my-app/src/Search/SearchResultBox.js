import React from 'react';
import SearchElement from "./SearchElement";

class SearchResultBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resultList: []
        };
    }
    // componentWillMount(){
    //     this.setState({resultList: this.props.item});
    //     console.log(this.props.item);
    // }
    render(){
        let list=this.props.list;
        console.log(list);
        const items = [];
        for(let i = 0; i < list.length; i++)
            items.push(<SearchElement data={list[i]}/>);
        return(
            <div class="searchResult container">
                {items}
            </div>
        );
    }

}

export default SearchResultBox;