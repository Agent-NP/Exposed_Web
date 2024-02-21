import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import io from "socket.io-client";
import { Context } from "./utils/Context";

const Home = lazy(() => import("./pages/Home"));
const Live = lazy(() => import("./pages/Live"));
const Today = lazy(() => import("./pages/Today"));
const Yesterday = lazy(() => import("./pages/Yesterday"));
const Ended = lazy(() => import("./pages/Ended"));

function App() {
  const [socket, setSocket] = useState(null);
  const [currentPage, setCurrentPage] = useState("");
  const updateCurrentPage = page => {
    setCurrentPage(page);
  };
  useEffect(() => {
    async function connectToServer() {
      const connector = await io.connect("http://127.0.0.1:3001");
      return connector;
    }
    const connector = connectToServer();
    if (connector.connected) {
      console.log("connected to the server");
      setSocket(connector);
    }
  }, []);
  return (
    <Context.Provider value={{ currentPage, updateCurrentPage }}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="d-flex flex-fill flex-column">
            <div>
              <Navbar />
            </div>
            <div className="d-flex flex-fill flex-column">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/live" element={<Live />} />
                <Route path="/today" element={<Today />} />
                <Route path="/yesterday" element={<Yesterday />} />
                <Route path="/ended" element={<Ended />} />
              </Routes>
            </div>
          </div>
        </Suspense>
      </Router>
    </Context.Provider>
  );
}

export default App;
