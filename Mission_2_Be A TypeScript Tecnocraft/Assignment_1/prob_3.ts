{
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    getDetails(): string {
      return `'Name: ${this.name}, Age: ${this.age}'`;
    }
  }

  // Sample Input
  const person1 = new Person("John Doe", 30);
  console.log(person1.getDetails()); // Output: 'Name: John Doe, Age: 30'

  const person2 = new Person("Alice", 25);
  console.log(person2.getDetails()); // Output: 'Name: Alice, Age: 25'
}
