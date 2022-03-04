import List from "../components/generics/List";

const Generics = () => {
  return (
    <div>
      {/*  <List
        items={["Batman", "Superman", "Spiderman", "Acuaman"]}
        onClick={(item) => alert(item)}
      />
      <hr />
      <List items={[1, 2, 3, 4, 5]} onClick={(item) => alert(item)} />
      <hr /> */}
      <List
        items={[
          {
            id: 1,
            first: "Bruce",
            last: "Wayne",
          },
          {
            id: 2,
            first: "Clark",
            last: "Kent",
          },
        ]}
        onClick={(item) => alert(item.first + " " + item.last)}
      />
    </div>
  );
};

export default Generics;
