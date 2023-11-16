class Key {
  constructor(private signature: number = Math.floor(Math.random() * 1000)) {}

  getSignature(): number {
    return this.signature;
  }
}

abstract class House {
  constructor(private houseKey: Key, private tenants: Person[] = []) {}

  abstract openDoor(externalKey: Key): void;

  comeIn(person: Person): void {
    if (this.tenants.includes(person)) {
      console.log(`${person.getName()} is already inside.`);
    } else {
      console.log(`${person.getName()} is trying to come in.`);

      if (
        this.houseKey &&
        person.getKey() &&
        this.houseKey.getSignature() === person.getKey().getSignature()
      ) {
        console.log("Key is valid. Opening the door.");
        this.tenants.push(person);
        console.log(`${person.getName()} is now inside.`);
      } else {
        console.log("Invalid key. Access denied.");
      }
    }
  }
}

class MyHouse extends House {
  constructor(private key: Key) {
    super(key);
  }

  openDoor(externalKey: Key): void {
    if (this.getKey().getSignature() === externalKey.getSignature()) {
      console.log("Door is open");
    } else {
      console.log("Invalid key");
    }
  }

  getKey(): Key {
    return this.key;
  }
}

class Person {
  private key: Key;

  constructor(private name: string) {
    this.key = new Key();
  }

  getKey(): Key {
    return this.key;
  }

  getName(): string {
    return this.name;
  }
}

const key = new Key();
const house = new MyHouse(key);

const person = new Person("Bard");

house.openDoor(person.getKey());
house.comeIn(person);

export {};
