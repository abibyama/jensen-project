import './App.css';
import Kurser from './componnents/AMI/Kurser';
import Ansökan from './componnents/MA/Ansökan'; 
import Utbildningar from './componnents/MAA/Utbildningar';


function App() {
  return (
    <div className="App">
      <Utbildningar />
      <Kurser />
      <Ansökan/>
    </div>
  );
}

export default App;
