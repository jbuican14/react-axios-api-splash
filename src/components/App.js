import React from 'react';
import axios from 'axios'; 

import SearchBar from './SearchBar';

class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = async (term)  => {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID [YOUR_KEY]'
            }
        });
        this.setState({images: res.data.results}); //issue with this which is onSubmit props  so make the arrow function will fix it
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '1em' }}>
                <SearchBar  onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images 
            </div>
        )

    }
}

export default App;