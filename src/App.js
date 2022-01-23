import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import MyWork from "./Components/MyWork";
import Resume from "./Components/Resume";

import Sidebar from "./Components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <HomePage />
        <About />
        <Contacts />
        <MyWork />
        <Resume />
      </div>
    </div>
  );
}

export default App;
