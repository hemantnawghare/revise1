import {
  LocationCardContainer,
  Heading,
  HeadingDescriptionContainer,
  Paragraph,
} from './style'

import './index.css'

const LocationContainer = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData

  return (
    <li className="list-container">
      <LocationCardContainer>
        <img src={imageUrl} alt={name} className="image" />
        <HeadingDescriptionContainer>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
        </HeadingDescriptionContainer>
      </LocationCardContainer>
    </li>
  )
}

export default LocationContainer
