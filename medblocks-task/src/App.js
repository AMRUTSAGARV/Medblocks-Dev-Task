import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import List from "./components/List";
import Tree from "./components/Tree";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/list">List</NavLink>
              </li>
              <li>
                <NavLink to="/tree">Tree</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/list" element={<List />} />
            <Route exact path="/tree" element={<Tree />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
