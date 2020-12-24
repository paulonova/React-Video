import React from 'react';


/** ({video}) iquals to props.video (distruction)*/
const VideoDetail =({video})=> {

  if(!video){
    return <div>Loading..</div>
  }

  const videoSrc =`https://www.youtube.com/embed/${video.id.videoId}`;

  return(
    <div>
      <div className="ui segment">
      <div className="ui embed">
        <iframe width="560" height="315" 
                src={videoSrc} 
                title="video play"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
      </div>
      
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
      
    </div>
  );
};

export default VideoDetail;