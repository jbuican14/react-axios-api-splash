import React from 'react';
import unsplash from '../api/unsplash'; 
import SearchBar from './SearchBar';
import ImageList from './ImagesList';

class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = async (term)  => {
        const res = await unsplash.get('/search/photos', {
            params: {query: term},            
        });
        this.setState({images: res.data.results}); //issue with this which is onSubmit props  so make the arrow function will fix it
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '1em' }}>
                <SearchBar  onSubmit={this.onSearchSubmit}/>
                <ImageList  images={this.state.images}/>
                Found: {this.state.images.length} images 
            </div>
        )

    }
}

export default App;