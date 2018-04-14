import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./../Styles/vendor/bootstrap/css/bootstrap.min.css";
import "./../Styles/vendor/bootstrap/css/bootstrap-grid.min.css";
import './../Styles/vendor/font-awesome/css/font-awesome.min.css';
import './../Styles/vendor/simple-line-icons/css/simple-line-icons.css';
import "./../Styles/css/homePage.css"
import "./../Styles/css/myCarousel.css"

import FirstCarsoulImg from "./../assests/img/banner/michal-kubalczyk-260909-unsplash.jpg"
import SecondCarsoulImg from "./../assests/img/banner/mahdiar-mahmoodi-452489-unsplash.jpg"
import ThirdCarsoulImg from "./../assests/img/banner/luke-van-zyl-504032-unsplash.jpg"

class MainPageCarasoul extends Component{
    render(){
        return(
            <div id="mycarousel" class="mycarousel ">
                <input class="mycarousel-active" type="radio" id="mycarousel-1" name="mycarousel" aria-hidden="true" hidden checked="checked"/>
                <div class="mycarousel-item">
                    <div class="mycarousel-controls" aria-hidden="true">
                        <label for="mycarousel-4" class="mycarousel-control prev hidden-xs" title="Prev">«</label>
                        <label for="mycarousel-2" class="mycarousel-control next hidden-xs" title="Next">»</label>
                    </div>
                    <img src={FirstCarsoulImg} alt="First slide" />
                </div>

                <input class="mycarousel-active" type="radio" id="mycarousel-2" name="mycarousel" aria-hidden="true" hidden/>
                <div class="mycarousel-item">
                    <div class="mycarousel-controls" aria-hidden="true">
                        <label for="mycarousel-1" class="mycarousel-control prev hidden-xs" title="Prev">«</label>
                        <label for="mycarousel-3" class="mycarousel-control next hidden-xs" title="Next">»</label>
                    </div>
                    <img src={SecondCarsoulImg} alt="First slide"  />
                </div>

                <input class="mycarousel-active" type="radio" id="mycarousel-3" name="mycarousel" aria-hidden="true" hidden/>
                <div class="mycarousel-item">
                    <div class="mycarousel-controls" aria-hidden="true">
                        <label for="mycarousel-2" class="mycarousel-control prev hidden-xs" title="Prev">«</label>
                        <label for="mycarousel-4" class="mycarousel-control next hidden-xs" title="Next">»</label>
                    </div>
                    <img src={ThirdCarsoulImg} alt="Third slide" />
                </div>

                <input class="mycarousel-active" type="radio" id="mycarousel-4" name="mycarousel" aria-hidden="true" hidden/>
                <div class="mycarousel-item">
                    <div class="mycarousel-controls" aria-hidden="true">
                        <label for="mycarousel-3" class="mycarousel-control prev hidden-xs" title="Prev">«</label>
                        <label for="mycarousel-1" class="mycarousel-control next hidden-xs" title="Next">»</label>
                    </div>
                    <img src="img/banner/casey-horner-533586-unsplash.jpg" alt="Third slide" />
                </div>
                <ol class="mycarousel-indicators" aria-label="mycarousel navigation" aria-hidden="true">
                    <li>
                        <label for="mycarousel-1" class="mycarousel-indicator" title="Jump to mycarousel item #1">●</label>
                    </li>
                    <li>
                        <label for="mycarousel-2" class="mycarousel-indicator" title="Jump to mycarousel item #2">●</label>
                    </li>
                    <li>
                        <label for="mycarousel-3" class="mycarousel-indicator" title="Jump to mycarousel item #3">●</label>
                    </li>
                    <li>
                        <label for="mycarousel-4" class="mycarousel-indicator" title="Jump to mycarousel item #4">●</label>
                    </li>
                </ol>
            </div>
        );
    }
}

export default MainPageCarasoul;