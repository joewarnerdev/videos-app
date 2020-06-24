import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
const KEY = 'AIzaSyDGvtPIwx2QRZHyN4-JYpqRB3F_wob3utI';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('will it blend');
    };

    onTermSubmit = async term => {
        const response = await youtube.get("/search", {
          params: {
            q: term
          }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
        <div className="ui container">
            <SearchBar onTermSubmit={this.onTermSubmit} />
            <div className ="ui grid">
                <div className="ui row">
                    <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo} /></div>
                    <div className="five wide column"><VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} /></div>
                    
                    
            
                </div>
            </div>
        </div>
        );
    }
}

export default App;

/* const KEY = "YOUR_KEY";
 
...
 
  onTermSubmit = term => {
    youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY
      }
    });

    onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    });
*/