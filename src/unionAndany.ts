let subs: number | string = "1M";
subs = 20;

let apiRequest: "pending" | "success" | "error" = "error";
apiRequest = "pending";

let orders = ["12", "34", "46", "57", "68"];

//avoid any

let currOrder: string | undefined;

for (const order of orders) {
  if (order === "34") {
    currOrder = order;
    break;
  }
}

console.log(currOrder);
