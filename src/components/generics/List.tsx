type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends { id: number; first: string; last: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h3>List of Items</h3>
      <p>Click on Item!</p>
      <hr />
      {items.map((i, j) => (
        <p key={j} onClick={() => onClick(i)} style={{ cursor: "pointer" }}>
          {i.first} {i.last}
        </p>
      ))}
    </div>
  );
};

export default List;
