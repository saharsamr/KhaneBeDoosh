import React, { Component } from 'react';

import './../Styles/vendor/bootstrap/css/bootstrap.min.css';
import './../Styles/css/headersAndFooters.css';

class PageTitle extends Component{
    constructor(props){
        super(props);
        document.title = this.props.title;
    }

    render(){
        return(
            <div>
                <div className="pageHeader">
                    <p className="pageHeaderText">{this.props.title}</p>
                </div>
            </div>
        );
    }
}

export default PageTitle;