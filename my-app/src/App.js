import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import SearchResult from "./Search/SearchResult";
import IncreaseCredit from "./Credit/IncreaseCredit";
import HouseDetailPage from "./HouseDirectory/HouseDetailPage";
import AddHouses from "./AddHouses/AddHouses";
import MainPage from "./MainPage/MainPage";
import {injector} from 'react-services-injector';
import services from './Services';

injector.register(services);

const App = () =>
    <Router>
        <div>
            <Route exact path="/main" component={MainPage}/>
            <Route exact path="/searchresult" component={SearchResult}/>
            <Route exact path="/credit" component={IncreaseCredit}/>
            <Route exact path="/addhouse" component={AddHouses}/>
            <Route exact path="/housedetail" component={HouseDetailPage}/>
        </div>
    </Router>

export default App