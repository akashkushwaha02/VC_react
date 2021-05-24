import logo from "./logo.svg";
import "./App.css";
import ClassComp from "./components/ClassComp";
import FunctionalComp from "./components/FunctionalComp";

function App() {
  return (
    <div className="App">
      <ClassComp />
      <FunctionalComp />
    </div>
  );
}

export default App;
