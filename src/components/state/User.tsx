import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  //State
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Mauricio Posada",
      email: "maopos@iclou.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <p>User name is {user?.name}</p>
          <p>User email is {user?.email}</p>
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
