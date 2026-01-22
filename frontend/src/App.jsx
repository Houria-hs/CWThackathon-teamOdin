import Home from './pages/home';
import Register from './components/register';
import Login from './components/login';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
     </BrowserRouter>
  );
}

export default App
