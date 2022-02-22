import logo from './logo.svg';
import './App.css';
import Greet from './greet'

function App() {
  return (
    <div className="App">
      <h1>hello World</h1>
      <Greet day="Monday" name="Vagesh"/>
      <Greet day="Tuesday" name="Ankit"/>
      <Greet day="Wednesday" name="User"/>
      <Greet day="Thursday" name="User"/>
      <Greet day="Friday" name="User"/>
      <Greet day="Saturday"name="User"/>
      <Greet day="Sunday" name="User"/>
    
      
    </div>
  );
}

export default App;
