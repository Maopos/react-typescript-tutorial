import "./App.css";
// import Person from "./components/Person";
// import Greet from "./components/Greet";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Button from "./components/Button";
// import Input from "./components/Input";
// import Container from "./components/Container";
// import LoggedIn from "./components/state/LoggedIn";
// import User from "./components/state/User";
// import Counter from "./components/state/Counter";
// import Box from "./components/context/Box";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from './components/context/UserContext';
import User from "./components/context/User";

function App() {
  //
  const personName = {
    first: "Mauricio",
    last: "Posada",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Diane", last: "Lane" },
  ];

  const handleClick = (e: React.MouseEvent, id: number) => {
    console.log("Click on button...", e, id);
  };

  const styles = {
    border: "1px solid white",
    padding: "10px 60px",
    borderRadius: "10px",
  };

  return (
    <div className="App">
      <div className="App-header">
        {/* <Greet name={"Mauricio Posada"} message={10} isLogged={true} />
        <hr />
        <Person personName={personName} />
        <hr />
        <PersonList nameList={nameList} />
        <hr />
        <Status status={"loading"} />
        <hr />
        <Heading>Placeholder text... (children)</Heading>
        <hr />
        <Oscar>
          <Heading>Oscar goes to Maopos!!! (children)</Heading>
        </Oscar>
        <hr />
        <Greet name={"Mauricio Posada"} isLogged={true} />
        <Button handleClick={handleClick} />
        <Input value={""} handleChange={(e) => console.log(e.target.value)} />
        <Container styles={styles} />
        <hr /> 
        <LoggedIn />
        <User />
        <Counter />
        */}

        {/* <ThemeContextProvider>
          <Box />
        </ThemeContextProvider> */}

        <UserContextProvider>
          <User />
        </UserContextProvider>

      </div>
    </div>
  );
}

export default App;
