import './App.css';
import Home from "./pages/home";
import Login from './pages/login';
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
