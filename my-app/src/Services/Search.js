import {Service} from 'react-services-injector';

class Search extends Service {
    constructor(){
        super();
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
        }).then(response => response.json())
            .then(response => {
                console.log(response);
            });
    }
}

Search.publicName = 'Search';

export default Search;