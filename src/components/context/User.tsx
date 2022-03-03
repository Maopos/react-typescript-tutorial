import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);

  const { user, setUser } = userContext;

  const handleLogin = () => {
    setUser({
      name: "Maopos",
      email: "maopos@icloud.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <h3>User name: {user.name}</h3>
          <h3>User email: {user.email}</h3>
        </>
      ) : (
        <p>Please Login...</p>
      )}

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;
