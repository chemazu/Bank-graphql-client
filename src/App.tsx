import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Provider from "./context/Context";
import Register from "./pages/Register";
import Transaction from "./pages/Transaction";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Provider>
      <div className="App">
        <Routes>
          <Route
            path="/dashboard"
            element={ProtectedRoutes({ children: <Dashboard /> })}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Register />} />

          <Route path="/login" element={<Login />} />
          <Route path="/transaction/:id" element={<Transaction />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
