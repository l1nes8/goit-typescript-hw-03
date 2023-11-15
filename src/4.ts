class Key {
  constructor(private id: number) {}

  getId(): number {
    return this.id;
  }
}

class MyHouse {
  constructor(private key: Key) {}

  openDoor(key: Key): void {
    if (this.key.getId() === key.getId()) {
      console.log("Door is open");
    }
  }

  comeIn(person: Person): void {
    console.log(`${person.getName()} is coming in.`);
  }
}

class Person {
  constructor(private key: Key, private name: string) {}

  getKey(): Key {
    return this.key;
  }

  getName(): string {
    return this.name;
  }
}

const key = new Key(123);

const house = new MyHouse(key);
const person = new Person(key, "Bard");

house.openDoor(person.getKey());

house.comeIn(person);

export {};
