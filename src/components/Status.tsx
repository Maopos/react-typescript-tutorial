type Props = {
  status: "loading" | "success" | "error";
};

const Status = (props: Props) => {
  //
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully!";
  } else if (props.status === "error") {
    message = "Error fetched Data...";
  }

  return <h3>{message}</h3>;
};

export default Status;
