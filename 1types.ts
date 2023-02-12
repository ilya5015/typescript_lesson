// Массивы
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ["Hello", "ts"];

// Tuple
const empId: number = 1;
const empName: string = "Steve";

const employee: [number, string] = [1, "Steve"];

// Functions
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("Heisenberg");

// Never
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

// Types
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",
  id: 0,
};

interface UserClass {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const userClass: UserClass = new UserAccount("Murphy", 1);

interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1234",
  size: {
    width: 20,
    height: 30,
  },
  color: "#ccc",
};

const rect2: Rect = {
  id: "12345",
  size: {
    width: 10,
    height: 5,
  },
};

const rect3 = {} as Rect;

rect2.color = "black";

// Interfaces inheritance

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "123",
  size: {
    width: 20,
    height: 20,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}

//  Interface for object with dynamic keys

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  margin: "2px",
};

type Login = string;

const login: Login = "admin";

type Id = number | string;

// Composing types
// unions
type MyBool = true | false;
type WindowStates = "locked" | "unlocked";

// generics
type StringArray = Array<string>;
type NumberArray = Array<string>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;

const object = backpack.get();

// backpack.add(23)
backpack.add("str");

// Enums
