import { Button, InputAdornment, inputBaseClasses, TextField } from "@mui/material";
import { useState } from "react";

function InputForm({
  setBmi,
}: {
  setBmi: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = Math.round(Number(weight) / ((Number(height) * Number(height)) / 10000));
    setBmi(value);
  }
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="weight"
          type="text"
          label={`Weight (in kg)`}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  opacity: 0,
                  pointerEvents: 'none',
                  [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                    opacity: 1,
                  },
                }}
              >
                kg
              </InputAdornment>
            ),
          },
        }}
        />
        <TextField
          required
          id="height"
          type="text"
          label={`Height (in cm)`}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  opacity: 0,
                  pointerEvents: 'none',
                  [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                    opacity: 1,
                  },
                }}
              >
                cm
              </InputAdornment>
            ),
          },
        }}
        />
        <Button type="submit" variant="contained" color="primary">
          Calculate
        </Button>
      </form>
    </div>
  );
}

export default InputForm;