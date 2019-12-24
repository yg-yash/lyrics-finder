import React from "react";
import SongCard from "./SongCard";

const SongsList = props => {
  const tracks = props.trackList.map(track => {
    return track;
  });
  return (
    <div className="card mt-3 p-3">
      <h4> {props.tracksText}</h4>
      <SongCard tracks={tracks} />
    </div>
  );
};

export default SongsList;
