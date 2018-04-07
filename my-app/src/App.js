import React, { Component } from 'react';

import Footer from './Common/HeaderFooters/Footer';
import Header from './Common/HeaderFooters/Header';
import './vendor/bootstrap/css/bootstrap.min.css';

class App extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}


export default App;
