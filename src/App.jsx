import React from "react";
import CardComponent from "./components/CardComponent";
import products from "./utility/data";

const App = () => {
  return (
    <div className="flex flex-wrap bg-emerald-200">
    <CardComponent contacts={products} />
    </div>
  );
};
export default App;