//Generics allow you to create reusable components that work with different types while still keeping type safety.
function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(24);
wrapInArray({ flavour: "ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", 20);
pair("masala", { flavoue: "ginger" });

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 20 };
const numberBoxCup: Box<string> = { content: "20" };

interface ApiResponse<T> {
  status: number;
  data: T;
}

const res: ApiResponse<{ flavour: string }> = {
  status: 200,
  data: { flavour: "masala" },
};
