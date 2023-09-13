import './App.css';
import Home from "./pages/Home";
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
