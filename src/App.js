import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
    <div>
    <BrowserRouter>
    <ToastContainer />
    <NavBar />
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
