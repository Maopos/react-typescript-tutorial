import { NavLink } from "react-router-dom";

type Props = {
  divStyles: React.CSSProperties;
  navLinkStyles: React.CSSProperties;
};

const NavBar = ({ divStyles, navLinkStyles }: Props) => {
  return (
    <div style={divStyles}>
      <div>
        <h2>
          <NavLink style={navLinkStyles} to="/">
            React + Tsx
          </NavLink>{" "}
        </h2>
      </div>
      <div style={{ margin: "20px" }}>
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
        <NavLink style={navLinkStyles} to="/restriction">
          RestrictingProps
        </NavLink>
        <NavLink style={navLinkStyles} to="/literal">
          TemplateLiterals
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
