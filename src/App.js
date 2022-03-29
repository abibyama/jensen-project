
import './App.css';
import Kurser from './componnents/AMI/Kurser';
import Utbildningar from './componnents/MAA/Utbildningar';


function App() {
  return (
    <div className="App">
      <Utbildningar />
      <Kurser />
    </div>
  );
}

export default App;
