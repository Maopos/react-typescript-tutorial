import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./views/Inicio";
import NavBar from "./views/Navbar";
import Props from "./views/Props";
import State from "./views/State";
import Context from "./views/Context";
import UseRef from "./views/UseRef";
import Class from "./views/Class";
import Component from "./views/Component";

function App() {
  const divStyles = {
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
  };

  const titleStyles = {
    marginLeft: "100px",
  };

  const navLinkStyles = {
    color: "black",
    textDecoration: "none",
    marginRight: "20px",
  };

  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <NavBar
            divStyles={divStyles}
            navLinkStyles={navLinkStyles}
            titleStyles={titleStyles}
          />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/props" element={<Props />} />
            <Route path="/state" element={<State />} />
            <Route path="/context" element={<Context />} />
            <Route path="/useref" element={<UseRef />} />
            <Route path="/class" element={<Class />} />
            <Route path="/component" element={<Component/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
