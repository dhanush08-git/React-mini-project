import "./App.css";
import Weatherapp from "./Weatherapp";
import bgImage from "./assets/wetbg.png";

function App() {
  return (
    <div
      className="appBackground"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="appContainer">
        <Weatherapp />
      </div>
    </div>
  );
}

export default App;