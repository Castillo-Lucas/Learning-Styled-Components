import { useState } from "react";
import "./App.css";
import StyledComponents from "./components/StyledComponents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <StyledComponents />
      </div>
    </>
  );
}

export default App;
