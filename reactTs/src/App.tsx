// import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import ChaiCard from "./components/ChaiCard";
import ChaiList from "./components/ChaiList";
import Counter from "./components/Counter";
import OrderForm from "./components/OrderForm";
import type { chai } from "./types";

const menu: chai[] = [
  { id: 1, name: "masala", price: 20 },
  { id: 2, name: "ginger", price: 40 },
];

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name="HeadPhones" price={3000} />
        <ChaiCard name="Phones" price={9000} />
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("placed", order.name, order.cups);
          }}
        />
      </div>

      <div>
        <Cards title=" typescript" footer={<button>oredr now</button>} />
      </div>
    </>
  );
}

export default App;
