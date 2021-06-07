import BGimage from './images/BGimage_cropped.png';
import './App.css';
import AnimatedLogo from './AnimateLogo.js';

function App() {
  return (
    <div className="homepage">
      <AnimatedLogo />
      <img src={BGimage} className="image" alt="textile canvas" />

      <div className="update-msg">

      </div>


    </div>
  );
}

export default App;

// testing dev branch!