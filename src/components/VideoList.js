import React from 'react';
import VideoItem from './VideoItem';

/**
 * props -> ({videos})  Distruction to props.videos
 * videos.map() is a distruktion to props.videos.map()...
 */
const VideoList = ({videos, onVideoSelect})=>{

  const renderedList = videos.map(video => {
    return <VideoItem key={video.id.videoId} 
                      onVideoSelect={onVideoSelect} 
                      video={video}/>
  })

  return(
    <div className="ui relaxed divided list">{renderedList}</div>
  );
};

export default VideoList;