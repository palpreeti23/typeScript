function makeChai(type: string, cups: number) {
  console.log(`making ${cups} cups of ${type} chai`);
}

makeChai("masala", 2);

//:number defines the type of value that should be returned from the function
function chaiPrice(): number {
  return 2;
}

// if your function is not returning any value simply give void
function logChai(): void {
  console.log("making chai here");
}

function chai(type?: string) {
  // there might or might not be a type but if there is then it will be string... type is optional here. and if there is multiple param then the optional ones are written at the end
}

function anotherChai(type: string = "masala") {
  // in case of multiple params this is also written in the last
}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}) {
  console.log("msg");
  // and if you're returning a number define number as return type
}
