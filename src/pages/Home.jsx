import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import HeaderTitle from '../components/HeaderTitle';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <>
      <div className="App">
        <HeaderTitle></HeaderTitle>
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
        <Navigation />
      </div>
    </>
  );
};

export default Home;
