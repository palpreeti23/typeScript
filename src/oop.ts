class chai {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const masalaChai = new chai("masala", 25);

// masalaChai.name('masala')

class Chai {
  public flavour: string = "masala";
  //cannot access directly. access within the class
  private secreteIngredient: string = "cardamom";

  reveal() {
    return this.secreteIngredient;
  }
}

const c = new Chai();
c.flavour;
c.reveal();

class shop {
  // access via staff only. in this case the branch
  protected shopName: string = "chai and ts";
}

class Branch extends shop {
  getName() {
    return this.shopName;
  }
}

class wallet {
  // this is also private
  #balance = 100;
  getWallte() {
    return this.#balance;
  }
}

const w = new wallet();
w.getWallte;

class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("too sweet");
    this._sugar = value;
  }
}

const m = new ModernChai();
m.sugar = 3;

class EkChai {
  static shopName = "coffee house";
  constructor(public flavour: string) {}
}

console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make(): void {
    console.log("makin chai here");
  }
}

//  COMPOSITION - Composition is an Object-Oriented Programming (OOP) concept where one class contains another class as part of its structure.

class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}
