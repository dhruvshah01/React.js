import logo from './logo.svg';
import './App.css';
import Greet from './Components/greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';

function App() { 
  return (
    <div className="App">
      {/* <Greet> </Greet> */}
      {/* <Welcome></Welcome> */}
      <Hello> </Hello>
      <Greet name = "Dhruv " lastName = "Shah"> 
        <p1> This is Children Paragraph</p1>
      </Greet>

      <Welcome name = "Dwayne" lastName = "Johnson"> </Welcome>
    </div>
  );
}

export default App;
