import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./Component/reactrouter/About";
import Contact from "./Component/reactrouter/Contact";
import Error from "./Component/reactrouter/Error";

const App = () => {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <About />
      <Contact /> */}
    </div>
  );
};

export default App;