import '../App.css';
import Select from 'react-select';

const Popup = ({ toggle, fx }) => {
  const option = [
    { value: 'route1', label: 'Section A' },
    { value: 'route2', label: 'Section B' },
    { value: 'route3', label: 'Section C' },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '400px',
      borderRadius: '15px',
      boxShadow: 'none',
      textAlign: 'left',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'black' : 'gray',
      backgroundColor: state.isSelected ? 'lightgrey' : 'white',
    }),
  };

  const customStylesAndroid = {
    control: (provided) => ({
      ...provided,
      width: '3 00px',
      borderRadius: '10px',
      boxShadow: 'none',
      textAlign: 'left',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'black' : 'gray',
      backgroundColor: state.isSelected ? 'lightgrey' : 'white',
    }),
  };

  const launchRobot = (weight) => {
    if (weight >= 3) {
      alert('load cannot be more than 3kg');
    } else {
      alert('Robot Launched...');
    }
  };

  return (
    <>
      {toggle && (
        <div className="Popup">
          <div className="container">
            <h1>INSTRUCTION</h1>
            <div className="data">
              <label htmlFor="routeBot">Where should the robot go?</label>
              <div className="desktop">
                <Select
                  isMulti
                  htmlFor="routeBot"
                  closeMenuOnSelect={false}
                  options={option}
                  styles={customStyles}
                />
              </div>
              <div className="android">
                <Select
                  isMulti
                  htmlFor="routeBot"
                  closeMenuOnSelect={false}
                  options={option}
                  styles={customStylesAndroid}
                />
              </div>
            </div>
            <div className="button">
              <button className="launch" onClick={launchRobot}>
                Launch
              </button>
              <button className="cancel" onClick={fx}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
