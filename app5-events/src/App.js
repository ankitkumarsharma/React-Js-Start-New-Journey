import './App.css';
import ButtonExp1 from './components/ButtonExp1';
import ButtonExp2 from './components/ButtonExp2';
import EventExp1 from './components/EventExp1';
import EventExp2 from './components/EventExp2';

function App() {
  return (
    <div className="App">
      <EventExp1/>
      <ButtonExp1/>
      <EventExp2/>
      <ButtonExp2/>
    </div>
  );
}

export default App;
