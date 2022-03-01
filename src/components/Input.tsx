type Props = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({value, handleChange}: Props) => {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
