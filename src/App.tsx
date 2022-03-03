import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./views/Inicio";
import NavBar from "./views/Navbar";
import Props from "./views/Props";

import State from "./views/State";
import Context from "./views/Context";
import UseRef from './views/UseRef';

function App() {
  const divStyles = {
    backgroundColor: "white",
    width: "100%",
    padding: '20px',
    display: 'flex'
  };

  const navLinkStyles = {
    color: "black",
    textDecoration: 'none',
    marginLeft: '20px'

  };

  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <NavBar divStyles={divStyles} navLinkStyles={navLinkStyles} />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/props" element={<Props />} />
            <Route path="/state" element={<State />} />
            <Route path="/context" element={<Context />} />
            <Route path="/useref" element={<UseRef />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
