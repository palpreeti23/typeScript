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

//PARTIAL

type chai = {
  name: string;
  price: number;
  isHot?: boolean;
};

//partial makes everything optional (all the properties)
const updateChai = (updates: Partial<chai>) => {
  console.log("msg", updates);
};

updateChai({ name: "masala" });
updateChai({ isHot: false });
updateChai({}); // this wont give error

//REQUIRED

type chaiOrder = {
  name?: string;
  price?: number;
  isHot?: boolean;
};

//even though everything is optional in type if you use required then you have to give every value
const placeOrder = (order: Required<chaiOrder>) => {
  console.log("msg", order);
};

placeOrder({
  name: "ginger",
  price: 200,
  isHot: true,
});

type newChai = {
  name: string;
  price: number;
  isHot?: boolean;
  ingredients: string[];
};

// type basicChoice = Pick< newChai, 'name' | 'price'>
type basicChoice = Omit<newChai, "ingredients">; // ingredients will be hidden now

const orderChai: basicChoice = {
  name: "ginger",
  price: 30,
};

//splitting
type Item = {
  name: string;
  price: number;
};

type Address = { streat: string; pin: number };
type orders = {
  id: string;
  items: Item[];
  address: Address;
};
