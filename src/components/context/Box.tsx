import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  const { primary, secondary } = theme;

  return (
    <div>
      <h3
        style={{
          background: primary.main,
          color: primary.text,
        }}
      >
        Theme context
      </h3>
      <h3
        style={{
          background: secondary.main,
          color: secondary.text,
        }}
      >
        Theme context
      </h3>
    </div>
  );
};

export default Box;
