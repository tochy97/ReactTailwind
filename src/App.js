import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Runner from "./games/Runner/Runner";
import Games from "./pages/Games/Games";
import History from "./pages/History/History";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>  
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/games" element={<Games />} />
          <Route path="/runner" element={<Runner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
