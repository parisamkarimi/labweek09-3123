import logo from './logo.svg';
import './App.css';
import Welcome ,{Greet}from './components/Welcome';
import Greetings from './components/Greetings';
import SayHello from './components/SayHello';

function App() {
  return (<div className='App'> 
  <img src={logo} alt='App Logo'/>
    
   
      <h1>Hello</h1>

      <h1>Test</h1>
      <Welcome></Welcome>
      <Greet/>
      <Greetings name="GBC"/>
      <SayHello fname="Parisa" lname="Karimi"/> 
      <SayHello fname="Mohammadkarimi" lname="Cha"/>
      <SayHello name= "Test Name" lname='test'/>
    </div>
  );
}

export default App;
