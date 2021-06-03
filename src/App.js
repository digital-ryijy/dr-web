import BGimage from './images/BGimage_cropped.png';
import logo from './images/updated_logo_bold_white.svg';
import './App.css';

function App() {
  return (
    <div className="homepage">

      <img src={logo} className="logo" alt="ryijy logo" />
      <img src={BGimage} className="image" alt="textile canvas" />

      <div className="update-msg">

      </div>


    </div>
  );
}

export default App;

// testing dev branch!