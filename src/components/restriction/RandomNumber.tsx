type RandomNumberType = {
  value: number;
};

type Positive = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type Negative = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps = Positive | Negative | Zero;

const RandomNumber = (props: RandomNumberProps) => {
  //
  const { value, isNegative, isPositive, isZero } = props;
  //
  return (
    <div>
      <h3>
        {value} {isPositive && "Positive"} {isNegative && "Negative"}{" "}
        {isZero && "Zero"}
      </h3>
    </div>
  );
};

export default RandomNumber;
