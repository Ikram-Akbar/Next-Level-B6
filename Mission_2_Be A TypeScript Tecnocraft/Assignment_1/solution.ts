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
  if (typeof value === "boolean") return (!value) as T;

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

//7:
const getUniqueValues = (param_1: number[], param_2: number[]): number[] => {
  let result:number[] = [];
  const isExist = (val: number) => {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === val) return true;
    }
    return false;
  };

  for(let i =0; i<param_1.length; i++){
    if(!isExist(param_1[i])){
        result.push(param_1[i])
    }
  };
  for(let i=0; i<param_2.length; i++){
    if(!isExist(param_2[i])){
        result.push(param_2[i])
    }
  }

  return result;
};

