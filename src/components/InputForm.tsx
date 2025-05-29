import { Button, TextField } from "@mui/material";
import { useState } from "react";

function InputForm({ setBmi } : {setBmi: React.Dispatch<React.SetStateAction<number>>}) {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = Number(weight)/(Number(height) * Number(height) / 10000);
    setBmi(value);
    // setWeight("");
    // setHeight("");
  }
    return (
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
    )
}

export default InputForm;