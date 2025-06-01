import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InputForm from "./components/InputForm";
import Output from "./components/Output";

function App() {
  const [bmi, setBmi] = useState(0);

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="app-content">
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
