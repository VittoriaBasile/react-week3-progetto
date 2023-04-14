import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Album from "./Component/Album";
import Artist from "./Component/Artist";
import MyNav from "./Component/MyNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route path="/artist" element={<Artist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
