import './App.css';
import Home from "./pages/Home";
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
