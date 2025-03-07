import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
// import HeaderTitle from '../components/HeaderTitle';
// import Navigation from '../components/Navigation';
import Layout from '../components/Layout';
import Popup from '../components/Popup';
import { useState } from 'react';

const Home = () => {
  const [popup, togglePopup] = useState(false);

  const setPopup = () => {
    togglePopup(!popup);
  };

  return (
    <>
      <Layout>
        <Popup toggle={popup} fx={setPopup} />
        <section className="Robot-menu">
          <div className="robot">
            <FontAwesomeIcon icon={faRobot} size="3x"></FontAwesomeIcon>
            <h1>
              Status: <b id="statusRobot">Ready</b>
            </h1>
            <button onClick={setPopup}>Use This Robot</button>
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
      </Layout>
    </>
  );
};

export default Home;
