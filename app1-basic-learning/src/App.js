import MyButton from "./components/MyButton";
import MyProfile from "./components/MyProfile";
import MyCondition from "./components/conditionals/MyCondition";
import Event1 from "./components/events/Event1";
import Event2 from "./components/events/Event2";
import Event3 from "./components/events/Event3";
import MyList from "./components/list/MyList";

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/>
      <MyProfile/>
      <MyCondition/>
      <MyList/>
      <Event1/>
      <Event2/>
      <Event2/>
      <Event3/>
    </div>
  );
}

export default App;
