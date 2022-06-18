import { useState } from "react";
import { Client } from "../components/Client";
import { Contact } from "../components/Contact";
import Home from "../components/Home";
import { Navbar } from "../components/Navbar";
import { Prices } from "../components/Prices";
import { Soluctions } from "../components/Soluction";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Soluctions />
      <Client />
      <Prices />
      <Contact />
    </>
  );
};

export default App;
