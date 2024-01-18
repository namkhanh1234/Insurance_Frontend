import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
const LocationPin = ({ text }) => (
    <div className="pin">
        <icon icon={faLocationPin} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
);

export default LocationPin;
