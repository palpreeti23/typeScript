"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "1M";
subs = 20;
let apiRequest = "error";
apiRequest = "pending";
let orders = ["12", "34", "46", "57", "68"];
//avoid any
let currOrder;
for (const order of orders) {
    if (order === "34") {
        currOrder = order;
        break;
    }
}
console.log(currOrder);
//# sourceMappingURL=unionAndany.js.map