import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp";

console.log(mount);
const App = () => {
  return (
    <section>
      <h1>CONTAINER</h1>
      <hr></hr>
      <MarketingApp />
    </section>
  );
};

export default App;
