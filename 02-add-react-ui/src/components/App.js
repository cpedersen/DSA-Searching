import React, { Component } from "react";
import "./App.css";
import SearchService from "../services/searchService";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: null,
      search: {
        isSubmitted: false,
        isSuccessful: false,
        searchCount: 0,
      },
    };
  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    const { number } = e.target;
    const { input } = this.state;

    number.value = "";

    const { index, numberOfSearches } = SearchService.binarySearch(input);
    // const { index, numberOfSearches } = SearchService.linearSearch(input);

    this.setState({
      ...this.state,
      search: {
        isSubmitted: true,
        isSuccessful: index === -1 ? false : true,
        searchCount: numberOfSearches,
      },
    });
  };

  onInputChange = (numInput) => {
    this.setState({
      input: numInput,
    });
  };

  renderResults() {
    const { isSuccessful, searchCount } = this.state.search;
    return (
      <section className="Section--Results">
        {isSuccessful ? <h2>Found number</h2> : <h2>Number not found</h2>}
        <p>Took {searchCount} tries</p>
      </section>
    );
  }

  render() {
    const { isSubmitted } = this.state.search;
    return (
      <main className="App">
        <section className="Section--Form">
          <form onSubmit={(e) => this.handleOnSubmit(e)} className="SearchForm">
            <label htmlFor="number">
              <h1>Search for a number in storage</h1>
            </label>
            <input
              type="number"
              id="number"
              name="number"
              onChange={(e) => this.onInputChange(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </section>
        {isSubmitted && this.renderResults()}
      </main>
    );
  }
}

export default App;
