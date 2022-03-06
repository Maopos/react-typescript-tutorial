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
import Generics from "./views/Generics";
import RestrictingProps from "./views/RestrictingProps";
import TemplateLiteral from './views/TemplateLiteral';

function App() {
  const divStyles = {
    backgroundColor: "white",
    width: "100%",
    color: "black",
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
          <NavBar divStyles={divStyles} navLinkStyles={navLinkStyles} />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/props" element={<Props />} />
            <Route path="/state" element={<State />} />
            <Route path="/context" element={<Context />} />
            <Route path="/useref" element={<UseRef />} />
            <Route path="/class" element={<Class />} />
            <Route path="/component" element={<Component />} />
            <Route path="/generics" element={<Generics />} />
            <Route path="/restriction" element={<RestrictingProps />} />
            <Route path="/literal" element={<TemplateLiteral />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
