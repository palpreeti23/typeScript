const chai = {
  name: "masala chai",
  price: 40,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "ginger",
  price: 25,
  isHot: false,
};

type Tea = {
  name: string;
  price: number;
  ingreditents: string[];
};

let adarakChai: Tea = {
  name: "adarak chai",
  price: 30,
  ingreditents: ["adarak", "teaLeaves"],
};

type cup = {
  size: string;
};

let smallCup: cup = { size: "200ml" };
let anotherCup = { size: "500mml", material: "steel" };
smallCup = anotherCup;

type brew = {
  brewTime: number;
};

let coffee = { brewTime: 6, beans: "american" };
let chaiBrew: brew = coffee;
