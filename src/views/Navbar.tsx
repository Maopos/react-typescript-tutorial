import { NavLink } from "react-router-dom";

type Props = {
  divStyles: React.CSSProperties;
  navLinkStyles: React.CSSProperties;
};

const NavBar = ({ divStyles, navLinkStyles }: Props) => {
  return (
    <div style={divStyles}>
      <NavLink style={navLinkStyles} to="/">
        Inicio
      </NavLink>
      <NavLink style={navLinkStyles} to="/props">
        Props
      </NavLink>
      <NavLink style={navLinkStyles} to="/state">
        State
      </NavLink>
      <NavLink style={navLinkStyles} to="/context">
        Context
      </NavLink>
      <NavLink style={navLinkStyles} to="/useref">
        UseRef
      </NavLink>
    </div>
  );
};

export default NavBar;
