import HoverBox from "./components/HoverBox/HoverBox";
import NavBar from "./components/NavBar/NavBar";
import StarBackground from "./components/StarBackground";
import CalenderApp from "./components/CalenderApp/CalenderApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <main>
      <div class='flex'>
        <CalenderApp/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
