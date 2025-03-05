import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faHome,
  faInfoCircle,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="Title">
        <h1>TRAILO</h1>
      </header>

      <section className="Robot-menu">
        <div className="robot">
          <FontAwesomeIcon icon={faRobot} size="3x"></FontAwesomeIcon>
          <h1>
            Status: <b id="statusRobot">Ready</b>
          </h1>
          <button>Use This Robot</button>
        </div>
        <div className="robot">
          <FontAwesomeIcon icon={faRobot} size="3x"></FontAwesomeIcon>
          <h1>
            Status: <b id="statusRobot">Ready</b>
          </h1>
          <button>Use This Robot</button>
        </div>
        <div className="robot">
          <FontAwesomeIcon icon={faRobot} size="3x"></FontAwesomeIcon>
          <h1>
            Status: <b id="statusRobot">Ready</b>
          </h1>
          <button>Use This Robot</button>
        </div>
        <div className="robot">
          <FontAwesomeIcon icon={faRobot} size="3x"></FontAwesomeIcon>
          <h1>
            Status: <b id="statusRobot">Ready</b>
          </h1>
          <button>Use This Robot</button>
        </div>
      </section>

      <section className="Navigation">
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faHome} size="2x"></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="/listik">
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
    </div>
  );
}

export default App;
