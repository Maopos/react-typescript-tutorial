import { useState } from "react";
import Private from "../components/auth/Private";
import Profile from "../components/auth/Profile";

// Pass a component like a prop
const Component = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <Private
        isLoggedIn={isLoggedIn}
        Component={Profile}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default Component;
