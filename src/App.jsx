import "./styles.css";
import DatePicker from "./DatePicker";

function App() {
  return (
    <>
      <DatePicker onSelect={() => console.log("abc")} />
    </>
  );
}

export default App;

// composant pour librairie
