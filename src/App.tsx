import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./views/Inicio";
import NavBar from "./views/Navbar";
import Props from "./views/Props";

import State from "./views/State";
import Context from "./views/Context";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/props" element={<Props />} />
            <Route path="/state" element={<State />} />
            <Route path="/context" element={<Context />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
