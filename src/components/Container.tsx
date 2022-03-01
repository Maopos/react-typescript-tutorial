type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <h3 style={props.styles}>Text content goes here...</h3>;
};

export default Container;
