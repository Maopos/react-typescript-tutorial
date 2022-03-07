import { ElementType } from "react";

type TextOwnProps<E extends ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const Text = <E extends React.ElementType = "div">({
  children,
  color,
  size,
  as,
}: TextProps<E>) => {
  //
  const newLocal = `class-with-${size}-${color}`;
  const Component = as || "div";

  return <Component className={newLocal}>{children}</Component>;
};

export default Text;
