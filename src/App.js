import './App.css';
import { Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Link to="/utbildningar"><button>Utbildningar</button></Link>
      <Link to="/ansokan"><button>Ansök</button></Link>  
      <Link to="/kurser"><button>Kurser</button></Link>
      <Link to="/larare"><button>Lärare</button></Link>
      <h1>Välkommna till Chai Academy</h1>
    </div>
  );
}

export default App;
