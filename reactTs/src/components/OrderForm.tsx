import React, { useState } from "react";

interface orderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}
function OrderForm({ onSubmit }: orderFormProps) {
  const [name, setName] = useState<string>("masala");
  const [cups, setCups] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, cups });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Chai Name</label>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <label>Cups</label>
      <input
        type="number"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value))
        }
      />
      <button type="submit">place order</button>
    </form>
  );
}

export default OrderForm;
