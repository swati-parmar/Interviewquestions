import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./Component/reactrouter/About";
import Contact from "./Component/reactrouter/Contact";
import Error from "./Component/reactrouter/Error";
import Menu from "./Component/reactrouter/Menu";

const App = () => {

  return (
    <div>
    <Menu />
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