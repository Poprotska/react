import "./App.css"
import Comments from "./components/Comments"
import Users from "./components/Users"
import Posts from "./components/Posts"

function App() {

  return (
      <div>
        <Users/>
        <Posts/>
        <Comments/>
      </div>
  );
}

export default App;