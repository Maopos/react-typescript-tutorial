import { Name } from "../types/Person";

type Props = {
  nameList: Name[];
};

const PersonList = (props: Props) => {
  return (
    <>
      {props.nameList.map((i, j) => (
        <h3 key={j}>
          {i.first} {i.last}
        </h3>
      ))}
    </>
  );
};

export default PersonList;
