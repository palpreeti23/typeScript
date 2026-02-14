"use strict";
// type INFERENSING
Object.defineProperty(exports, "__esModule", { value: true });
let drink = "chai";
//You didn’t write : string, but TypeScript knows it's a string because you assigned a string. this is type INFERENSING
let cups = Math.random() > 0.5 ? 10 : 5;
//INFERRED as let cups : number
let channelName = "preetipal";
//type ANNOTATION
let chaiFlavour = "masala chai";
chaiFlavour = "simple chai";
// you write the type as string so it wont take a number as value
// chaiFlavour = 2
let chaiOrder;
let chaiOrder1;
//# sourceMappingURL=typesInTs.js.map