import './App.css';
import './App2.css';
import './App3.css';

import Nav from './components/Nav'
import FirstCards from './components/FirstCards';
import SecondCards from './components/SecondCards';



function App() {
  return (
    <div className="App">
      <Nav/>
      <FirstCards />      
      <SecondCards />
    </div>
  );
}

export default App;
