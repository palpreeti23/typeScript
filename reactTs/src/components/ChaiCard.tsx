// import React from "react";
interface Device {
  name: string;
  price: number;
  isSpecial?: boolean;
}

function ChaiCard({ name, price, isSpecial = false }: Device) {
  return (
    <article>
      <h2>
        {name} {isSpecial && <span>⭐</span>}
      </h2>
      <p>{price}</p>
    </article>
  );
}

export default ChaiCard;
