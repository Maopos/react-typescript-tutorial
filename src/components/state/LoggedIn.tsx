import { useState } from "react";

const LoggedIn = () => {
  // States
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLogged(true);
  };
  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div>
      <h3>{isLogged ? "User is logged..." : "Please login..."}</h3>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoggedIn;
