import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/props">Props</NavLink>
      <NavLink to="/state">State</NavLink>
      <NavLink to="/context">Context</NavLink>
    </div>
  );
};

export default NavBar;
