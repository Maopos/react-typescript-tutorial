import RandomNumber from "../components/restriction/RandomNumber";


const RestrictingProps = () => {
  return (
    <div>
      <RandomNumber value={-10} isNegative/>
    </div>
  );
};

export default RestrictingProps;
