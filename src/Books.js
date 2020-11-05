import React, { Component } from 'react'
import SearchArea from './SearchArea'

class Books extends Component {
  constructor(props) {
    super()
    this.state = {
      books: [],
      searchField: ""
    }
  }

  handleSearch = (e) => {
    console.log(e.target.value)
    this.setState({ searchField: e.target.value })
  }

  render() {
    return (
      <div>
        <SearchArea handleSearch={this.handleSearch} />
        <h3>{this.state.searchField}</h3>
      </div>
    );
  }
}


export default Books;
