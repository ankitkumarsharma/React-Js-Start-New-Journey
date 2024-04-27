import {
  RouterProvider
} from "react-router-dom";
import './App.css';
import { router } from "./utils/routes";

function App() {
  return <RouterProvider router={router}/> 
  // return <BrowserRouterExp/> // we can use this old tehnique also
}

export default App;
