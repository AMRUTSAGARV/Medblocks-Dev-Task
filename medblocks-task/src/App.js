import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tree from "./components/Tree";
import Registration from "./components/Registration";
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Registration />} />
            <Route exact path="/list" element={<List />} />
            <Route exact path="/tree" element={<Tree />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
