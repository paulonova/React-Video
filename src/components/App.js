import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';



class App extends React.Component{

  state={
    videos: [],
    selectedVideo: null
  }

  onTermSubmit = async (term) =>{

    const response = await youtube.get("/search", {
      params:{
        q: term        
      },
    });
    console.log("Utube: ",response.data.items);
    this.setState({videos: response.data.items});
  }

  onVideoSelect =(video)=>{
    this.setState({selectedVideo: video})
    console.log("From App: ",video);
  }

  render(){
    return(
      <div className="ui container">
       <SearchBar videoSubmit={this.onTermSubmit}/>
       <VideoDetail video={this.state.selectedVideo}/>
       <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
       
      </div>
    );
  };
}

export default App;