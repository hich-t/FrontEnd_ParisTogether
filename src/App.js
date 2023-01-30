import { Link } from "react-router-dom";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      
      <button className='homeregisterbutton'>
            <Link className='link'to="/register">Inscris toi gratuitement !</Link>
          </button>

    </div>
  );
};

export default App;
