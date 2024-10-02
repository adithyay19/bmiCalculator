import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  // const [weightUnit, setWeightUnit] = useState("");
  // const [heightUnit, setHeightUnit] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(weight, height);
    const value = Number(weight)/(Number(height) * Number(height) / 10000);
    setBmi(value);
    setWeight("");
    setHeight("");
  }

  return (
    <>
      <header>
        <h2>BMI Calculator</h2>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            id="weight"
            type="number"
            label={`Weight (in kg)`}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <TextField
            id="height"
            type="number"
            label={`Height (in cm)`}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Calculate
          </Button>
        </form>
        <div>
          <h3>{bmi}kg/m2</h3>
        </div>
      </div>
    </>
  );
}

export default App;
