import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Snake from "./games/SnakeGame/SnakeGame";
import Runner from "./games/Runner/Runner";
import Games from "./pages/Games/Games";
import Wave from "./components/Wave/Wave";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>  
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/snake" element={<Snake />} />
          <Route path="/runner" element={<Runner />} />
        </Routes>
      </BrowserRouter>
      <Wave/>
    </div>
  );
}

export default App;
