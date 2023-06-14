import Calculator from "./components/calculator";
import Display from "./components/display";

function App() {
  return (
    <>
      <Calculator display={<Display />}></Calculator>
    </>
  );
}

export default App;
