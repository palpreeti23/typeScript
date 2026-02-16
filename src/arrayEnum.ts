let name: string[] = ["masala", "adrak"];
let price: number[] = [20, 15];

//another way
let ratings: Array<number> = [4.5, 4];

//define arrays of objects

type chai = {
  name: string;
  price: number;
};
let order: chai[] = [
  { name: "masala", price: 20 },
  { name: "adrak", price: 10 },
];

order.push({ name: "ginger", price: 6 });

const cities: readonly string[] = ["raipur", "bilaspur"];
//gives error
// cities.push("delhi");

//multi dimentinal array

const table: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

// let chaiTuple: [string, number]
// //formate matters here. you cannot give number first and string second it will give error
// chaiTuple= ['adarak',7]

let userInfo: [string, number, boolean?];
userInfo = ["preeti", 23, true];
userInfo = ["neha", 18];

let chaiTuple: [name: string, price: number] = ["masala", 25];

let location: readonly number[] = [88.24, 78.35];

//enum

enum cupsize {
  //all values should be on caps. not compulsory but std practice
  SMALL,
  MEDIUM,
  LARGE,
}

//it will give this 3 sizes only
cupsize.LARGE;

enum status {
  PENDING = 100,
  SERVERD, // this will automatically be 101
  CANCLED, // 102
}

enum chaiTypes {
  MASALA,
  ADARAK,
  GINGER,
}

function makeChai(type: chaiTypes) {
  console.log(`making ${type} chai`);
}

//it eill give this 3 types only as option
makeChai(chaiTypes.ADARAK);
// makeChai('masala')// gives error

// heterogenous value. though not ideal

enum randomEnum {
  ID = 1,
  NAME = "preeti",
}

// enums should be of same datatypes like numbers or strings only

// use const for  constant enums
const enum sugar {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const s = sugar.HIGH;
