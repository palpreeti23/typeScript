interface Chai {
  name: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  name: "masala",
  price: 25,
};

interface shop {
  readonly id: number;
  name: string;
}

const s: shop = {
  id: 1,
  name: "preeti",
};

//gives error coz id is readOnly
// s.id = 2
s.name = "piya";

interface discountCalculator {
  (price: number): number;
}

const apply50: discountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const Machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

//INDEX SIGNATURE

//mergine in terface

interface user {
  name: string;
}

interface user {
  age: number;
}

//you gotta give all the properties here
const u: user = {
  name: "preeti",
  age: 22,
};

//INTERFACE EXTEND

interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}
