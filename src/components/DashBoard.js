import React from "react";
import SearchBar from "./SearchBar";
import SongsList from "./SongsList";
import musixMatch from "../api/musixmatch";
import musixmatch from "../api/musixmatch";

class DashBoard extends React.Component {
  state = {
    term: "",
    tracksText: "Top 10 Tracks",
    trackList: []
  };

  async componentDidMount() {
    try {
      const topTracks = await musixmatch.get(
        `chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=f1bc8e8500a911e37f66519f4be3e398`
      );
      this.setState({ trackList: topTracks.data.message.body.track_list });
    } catch (error) {
      console.log(error);
    }
  }

  getSearchTerm = async term => {
    this.setState({ term });

    try {
      const value = await musixMatch.get(
        `track.search?q_track=${term}&apikey=f1bc8e8500a911e37f66519f4be3e398`
      );

      this.setState({ trackList: value.data.message.body.track_list });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="card m-4 text-center p-3">
        <h1>
          <i className="fa fa-music"></i> Search For A Song
        </h1>
        <p>Get the lyrics for any track</p>
        <SearchBar getSearchTerm={this.getSearchTerm} />
        <SongsList
          tracksText={this.state.tracksText}
          trackList={this.state.trackList}
        />
      </div>
    );
  }
}

export default DashBoard;
