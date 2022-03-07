import Saludo from "../Greet";

const CustomComponent = (props: React.ComponentProps<typeof Saludo>) => {
  return (
    <div>
      <h3>Extracting a Components Prop Types</h3>
      <p>{props.name}</p>
    </div>
  );
};

export default Saludo;
