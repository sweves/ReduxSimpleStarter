// This is a component or "view"
// aka something that produces html
// nest these inside of each other to create page
import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

//import componenets;
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
// downwards data flow
// only the most parent component should be responsible for fetching data
const API_KEY = "AIzaSyC2zvmVI95E1J6Pc4oFFleTdZSzWvLGpYI";

//where to render
const container = document.getElementById("container");

// Create a new component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //this.setState({ videos: videos });
      //only works when variables are the same
    });
  }

  // html
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, container);
