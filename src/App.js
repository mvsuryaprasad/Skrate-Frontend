import "./App.css";
import {
  Route,
  Link,
  BrowserRouter,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./Navigation/Home";
import { Dasboard } from "./Navigation/Dasboard";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dasboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
