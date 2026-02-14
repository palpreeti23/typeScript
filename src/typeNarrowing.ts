//now if i put . in kind it will give the string properties only for string and number property only for numbers

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `making ${kind} chai....`;
  }
  return `chai order ${kind}`;
}

//truthy value

function serverChai(msg?: string) {
  if (msg) {
    return `serving ${msg}`;
  }
  return `serving default masala chai`;
}

class kulhad {
  serve() {
    return `serving kulhad chai...`;
  }
}

class cutting {
  serve() {
    return `serving cutting chai...`;
  }
}

function serve(chai: kulhad | cutting) {
  if (chai instanceof kulhad) {
    return chai.serve();
  }
}

type chaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `serving custom chai: ${item}`;
}

const od1 = serveOrder({ type: "masala", sugar: 4 });
console.log(od1);

type masalaChai = { type: "masala"; spiceLevel: number };
type gingerChai = { type: "ginger"; order: number };
type elaichiChai = { type: "elaichi"; aroma: number };

type chai = masalaChai | gingerChai | elaichiChai;

function makingChai(order: chai) {
  switch (order.type) {
    case "masala":
      return `masala chai`;
      break;
    case "elaichi":
      return `elaichi chai`;
      break;
    case "ginger":
      return `ginger chai`;
      break;
  }
}

function brew(order: masalaChai | gingerChai) {
  if ("spiceLevel" in order) {
    // return something
  }
}
