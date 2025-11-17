//1:
const formatValue = <T>(value: T): T | null => {
  if (value === null || value === undefined) return null;
  if (typeof value === "string") {
    if (value.trim() === "") return null;
    return value.toUpperCase() as T;
  }
  if (typeof value === "number") {
    if (isNaN(value)) return null;
    return (value * 10) as T;
  }
  if (typeof value === "boolean") return !value as T;

  return null;
};

//2:
const getLength = (params: string | any[]): number => {
  if (typeof params === "string" || Array.isArray(params)) {
    return params.length;
  }
  return 0;
};

//3:
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

//4:
interface Item {
  title: string;
  rating: number;
}

const filterByRating = (items: Item[]): Item[] => {
  const result: Item[] = [];

  for (let i = 0; i < items.length; i++) {
    const current = items[i];
    if (current.rating >= 4) {
      result.push(current);
    }
  }

  return result;
};

//5:
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  const result: User[] = [];

  for (let i = 0; i < users.length; i++) {
    const current = users[i];

    if (typeof current.isActive === "boolean" && current.isActive === true) {
      result.push(current);
    }
  }

  return result;
};

//6:
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const availableText = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableText}`
  );
};

//7:
const getUniqueValues = (param_1: number[], param_2: number[]): number[] => {
  let result: number[] = [];
  const isExist = (val: number) => {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === val) return true;
    }
    return false;
  };

  for (let i = 0; i < param_1.length; i++) {
    if (!isExist(param_1[i])) {
      result.push(param_1[i]);
    }
  }
  for (let i = 0; i < param_2.length; i++) {
    if (!isExist(param_2[i])) {
      result.push(param_2[i]);
    }
  }

  return result;
};

//8:
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;

  const total = products
    .map((p) => {
      const basePrice = p.price * p.quantity;
      if (typeof p.discount === "number") {
        const discountAmount = (basePrice * p.discount) / 100;
        return basePrice - discountAmount;
      }
      return basePrice;
    })
    .reduce((sum, current) => sum + current, 0);

  return total;
};
