import './index.css'

const DestinationItem = props => {
  const {destinationsListItem} = props
  const {name, imgUrl} = destinationsListItem
  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-img" />
      <p className="name ">{name}</p>
    </li>
  )
}
export default DestinationItem
