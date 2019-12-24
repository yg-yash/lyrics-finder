import React from "react";

const LyricsBody = props => {
  return <div>{!props.lyrics ? "Loading" : props.lyrics.lyrics_body}</div>;
};

export default LyricsBody;
