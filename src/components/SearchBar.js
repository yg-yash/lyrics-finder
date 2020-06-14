import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.getSearchTerm(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Lyrics"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-block btn-primary"
              type="submit"
              disabled={this.state.term < 1}
            >
              Get Track Lyrics
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
