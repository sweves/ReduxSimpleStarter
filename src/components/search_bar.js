import React, { Component } from "react";

class SearchBar extends Component {
  // worth making a class because this component will have additional functionality
  // classes used when component needs a state
  // every class must have a render function

  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  // shorter hand
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
