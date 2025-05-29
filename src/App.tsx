import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InputForm from "./components/InputForm";
import Output from "./components/Output";

function App() {
  const [bmi, setBmi] = useState(0);
  // const [weightUnit, setWeightUnit] = useState("");
  // const [heightUnit, setHeightUnit] = useState("");

  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        <InputForm setBmi={setBmi} />
        <Output bmi={bmi}/>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
