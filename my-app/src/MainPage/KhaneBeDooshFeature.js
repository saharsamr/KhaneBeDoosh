import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/vendor/bootstrap/css/bootstrap-grid.min.css";
import './../Styles/vendor/font-awesome/css/font-awesome.min.css';
import './../Styles/vendor/simple-line-icons/css/simple-line-icons.css';
import "./../Styles/css/homePage.css";
import pc from "./../assests/img/pc.png";
import cc from "./../assests/img/creditCard.JPG";
import house from "./../assests/img/house.jpg";




class KhaneBeDooshFeature extends Component{
    render(){
        return(
            <div class="container" >
                <div class="justify-content-center row KBDfeatureBox-xs KBDfeatureBox-md">
                    <div class="infoBox col-xs-12 w-xs-100">
                        <img src={pc} class="h-25 w-25"/>
                        <h1 class="margin10">آسان</h1>
                        <div >به سادگی صاحب خانه شوید</div>
                    </div>
                    <div class="infoBox col-xs-12 w-xs-100">
                        <img src={cc} class="h-25 w-25"/>
                        <h1 class="margin10">مطمئن</h1>
                        <div >با خیال راحت به دنبال خانه بگردید</div>
                    </div>
                    <div class="infoBox col-xs-12 w-xs-100">
                        <img src={house} class="h-25 w-25"/>
                        <h1 class="margin10">گسترده</h1>
                        <div>در منطقه مورد علاقه خود صاحب خانه شوید</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default KhaneBeDooshFeature;