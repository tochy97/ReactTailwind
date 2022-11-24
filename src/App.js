import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Snake from "./games/SnakeGame/SnakeGame";
import PacMan from "./games/PacMan/PacMan";
import Runner from "./games/Runner/Runner";
import Games from "./pages/Games/Games";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Nav/>  
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/games" element={<Games />} />
            <Route path="/snake" element={<Snake />} />
            <Route path="/pacman" element={<PacMan />} />
            <Route path="/runner" element={<Runner />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
