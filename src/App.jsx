import React, { lazy, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Live = lazy(() => import("./pages/Live"));
const Today = lazy(() => import("./pages/Today"));
const Yesterday = lazy(() => import("./pages/Yesterday"));
const Ended = lazy(() => import("./pages/Ended"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live" element={<Live />} />
            <Route path="/today" element={<Today />} />
            <Route path="/yesterday" element={<Yesterday />} />
            <Route path="/ended" element={<Ended />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
