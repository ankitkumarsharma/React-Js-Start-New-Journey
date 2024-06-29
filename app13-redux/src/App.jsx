import './App.css';
import Counter from './components/Counter';
import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
       <button onClick={e => dispatch({type: 'INCREMENT'})} type='button'>Increment ++</button>
       <Counter/>
       <button onClick={e => dispatch({type: 'DECREMENT'})} type='button'>Decrement --</button>
    </div>
  );
}

export default App;
