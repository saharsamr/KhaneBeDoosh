import React from 'react';
import Header from "../Common/HeaderFooters/Header";
import PageTitle from "../Common/PageTitle";
import Footer from "../Common/HeaderFooters/Footer";
import HouseImageAndPhone from "./HouseImageAndPhone";

import HouseData from "./HouseData";

class HouseDetailPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            result: {}
        };
        this.getDetail = this.getDetail.bind(this);
        this.getDetail();
    }

    // componentWillMount(){
    //     let id_ = this.props.location.state.id;
    //     this.setState({id: id_});
    //     this.getDetail();
    // }

    render(){
        return(
            <div>
                <Header/>
                <PageTitle title="مشخصات کامل ملک"/>
                <div className="spacer"></div>
                <HouseData data={this.state.result}/>
                <Footer/>
            </div>
        );
    }

    getDetail() {
        let url = ('http://localhost:3000/estatedetail?id='+ this.props.location.state.id);
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

export default HouseDetailPage;