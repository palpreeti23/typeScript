"use strict";
//now if i put . in kind it will give the string properties only for string and number property only for numbers
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === "string") {
        return `making ${kind} chai....`;
    }
    return `chai order ${kind}`;
}
//truthy value
function serverChai(msg) {
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
function serve(chai) {
    if (chai instanceof kulhad) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `serving custom chai: ${item}`;
}
const od1 = serveOrder({ type: "masala", sugar: 4 });
console.log(od1);
//# sourceMappingURL=typeNarrowing.js.map