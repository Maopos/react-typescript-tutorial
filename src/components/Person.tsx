import { PersonProps } from "../types/Person";

const Person = ({ personName }: PersonProps) => {
  //
  const { first, last } = personName;

  return (
    <p>
      {first} {last}
    </p>
  );
};

export default Person;
