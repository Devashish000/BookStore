import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./contact/Contacts";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Courses />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </div>
    </>
  );
}

export default App;