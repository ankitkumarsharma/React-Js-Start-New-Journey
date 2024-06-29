import './App.css';
import Counter from './components/Counter';
import {useDispatch} from 'react-redux';
import { increment } from './store/countSlice';
import { decrement } from './store/countSlice';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
       <button onClick={e => dispatch(increment())} type='button'>Increment ++</button>
       <Counter/>
       <button onClick={e => dispatch(decrement())} type='button'>Decrement --</button>
    </div>
  );
}

export default App;
