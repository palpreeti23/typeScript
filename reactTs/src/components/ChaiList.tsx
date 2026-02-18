import React from "react";
import ChaiCard from "./ChaiCard";
import type { chai } from "../types";

interface chaiListProps {
  items: chai[];
}

function ChaiList({ items }: chaiListProps) {
  return (
    <div>
      {items.map((chai) => (
        <ChaiCard
          key={chai.id}
          name={chai.name}
          price={chai.price}
          isSpecial={chai.price > 30}
        />
      ))}
    </div>
  );
}

export default ChaiList;
