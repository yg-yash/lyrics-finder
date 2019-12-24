import React from "react";
import musixMatch from "../api/musixmatch";
import LyricsBody from "./LyricsBody";

class Lyrics extends React.Component {
  state = {
    details: [],
    lyrics: []
  };

  async componentDidMount() {
    try {
      const trackId = this.props.match.params;
      const response = await musixMatch.get(
        `track.lyrics.get?track_id=${trackId.id}&apikey=f1bc8e8500a911e37f66519f4be3e398`
      );

      this.setState({
        lyrics: response.data.message.body,
        details: this.props.location.details
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="container">
        <button
          onClick={() => this.props.history.goBack()}
          className="btn btn-primary m-2"
        >
          Go Back
        </button>
        <div className="card">
          <div className="card-header">
            {this.state.details && this.state.details.trackName} By{" "}
            {this.state.details && this.state.details.artistName}
          </div>
          <div className="card-body">
            <LyricsBody lyrics={this.state.lyrics.lyrics} />
          </div>

          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Album ID: {this.state.details && this.state.details.albumId}
              </li>
              <li className="list-group-item">
                Album Name: {this.state.details && this.state.details.albumName}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Lyrics;
