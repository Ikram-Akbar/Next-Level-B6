{
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

  const products = [
    { name: "Pen", price: 10, quantity: 2 },
    { name: "Notebook", price: 25, quantity: 3, discount: 10 },
    { name: "Bag", price: 50, quantity: 1, discount: 20 },
  ];

  console.log(calculateTotalPrice(products));
}
