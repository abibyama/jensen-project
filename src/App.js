import './App.css';
import Kurser from './componnents/AMI/Kurser';
import Utbildning from './componnents/Utbildning'; 
import Ansökan from './componnents/MA/Ansökan'; 


function App() {
  return (
    <div className="App">
      <Utbildning />
      <Kurser />
      <Ansökan/>
    </div>
  );
}

export default App;
