import Body from "./components/Body";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
