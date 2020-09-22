import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import './serviceHeading.css'

const ServiceHeading = (props) => {
    return (
        <div className="service-header-container">
            <FontAwesomeIcon className="service-header-item" icon={faCamera} size="4x" />
            <FontAwesomeIcon className="service-header-item" icon={faMapMarker} size="4x" />
            <FontAwesomeIcon className="service-header-item" icon={faMapMarker} size="4x" />
        </div>
    )
}

export default ServiceHeading