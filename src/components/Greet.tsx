type SaludoProps = {
  name: string;
  message?: number;
  isLogged: boolean;
};

const Saludo: React.FC<SaludoProps> = (props) => {
  //
  const { message = 0 } = props;

  return (
    <h3>
      {props.isLogged
        ? `Hi ${props.name}, you have ${message} new messages...`
        : "Welcome Guess!, login please..."}
    </h3>
  );
};

export default Saludo;
