import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style/App.scss"
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
