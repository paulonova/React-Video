import React from 'react';
import VideoItem from './VideoItem';

/**
 * props -> ({videos})  Distruction to props.videos
 * videos.map() is a distruktion to props.videos.map()...
 */
const VideoList = ({videos})=>{

  const renderedList = videos.map(video => {
    return <VideoItem />
  })

  return(
    <div>{renderedList}</div>
  );
};

export default VideoList;