import {Service} from 'react-services-injector';

class Search extends Service {

    doSearch(searchParams) {
        let url = 'http://localhost:3000/search';
        Object.keys(searchParams).forEach(key => url.searchParams.append(key, searchParams[key]));
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(response => {
                console.log(response);
            });
}
}

Search.publicName = 'Search';

export default Search;