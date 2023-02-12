class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `${name}, Ts version is ${this.version}`;
  }
}

// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;

//   constructor(theModel) {
//     // readonly можно перезаписать только внутри конструктора
//     this.model = theModel;
//   }
// }

class Car {
  readonly numberOfWheels: number = 4;

  constructor(readonly model: string) {}
}

class Animal {
  protected voice: string = "";
  public color: string = "black";

  private go() {
    console.log("go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();

// abstract classes

// abstract classes dont compile in anything

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component on render");
  }

  info(): string {
    return "This is info";
  }
}
