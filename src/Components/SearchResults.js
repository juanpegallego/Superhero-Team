import React from 'react';
import SearchResultItems from './SearchResultItems';


function SearchResults(props){
    const {superHeroeData} = props;

    return(
        <div className="search-container" >
            {superHeroeData.map(superhero =>
                <SearchResultItems data={superhero}
                key={superhero.id} />
            )}
        
        </div>
        
    )
}

export default SearchResults