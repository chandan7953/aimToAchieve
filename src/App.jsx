import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import CalculatePage from "./CalculatePage";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-sky-100 py-4 px-6 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">My Smile</h1>
            <ul className="flex gap-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md font-bold ${
                      isActive
                        ? "underline decoration-blue-600 text-blue-600 "
                        : "hover:text-blue-600 font-bold"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calculate"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md font-bold ${
                      isActive
                        ? "underline decoration-blue-600 text-blue-600 "
                        : "hover:text-blue-600 font-bold"
                    }`
                  }
                >
                  Calculate
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* Page Routes */}
        <div className="container mx-auto mt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculate" element={<CalculatePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
