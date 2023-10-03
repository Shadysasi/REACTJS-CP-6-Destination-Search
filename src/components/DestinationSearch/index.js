import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-card-container">
          <input
            type="search"
            placeholder="search"
            className="search-card"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="destination-list">
          {searchResults.map(eachItem => (
            <DestinationItem
              destinationsListItem={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
