interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    price: number;
  };
  smartwatch: T;
}

interface SmartWatch {
  heart_rate: number;
  stopwatch: boolean;
}
const dev1: Developer<SmartWatch> = {
  name: "ikram",
  salary: 200,
  device: {
    brand: "Dell",
    model: "Inspiron",
    price: 2000,
  },
  smartwatch: {
    heart_rate: 95,
    stopwatch: true,
  },
};

interface SmartWatch2 {
  heart_rate: number;
  ai_feature: boolean;
  stopwatch: boolean;
  call_support: boolean;
}
const dev2: Developer<SmartWatch2> = {
  name: "shipon",
  salary: 2222,
  device: {
    brand: "HP",
    model: "Elite Book",
    price: 45000,
  },
  smartwatch: {
    heart_rate: 95,
    ai_feature: true,
    stopwatch: true,
    call_support: true,
  },
};
