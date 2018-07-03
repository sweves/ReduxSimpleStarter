import React from "react";
import VideoListItem from "./video_list_item";

// functional component
// used when we're just taking in information and outputting jsx
// can contain class components
const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
