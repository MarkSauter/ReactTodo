import React, { PropTypes } from 'react'

class TodoSearch extends React.Component {

  handleSearch = () => {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }
  render () {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }

}
TodoSearch.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default TodoSearch;
