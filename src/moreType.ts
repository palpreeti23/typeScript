let responce: any = "42";

//forcefull type assertion
let numeric: number = (responce as string).length;

type book = {
  name: string;
};

let bookString = '{"name":"god of wrath"}';
let bookObject = JSON.parse(bookString) as book;
console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "chai";
value = 4;
value = [2, 4, 7];
//any wont give error here
value.toUpperCase();

let newValue: unknown;
newValue = "chai";
newValue = 4;
newValue = [2, 4, 7];
//unknown will give error here
// newValue.toUpperCase();
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

// instead of using any here use guard check
// try {
// } catch (error: any) {
//   console.log("error", error.message);
// }

try {
} catch (error) {
  if (error instanceof Error) {
    console.log("Error", error.message);
  }
  console.log(error);
}

const data: unknown = "preeti pal";
const newData: string = data as string;

type Role = "admin" | "user" | "superadmin";

function rediretBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("redirecting to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("redirecting to user dashboard");
    return;
  }

  role;
}

//use never if you're not returning anything
function neverReturn(): never {
  while (true) {}
}
