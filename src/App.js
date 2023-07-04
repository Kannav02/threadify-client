import Post from "./components/Post";
import data from "./data";

function App() {
  return (<div className="bg-neutral-grayishBlue min-h-screen min-w-screen flex flex-col items-center">
  <Post user={data.currentUser}/>
  </div>);
}

export default App;
