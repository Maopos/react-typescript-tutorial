import Button from "../components/html/Button";
import CustomComponent from "../components/html/CustomComponent";
import Input from "../components/html/Input";

const Wrapping = () => {
  return (
    <div>
      <h3>Wrappinng</h3>
      <Button
        variant="primary"
        onClick={() => console.log("Primary Button")}
        type={"submit"}
      >
        Primary Button
      </Button>
      <Input />
      <CustomComponent name="Mauricio" isLogged={false} />
    </div>
  );
};

export default Wrapping;
