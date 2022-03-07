import Text from "../components/polymorphic/Text";

const Polymorphic = () => {
  return (
    <div>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="name" size="sm" color="primary">
        Label
      </Text>
    </div>
  );
};

export default Polymorphic;
