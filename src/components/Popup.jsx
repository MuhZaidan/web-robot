import '../App.css';

const Popup = ({ toggle, fx }) => {
  return (
    <>
      {toggle && (
        <div className="Popup">
          <div className="container">
            <h1>INSTRUCTION</h1>
            <div className="button">
              <button className="launch">Launch</button>
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
