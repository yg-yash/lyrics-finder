import React from 'react';
import { Link } from 'react-router-dom';

const SongCard = (props) => {
  const listItems = props.tracks.map((track) => {
    return (
      <div className="card col-md-5 mx-4 my-4 p-3" key={track.track.track_id}>
        <h4>{track.track.artist_name}</h4>
        <p>
          <i className="fa fa-play">{track.track.track_name}</i>
        </p>
        <p>
          <i className="fa fa-dot-circle-o">{track.track.album_name}</i>
        </p>
        <input type="hidden" value={track.track.track_id} />

        <Link
          to={{
            pathname: `/lyrics/${track.track.track_id}`,
            details: {
              albumId: track.track.album_id,
              trackName: track.track.track_name,
              albumName: track.track.album_name,
              artistName: track.track.artist_name,
            },
          }}
        >
          <button
            className="btn btn-block bg-dark text-white"
            type="submit"
            value={track.track.track_id}
          >
            View Lyrics
          </button>
        </Link>
      </div>
    );
  });
  return <div className="row align-center">{listItems}</div>;
};

export default SongCard;
