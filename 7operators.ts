interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = "name";
key = "age";

type OneUser = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type OneUserKeysNoMeta = Exclude<keyof OneUser, "_id" | "createdAt">; // 'name' | 'email'
type OneUserKeysNoMeta2 = Pick<OneUser, "name" | "email">;
