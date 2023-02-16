import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./Component/reactrouter/About";
import Contact from "./Component/reactrouter/Contact";
import Error from "./Component/reactrouter/Error";
import Menu from "./Component/reactrouter/Menu";
import Service from "./Component/reactrouter/Service";
import User from "./Component/reactrouter/User";
import  Search  from "./Component/reactrouter/Search";

const App = () => {

  return (
    <div>
    <Menu />
      <Routes>
        <Route exact path='/' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user/:firstname/:lastname" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <About />
      <Contact /> */}
    </div>
  );
};

export default App;