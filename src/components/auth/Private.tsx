import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileProps>;
  handleToggle: () => void;
};

const Private = ({ isLoggedIn, Component, handleToggle }: PrivateProps) => {
  //

  return (
    <div>
      {isLoggedIn ? <Component name={"Mauricio"} /> : <Login />}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default Private;
