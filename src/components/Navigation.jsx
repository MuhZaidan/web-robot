import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfoCircle,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <section className="Navigation">
      <ul>
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faHome} size="2x"></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="/listrik">
            <FontAwesomeIcon icon={faBolt} size="2x"></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="/about">
            <FontAwesomeIcon icon={faInfoCircle} size="2x"></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Navigation;
