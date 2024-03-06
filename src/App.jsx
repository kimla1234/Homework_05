import { useState } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-auto ">
      <Navbar />
      <div className="flex justify-center h-auto">
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
