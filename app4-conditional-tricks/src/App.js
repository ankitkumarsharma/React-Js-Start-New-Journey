import './App.css';
import Condition1 from './components/Condition1';
import Condition2 from './components/Condition2';
import Condition3 from './components/Condition3';
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
function App() {
  return (
    <div className="App">
      <Condition1/>
      <Condition2/>
      <Condition3 products={PRODUCTS} />
    </div>
  );
}

export default App;
