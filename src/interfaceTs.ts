type chaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makingChai(order: chaiOrder) {
  console.log(order);
}

function servingChai(order: chaiOrder) {
  console.log(order);
}

// instead of writing it again and again just make a type like above
function brewChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}

type teaRecipe = {
  water: number;
  milk: number;
};

// interface teaRecipe {
//   water: number;
//   milk: number;
// }

class Masalachai implements teaRecipe {
  water = 200;
  milk = 100;
}

// type cupSize = "small" | 'larger'

// class tea implements cupSize{
//     //not giving suggestion for cupsize
// }

//try to use interface in class rather than type
interface cupSize {
  size: "small" | "larger";
}

class tea implements cupSize {
  size: "small" | "larger" = "small";
}

type teaType = "masala" | "ginger" | "lemon";
function orderTea(t: teaType) {
  console.log(t);
}

type config = {
  readonly appName: string;
  version: number;
};

const cnf: config = {
  appName: "preetipal",
  version: 4,
};

// cnf.appName = "pal"
cnf.version = 7;
