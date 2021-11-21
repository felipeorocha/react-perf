import { useCallback, useEffect, useState } from "react";
import { Button } from "./Button";

function App() {

  const [input, setInput] = useState('');
  const [label, setLabel] = useState('');

  const handleInputChange = (event) => {
    console.log('2 - change triggered');
    setInput(event.target.value);
  };

  const updateLabel = useCallback((event) => {
    event.preventDefault();
    console.log('3 - update label triggered');
    setLabel(input);
    setInput('');
  }, []);

  useEffect(() => {
    console.log('1 - re-rendered');
  });

  return (
    <div>
      <form onSubmit={updateLabel}>
        <label>Some label:</label>
        <input value={input} onChange={(e) => handleInputChange(e)} />
        <Button onClick={updateLabel} />
      </form>
      <h3>{label}</h3>
    </div>
  );
}

export default App;
