import './App.css';
import { Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <h1>Välkommna till Chai Academy</h1>
      <Link to="/utbildningar"><button>Utbildningar</button></Link>
      <Link to="/ansokan"><button>Ansök</button></Link>  
      <Link to="/kurser"><button>Kurser</button></Link>
    </div>
  );
}

export default App;
