import MyButton from "./components/MyButton";
import MyProfile from "./components/MyProfile";
import MyCondition from "./components/conditionals/MyCondition";
import MyList from "./components/list/MyList";

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/>
      <MyProfile/>
      <MyCondition/>
      <MyList/>
    </div>
  );
}

export default App;
