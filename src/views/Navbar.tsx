import { NavLink } from "react-router-dom";

type Props = {
  divStyles: React.CSSProperties;
  navLinkStyles: React.CSSProperties;
  titleStyles: React.CSSProperties;
};

const NavBar = ({ divStyles, navLinkStyles, titleStyles }: Props) => {
  return (
    <div style={divStyles}>
      <div>
        <h2 style={titleStyles}>
          <NavLink style={navLinkStyles} to="/">
            React + Tsx
          </NavLink>{" "}
        </h2>
      </div>
      <div style={{ marginRight: "80px" }}>
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
        <NavLink style={navLinkStyles} to="/class">
          Class
        </NavLink>
        <NavLink style={navLinkStyles} to="/component">
          Component
        </NavLink>
        <NavLink style={navLinkStyles} to="/generics">
          GenericProps
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
